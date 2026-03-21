import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Landmark, Activity, Globe, Film, ChevronRight } from "lucide-react";

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

const NodeMap = ({ isFull = false }: { isFull?: boolean }) => {
  const standardNodes = [
    { id: 1, x: 200, y: 150, label: "DEAL_ORIGINATION" },
    { id: 2, x: 500, y: 100, label: "QUALIFICATION_ENGINE" },
    { id: 3, x: 450, y: 300, label: "SIGNAL_ENRICHMENT" },
    { id: 4, x: 150, y: 350, label: "PIPELINE_HARDENING" },
    { id: 5, x: 800, y: 200, label: "ALPHA_OUTPUT" },
  ];

  const crossNodes = [
    // Vertical line
    { id: 1, x: 500, y: 50, label: "Providence" },
    { id: 2, x: 500, y: 150, label: "Stewardship" },
    { id: 3, x: 500, y: 250, label: "Sovereignty" },
    {id: 4, x: 500, y: 350, label: "Recilience"},
    { id: 5, x: 500, y: 450, label: "Persistence" },
    // Horizontal arms
    { id: 6, x: 350, y: 150, label: "Integrity" },
    { id: 7, x: 650, y: 150, label: "Discipline" },
  ];

  const nodes = isFull ? crossNodes : standardNodes;

  const standardConnections = [
    [1, 2], [1, 3], [2, 5], [3, 2], [3, 4], [4, 5]
  ];

  const crossConnections = [
    [1, 2], [2, 3], [3, 4], [4, 5], // Vertical
    [6, 2], [2, 7]                  // Horizontal arms
  ];

  const connections = isFull ? crossConnections : standardConnections;

  return (
    <div className={`relative w-full ${isFull ? 'h-screen' : 'h-[450px] bg-white/[0.02] border border-white/10'} rounded-sm overflow-hidden flex items-center justify-center`}>
      {/* Scanline Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.015) 2px, rgba(0, 255, 65, 0.015) 4px)'
        }}
      />
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(196,162,101,0.1),transparent)]" />
      
      <svg className="w-full h-full max-w-[1000px] max-h-[450px]" viewBox="0 0 1000 500">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {connections.map(([startId, endId], i) => {
          const start = nodes.find(n => n.id === startId)!;
          const end = nodes.find(n => n.id === endId)!;
          return (
            <motion.line
              key={`${isFull ? 'c' : 's'}-${i}`}
              x1={start.x} y1={start.y} x2={end.x} y2={end.y}
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.6, 0.6, 0], strokeDashoffset: -40 }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
                strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear" }
              }}
            />
          );
        })}

        {nodes.map((node) => (
          <motion.g key={node.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: node.id * 0.2 }}>
            <motion.circle 
              cx={node.x} cy={node.y} r="4" 
              fill="#C4A265" 
              filter="url(#glow)" 
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: node.id * 0.5 }}
            />
            <text x={node.x + 15} y={node.y + 5} fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter" className="uppercase tracking-[2px]">
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
      <div className="absolute top-12 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        <span className="text-[10px] uppercase tracking-[5px] text-white/60 font-mono font-bold animate-pulse">Active_Agentic_Network_In_Progress_</span>
      </div>
    </div>
  );
};

export default function App() {
  const [timestamp, setTimestamp] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 5.5s Preloader for maximum institutional gravitas
    const timer = setTimeout(() => setLoading(false), 5500);

    const updateTime = () => {
      const now = new Date();
      const format = `LAST_UPDATE: ${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(now.getUTCDate()).padStart(2, '0')}_${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')}:${String(now.getUTCSeconds()).padStart(2, '0')}_UTC`;
      setTimestamp(format);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-dark z-[100] flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl w-full">
          <NodeMap isFull />
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="h-[1px] w-64 bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-[#C4A265]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 5.5, ease: "easeInOut" }}
              />
            </div>
            <span className="text-[10px] uppercase tracking-[8px] text-white/20 font-mono italic animate-pulse">Initialising Alpha OS...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen text-white selection:bg-[#C4A265]/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark/80 backdrop-blur-xl px-8 flex items-center justify-between h-20">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 opacity-10 hover:opacity-100 transition-all duration-1000 group">
            <img src="hylten-gear.png" className="h-4 w-auto grayscale invert opacity-50 group-hover:opacity-100 transition-opacity" alt="Gear" />
            <span className="text-[10px] font-black uppercase tracking-[5px] text-white/40 italic">Hyltén Invest</span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[4px] text-white/30">
            <a href="#alpha" className="hover:text-white transition-colors duration-500">ALPHA</a>
            <a href="#studio" className="hover:text-white transition-colors duration-500">EXPANSION</a>
            <a href="#apply" className="hover:text-white transition-colors duration-500">AUDIT</a>
          </div>
        </div>
        <a href="#apply" className="border border-white/20 text-white/40 hover:text-white/80 hover:border-[#C4A265] px-6 py-2 text-[10px] uppercase tracking-[3px] transition-all duration-500 font-bold">BOOK AUDIT</a>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center px-8 md:px-24 overflow-hidden">
        {/* Institutional Grid Backdrop */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px),
                              repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px)`
          }}
        />
        
        <Reveal>
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FF41]" />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-[#00FF41]/40"
                  animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <span className="text-[#C4A265] text-[10px] uppercase tracking-[8px] block font-black">SYSTEM STATUS: ACTIVE</span>
            </div>
            <span className="font-mono text-[11px] text-white/25 ml-5">{timestamp}</span>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter">
            Roials Alpha OS
          </h1>
        </Reveal>
        <Reveal delay={0.4}>
          <div>
            <p className="text-white/30 text-lg md:text-2xl max-w-3xl leading-relaxed mb-4 font-medium">
              Proprietär infrastruktur som härdar B2B-bolag till förvärvsbara tillgångar.
            </p>
            <div className="mb-12">
               <span className="font-mono text-[12px] text-white/30 uppercase tracking-[0.15em]">PIPELINE_PROCESSED: 340+ MSEK</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.6}>
          <div className="flex gap-4">
            <a href="#apply" className="border border-white/20 text-white/60 px-12 py-5 font-black uppercase tracking-[3px] text-xs hover:border-[#C4A265] hover:text-white transition-all duration-500 shadow-2xl bg-dark">BOOK AUDIT</a>
          </div>
        </Reveal>
      </section>

      {/* Values Pillars */}
      <section className="px-8 md:px-24 py-32 border-t border-white/5 bg-dark">
        <div className="grid md:grid-cols-3">
          {[
            { icon: <Landmark className="text-white/40 mb-8" size={32} />, title: "Institutional Discipline", desc: "Vi kombinerar operativ rigor med M&A-nivå systematik." },
            { icon: <Zap className="text-white/40 mb-8" size={32} />, title: "Velocity", desc: "Installation av Roials Alpha OS på 30 dagar. Ingen teori. Bara exekvering." },
            { icon: <Shield className="text-white/40 mb-8" size={32} />, title: "Operational Stewardship", desc: "Vi installerar systemen som skalar med bolaget." }
          ].map((v, i) => (
            <Reveal delay={i * 0.1} key={i}>
              <div className={`group p-12 h-full flex flex-col justify-between transition-all duration-700 ${i < 2 ? 'md:border-r border-white/10' : ''}`}>
                <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black mb-4 uppercase tracking-tighter text-white/80 group-hover:text-white transition-colors duration-500">{v.title}</h3>
                  <p className="text-white/20 group-hover:text-white/50 text-sm leading-relaxed font-bold italic transition-colors duration-500">
                    {v.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust Bar - Authority Waterfall */}
      <section className="px-8 md:px-24 py-40 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-32">
              <h2 className="text-xl md:text-2xl font-black mb-4 tracking-tighter uppercase text-white/60">SELECT MANDATES</h2>
            </div>
            
            <div className="relative group cursor-default">
              <motion.div 
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-white/[0.01] blur-[150px] rounded-full scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[2000ms] pointer-events-none"
              />
              
              <div className="flex flex-wrap justify-center items-center gap-[80px] relative z-10 max-w-5xl mx-auto">
                <div className="flex justify-center opacity-10 group-hover:opacity-50 transition-all duration-1000 shrink-0">
                  <img src="logo-saab.png" className="h-20 md:h-24 w-auto object-contain invert grayscale" alt="Saab" />
                </div>
                <div className="flex justify-center opacity-10 group-hover:opacity-50 transition-all duration-1000 shrink-0">
                  <img src="logo-volvo.png" className="h-14 md:h-18 w-auto object-contain grayscale brightness-150" alt="Volvo" />
                </div>
                <div className="flex justify-center opacity-10 group-hover:opacity-50 transition-all duration-1000 shrink-0">
                  <img src="logo-fm.png" className="h-10 md:h-12 w-auto object-contain grayscale brightness-150" alt="Försvarsmakten" />
                </div>
                <div className="flex justify-center opacity-10 group-hover:opacity-50 transition-all duration-1000 shrink-0">
                  <img src="logo-husqvarna.png" className="h-7 md:h-9 w-auto object-contain invert grayscale brightness-200" alt="Husqvarna" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Roials Alpha Engine */}
      <section id="alpha" className="px-8 md:px-24 py-32 bg-dark">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter max-w-md">
                Terminal-access till dolt deal flow.
              </h2>
              <p className="text-white/30 text-lg leading-relaxed mb-12 font-medium italic max-w-lg">
                PE-grade infrastruktur byggd för lead-origination.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-[#C4A265]/30 pt-12">
                <div>
                  <div className="text-xl font-bold text-white/60 tracking-tighter">OPERATIONAL</div>
                  <p className="text-[10px] uppercase tracking-widest text-[#C4A265]/40 font-black">HARDENING</p>
                </div>
                <div>
                  <div className="text-xl font-bold text-white/60 tracking-tighter uppercase">Systemic</div>
                  <p className="text-[10px] uppercase tracking-widest text-[#C4A265]/40 font-black">Resilience</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.4}>
            <div className="opacity-70 contrast-125 grayscale scale-110">
              <NodeMap />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder Protocol (Fas 1) */}
      <section className="px-8 md:px-24 py-32">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter text-center uppercase">Founder Protocol: Fas 1</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 mb-24">
            {[
              { icon: <Film size={22} />, label: "Operating Review", desc: "Veckovis granskning av dina operativa samtal. Ingen teori. Bara sanning." },
              { icon: <Activity size={22} />, label: "Operational Hardening", desc: "30 dagars operativ härdning. Inga undantag." },
              { icon: <Shield size={22} />, label: "Strategic Closing", desc: "Vi installerar closing-disciplin som säkrar kassaflöde." }
            ].map((f, i) => (
              <Reveal delay={i * 0.1} key={i}>
                <div className={`p-12 flex flex-col items-center text-center h-full ${i < 2 ? 'border-r border-white/10' : ''}`}>
                  <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mb-6 text-white/20">
                    {f.icon}
                  </div>
                  <h4 className="text-base font-bold mb-4 text-white/60 uppercase tracking-tighter">{f.label}</h4>
                  <p className="text-white/20 text-xs leading-relaxed font-bold italic">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={0.5}>
            <div className="bg-white/[0.01] border border-white/5 p-12 text-white/80 rounded-sm relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-center md:text-left">
                  <h3 className="text-xl font-black uppercase tracking-[2px] mb-4 text-white/40 italic">Onboarding Mandate</h3>
                  <p className="font-bold text-sm leading-relaxed opacity-40 italic">
                    Fas 1 är din operationella provspelning. Endast ett fåtal kvalificerar sig för Roials Alpha.
                  </p>
                </div>
                <div>
                   <button className="border border-white/20 text-white/60 px-12 py-5 font-black uppercase tracking-[3px] text-xs hover:border-[#C4A265] hover:text-white transition-all duration-500 bg-dark">BOOK AUDIT</button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expansion Protocol */}
      <section id="studio" className="relative px-8 md:px-24 py-12 border-y border-white/[0.04]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
             <div className="opacity-10 mx-auto mb-10 flex justify-center">
               <img src="hylten-gear.png" className="h-10 w-auto grayscale invert" alt="Gear" />
             </div>
             <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase text-white/60">Expansion Protocol</h2>
             <p className="text-white/20 text-lg leading-relaxed font-medium italic">
               Exceptionell disciplin i Fas 1 kvalificerar för Fas 2 & 3. Inget annat.
             </p>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="px-8 md:px-24 py-32 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-black mb-16 tracking-tighter uppercase text-white/20">Organization</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal delay={0.2}>
              <div className="bg-white/[0.02] border border-white/5 p-12 flex gap-10 items-center">
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-lg font-bold text-white/30 uppercase tracking-[4px] italic">HYLTÉN INVEST</span>
                  <span className="text-[10px] font-mono text-white/10 uppercase tracking-[5px]">PRINCIPAL ARCHITECT</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="bg-white/[0.02] border border-white/5 p-12 flex gap-10 items-center">
                <div className="w-16 h-16 flex-shrink-0 border border-white/5 flex items-center justify-center rounded-full opacity-20">
                   <Globe size={32} className="text-white/40" strokeWidth={1} />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-white/20 uppercase tracking-tighter uppercase">Anonymous Network</h4>
                   <p className="text-[10px] uppercase tracking-[4px] text-white/10 mb-2 font-bold italic">Deal Flow Specialists</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Qualification Audit Form */}
      <section id="apply" className="px-8 md:px-24 py-32 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-3xl relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase text-white/70">Qualification Audit</h2>
            <p className="text-white/20 text-sm md:text-base font-bold mb-16 italic uppercase tracking-wider">
              Filtrering för operativ disciplin. Inga undantag.
            </p>
            
            <form className="space-y-6">
              {[
                { label: "Entity", placeholder: "FORM_ID" },
                { label: "Current Revenue (FY)", placeholder: "MUSD/MSEK" },
                { label: "Current Monthly Revenue", placeholder: "RUN_RATE" },
                { label: "ARR / MRR", placeholder: "ANNUAL_RECURRING" },
                { label: "Qualification Mandate", placeholder: "State your qualification mandate." }
              ].map((step, i) => (
                <div key={i} className="mb-6">
                  <label className="text-[10px] uppercase tracking-[5px] text-white/20 font-black mb-3 block font-mono">{step.label}</label>
                  <input 
                    type="text" 
                    placeholder={step.placeholder}
                    className="w-full bg-white/[0.02] border-b border-white/10 px-4 py-3 focus:border-[#C4A265]/40 outline-none transition-all duration-500 text-sm font-mono text-white/80 placeholder:text-white/10" 
                  />
                </div>
              ))}
              <div className="pt-12">
                <button type="submit" className="group border border-white/30 text-white/40 w-full md:w-auto py-5 px-16 font-black uppercase tracking-[3px] text-xs hover:border-[#C4A265] hover:text-white hover:tracking-[4px] transition-all duration-500 flex items-center justify-center gap-2 bg-dark">
                  SUBMIT AUDIT
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="px-8 md:px-24 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 bg-dark">
        <div className="flex items-center gap-3 opacity-10 hover:opacity-100 transition-all duration-1000 group">
          <img src="hylten-gear.png" className="h-4 w-auto grayscale invert opacity-50 group-hover:opacity-100 transition-opacity" alt="Gear" />
          <span className="text-[10px] font-black uppercase tracking-[5px] text-white/40 italic">Hyltén Invest</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="text-[10px] uppercase tracking-[4.5px] text-white/10 font-black italic">
             BUSINESS AS STEWARDSHIP.
          </div>
          <div className="text-[9px] font-mono text-white/5 tracking-widest">
            © HYLTÉN INVEST MMXXV
          </div>
        </div>
      </footer>
    </div>
  );
}
