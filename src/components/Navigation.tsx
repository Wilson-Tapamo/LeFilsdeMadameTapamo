import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Cpu, Briefcase, User, Layers, CodeXml } from 'lucide-react';

interface NavigationProps {
  activeTab: 'accueil' | 'projets' | 'moi' | 'blog';
  setActiveTab: (tab: 'accueil' | 'projets' | 'moi' | 'blog') => void;
  openContactModal: () => void;
}

export default function Navigation({ activeTab, setActiveTab, openContactModal }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'accueil', label: 'Accueil', icon: Cpu },
    { id: 'projets', label: 'Projets', icon: CodeXml },
    { id: 'moi', label: 'Moi', icon: User },
    { id: 'blog', label: 'Blog', icon: Layers },
  ] as const;

  return (
    <>
      {/* Floating Header Wrapper */}
      <header
        className={`fixed top-0 left-0 w-full z-40 px-4 md:px-8 transition-all duration-500 pt-4 md:pt-6 ${
          scrolled ? 'translate-y-0' : 'translate-y-0'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo / Brand Name representing Senior Developer */}
          <button
            onClick={() => {
              setActiveTab('accueil');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="nav-logo"
            className="group flex items-center gap-2.5 bg-black/45 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full cursor-pointer hover:border-white/20 transition-all duration-300"
          >
            <div className="relative w-7 h-7 rounded-full bg-linear-to-tr from-purple-600 via-blue-500 to-cyan-400 flex items-center justify-center overflow-hidden">
              <span className="text-xs font-bold text-white tracking-widest">WT</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-xs font-semibold text-white tracking-wider group-hover:text-cyan-300 transition-colors">
                WILSON TAPAMO
              </span>
              <span className="text-[9px] font-mono text-gray-400 tracking-widest mt-0.5 uppercase">
                Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Floating Navigation - Pill shaped of premium glass */}
          <nav
            id="nav-container"
            className="hidden md:flex items-center gap-1.5 bg-black/45 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-[0_24px_50px_-20px_rgba(0,0,0,0.8)] relative"
            style={{
              boxShadow: scrolled 
                ? '0 0 25px rgba(255, 255, 255, 0.02), 0 10px 40px rgba(0, 0, 0, 0.7)' 
                : 'none',
              transition: 'all 0.5s ease'
            }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-5 py-2.5 text-xs font-medium tracking-wide rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {/* Sliding capsule background */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-capsule"
                      className="absolute inset-0 bg-white/8 border border-white/12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Glowing Contact CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openContactModal}
              id="nav-contact-cta"
              className="relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-white overflow-hidden group cursor-pointer transition-all duration-300 border border-white/12 bg-white/5 backdrop-blur-md hover:border-white/25 active:scale-95"
            >
              {/* Internal micro glows */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <span className="relative z-10 flex items-center gap-2">
                Discutons de votre projet
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            id="mobile-nav-toggle"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white cursor-pointer hover:border-white/20 transition-all active:scale-95 z-50"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-center items-center px-6 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Glow backgrounds in Mobile drawer */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="flex flex-col gap-5 text-center w-full max-w-xs relative z-10">
          <p className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-2">
            — NAVIGATION CHRONOLOGIQUE
          </p>

          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileOpen(false);
                }}
                className={`py-4 px-6 rounded-2xl flex items-center justify-between border transition-all text-sm font-medium ${
                  isActive
                    ? 'bg-white/8 border-white/15 text-white shadow-lg'
                    : 'bg-white/2 border-white/5 text-gray-400 hover:text-white'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: mobileOpen ? 1 : 0,
                  transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`
                }}
              >
                <span className="flex items-center gap-3.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
                  {item.label}
                </span>
                <span className="text-[10px] font-mono text-gray-600">0{index + 1}</span>
              </button>
            );
          })}

          <button
            onClick={() => {
              setMobileOpen(false);
              openContactModal();
            }}
            className="mt-6 w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-xs tracking-wider transition-all shadow-[0_15px_30px_rgba(147,51,234,0.25)] cursor-pointer"
          >
            Me Contacter
          </button>
        </div>
      </div>
    </>
  );
}
