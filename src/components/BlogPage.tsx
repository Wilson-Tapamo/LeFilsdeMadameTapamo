import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogPosts } from '../data';
import { BlogPost } from '../types';
import { BookOpen, Calendar, Clock, ArrowLeft, ArrowUpRight, Share2, ClipboardCheck } from 'lucide-react';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  // Available categories list
  const categories = ['all', 'Développement', 'IA', 'Entrepreneuriat', 'Productivité', 'Architecture Logicielle'];

  // Filter posts based on active category selection
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') return blogPosts;
    return blogPosts.filter((post) => post.category.toLowerCase() === activeCategory.toLowerCase());
  }, [activeCategory]);

  const handleShare = (post: BlogPost) => {
    // Mimic copy URL action
    const dummyUrl = `${window.location.origin}/blog/${post.id}`;
    navigator.clipboard.writeText(dummyUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="blog-page-wrapper" className="relative w-full py-24 px-4 min-h-screen">
      
      {/* Background lights inside Blog */}
      <div className="absolute top-[30%] left-[10%] w-96 h-96 bg-purple-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-[15%] w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            
            /* VIEW 1: THE ARTICLE LIST CHRONOLOGY */
            <motion.div
              key="post-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header Title */}
              <div className="mb-14 text-center">
                <p className="text-[10px] font-mono tracking-widest text-[#a855f7] uppercase mb-2">
                  — JOURNAL D'INGÉNIERIE & DE PENSÉES
                </p>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
                  Mon Blog.
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
                  Réflexions structurées sur le refactoring legacy, l'optimisation graphique web, l'asynchronisme de l'IA et l'entrepreneuriat SaaS.
                </p>
              </div>

              {/* Category selector capsules */}
              <div id="blog-categories-bar" className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-16 justify-start md:justify-center scrollbar-none border-b border-white/5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4.5 py-2 rounded-full text-xs font-semibold tracking-wide capitalize whitespace-nowrap cursor-pointer transition-all duration-300 ${
                      activeCategory === cat
                        ? 'bg-purple-500 text-white shadow-md'
                        : 'bg-zinc-950/20 border border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                    }`}
                  >
                    {cat === 'all' ? 'Toutes Catégories' : cat}
                  </button>
                ))}
              </div>

              {/* Main List Layout */}
              <div id="blog-posts-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="group bg-zinc-950/40 border border-white/8 rounded-3xl p-6 backdrop-blur-md cursor-pointer hover:border-white/15 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                  >
                    <div>
                      {/* Meta info header */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[9px] font-mono text-cyan-400 bg-cyan-400/8 px-2 py-0.5 rounded">
                          {post.category}
                        </span>
                        
                        <div className="flex items-center gap-2 text-gray-500 font-mono text-[9px] uppercase">
                          <Clock className="w-3 h-3 text-gray-500" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Cover content */}
                      <h3 className="text-white text-lg font-bold leading-snug mb-3 group-hover:text-cyan-300 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-xs leading-relaxed mb-6">
                        {post.subtitle}
                      </p>
                    </div>

                    {/* Footer Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-gray-500 font-mono text-[9px]">{post.date}</span>
                      </div>
                      
                      <span className="text-[10px] font-mono font-bold text-gray-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 flex items-center gap-1">
                        LIRE L'ÉCRIT
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>

                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20 bg-zinc-950/20 rounded-3xl border border-white/5">
                  <p className="text-gray-400 text-xs sm:text-sm">Aucun article n'a été publié sous cette thématique pour l'instant.</p>
                </div>
              )}

            </motion.div>
          ) : (
            
            /* VIEW 2: THE IMMERSIVE READING PANE */
            <motion.div
              key="post-reader"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              {/* Back button row */}
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/8 hover:border-white/15 text-xs text-gray-300 hover:text-white cursor-pointer transition-all mb-10"
              >
                <ArrowLeft className="w-4.5 h-4.5" />
                <span>Retour au journal</span>
              </button>

              {/* Core Header Card */}
              <div className="border-b border-white/8 pb-8 mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-mono text-cyan-400 bg-cyan-400/8 px-2.5 py-1 rounded">
                    {selectedPost.category}
                  </span>
                  <span className="text-gray-500 text-xs font-mono">•</span>
                  <span className="text-gray-500 text-[10px] font-mono">{selectedPost.date}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5" style={{ fontFamily: 'var(--font-display)' }}>
                  {selectedPost.title}
                </h1>
                
                <p className="text-gray-400 text-sm md:text-base italic leading-relaxed mb-6">
                  {selectedPost.subtitle}
                </p>

                {/* Author card & Share button */}
                <div className="flex justify-between items-center bg-zinc-950/40 p-4 border border-white/5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-black text-xs text-white">
                      WT
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold leading-none">{selectedPost.author}</p>
                      <p className="text-gray-500 text-[9px] font-mono mt-0.5 uppercase tracking-widest leading-none">Rédacteur Principal</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleShare(selectedPost)}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8 hover:border-white/12 text-[10px] font-mono text-gray-300 hover:text-white cursor-pointer transition-all"
                  >
                    {copiedLink ? (
                      <>
                        <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">LIEN COPIÉ !</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>PARTAGER</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Editorial typography body context */}
              <div className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed">
                {selectedPost.content.split('\n\n').map((para, pIdx) => {
                  // Custom rendering for headings/bolds to keep it beautiful without react-markdown bugs
                  if (para.startsWith('### ')) {
                    return (
                      <h3 key={pIdx} className="text-white text-base md:text-xl font-bold mt-8 mb-4">
                        {para.replace('### ', '')}
                      </h3>
                    );
                  }
                  
                  if (para.startsWith('- ')) {
                    return (
                      <ul key={pIdx} className="list-disc pl-5 my-4 flex flex-col gap-2">
                        {para.split('\n').map((li, lIdx) => (
                          <li key={lIdx} className="text-gray-300 text-xs sm:text-sm">
                            {li.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Handle simple code blocks representation
                  if (para.startsWith('```')) {
                    const cleanCode = para.substring(para.indexOf('\n') + 1, para.lastIndexOf('```')).trim();
                    return (
                      <pre key={pIdx} className="bg-black border border-white/6 p-5 rounded-2xl overflow-x-auto my-6 font-mono text-xs text-gray-300 leading-snug">
                        <code>{cleanCode}</code>
                      </pre>
                    );
                  }

                  return (
                    <p key={pIdx} className="mb-5 text-[13px] sm:text-[15px] font-normal leading-relaxed text-gray-300">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Reader navigation details */}
              <div className="mt-14 pt-8 border-t border-white/6 flex justify-between items-center">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-xs font-bold text-gray-400 hover:text-white transition-colors"
                >
                  ← Revenir aux articles
                </button>
                
                <div className="flex gap-2 items-center text-[10px] font-mono text-gray-500">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Fin de l'écrit</span>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
