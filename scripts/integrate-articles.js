import fs from 'fs';
import path from 'path';

const INTELLIGENCE_DIR = './src/data/intelligence';
const CONTENT_FILE = path.join(INTELLIGENCE_DIR, 'content.ts');
const METADATA_FILE = path.join(INTELLIGENCE_DIR, 'metadata.ts');

const files = fs.readdirSync(INTELLIGENCE_DIR).filter(f => f.endsWith('.md'));

// 1. Read existing content
let contentTs = fs.readFileSync(CONTENT_FILE, 'utf8');
let metadataTs = fs.readFileSync(METADATA_FILE, 'utf8');

const metadataMatch = metadataTs.match(/export const intelligenceMetadata: ArticleMetadata\[\] = (\[[\s\S]*?\]);/);
let metadataArray = [];
if (metadataMatch) {
    try {
        metadataArray = eval(metadataMatch[1]);
    } catch (e) {
        console.error("Failed to parse metadata array", e);
    }
}

const slugToContent = {};

// We'll also try to parse content.ts to keep what we have
const entryRegex = /  "(.*?)": `([\s\S]*?)`,/g;
let match;
while ((match = entryRegex.exec(contentTs)) !== null) {
    const slug = match[1];
    const content = match[2];
    slugToContent[slug] = content;
}

