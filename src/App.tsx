import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Activity, Globe, Film, ChevronRight, Terminal, Landmark } from "lucide-react";

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

const MatrixScrambler = ({ targetText }: { targetText: string }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "!@#$%^&*()_+}{|:?><ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const iterationRef = useRef(0);

  useEffect(() => {
    let interval: any;
    const scramble = () => {
      const newText = targetText
        .split("")
        .map((char, index) => {
          if (index < iterationRef.current) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      
      setDisplayText(newText);

      if (iterationRef.current >= targetText.length) {
        clearInterval(interval);
      }
      iterationRef.current += 1 / 3;
    };

    interval = setInterval(scramble, 30);
    return () => clearInterval(interval);
  }, [targetText]);

  return <span className="font-mono text-[11px] text-white/25 ml-5 whitespace-pre">{displayText}</span>;
};

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
    <div className={`relative w-full ${isFull ? 'h-screen' : 'h-[450px] bg-white/[0.015] border border-white/5 hidden md:flex'} rounded-sm overflow-hidden flex items-center justify-center`}>
      {/* Scanline Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 255, 65, 0.008) 3px, rgba(0, 255, 65, 0.008) 4px)'
        }}
      />
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(196,162,101,0.05),transparent)]" />
      
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
              strokeDasharray="5 3"
              initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.4, 0.4, 0], strokeDashoffset: -16 }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "linear",
                strokeDashoffset: { duration: 8, repeat: Infinity, ease: "linear" }
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
              animate={{ scale: [1, 1.04, 1], opacity: [0.6, 1, 0.6] }}
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5500);
    return () => clearTimeout(timer);
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

  const submitButtonClass = "group border border-white/30 text-white/40 w-full md:w-auto py-5 px-16 font-black uppercase tracking-[3px] text-xs hover:border-[#C4A265] hover:text-white hover:tracking-[4px] transition-all duration-500 flex items-center justify-center gap-2 bg-dark";

  return (
    <div className="bg-dark min-h-screen text-white selection:bg-[#C4A265]/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark/80 backdrop-blur-xl px-8 flex items-center justify-between h-20">
        <div className="flex items-center gap-12">
          <a href="https://hylten.github.io/Hylten-Invest/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-10 hover:opacity-100 transition-all duration-1000 group">
            <img src="hylten-gear.png" className="h-4 w-auto grayscale invert opacity-50 group-hover:opacity-100 transition-opacity" alt="Gear" />
            <span className="text-[10px] font-black uppercase tracking-[5px] text-white/40 italic">Hyltén Invest</span>
          </a>
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[4px] text-white/30">
            <a href="#alpha" className="hover:text-white transition-colors duration-500">ALPHA</a>
            <a href="#studio" className="hover:text-white transition-colors duration-500">EXPANSION</a>
            <a href="#apply" className="hover:text-white transition-colors duration-500">AUDIT</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center px-8 md:px-24 overflow-hidden">
        {/* Institutional Backdrop - Plain Background */}
        
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
            <a href="https://hylten.github.io/Alpha/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
              <MatrixScrambler targetText="SYSTEM_LOG: MANDATE_MMXXVI_VAL_ACTIVE" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter">
            Roials Alpha OS
          </h1>
        </Reveal>
        <Reveal delay={0.4}>
          <div>
            <p className="text-white/30 text-lg md:text-2xl max-w-3xl leading-relaxed mb-4 font-medium italic">
              Proprietär GTM-infrastruktur som härdar B2B-bolag till förvärvsbara tillgångar.
            </p>
            <div className="mb-12">
               <span className="font-mono text-[12px] text-white/30 uppercase tracking-[0.15em]">GTM_INFRASTRUCTURE: PROPRIETARY | AGENT-BASED | BUILD_2026</span>
            </div>
          </div>
        </Reveal>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-0 w-full text-center z-20 flex flex-col items-center gap-2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => document.getElementById('values')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity duration-1000 group">
            <span className="text-white text-[9px] tracking-[5px] uppercase font-bold">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-white group-hover:text-[#C4A265]"
            >
              <ChevronRight className="rotate-90" size={12} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Pillars */}
      <section id="values" className="px-8 md:px-24 py-32 border-t border-white/5 bg-dark">
        <div className="grid md:grid-cols-3">
          {[
            { icon: <Terminal className="text-white/40 mb-8" size={32} />, title: "PROPRIETARY GTM ENGINEERING", desc: "Agent-baserad säljinfrastruktur. Proprietärt byggd. Systemet är ditt att behålla.", href: "https://hylten.github.io/Alpha/" },
            { icon: <Zap className="text-white/40 mb-8" size={32} />, title: "Velocity", desc: "Installation av Roials Alpha OS på 30 dagar. Ingen teori. Bara exekvering.", href: "https://hylten.github.io/Alpha/" },
            { icon: <Shield className="text-white/40 mb-8" size={32} />, title: "Operational Stewardship", desc: "War Room: veckovis pipeline-genomgång. Likviditet och closing-disciplin.", href: "https://www.linkedin.com/in/hylten" }
          ].map((v, i) => (
              <Reveal delay={i * 0.1} key={i}>
              <div 
                className={`group p-12 h-full flex flex-col justify-between transition-all duration-700 ${i < 2 ? 'md:border-r border-white/10' : ''} ${v.href ? 'cursor-pointer hover:bg-white/[0.01]' : ''}`}
                onClick={() => v.href && window.open(v.href, '_blank')}
              >
                <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black mb-4 uppercase tracking-tighter text-white/80 group-hover:text-white transition-colors duration-500">{v.title}</h3>
                  <p className="text-white/20 group-hover:text-white/50 text-sm leading-relaxed font-bold italic transition-colors duration-500 text-balance">
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
              <h2 className="text-xl md:text-2xl font-black mb-4 tracking-tighter uppercase text-white/60">Jonas Hylténs kunder har inkluderat:</h2>
            </div>
            
            <div className="relative group cursor-default">
              <motion.div 
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-white/[0.01] blur-[150px] rounded-full scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[2000ms] pointer-events-none"
              />
              
              <div className="flex flex-wrap justify-center items-center gap-[80px] relative z-10 max-w-5xl mx-auto">
                <div className="flex justify-center opacity-40 group-hover:opacity-100 transition-all duration-1000 shrink-0">
                  <img src="logo-saab.png" className="h-10 md:h-12 w-auto object-contain invert grayscale" alt="Saab" />
                </div>
                <div className="flex justify-center opacity-40 group-hover:opacity-100 transition-all duration-1000 shrink-0">
                  <img src="logo-volvo.png" className="h-14 md:h-18 w-auto object-contain grayscale brightness-150" alt="Volvo" />
                </div>
                <div className="flex justify-center opacity-40 group-hover:opacity-100 transition-all duration-1000 shrink-0">
                  <img src="logo-fm.png" className="h-10 md:h-12 w-auto object-contain grayscale brightness-150" alt="Försvarsmakten" />
                </div>
                <div className="flex justify-center opacity-40 group-hover:opacity-100 transition-all duration-1000 shrink-0">
                  <img src="logo-husqvarna.png" className="h-28 md:h-36 w-auto object-contain invert grayscale brightness-200" alt="Husqvarna" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Roials Alpha Engine */}
      <section id="alpha" className="px-8 md:px-24 py-32 bg-dark">
        <a href="https://hylten.github.io/Alpha/" target="_blank" rel="noopener noreferrer" className="grid md:grid-cols-2 gap-16 items-center group/alpha">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter max-w-md group-hover/alpha:text-white transition-colors">
                Terminal-access till dolt deal flow.
              </h2>
              <p className="text-white/30 text-lg leading-relaxed mb-12 font-medium italic max-w-lg">
                Agent-baserad GTM-infrastruktur.
              </p>
              <div className="grid grid-cols-3 gap-8 border-t border-[#C4A265]/30 pt-12">
                <div>
                  <div className="text-xs font-bold text-white/60 tracking-tighter uppercase mb-1">Operational</div>
                  <p className="text-[9px] uppercase tracking-widest text-[#C4A265]/40 font-black">Hardening</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-white/60 tracking-tighter uppercase mb-1">Systemic</div>
                  <p className="text-[9px] uppercase tracking-widest text-[#C4A265]/40 font-black">Resilience</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-white/60 tracking-tighter uppercase mb-1 whitespace-nowrap">Proprietary</div>
                  <p className="text-[9px] uppercase tracking-widest text-[#C4A265]/40 font-black">Agent Network</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.4}>
            <div className="opacity-70 contrast-125 grayscale scale-110 group-hover/alpha:opacity-100 group-hover/alpha:grayscale-0 transition-all duration-1000">
              <NodeMap />
            </div>
          </Reveal>
        </a>
      </section>

      {/* Founder Protocol (Fas 1) */}
      <section className="px-8 md:px-24 py-32">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter text-center uppercase">Founder Protocol - Fas 1</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 mb-24">
            {[
              { icon: <Film size={22} />, label: "Operating Review", desc: "Veckovis Operating Review av dina säljsamtal. Data och kalibrering." },
              { icon: <Activity size={22} />, label: "Operational Validation", desc: "Operativ prövning" },
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
                    Fas 1 är provspelningen.
                  </p>
                  <div className="mt-5 mb-7 flex items-center gap-3">
                     <span className="text-[#00FF41] text-[10px]">●</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/30 italic">COHORT_01 - STATUS: ACCEPTING AUDITS - POSITIONS: 5</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expansion Protocol */}
      <section id="studio" className="relative px-8 md:px-24 py-20 border-y border-white/[0.04]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
             <div className="opacity-10 mx-auto mb-10 flex justify-center">
               <Landmark className="text-white h-12 w-12" />
             </div>
             <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase text-white/60">Expansion Protocol</h2>
             
             <div className="flex flex-col gap-4 mb-8">
               <div className="text-sm font-medium text-white/50 uppercase tracking-[2px]">
                  <span className="text-[#C4A265] font-bold">FAS 2</span> - <span className="opacity-50 italic">Utökat mandat. Revenue share-struktur.</span>
                </div>
                 <div className="text-sm font-medium text-white/50 uppercase tracking-[2px]">
                   <span className="text-[#C4A265] font-bold">FAS 3</span> - <span className="opacity-50 italic">Co-ownership. Tillgång till Hyltén-nätverket.</span>
                </div>
              </div>

             <p className="text-white/60 text-lg leading-relaxed font-medium italic mt-12">
               Inbjudan sker direkt. Ingen ansökan.
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
              <div className="bg-white/[0.02] border border-white/5 p-12 flex flex-col md:flex-row gap-10 items-center h-full group">
                <div className="flex flex-col gap-1 items-start">
                  <a href="https://hylten.github.io/Alpha/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-white/40 uppercase tracking-[4px] mb-1 hover:text-white transition-colors">Jonas Hyltén, Principal</a>
                  <a href="https://www.linkedin.com/in/hylten" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-white/20 uppercase tracking-[2px] border-b border-transparent hover:border-white/20 transition-all">CONNECT ON LINKEDIN</a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <a href="https://roialscapital.com/" target="_blank" rel="noopener noreferrer" className="bg-white/[0.02] border border-white/5 p-12 flex gap-10 items-center hover:bg-white/[0.04] transition-all group">
                <div className="w-16 h-16 flex-shrink-0 border border-white/5 flex items-center justify-center rounded-full opacity-20 group-hover:opacity-60 transition-opacity">
                   <Globe size={32} className="text-white/40" strokeWidth={1} />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-white/30 uppercase tracking-tighter uppercase group-hover:text-white transition-colors">Anonymous Network</h4>
                   <p className="text-[10px] uppercase tracking-[4px] text-white/20 mb-2 font-bold italic">GTM ENGINEERING SPECIALISTS</p>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Qualification Audit Form */}
      <section id="apply" className="px-8 md:px-24 py-32 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-3xl relative z-10">
          <Reveal>
            <div className="mb-20">
              <div className="font-mono text-[12px] uppercase tracking-[0.1em] text-white/30 flex flex-col gap-1">
                <div className="flex justify-between items-center border-b border-white/5 pb-1">
                  <span>ENTITY TYPE:</span>
                  <span>B2B</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-1 mt-2">
                  <span>SALES CYCLE:</span>
                  <span>HIGH-VALUE / CONSULTATIVE</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-1 mt-2 mb-32">
                  <span>OPERATIONAL CAPACITY:</span>
                  <span>ABLE TO PROCESS INBOUND AT SCALE</span>
                </div>
              </div>
            </div>

            <div className="pt-32 pb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase text-white/70">Qualification Audit</h2>
              <p className="text-white/20 text-sm md:text-base font-bold mb-16 italic uppercase tracking-wider">
                Filtrering för operativ disciplin.
              </p>
            </div>
            
            <form className="space-y-6">
              {[
                { label: "Entity", placeholder: "FORM_ID" },
                { label: "Current Revenue (FY)", placeholder: "MSEK" },
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
                <button type="submit" className={submitButtonClass}>
                  SUBMIT AUDIT
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="px-8 md:px-24 py-16 border-t border-white/5 bg-dark">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
          {/* Left: Ecosystem Links */}
          <div className="flex flex-wrap items-center gap-8 order-2 md:order-1">
            <a href="https://roialscapital.com/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[3px] text-white/20 hover:text-white/60 transition-colors">Roials Capital</a>
            <a href="https://hylten.github.io/Hylten-Invest/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[3px] text-white/20 hover:text-white/60 transition-colors">Hyltén Invest</a>
            <button 
              onClick={() => alert("GDPR: Vi behandlar endast personuppgifter i enlighet med gällande dataskyddslagstiftning. Du kan begära tillgång, rättelse eller radering av dina uppgifter genom att kontakta jonas@roials.co.")}
              className="text-[10px] uppercase tracking-[3px] text-white/20 hover:text-white/30 transition-colors"
            >
              Legal
            </button>
            <a href="https://hylten.github.io/Alpha/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[3px] text-white/20 hover:text-white/60 transition-colors">Roials Alpha</a>
          </div>

          {/* Right: Stewardship & Copyright + WhatsApp */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 order-1 md:order-2">
            <div className="text-[10px] uppercase tracking-[4.5px] text-white/5 font-black italic">
               BUSINESS AS STEWARDSHIP.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/46701619978?text=Regarding%20Hylten%20Venture%20Studio:"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-20 hover:opacity-100 transition-all duration-700"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <div className="text-[9px] font-mono text-white/10 tracking-widest uppercase">
                © HYLTÉN INVEST MMXXVI
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
