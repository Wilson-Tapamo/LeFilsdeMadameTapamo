import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData, processPhases } from '../data';
import * as Icons from 'lucide-react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activePhase, setActivePhase] = useState<string>('01');

  // Helper to dynamically render Lucide icons in a safe manner
  const renderIcon = (iconName: string, className: string) => {
    // Falls back to direct dynamic lookup safely
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  return (
    <section id="services-section" className="relative w-full py-24 px-4 overflow-hidden border-t border-white/5 bg-black/20">
      
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* SECTION CE QUE JE CONSTRUIS Header */}
        <div className="mb-16">
          <p className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-2">
            — OFFRE D'INGÉNIERIE DE PRÉCISION
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Ce que je construis.
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Du noyau d'algorithmes à la transition d'écrans complexe, j'œuvre à tous les étages opérationnels pour matérialiser vos produits d’envergure.
          </p>
        </div>

        {/* Dynamic Card Grid (Ce que je construis) */}
        <div id="services-cards-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative p-6 md:p-8 rounded-3xl bg-zinc-950/40 border border-white/8 backdrop-blur-md overflow-hidden group cursor-crosshair"
            >
              {/* Animated spotlight card glow centered on mouse simulation */}
              <div
                className={`absolute inset-0 bg-radial-gradient from-white/5 via-transparent to-transparent pointer-events-none transition-opacity duration-500 -translate-x-12 -translate-y-12 ${
                  hoveredCard === service.id ? 'opacity-100 scale-125' : 'opacity-0 scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle 250px at 50% 50%, rgba(255,255,255,0.06), transparent 80%)'
                }}
              />

              <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-between items-start">
                
                {/* Left hand icon & text content */}
                <div className="flex-1 flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white/10 group-hover:border-cyan-400/35 transition-all duration-300">
                    {renderIcon(service.icon, "w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform")}
                  </div>
                  
                  <h3 className="text-white text-lg md:text-xl font-bold tracking-wide mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Right hand structural checklist */}
                <div className="w-full md:w-56 flex flex-col gap-2.5 bg-black/20 p-4 border border-white/4 rounded-2xl">
                  <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">
                    Spécificités techniques :
                  </p>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5" />
                      <span className="text-gray-300 text-[11px] leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION PROCESSUS Header */}
        <div className="mb-14">
          <p className="text-[10px] font-mono tracking-widest text-purple-400 uppercase mb-2">
            — PROTOCOLE DE PERFORMANCE CLIENT
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Le processus.
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Un découpage méthodologique inspiré de la rigueur scientifique pour amener vos ambitions à la production sans frictions.
          </p>
        </div>

        {/* Interactive Timeline layout */}
        <div id="process-timeline-layout" className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Phase sidebar switches */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
            {processPhases.map((phase) => (
              <button
                key={phase.phase}
                onClick={() => setActivePhase(phase.phase)}
                className={`flex-none lg:flex-initial text-left px-5 py-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                  activePhase === phase.phase
                    ? 'bg-zinc-900 border-purple-500/40 text-white shadow-[0_10px_20px_rgba(168,85,247,0.08)]'
                    : 'bg-zinc-950/20 border-white/5 text-gray-500 hover:border-white/10 hover:text-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
                    activePhase === phase.phase ? 'bg-purple-500/10 text-purple-400' : 'bg-white/5 text-gray-400'
                  }`}>
                    {phase.phase}
                  </span>
                  <span className="text-xs font-semibold tracking-wide whitespace-nowrap lg:whitespace-normal">
                    {phase.title}
                  </span>
                </div>
                <Icons.ChevronRight className={`hidden lg:block w-4 h-4 transition-transform duration-300 ${
                  activePhase === phase.phase ? 'translate-x-1 text-purple-400' : 'text-gray-600'
                }`} />
              </button>
            ))}
          </div>

          {/* Phase Content Preview Pane */}
          <div className="flex-1 w-full relative">
            <AnimatePresence mode="wait">
              {processPhases.map((phase) => {
                if (phase.phase !== activePhase) return null;
                return (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    id={`process-panel-${phase.phase}`}
                    className="w-full bg-zinc-950/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-white/5">
                      <div>
                        <span className="text-rose-400 text-xs font-mono tracking-widest uppercase mb-1 block">
                          Phase d'exécution intégrale
                        </span>
                        <h4 className="text-white text-lg md:text-2xl font-black">
                          {phase.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-white/5 px-4 py-2 border border-white/8 rounded-full">
                        <Icons.Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[10px] font-mono tracking-widest text-cyan-300">
                          {phase.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-8">
                      {phase.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {phase.details.map((detail, dIdx) => (
                        <div key={dIdx} className="bg-black/30 md:bg-white/2 border border-white/4 p-4 rounded-2xl flex flex-col justify-between hover:border-purple-400/20 hover:bg-white/4 transition-colors">
                          <span className="text-[10px] font-mono text-gray-500 mb-3">CONTRÔLE 0{dIdx + 1}</span>
                          <span className="text-gray-200 text-xs font-medium leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Progress tracking display along footer */}
                    <div className="mt-8 flex justify-between items-center bg-black/45 px-5 py-3 border border-white/5 rounded-full text-[9px] font-mono">
                      <span className="text-gray-500 uppercase tracking-widest text-[8px]">Index de conformité</span>
                      <div className="flex gap-1.5 items-center">
                        <span className="text-cyan-400 font-bold">100% EXÉCUTÉ</span>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
