import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { timelineEvents, passionsData } from '../data';
import { Camera, RefreshCw, Sparkles, BookOpen, Brain, Terminal, Binary, Atom } from 'lucide-react';
import profileImg from '../assets/wilson.png';

export default function AboutPage() {
  const [activePassion, setActivePassion] = useState<string | null>(null);
  
  // Photo uploader state to let Wilson load his portrait and apply the Studio Noir & Blanc filter
  const [profileImage, setProfileImage] = useState<string | null>(profileImg);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle local image loading
  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <section id="about-page-wrapper" className="relative w-full py-24 px-4 min-h-screen">
      
      {/* Glow Rings surrounding About page */}
      <div className="absolute top-1/4 right-[5%] w-96 h-96 bg-purple-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Editorial Title banner */}
        <div className="mb-20">
          <p className="text-[10px] font-mono tracking-widest text-[#a855f7] uppercase mb-2">
            — L'INGÉNIEUR EN COULISSES
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Moi & Mon Parcours.
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl">
            Découvrez l'esprit méthodique, le goût des sciences fondamentales et l'historique professionnel derrière l'écriture du code.
          </p>
        </div>

        {/* HERO SECTION MOI (Grande Photo & Identité Artistique) */}
        <div id="about-character-hero" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          
          {/* LEFT COLUMN: The Immense Grayscale Editorial Photo with live SVG Mask and Overlay filter */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative w-full aspect-[4/5] rounded-[2.5rem] bg-zinc-950 border overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-all duration-500 select-none group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.85)] ${
                isDragging ? 'border-cyan-400 bg-zinc-900 scale-98' : 'border-white/10 hover:border-white/20'
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                accept="image/*"
                className="hidden"
              />

              {profileImage ? (
                <>
                  {/* The uploaded portrait - heavily processed via CSS filters to fuse elegantly with dark layout */}
                  <img
                    src={profileImage}
                    alt="Wilson Tapamo Grayscale Portrait"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 grayscale contrast-150 brightness-95 group-hover:scale-105"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle at 50% 45%, black 65%, transparent 100%)',
                      maskImage: 'radial-gradient(circle at 50% 45%, black 65%, transparent 100%)'
                    }}
                  />
                  
                  {/* Subtle vignette/exposure lighting filter layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-70 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-end backdrop-blur-xs bg-black/40 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono text-cyan-400">FILTRE NOIR & BLANC APPLIQUÉ</span>
                    <RefreshCw className="w-3.5 h-3.5 text-gray-400 animate-spin-slow" />
                  </div>
                </>
              ) : (
                <div className="p-8 text-center flex flex-col items-center max-w-xs relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:border-purple-400/50 transition-all duration-300">
                    <Camera className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-white text-base font-bold mb-2">Charger votre Portrait</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    Glissez-déposez le fichier de Wilson (ou n'importe quelle photo) pour appliquer le **Filtre Studio Dark** à haut contraste.
                  </p>
                  <span className="inline-block bg-white/4 border border-white/8 px-4 py-2 rounded-full text-[9px] font-mono text-gray-300 uppercase tracking-widest hover:bg-white/8">
                    Sélectionner l'image
                  </span>
                </div>
              )}

              {/* Grid background decor for blueprint aesthetic */}
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />
            </div>
            
            <p className="text-gray-500 text-[10px] font-mono mt-4 tracking-widest text-center">
              ▲ DÉPOSEZ LA SÉANCE PHOTO CI-DESSUS (FORMAT VERTICAL PRÉFÉRÉ)
            </p>
          </div>

          {/* RIGHT COLUMN: Senior Engineer Identity Statements with heavy typography pair */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mb-2 block">— IDENTIFICATION GLOBALE</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                WILSON
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
                  TAPAMO
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-3 font-mono text-xs sm:text-sm text-gray-300 border-l-2 border-purple-500/40 pl-6 py-2">
              <div className="flex items-center gap-3">
                <span className="text-gray-500">ROLES: </span>
                <span className="text-white font-semibold">Software Engineer / Builder / Problem Solver</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500">EXPERT: </span>
                <span className="text-cyan-400 font-bold">Full-Stack Tech & Algorithmes d'IA</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500">EXP: </span>
                <span className="text-white">9 Ans d'Activité Réelle</span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Mélangeant la méticulosité d’un passionné de physique fondamentale avec la créativité acquise sur les architectures de jeux vidéo, j’écris du code robuste conçu pour résister au temps. Pour moi, la programmation n'est pas qu'un outil de productivité, c'est l'art d'imposer de l'ordre mathématique dans un monde chaotique.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <div className="bg-zinc-950 px-4 py-2 border border-white/6 rounded-2xl flex items-center gap-2">
                <Brain className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-mono text-[10px] text-gray-300 tracking-wide">MIGRATEUR DE LEGACY</span>
              </div>
              <div className="bg-zinc-950 px-4 py-2 border border-white/6 rounded-2xl flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono text-[10px] text-gray-300 tracking-wide">OCR & VISION</span>
              </div>
              <div className="bg-zinc-950 px-4 py-2 border border-white/6 rounded-2xl flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono text-[10px] text-gray-300 tracking-wide">PASSEUR SCIENTIFIQUE</span>
              </div>
            </div>
          </div>

        </div>

        {/* TIMELINE IMMERSIVE SECTION */}
        <div className="mb-32">
          <p className="text-[10px] font-mono text-gray-500 tracking-widest text-center uppercase mb-16">
            —— LE FIL CHRONOLOGIQUE DE L'EXPÉRIENCE ——
          </p>

          <div id="immersive-timeline-spine" className="relative border-l border-white/10 ml-4 md:ml-32 pl-8 md:pl-12 flex flex-col gap-14">
            
            {timelineEvents.map((evt, index) => (
              <motion.div
                key={evt.year}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Year tag hanging leftmost on the spine */}
                <div className="absolute -left-[calc(2rem+1px)] md:-left-[calc(8rem+1px)] top-0 flex items-center justify-end w-20 md:w-28 pr-6 md:pr-10 text-right">
                  <span className="text-xl md:text-2xl font-black font-mono tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    {evt.year}
                  </span>
                </div>

                {/* Bullet point on spine */}
                <div className="absolute -left-[calc(2.25rem+4px)] top-2.5 w-4.5 h-4.5 rounded-full border border-white/12 bg-black flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-white group-hover:bg-cyan-400" />
                </div>

                {/* Timeline Card */}
                <div className="bg-zinc-950/40 p-5 md:p-6 border border-white/8 rounded-2xl backdrop-blur-md group-hover:border-white/15 transition-colors">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                    <div>
                      <h3 className="text-white text-base md:text-lg font-bold group-hover:text-cyan-300 transition-colors">
                        {evt.title}
                      </h3>
                      <span className="text-[10px] font-mono text-gray-500 bg-white/2 border border-white/5 px-2.5 py-0.5 rounded-md mt-1 inline-block">
                        {evt.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 font-normal">
                    {evt.description}
                  </p>

                  {/* Bullet details */}
                  {evt.details && evt.details.length > 0 && (
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/5">
                      {evt.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-[11px] text-gray-300">
                          <Binary className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                          <span className="leading-normal">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* PASSIONS DECK SECTION */}
        <div>
          <div className="mb-14 text-center">
            <p className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-2">
              — CE QUI OCCUPE MON PROCESSEUR QUAND JE NE CODE PAS
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Centres d'intérêt.
            </h2>
          </div>

          <div id="passions-deck-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passionsData.map((passion) => {
              const isSelected = activePassion === passion.id;

              return (
                <motion.div
                  key={passion.id}
                  onClick={() => setActivePassion(isSelected ? null : passion.id)}
                  whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.18)' }}
                  className={`bg-zinc-950/45 p-6 rounded-2xl border cursor-pointer select-none relative overflow-hidden transition-all duration-300 flex flex-col justify-between h-72 ${
                    isSelected ? 'border-cyan-400 shadow-[0_15px_30px_rgba(6,182,212,0.12)]' : 'border-white/8'
                  }`}
                >
                  {/* Subtle water-marked floating symbol in back of card */}
                  <div className="absolute right-4 bottom-4 text-6xl font-black text-white/2 pointer-events-none select-none select-all-disabled">
                    {passion.symbol.slice(0, 3)}
                  </div>

                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md font-bold">
                        {passion.symbol}
                      </span>
                      <Sparkles className={`w-4 h-4 transition-transform duration-500 ${
                        isSelected ? 'rotate-180 text-cyan-400' : 'text-gray-600 scale-90'
                      }`} />
                    </div>

                    <h3 className="text-white text-lg font-bold mb-3">
                      {passion.title}
                    </h3>
                    
                    <p className="text-cyan-300/80 text-xs italic font-medium leading-normal mb-4">
                      {passion.quote}
                    </p>
                  </div>

                  {/* Collapsed Details Drawer */}
                  <div className="flex-1 flex flex-col justify-end text-left">
                    <AnimatePresence mode="wait">
                      {isSelected ? (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-gray-300 text-[11px] leading-relaxed select-all mt-2"
                        >
                          {passion.details}
                        </motion.p>
                      ) : (
                        <span className="text-gray-500 text-[10px] uppercase font-mono tracking-wider group-hover:text-white transition-colors flex items-center gap-1">
                          LIRE LA DÉDUCTION ...
                        </span>
                      )}
                    </AnimatePresence>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
