import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft, Mail, Download, Calendar, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";

export interface Article {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  content: string;
  category: string;
}

const Reveal = ({ children, delay = 0, y = 30 }: { children: React.ReactNode; delay?: number; y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.2, 0, 0.2, 1] }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const categories = [
  { id: "alla", label: "Alla" },
  { id: "saas-monetization", label: "SaaS-monetisering" },
  { id: "ai-enterprise", label: "AI i Enterprise" },
  { id: "capital-markets", label: "Kapitalmarknad" },
  { id: "fundraising-ipo", label: "Fundraising & IPO" },
  { id: "gtm", label: "GTM-strategi" },
  { id: "venture-studio", label: "Venture Studio" },
];

export const IntelligenceArchive: React.FC<{ 
  articles: Article[], 
  onNavigate: (route: string) => void 
}> = ({ articles, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("alla");
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = selectedCategory === "alla" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setShowNewsletter(false), 2000);
    }
  };

  return (
    <div className="pt-32 pb-20 px-8 md:px-24">
      <Helmet>
        <title>Intelligence Arkiv | Hyltén Venture Studio</title>
        <meta name="description" content="Operativ intelligens och djupanalyser för sent-stadie SaaS, AI Enterprise och kapitalmarknader." />
        <link rel="canonical" href="https://hylten.github.io/Venture-Studio/#/intelligence" />
      </Helmet>

      <Reveal>
        <button 
          onClick={() => onNavigate("/")}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[4px] text-white/50 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Tillbaka till Terminal
        </button>
        
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00FF41]" />
          <span className="text-[#C4A265] text-[10px] uppercase tracking-[4px] font-black">INTELLIGENCE_DIVISION</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">Intelligence_<span className="text-[#C4A265]">Arkiv</span></h2>
        <p className="text-white/50 text-xs uppercase tracking-[4px] mb-8 italic">Operativ intelligens för sent-stadie SaaS. 150+ analyser.</p>
        
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-16 border-b border-white/10 pb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const count = cat.id === "alla" ? articles.length : articles.filter(a => String((a as any).category) === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-[9px] uppercase tracking-[3px] px-4 py-2 border transition-all duration-500 ${
                    selectedCategory === cat.id 
                      ? 'border-[#C4A265] text-[#C4A265] bg-[#C4A265]/5' 
                      : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/70'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
          
          <button
            onClick={() => setShowNewsletter(true)}
            className="text-[10px] uppercase tracking-[3px] text-[#C4A265] hover:text-white transition-colors flex items-center gap-2"
          >
            <Mail size={14} /> Prenumerera
          </button>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredArticles.map((article, i) => (
          <Reveal key={article.slug} delay={i * 0.03}>
            <div 
              className="bg-white/[0.02] border border-white/5 p-8 h-full flex flex-col justify-between group cursor-pointer hover:bg-white/[0.04] hover:border-[#C4A265]/20 transition-all duration-500"
              onClick={() => onNavigate(`/intelligence/${article.slug}`)}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-mono text-[#C4A265] uppercase tracking-[2px]">{article.date}</span>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[2px]">{article.author}</span>
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-4 group-hover:text-[#C4A265] transition-colors line-clamp-2">{article.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3">{article.description}</p>
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[3px] text-white/30 group-hover:text-[#C4A265] transition-colors">
                Läs analys <ChevronRight size={14} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.5}>
        <div className="mt-24 border-t border-white/10 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Vill du ha våra analyser direkt?</h3>
            <p className="text-white/60 mb-8 text-sm italic">Intelligence-briefing kvartalsvis. Hög signal, inget brus.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowNewsletter(true)}
                className="px-8 py-4 bg-[#C4A265] text-black text-[10px] uppercase tracking-[4px] font-black hover:bg-white transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail size={14} /> Prenumerera på Intelligence
                </span>
              </button>
              <a 
                href="https://wa.me/46701619978?text=Hej%20Jonas!%20Jag%20vill%20ha%20mer%20information%20om%20Hyltén%20Venture%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 text-white/70 text-[10px] uppercase tracking-[4px] font-black hover:border-white/40 hover:text-white transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  <Calendar size={14} /> Boka konfidentiell genomgång
                </span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.6}>
        <div className="mt-16 text-center">
          <a 
            href="https://hylten.github.io/Venture-Studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[4px] text-white/30 hover:text-[#C4A265] transition-colors"
          >
            Tillbaka till Hyltén Venture Studio
          </a>
        </div>
      </Reveal>

      {showNewsletter && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowNewsletter(false)}
        >
          <motion.div 
            className="bg-[#0a0a0a] border border-white/10 p-12 max-w-lg w-full"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {!subscribed ? (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF41]" />
                  <span className="text-[#C4A265] text-[10px] uppercase tracking-[4px]">INTELLIGENCE_SUBSCRIPTION</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Intelligence-briefing</h3>
                <p className="text-white/60 mb-8 text-sm">Få våra operativa insikter innan marknaden. Kvartalsvis, hög analysnivå.</p>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="din@epost.se"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 text-white/80 text-sm focus:border-[#C4A265]/40 outline-none transition-colors"
                  />
                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#C4A265] text-black text-[10px] uppercase tracking-[4px] font-black hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={14} /> Prenumerera
                  </button>
                </form>
                <button 
                  onClick={() => setShowNewsletter(false)}
                  className="mt-6 text-white/30 text-[10px] uppercase tracking-[3px] hover:text-white/60 transition-colors w-full text-center"
                >
                  Stäng
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#00FF41] text-xl">✓</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4">Prenumeration registrerad</h3>
                <p className="text-white/60 text-sm">Du kommer få Intelligence-briefing nästa kvartal.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const IntelligenceArticle: React.FC<{ 
  article: Article, 
  onNavigate: (route: string) => void 
}> = ({ article, onNavigate }) => {
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setDownloaded(true);
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hyltén Venture Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hylten.github.io/Venture-Studio/logo.png"
      }
    },
    "datePublished": article.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hylten.github.io/Venture-Studio/#/intelligence/${article.slug}`
    }
  };

  return (
    <div className="pt-32 pb-20 px-8 md:px-24 max-w-4xl mx-auto">
      {/* LinkedIn Personal - Discreet */}
      <a
        href="https://www.linkedin.com/in/hylten/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#1a1a1a] p-3 rounded-full shadow-xl opacity-60 hover:opacity-100 transition-all duration-300"
      >
        <svg className="w-9 h-9 text-white/80" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>

      <Helmet>
        <title>{article.title} | Venture Studio Intelligence</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={`https://hylten.github.io/Venture-Studio/#/intelligence/${article.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <Reveal>
        <button 
          onClick={() => onNavigate("/intelligence")}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[4px] text-white/50 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Tillbaka till Arkiv
        </button>
        
        <div className="flex items-center gap-4 mb-8">
           <div className="w-1.5 h-1.5 rounded-full bg-[#00FF41]" />
           <span className="text-[#C4A265] text-[10px] uppercase tracking-[4px] font-black">KLASSIFICERAD ANALYS: {article.author}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-[1.1]">{article.title}</h1>
        
        <div className="flex flex-wrap gap-8 border-y border-white/10 py-6 mb-16 text-[10px] font-mono uppercase tracking-[2px] text-white/40">
          <div>DATUM: {article.date}</div>
          <div>FÖRFATTARE: {article.author}</div>
          <div>STATUS: PUBLICERAD</div>
          <div>NIVÅ: ALPHA_CLEARANCE</div>
        </div>

        <div className="intelligence-content text-white/80 text-lg leading-relaxed space-y-8 font-medium">
          {article.content.split("\n\n").map((para, i) => {
            if (para.trim().startsWith("### ")) {
              return <h4 key={i} className="text-xl font-black uppercase tracking-tight mt-12 mb-4 text-[#C4A265]">{para.trim().replace(/^###\s+/, "")}</h4>;
            }
            if (para.trim().startsWith("## ")) {
              return <h3 key={i} className="text-2xl font-black uppercase tracking-tight mt-16 mb-6">{para.trim().replace(/^##\s+/, "")}</h3>;
            }
            if (para.trim().startsWith("# ")) {
              return <h2 key={i} className="text-3xl font-black uppercase tracking-tight mt-16 mb-8">{para.trim().replace(/^#\s+/, "")}</h2>;
            }
            if (para.startsWith("- ")) {
              const items = para.split("\n").filter(l => l.startsWith("- "));
              return (
                <ul key={i} className="list-disc pl-6 space-y-2 my-6">
                  {items.map((item, j) => <li key={j} className="text-white/70">{item.slice(2)}</li>)}
                </ul>
              );
            }
            return <p key={i} className="text-white/80">{para}</p>;
          })}
        </div>

        <div className="mt-16 border-t border-white/10 pt-16">
          <div className="bg-white/[0.02] border border-white/5 p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Download size={16} className="text-[#C4A265]" />
              <span className="text-[10px] uppercase tracking-[4px] text-[#C4A265] font-black">LADDA NER FULL RAPPORT</span>
            </div>
            <p className="text-white/60 text-sm mb-6 italic">Få hela metodiken i PDF. Exklusivt för ledningsgrupper.</p>
            {!downloaded ? (
              <form onSubmit={handleDownload} className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="din@epost.se"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/[0.02] border border-white/10 px-4 py-3 text-white/80 text-sm focus:border-[#C4A265]/40 outline-none transition-colors"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-[#C4A265] text-black text-[10px] uppercase tracking-[3px] font-black hover:bg-white transition-colors whitespace-nowrap"
                >
                  Ladda ned
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 text-[#00FF41]">
                <span className="text-lg">✓</span>
                <span className="text-sm">Rapport skickas till din e-post</span>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href={`https://wa.me/46701619978?text=${encodeURIComponent("Hej Jonas! Jag läste '" + article.title + "' på Venture Studio Intelligence.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 border border-white/10 hover:border-[#C4A265]/30 bg-white/[0.02] transition-all group"
            >
              <span className="text-[10px] uppercase tracking-[4px] text-[#C4A265] font-black block mb-4">KONTAKT</span>
              <span className="text-white text-lg font-black uppercase tracking-tight group-hover:text-[#C4A265] transition-colors">Boka en konfidentiell genomgång</span>
            </a>
            <a 
              href="https://hylten.github.io/Venture-Studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 border border-white/10 hover:border-white/30 bg-white/[0.02] transition-all group"
            >
              <span className="text-[10px] uppercase tracking-[4px] text-white/50 font-black block mb-4">VENTURE STUDIO</span>
              <span className="text-white text-lg font-black uppercase tracking-tight group-hover:text-white/80 transition-colors">Utforska vår studio-modell</span>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <a 
            href="https://hylten.github.io/Venture-Studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[4px] text-white/30 hover:text-[#C4A265] transition-colors"
          >
            ← Tillbaka till Hyltén Venture Studio
          </a>
        </div>
      </Reveal>
    </div>
  );
};
