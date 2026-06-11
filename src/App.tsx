import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import InteractiveBackground from './components/InteractiveBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import FeaturedProjects from './components/FeaturedProjects';
import ContactModal from './components/ContactModal';
import { Mail, ArrowUpRight, Github, Heart, MessageSquareDot } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'accueil' | 'projets' | 'moi' | 'blog'>('accueil');
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Auto scroll to top when tab shifts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-purple-500 selection:text-white font-sans overflow-x-hidden antialiased">
      
      {/* Editorial Aesthetic Aurora & Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="aurora opacity-60" />
        <div className="grid-overlay opacity-50" />
      </div>

      {/* Editorial side-rails (hidden on smaller screens, floating elegantly on xl screens) */}
      <div className="hidden xl:flex side-rail rail-left select-none">
        <div className="rail-text">EST. 2012 — SENIOR ENGINEER</div>
        <div className="w-px h-24 bg-white/12" />
      </div>
      <div className="hidden xl:flex side-rail rail-right select-none">
        <div className="w-px h-24 bg-white/12" />
        <div className="rail-text">WILSON TAPAMO — YAOUNDÉ</div>
      </div>

      {/* Light Noise filter layout overlay across the entire experience */}
      <div 
        className="fixed inset-0 pointer-events-none z-45 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Spectacular interactive background of passions */}
      <InteractiveBackground />

      {/* Luminous Floating Header Menu Bar */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openContactModal={() => setIsContactOpen(true)}
      />

      {/* Main Sections orchestrator */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab === 'accueil' && (
              <>
                <Hero
                  onNavigateToProjects={() => setActiveTab('projets')}
                  onOpenContact={() => setIsContactOpen(true)}
                />
                <FeaturedProjects
                  onNavigateToProjects={() => setActiveTab('projets')}
                />
                <Services />
              </>
            )}

            {activeTab === 'projets' && <ProjectsPage />}

            {activeTab === 'moi' && <AboutPage />}

            {activeTab === 'blog' && <BlogPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* PRESTIGIOUS LUXURY FOOTER */}
      <footer id="global-luxury-footer" className="relative z-10 border-t border-white/6 bg-black/40 backdrop-blur-md pt-20 pb-12 px-4 overflow-hidden">
        
        {/* Soft background glow reflecting on the floor */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[30vh] bg-gradient-to-t from-purple-500/10 via-blue-500/5 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <p className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-4">
            — FORMULONS LA COLLABORATION INTÉGRALE
          </p>

          <h2 
            className="text-4xl sm:text-6xl md:text-7xl font-black text-center text-white tracking-tighter uppercase mb-6 leading-none"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            Vous avez une idée ?<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Transformons-la en produit.
            </span>
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm text-center max-w-md leading-relaxed mb-10">
            Dîtes adieu aux approximations architecturales et offrez à votre modèle d'affaires la réactivité d'interfaces d'orfèvrerie.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="group px-8 py-4 rounded-full bg-linear-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs tracking-widest uppercase shadow-[0_20px_40px_-5px_rgba(147,51,234,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(6,182,212,0.3)] transition-all cursor-pointer flex items-center gap-3 active:scale-95 mb-16"
          >
            <MessageSquareDot className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            Engager une discussion
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
          </button>

          {/* Legal detail links and credential row */}
          <div className="w-full border-t border-white/6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1 leading-none">
              <span className="text-white font-semibold">Wilson Tapamo — Portfolio Personnel v3.5</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase mt-0.5 tracking-widest">INGÉNIEUR LOGICIEL SENIOR (9 Ans)</span>
            </div>

            {/* Custom references link */}
            <div className="flex items-center gap-5">
              <a 
                href="https://github.com" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="text-gray-400 hover:text-white flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
              <a 
                href="mailto:tapamow@gmail.com" 
                className="text-gray-400 hover:text-white flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>E-MAIL</span>
              </a>
            </div>

            <div className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
              <span>BÂTI AVEC</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
              <span>&amp; RIGUEUR MATHÉMATIQUE</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Cryptographic interactive project calculator & contact overlay */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
