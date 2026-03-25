import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT_DIR, 'src', 'data', 'intelligence');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const INTELLIGENCE_DIST_DIR = path.join(DIST_DIR, 'intelligence');

const SITE_URL = 'https://hylten.github.io/Venture-Studio';

const ensureDir = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

async function generateSEO() {
    console.log('Generating SEO for Hyltén Venture Studio Intelligence...');

    if (!fs.existsSync(DIST_DIR)) {
        console.error('dist directory not found. Please run npm run build first.');
        process.exit(1);
    }

    ensureDir(INTELLIGENCE_DIST_DIR);

    const indexHtmlPath = path.join(DIST_DIR, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
        console.error('dist/index.html not found.');
        process.exit(1);
    }

    const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

    const metadataPath = path.join(CONTENT_DIR, 'metadata.ts');
    const contentPath = path.join(CONTENT_DIR, 'content.ts');
    
    let metadata = [];
    let content = {};

    try {
        if (fs.existsSync(metadataPath)) {
            const metaContent = fs.readFileSync(metadataPath, 'utf8');
            const match = metaContent.match(/export const intelligenceMetadata: ArticleMetadata\[\] = (\[[\s\S]*?\]);/);
            if (match) {
                metadata = eval(match[1]);
            }
        }
    } catch (e) {
        console.warn('⚠️ Could not parse metadata.ts');
    }

    try {
        if (fs.existsSync(contentPath)) {
            const contentText = fs.readFileSync(contentPath, 'utf8');
            const match = contentText.match(/export const intelligenceContent: Record<string, string> = ({[\s\S]*?});/);
            if (match) {
                content = eval('(' + match[1] + ')');
            }
        }
    } catch (e) {
        console.warn('⚠️ Could not parse content.ts');
    }

    const publishedArticles = metadata.filter(article => content[article.slug] && content[article.slug].length > 100);
    
    const listHtml = `
    <div style="background:#050505;min-height:100vh;padding:180px 24px;color:#E5E7EB;font-family:sans-serif;">
        <div style="max-width:1200px;margin:0 auto;">
            <div style="margin-bottom:48px;">
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
                    <div style="width:8px;height:8px;border-radius:50%;background:#00FF41;"></div>
                    <span style="color:#C4A265;font-size:11px;letter-spacing:4px;text-transform:uppercase;">INTELLIGENCE_DIVISION</span>
                </div>
                <h1 style="font-size:clamp(2.5rem,8vw,5rem);font-weight:900;margin-bottom:16px;letter-spacing:-1px;">Intelligence_<span style="color:#C4A265;">Arkiv</span></h1>
                <p style="color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:4px;margin-bottom:48px;">Operativ intelligens för sent-stadie SaaS. ${publishedArticles.length} publicerade analyser.</p>
            </div>
            
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:32px;">
                ${publishedArticles.map(article => `
                    <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);padding:32px;transition:all 0.5s;cursor:pointer;" onmouseover="this.style.borderColor='rgba(196,162,101,0.3)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.05)'">
                        <div style="display:flex;justify-content:space-between;margin-bottom:24px;">
                            <span style="color:#C4A265;font-size:10px;letter-spacing:2px;text-transform:uppercase;">${article.date}</span>
                            <span style="color:rgba(255,255,255,0.2);font-size:10px;letter-spacing:2px;">${article.author}</span>
                        </div>
                        <h3 style="font-size:18px;font-weight:900;margin-bottom:16px;text-transform:uppercase;letter-spacing:-0.5px;line-height:1.2;">${article.title}</h3>
                        <p style="color:rgba(255,255,255,0.6);font-size:14px;line-height:1.6;font-style:italic;margin-bottom:24px;">${article.description}</p>
                        <a href="${SITE_URL}/#/intelligence/${article.slug}" style="color:rgba(255,255,255,0.3);font-size:10px;text-transform:uppercase;letter-spacing:3px;text-decoration:none;display:flex;align-items:center;gap:8px;">
                            Läs analys &rarr;
                        </a>
                    </div>
                `).join('')}
            </div>
            
            <div style="margin-top:96px;padding-top:64px;border-top:1px solid rgba(255,255,255,0.1);text-align:center;">
                <h3 style="font-size:24px;font-weight:900;margin-bottom:16px;text-transform:uppercase;">Vill du ha våra analyser direkt?</h3>
                <p style="color:rgba(255,255,255,0.6);margin-bottom:32px;font-size:14px;">Intelligence-briefing kvartalsvis. Hög signal, inget brus.</p>
                <a href="${SITE_URL}/" style="display:inline-block;padding:16px 32px;background:#C4A265;color:#000;font-size:11px;font-weight:900;letter-spacing:3px;text-transform:uppercase;text-decoration:none;">
                    Tillbaka till Venture Studio
                </a>
            </div>
        </div>
    </div>`;

    const sharedButtons = `
        <div style="position:fixed;bottom:32px;right:32px;z-index:10000;">
            <a href="https://wa.me/46701619978?text=Hej%20Jonas!%20Jag%20läste%20på%20Venture%20Studio%20Intelligence." target="_blank" rel="noopener noreferrer" style="background:#1a1a1a;padding:16px;border-radius:50%;box-shadow:0 10px 30px rgba(0,0,0,0.5);opacity:0.6;transition:opacity 0.3s;display:flex;align-items:center;justify-content:center;width:56px;height:56px;box-sizing:border-box;text-decoration:none;">
                <svg style="width:24px;height:24px;color:white;" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </div>`;

    const indexHtml = baseHtml
        .replace(/<title>.*?<\/title>/, '<title>Intelligence Arkiv | Hyltén Venture Studio</title>')
        .replace(/<meta name="description" content=".*?">/, '<meta name="description" content="Operativ intelligens för sent-stadie SaaS. Analyser om SaaS-monetisering, AI i enterprise, kapitalmarknad, fundraising och venture studio-metodik.">')
        .replace('</head>', `  <link rel="canonical" href="${SITE_URL}/#/intelligence" />\n</head>`)
        .replace('<div id="root"></div>', `<div id="root">${listHtml}${sharedButtons}</div>`);

    fs.writeFileSync(path.join(INTELLIGENCE_DIST_DIR, 'index.html'), indexHtml);
    console.log('✅ Generated /dist/intelligence/index.html');

    const feedItems = [];

    for (const article of publishedArticles) {
        const articleDir = path.join(INTELLIGENCE_DIST_DIR, article.slug);
        ensureDir(articleDir);

        const articleContent = content[article.slug] || 'Analys under bearbetning.';
        const articleFullUrl = `${SITE_URL}/#/intelligence/${article.slug}`;

        feedItems.push({
            id: article.slug,
            url: articleFullUrl,
            title: article.title,
            summary: article.description,
            date_published: new Date(article.date).toISOString(),
            author: { name: article.author }
        });

        const schemaData = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.description,
            "author": { "@type": "Person", "name": article.author },
            "publisher": { 
                "@type": "Organization", 
                "name": "Hyltén Venture Studio",
                "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` }
            },
            "datePublished": article.date,
            "mainEntityOfPage": { "@type": "WebPage", "@id": articleFullUrl }
        };
        
        const articleHtmlContent = `
        <div style="background:#050505;min-height:100vh;padding:180px 24px;color:#E5E7EB;font-family:sans-serif;">
            <div style="max-width:800px;margin:0 auto;">
                <a href="${SITE_URL}/#/intelligence" style="color:rgba(255,255,255,0.5);font-size:11px;text-transform:uppercase;letter-spacing:4px;text-decoration:none;display:flex;align-items:center;gap:8px;margin-bottom:48px;">
                    &larr; Tillbaka till Arkiv
                </a>
                
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:32px;">
                    <div style="width:8px;height:8px;border-radius:50%;background:#00FF41;"></div>
                    <span style="color:#C4A265;font-size:11px;letter-spacing:4px;">KLASSIFICERAD ANALYS: ${article.author}</span>
                </div>
                
                <h1 style="font-size:clamp(2rem,6vw,4rem);font-weight:900;margin-bottom:32px;letter-spacing:-1px;line-height:1.1;">${article.title}</h1>
                
                <div style="display:flex;flex-wrap:wrap;gap:32px;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);padding:24px 0;margin-bottom:48px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,0.4);">
                    <span>Datum: ${article.date}</span>
                    <span>Författare: ${article.author}</span>
                    <span>Status: Publicerad</span>
                </div>
                
                <div style="line-height:2.1;font-size:17px;color:rgba(255,255,255,0.8);font-weight:400;margin-bottom:64px;">
                    ${articleContent.split('\n\n').map(p => {
                        p = p.trim();
                        if (!p) return '';
                        if (p.startsWith('### ')) return `<h3 style="font-size:20px;color:#C4A265;margin-top:40px;margin-bottom:16px;font-weight:600;">${p.replace('### ', '')}</h3>`;
                        if (p.startsWith('## ')) return `<h2 style="font-size:24px;color:#C4A265;margin-top:48px;margin-bottom:20px;font-weight:700;">${p.replace('## ', '')}</h2>`;
                        p = p.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#fff;font-weight:600;">$1</strong>');
                        return `<p style="margin-bottom:32px;">${p}</p>`;
                    }).join('')}
                </div>
                
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);padding:32px;margin-bottom:32px;">
                    <h3 style="font-size:14px;color:#C4A265;letter-spacing:4px;margin-bottom:16px;font-weight:900;">VILL DU HA HELA RAPPORTEN?</h3>
                    <p style="color:rgba(255,255,255,0.6);font-size:14px;margin-bottom:24px;">Få hela metodiken i PDF. Exklusivt för ledningsgrupper.</p>
                    <a href="https://wa.me/46701619978?text=Hej%20Jonas!%20Jag%20vill%20ha%20mer%20information%20om%20${encodeURIComponent(article.title)}." target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:16px 32px;background:#C4A265;color:#000;font-size:11px;font-weight:900;letter-spacing:3px;text-transform:uppercase;text-decoration:none;">
                        Boka konfidentiell genomgång
                    </a>
                </div>
                
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:64px;">
                    <a href="https://wa.me/46701619978" target="_blank" rel="noopener noreferrer" style="padding:24px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.1);text-decoration:none;transition:all 0.3s;" onmouseover="this.style.borderColor='rgba(196,162,101,0.3)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.1)'">
                        <span style="color:#C4A265;font-size:10px;letter-spacing:4px;font-weight:900;display:block;margin-bottom:8px;">KONTAKT</span>
                        <span style="color:#fff;font-size:14px;font-weight:900;">Boka konfidentiell genomgång</span>
                    </a>
                    <a href="${SITE_URL}/" target="_blank" rel="noopener noreferrer" style="padding:24px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.1);text-decoration:none;transition:all 0.3s;" onmouseover="this.style.borderColor='rgba(255,255,255,0.3)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.1)'">
                        <span style="color:rgba(255,255,255,0.5);font-size:10px;letter-spacing:4px;font-weight:900;display:block;margin-bottom:8px;">VENTURE STUDIO</span>
                        <span style="color:#fff;font-size:14px;font-weight:900;">Utforska vår studio-modell</span>
                    </a>
                </div>
            </div>
        </div>`;

        const articleHtml = baseHtml
            .replace(/<title>.*?<\/title>/, `<title>${article.title} | Hyltén Venture Studio Intelligence</title>`)
            .replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${article.description}">`)
            .replace('</head>', `  <link rel="canonical" href="${articleFullUrl}" />\n  <script type="application/ld+json">${JSON.stringify(schemaData)}</script>\n</head>`)
            .replace('<div id="root"></div>', `<div id="root">${articleHtmlContent}${sharedButtons}</div>`);

        fs.writeFileSync(path.join(articleDir, 'index.html'), articleHtml);
        console.log(`✅ Generated /dist/intelligence/${article.slug}/index.html`);
    }

    const today = new Date().toISOString().split('T')[0];

    let sitemapUrls = `  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/#/intelligence</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>`;

    for (const item of feedItems) {
        sitemapUrls += `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.date_published.split('T')[0]}</lastmod>
    <priority>0.8</priority>
  </url>`;
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;

    fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
    console.log('✅ Generated /dist/sitemap.xml');

    // Generate JSON Feed
    const feed = {
        version: "https://jsonfeed.org/version/1.1",
        title: "Hyltén Venture Studio Intelligence",
        home_page_url: SITE_URL,
        feed_url: `${SITE_URL}/feed.json`,
        items: feedItems
    };
    fs.writeFileSync(path.join(DIST_DIR, 'feed.json'), JSON.stringify(feed, null, 2));
    console.log('✅ Generated /dist/feed.json');

    const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

    fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robots);
    console.log('✅ Generated /dist/robots.txt');

    console.log('SEO Generation Complete!');
}

generateSEO().catch(console.error);
