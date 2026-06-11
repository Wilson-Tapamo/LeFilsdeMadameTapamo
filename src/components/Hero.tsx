import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Lightbulb, Heart, Globe, ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigateToProjects: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onNavigateToProjects, onOpenContact }: HeroProps) {
  const stats = [
    {
      id: 'years',
      value: '9+',
      label: "Années d'expérience",
      desc: 'Développement d’architectures logicielles',
      icon: Terminal,
      color: 'text-purple-400',
      bgGlow: 'from-purple-500/10 to-transparent',
    },
    {
      id: 'projects',
      value: '20+',
      label: 'Projets livrés',
      desc: 'SaaS, Métier, IA & Showroom',
      icon: Lightbulb,
      color: 'text-blue-400',
      bgGlow: 'from-blue-500/10 to-transparent',
    },
    {
      id: 'countries',
      value: '3',
      label: 'Pays impactés',
      desc: 'Cameroun, International',
      icon: Globe,
      color: 'text-cyan-400',
      bgGlow: 'from-cyan-500/10 to-transparent',
    },
    {
      id: 'passion',
      value: '100%',
      label: 'Passion / Rigueur',
      desc: 'Météorologie mathématique & physique',
      icon: Heart,
      color: 'text-rose-400',
      bgGlow: 'from-rose-500/10 to-transparent',
    },
  ];

  return (
    <section id="hero-section" className="relative w-full min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-4 overflow-hidden">
      
      {/* Dynamic Background Glowing Blobs - Apple/Stripe-like Ambient Mesh */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[45vh] bg-gradient-to-r from-purple-800/10 via-blue-700/10 to-cyan-600/8 blur-[130px] rounded-full pointer-events-none z-0 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[30vh] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Intro Chip Accent */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          id="hero-badge"
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span className="text-[10px] font-mono tracking-widest text-gray-300 uppercase">
            Ingénieur Logiciel de Précision — Yaoundé / Distanciel
          </span>
        </motion.div>

        {/* Big Headline Slogan - Giant, Ultra bold display block */}
        <div className="relative text-center w-full select-none mb-6">
          
          {/* Subtle text aura glow backing */}
          <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
            <span className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-blue-500/10 blur-xl uppercase">
              CODE
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            id="hero-slogan-main"
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter uppercase leading-[0.9] text-white select-none relative"
            style={{ fontFamily: 'var(--font-display), "Inter", sans-serif' }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-450 font-black">
              JE TAPE DU CODE
            </span>
            <span className="block text-stroke-thin" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)', color: 'transparent', display: 'block' }}>
              POUR VIVRE.
            </span>
          </motion.h1>
        </div>

        {/* Sub-header description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          id="hero-description"
          className="text-center text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed tracking-wide mb-12"
        >
          <strong className="text-white font-medium">9 ans</strong> à transformer des formulations mathématiques et des architectures complexes en applications robustes, réactives et fluides.
        </motion.p>

        {/* Action Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          id="hero-actions"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 w-full sm:w-auto px-4"
        >
          <button
            onClick={onNavigateToProjects}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 active:scale-95 cursor-pointer shadow-[0_20px_40px_-5px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
          >
            Découvrir mes projets
          </button>
          
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-950/80 hover:bg-zinc-900 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 border border-white/10 hover:border-white/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            Discutons de votre projet
          </button>
        </motion.div>

        {/* SECTION PREUVE D'EXPERTISE (Stats Block) */}
        <div id="stats-section-container" className="w-full mt-10">
          <p className="text-[10px] font-mono text-center tracking-widest text-gray-500 uppercase mb-8">
            —— MES SISMOGRAPHES D'IMPACT ——
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
                  className="bg-zinc-900/40 backdrop-blur-md border border-white/8 rounded-2xl p-5 md:p-6 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Subtle inner card gradient matching stat theme */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${stat.bgGlow} z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-4xl md:text-5xl font-black tracking-tight flex items-center gap-1.5 ${stat.color}`}>
                        {stat.value}
                        {stat.id === 'years' && <span className="accent-dot"></span>}
                      </span>
                      <Icon className={`w-5 h-5 ${stat.color} opacity-70 group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div>
                      <h3 className="text-white text-xs font-semibold tracking-wide mb-1 uppercase">
                        {stat.label}
                      </h3>
                      <p className="text-gray-400 text-[11px] leading-snug">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Gentle scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-20 flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          onClick={onNavigateToProjects}
        >
          <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase">EXPLORER MES SPÈRES</span>
          <ArrowDown className="w-4.5 h-4.5 text-cyan-400" />
        </motion.div>

      </div>
    </section>
  );
}
