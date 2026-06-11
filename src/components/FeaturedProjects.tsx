import React from 'react';
import { motion } from 'motion/react';
import { projectsData } from '../data';
import { ArrowUpRight, Target } from 'lucide-react';

interface FeaturedProjectsProps {
  onNavigateToProjects: () => void;
}

export default function FeaturedProjects({ onNavigateToProjects }: FeaturedProjectsProps) {
  const featured = projectsData.filter(p => p.type === 'featured').slice(0, 3);

  return (
    <section className="relative w-full py-24 px-4 overflow-hidden border-t border-white/5 bg-black/20">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="mb-14">
          <p className="text-[10px] font-mono tracking-widest text-purple-400 uppercase mb-2">
            — PROJETS CLÉS
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Réalisations phares.
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Des solutions livrées qui parlent d'elles-mêmes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((p, index) => (
            <motion.a
              key={p.id}
              href={p.demoUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-950/40 border border-white/8 backdrop-blur-md rounded-3xl p-6 group hover:border-white/20 transition-all duration-300 block"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                  {p.category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-white text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.technologies.slice(0, 4).map((t) => (
                  <span key={t} className="bg-white/4 border border-white/5 text-gray-300 text-[9px] font-mono px-2 py-0.5 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              {p.metrics && p.metrics.length > 0 && (
                <div className="bg-black/30 p-3 border border-white/4 rounded-2xl flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 text-[10px] font-medium">{p.metrics[0]}</span>
                </div>
              )}
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onNavigateToProjects}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 active:scale-95 transition-all cursor-pointer shadow-[0_20px_40px_-5px_rgba(255,255,255,0.1)]"
          >
            Voir plus de projets
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
