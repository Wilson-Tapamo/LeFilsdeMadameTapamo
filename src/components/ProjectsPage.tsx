import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';
import { Search, ExternalLink, X, ArrowUpRight, Cpu, Target, Award, ListFilter } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Mouse tilt tracking state for 3D card effect
  const [tiltStyle, setTiltStyle] = useState<{ [key: string]: string }>({});

  // Collect all available unique categories dynamically
  const categories = useMemo(() => {
    const list = new Set<string>();
    projectsData.forEach(p => {
      // Extract main category tags (e.g. "SaaS / SIG" -> ["SaaS", "SIG"])
      p.category.split('/').forEach(cat => list.add(cat.trim()));
    });
    return ['all', ...Array.from(list)];
  }, []);

  // Filter projects by both search query and current active category
  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' ||
        p.category.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Separate into featured and alternative lists
  const { featuredList, otherList } = useMemo(() => {
    const featured = filteredProjects.filter((p) => p.type === 'featured');
    const other = filteredProjects.filter((p) => p.type === 'other');
    return { featuredList: featured, otherList: other };
  }, [filteredProjects]);

  // Handle 3D Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left; // x coordinate inside the element
    const y = e.clientY - box.top; // y coordinate inside the element

    // Calculate normalized coordinate from -0.5 to 0.5
    const xc = box.width / 2;
    const yc = box.height / 2;
    const dx = (x - xc) / xc; // scale to -1 to 1
    const dy = (y - yc) / yc;

    // Apply tilt limit degrees (e.g. max 12 deg tilt)
    const tiltX = -dy * 10;
    const tiltY = dx * 10;

    setTiltStyle((prev) => ({
      ...prev,
      [id]: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
    }));
  };

  const handleMouseLeave = (id: string) => {
    setTiltStyle((prev) => ({
      ...prev,
      [id]: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    }));
  };

  return (
    <section id="projects-page-wrapper" className="relative w-full py-24 px-4 min-h-screen">
      
      {/* Decorative Aurora lights inside Projects area */}
      <div className="absolute top-[10%] right-[10%] w-[50vw] h-[30vh] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[40vw] h-[30vh] bg-teal-500/5 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Title Header */}
        <div className="mb-14 text-center">
          <p className="text-[10px] font-mono tracking-widest text-[#a855f7] uppercase mb-2">
            — SHOWCASE DE PRODUCTION EXÉCUTIVE
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Projets Réalisés.
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Une sélection rigoureuse de solutions logicielles livrées en conditions réelles. Des systèmes fiables qui répondent à de vraies problématiques d’affaires.
          </p>
        </div>

        {/* Search, Filter Tools and Category Pill bar */}
        <div id="projects-filter-toolbar" className="flex flex-col md:flex-row gap-4 items-center justify-between mb-16 bg-zinc-950/60 p-4 rounded-3xl border border-white/6 backdrop-blur-md">
          
          {/* Instant Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une techno, un projet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-white/8 rounded-2xl py-3 pl-11 pr-4 text-xs font-medium text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-white text-gray-500 text-xs"
              >
                Vider
              </button>
            )}
          </div>

          {/* Categories Horizontal scrolling container */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <ListFilter className="w-3.5 h-3.5 text-gray-500 hidden md:inline ml-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide capitalize whitespace-nowrap cursor-pointer transition-all duration-300 ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-purple-500 text-white shadow-[0_4px_12px_rgba(168,85,247,0.3)]'
                    : 'bg-zinc-900/50 border border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                {cat === 'all' ? 'Toutes Réalisations' : cat}
              </button>
            ))}
          </div>

        </div>

        {/* FEATURED PROJECTS SPLIT (Grande grille de cartes premium) */}
        {featuredList.length > 0 && (
          <div className="mb-20">
            <p className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-8">
              — LES PROJETS VEDETTES ({featuredList.length})
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredList.map((p, index) => (
                <div
                  key={p.id}
                  id={`project-card-${p.id}`}
                  onMouseMove={(e) => handleMouseMove(e, p.id)}
                  onMouseLeave={() => handleMouseLeave(p.id)}
                  onClick={() => setSelectedProject(p)}
                  onMouseEnter={() => setHoveredProjectId(p.id)}
                  className="bg-zinc-950/40 border border-white/8 backdrop-blur-md rounded-3xl p-6 md:p-8 cursor-pointer relative overflow-hidden transition-all duration-150 group"
                  style={{
                    transform: tiltStyle[p.id] || 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)',
                    boxShadow: hoveredProjectId === p.id 
                      ? '0 20px 40px -10px rgba(168,85,247,0.1), inset 0 1px 1px rgba(255,255,255,0.15)' 
                      : 'inset 0 1px 1px rgba(255,255,255,0.05)',
                  }}
                >
                  {/* Subtle energy particle simulation backing on hovering */}
                  {hoveredProjectId === p.id && (
                    <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 to-transparent pointer-events-none transition-opacity duration-300" />
                  )}

                  {/* Header visual row */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                        {p.category}
                      </span>
                      <h3 className="text-white text-xl md:text-2xl font-black mt-1 group-hover:text-cyan-300 transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/15 group-hover:border-cyan-400/50 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Subtitle / core description */}
                  <div className="mb-6">
                    <p className="text-gray-200 text-xs md:text-sm font-semibold mb-2">
                      {p.subtitle}
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="bg-white/4 border border-white/5 text-gray-300 text-[10px] font-mono px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Metrics footer preview */}
                  {p.metrics && p.metrics.length > 0 && (
                    <div className="bg-black/30 p-3.5 border border-white/4 rounded-2xl flex items-center justify-between text-[11px]">
                      <span className="text-gray-500 font-mono text-[9px] uppercase tracking-wider">PREUVE D’IMPACT</span>
                      <span className="text-emerald-400 font-bold tracking-wide">
                        {p.metrics[0]}
                      </span>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        )}

        {/* OTHER REALIZATIONS LIST (Une liste compressée compacte et chic) */}
        {otherList.length > 0 && (
          <div>
            <p className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-6">
              — AUTRES RÉALISATIONS ({otherList.length})
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherList.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  onMouseEnter={() => setHoveredProjectId(p.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className="bg-zinc-950/20 hover:bg-zinc-950/50 border border-white/5 hover:border-white/15 rounded-2xl p-5 cursor-pointer transition-all duration-300 relative group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-mono text-gray-500 uppercase">
                      {p.category}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-white text-base font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {p.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    {p.subtitle || p.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {p.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="bg-white/2 text-gray-400 text-[9px] font-mono px-1.5 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                    {p.technologies.length > 3 && (
                      <span className="text-gray-600 font-mono text-[9px] px-1.5 py-0.5">
                        +{p.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty status */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-zinc-950/20 rounded-3xl border border-white/5">
            <p className="text-gray-400 font-medium text-sm">
              Aucun projet ne répond exactement au filtre recherché.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-xs font-semibold text-white tracking-wide uppercase cursor-pointer"
            >
              Réinitialiser les critères
            </button>
          </div>
        )}

      </div>

      {/* DETAILED PROJECT DRAWER MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl z-50 flex justify-center items-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              id="projects-modal-container"
              className="w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-white/12 rounded-3xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
            >
              {/* Header block with title, category and close button */}
              <div className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-white/8 bg-zinc-900/10">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#a855f7] uppercase font-bold">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-white mt-0.5">
                    {selectedProject.title}
                  </h2>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/8 text-gray-400 hover:text-white hover:border-white/15 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Scrollable body content divided into Columns */}
              <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Main description left block */}
                <div className="md:col-span-2 flex flex-col gap-6">
                  <div>
                    <h4 className="text-white text-[10px] font-mono tracking-widest uppercase mb-2 text-gray-500">— LE PROJET DANS LE DÉTAIL</h4>
                    <p className="text-white text-sm md:text-base font-semibold leading-relaxed mb-3">
                      {selectedProject.subtitle}
                    </p>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-normal">
                      {selectedProject.fullDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Role inside project */}
                  {selectedProject.role && (
                    <div>
                      <h4 className="text-white text-[10px] font-mono tracking-widest uppercase mb-2 text-gray-500">— MON IMPLICATON EXÉCUTIVE</h4>
                      <div className="bg-white/2 p-4 rounded-2xl border border-white/4 flex items-center gap-3">
                        <Cpu className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-200 text-xs font-semibold">
                          {selectedProject.role}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Web reference URL link */}
                  {selectedProject.demoUrl && (
                    <div className="pt-2">
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_10px_20px_rgba(168,85,247,0.25)]"
                      >
                        Consulter l'application en ligne
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Right block: Specs metadata and tech stack */}
                <div className="flex flex-col gap-6">
                  {/* Technology labels */}
                  <div>
                    <h4 className="text-white text-[10px] font-mono tracking-widest uppercase mb-2.5 text-gray-500">— TECHNOLOGIES EMPLOYÉES</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((t) => (
                        <span
                          key={t}
                          className="bg-zinc-900 border border-white/6 text-gray-300 text-[10px] font-mono px-2.5 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Metrics and statistics */}
                  <div>
                    <h4 className="text-white text-[10px] font-mono tracking-widest uppercase mb-2.5 text-gray-500">— MÉTRIQUES ET SÉCURITÉ</h4>
                    {selectedProject.metrics && selectedProject.metrics.length > 0 ? (
                      <div className="flex flex-col gap-2">
                        {selectedProject.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-emerald-500/5 p-3 border border-emerald-500/12 rounded-xl flex items-start gap-2.5"
                          >
                            <Target className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-emerald-400 text-[11px] font-medium leading-tight">
                              {m}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-indigo-500/5 p-3.5 border border-indigo-500/12 rounded-xl flex items-start gap-2">
                        <Award className="w-4.5 h-4.5 text-indigo-400 mt-0.5" />
                        <span className="text-indigo-300 text-[11px] font-medium leading-tight">
                          Garantie de livraison conforme aux critères de robustesse.
                        </span>
                      </div>
                    )}
                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