files.forEach(file => {
    const filePath = path.join(INTELLIGENCE_DIR, file);
    const text = fs.readFileSync(filePath, 'utf8');
    
    // Improved slug extraction:
    // 1. Search for (Slug: ...) in text
    // 2. Search for frontmatter style if present
    // 3. Extract from filename: everything before the titles usually? 
    // Actually, my generator uses filenames like: slug-topic.md
    
    const slugMatch = text.match(/\(Slug: (.*?)\)/i);
    let slug = slugMatch ? slugMatch[1].toLowerCase().trim() : null;
    
    if (!slug) {
        // Try fallback 1: filename
        // Ex: venture-engineering-2026-arkitektur-fr... -> venture-engineering-2026
        // Let's assume the first 3-4 words are the slug if it's descriptive.
        // Or better yet, look at the titles I GAVE it.
        if (file.includes('venture-engineering-2026')) slug = 'venture-engineering-maass-architecture';
        else if (file.includes('exklusivt-dealflow-i-norden')) slug = 'norden-saas-dealflow-arbitrage';
        else if (file.includes('modular-gtm-hur-man-bygger-om')) slug = 'modular-gtm-transformation';
        else if (file.includes('data-infrastruktur-som-vrdekare')) slug = 'data-infra-valuation-multiplier';
        else if (file.includes('kapitalresning-i-series-b')) slug = 'series-b-fundraising-narrative';
        else if (file.includes('automatiska-produktfrbttringar')) slug = 'autonomous-product-roadmap-engineering';
        else if (file.includes('sljcykelns-kollaps')) slug = 'enterprise-sales-cycle-collapse';
        else if (file.includes('teknisk-due-diligence-20')) slug = 'technical-dd-ai-layer';
        else if (file.includes('strategic-exit-planning')) slug = 'strategic-exit-big-tech';
        else if (file.includes('systemisk-operativ-hvstng')) slug = 'systemic-operating-leverage-saas';
        else if (file.includes('proprietary-signals')) slug = 'proprietary-outbound-signals';
        else if (file.includes('vektor-arkitektur-fr-business-intelligence')) slug = 'vector-architecture-bi-saas';
        else if (file.includes('second-aries-i-saas')) slug = 'saas-secondaries-liquidity';
        else if (file.includes('krnan-i-en-studio')) slug = 'shared-studio-infrastructure';
        else if (file.includes('hyperscale-gtm-att-processa')) slug = 'hyperscale-gtm-processing';
        else if (file.includes('prissttning-efter-api-last')) slug = 'api-load-based-pricing';
        else if (file.includes('portflj-synergier')) slug = 'portfolio-synergy-acquisitions';
        else if (file.includes('sovereign-infrastructure')) slug = 'sovereign-infra-cloud-independence';
        else if (file.includes('lead-to-revenue-att-mta')) slug = 'lead-to-revenue-velocity';
        else if (file.includes('automations-skuld')) slug = 'automation-debt-saas-audit';
        else if (file.includes('agentisk-persistens')) slug = 'agent-persistence-architecture';
        else if (file.includes('frhandlingens-psykologi')) slug = 'saas-negotiation-psychology';
        else if (file.includes('signal-to-deal-automation')) slug = 'signal-to-deal-automation';
        else if (file.includes('modularisering-av-core-saas')) slug = 'modular-core-saas-engineering';
        else if (file.includes('equity-som-hvstng')) slug = 'equity-leverage-recruiting';
        else if (file.includes('data-pipelines-fr-ai-agenter')) slug = 'data-pipelines-agent-context';
        else if (file.includes('account-based-everything')) slug = 'account-based-everything-scaling';
        else if (file.includes('ipo-roadmap-2026')) slug = 'ipo-roadmap-2026';
        else if (file.includes('rag-p-skala')) slug = 'rag-at-scale';
        else if (file.includes('venture-capital-i-agi-eran')) slug = 'vc-agi-era';
        else if (file.includes('saas-i-usa-hur-man-slr')) slug = 'saas-us-expansion';
        else if (file.includes('mena-marknaden-fr-ai')) slug = 'mena-ai-market';
        else if (file.includes('asien-expansion-fr-saas')) slug = 'saas-asia-expansion';
        else if (file.includes('venture-studio-governance')) slug = 'studio-governance-scale';
        else if (file.includes('ai-drivna-investeringsbeslut')) slug = 'ai-investment-decisions';
        else if (file.includes('saas-marginalernas-matematik')) slug = 'saas-margin-math';
        else if (file.includes('venture-engineering-teamet')) slug = 'recruitment-venture-engineering';
        else if (file.includes('exit-multiplar-i-en-fragmenterad')) slug = 'exit-multiples-2026';
        else if (file.includes('saas-produktivitet-hur-man-mter')) slug = 'developer-productivity-ai';
        else if (file.includes('investera-i-vertikala-lsningar')) slug = 'investing-vertical-ai';
        else if (file.includes('data-pipelines-fr-proffs')) slug = 'data-pipeline-best-practices';
        else if (file.includes('saas-frvrv-som-strategi')) slug = 'saas-acquisition-strategy';
        else if (file.includes('venture-studio-som-karrirvg')) slug = 'studio-entrepreneurship-path';
        else if (file.includes('ai-driven-produktutveckling')) slug = 'ai-driven-product-dev';
        else if (file.includes('saas-ekonomi-fr-ingenjrer')) slug = 'saas-economics-for-engineers';
        else if (file.includes('vertical-ai-i-retail')) slug = 'retail-ai-supply-chain';
        else if (file.includes('investera-i-framtiden')) slug = 'agi-infra-investment-report';
        else if (file.includes('ma-due-diligence-i-ai-eran')) slug = 'ai-due-diligence';
        else if (file.includes('sammankopplad-intelligens')) slug = 'interconnected-intelligence';
        else if (file.includes('data-driven-fundraising')) slug = 'data-driven-fundraising';
        else if (file.includes('vertical-saas-vs-generalist-ai')) slug = 'vertical-vs-generalist-ai';
        else if (file.includes('infrastruktur-som-en-vallgrav')) slug = 'infrastructure-moat';
        else if (file.includes('operativ-disciplin-i-tillvxtbolag')) slug = 'operational-discipline-series-a';
        else if (file.includes('ai-etik-fr-investerare')) slug = 'ai-ethics-investors';
        else if (file.includes('hrdkodade-regler-vs-probabilistiska')) slug = 'hardcoded-vs-probabilistic';
        else if (file.includes('saas-prissttning-i-inflationstider')) slug = 'saas-pricing-inflation';
        else if (file.includes('venture-studio-portfljstyrning')) slug = 'studio-portfolio-kill-switch';
        else if (file.includes('agenter-som-medlemsfrmn')) slug = 'agents-as-membership';
        else if (file.includes('ai-driven-marknadsanalys')) slug = 'ai-market-analysis';
        else if (file.includes('investera-i-suvernitet')) slug = 'investing-in-sovereignty';
        else if (file.includes('saas-exit-klockan')) slug = 'saas-exit-clock';
        else if (file.includes('ai-i-styrelsen')) slug = 'ai-in-the-boardroom';
        else if (file.includes('vertical-ai-i-finanssektorn')) slug = 'vertical-ai-finance';
        else if (file.includes('mnniskan-i-loopen')) slug = 'human-in-the-loop-scaling';
        else if (file.includes('saas-marginalernas-sista-strid')) slug = 'saas-margin-final-stand';
        else if (file.includes('venture-engineering-som-karrir')) slug = 'venture-engineering-career';
        else if (file.includes('frn-series-a-till-exit')) slug = 'technical-milestones-a-to-exit';
        else if (file.includes('ma-post-merger-integration')) slug = 'ai-pmi-momentum';
        else if (file.includes('data-driven-retention')) slug = 'data-driven-retention';
        else if (file.includes('styrelserapport-2026')) slug = 'board-report-metrics-2026';
        else if (file.includes('saas-ekosystemet-i-europa')) slug = 'european-saas-advantage';
        else if (file.includes('automatisering-av-gtm-feedback')) slug = 'automated-gtm-feedback';
        else if (file.includes('venture-engineering-scale-up')) slug = 'venture-engineering-scaling';
        else if (file.includes('prissttning-fr-inlrning')) slug = 'learning-based-pricing';
        else if (file.includes('ai-i-kundtjnst')) slug = 'ai-customer-support-evolution';
        else if (file.includes('exit-frberedelser-18-mnader')) slug = 'technical-exit-readiness';
        else if (file.includes('vertikal-ai-i-hlsovrden')) slug = 'healthcare-ai-vertical';
        else if (file.includes('investera-i-humankapital')) slug = 'investing-in-talent-2026';
        else if (file.includes('sveriges-roll-i-ai-eruptionen')) slug = 'swedish-ai-b2b-leadership';
        else if (file.includes('lngsiktig-hllbarhet-i-saas')) slug = 'sustainable-saas-growth';
        else if (file.includes('venture-studio-som-en-plattform')) slug = 'studio-as-a-platform';
        else if (file.includes('digital-suvernitet-i-eu')) slug = 'eu-digital-sovereignty-guide';
        else if (file.includes('att-slja-till-ai-agenter')) slug = 'selling-to-ai-agents';
        else if (file.includes('ma-i-ett-fragmenterat-landskap')) slug = 'ma-consolidation-rules';
        else if (file.includes('dataprivacy-i-enterprise-ai')) slug = 'enterprise-ai-privacy';
        else if (file.includes('framtidens-saas-stack')) slug = 'future-saas-stack-2026';
        else if (file.includes('operational-leverage-genom-ai')) slug = 'operational-leverage-ai';
        else {
            // Last resort: extract from filename purely
            slug = file.replace('.md', '').substring(0, 40).replace(/[^a-z0-9]/g, '-');
        }
    }

    if (slug) {
        const lines = text.split('\n');
        const firstLine = lines[0];
        const title = firstLine.replace(/^(#|INTERNAL MEMO:|INTERN PM:)\s*/, '').trim();
        
        // Final polish of content: remove meta-text
        let cleanedText = text.replace(/Jag kan skriva Part 2[\s\S]*$/, '');
        cleanedText = cleanedText.trim();

        slugToContent[slug] = cleanedText;

        const existingMeta = metadataArray.find(m => m.slug === slug);
        if (existingMeta) {
            existingMeta.title = title;
        } else {
            metadataArray.unshift({
                slug: slug,
                title: title,
                date: "2026-03-" + (25 - metadataArray.length % 10),
                author: "Skeptical Investor (Leaked)",
                description: title + ". Institutionell analys för VC och serie-grundare."
            });
        }
    }
});

// Write content.ts
let newContentTs = "export const intelligenceContent: Record<string, string> = {\n";
for (const [slug, text] of Object.entries(slugToContent)) {
    newContentTs += `  "${slug}": \`${text.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,\n`;
}
newContentTs += "};\n";
fs.writeFileSync(CONTENT_FILE, newContentTs);

// Write metadata.ts
let newMetadataTs = `export interface ArticleMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
}

export const intelligenceMetadata: ArticleMetadata[] = ${JSON.stringify(metadataArray, null, 2)};
`;
fs.writeFileSync(METADATA_FILE, newMetadataTs);

console.log("Integrated total of " + Object.keys(slugToContent).length + " unique articles.");
