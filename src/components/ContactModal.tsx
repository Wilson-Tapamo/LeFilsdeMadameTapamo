import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calculator, Sparkles, Server, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'saas',
    description: '',
  });

  // Quote Configurator sliders state
  const [complexity, setComplexity] = useState(3); // 1 to 5
  const [userRoles, setUserRoles] = useState(2); // 1 to 10
  const [aiIntegration, setAiIntegration] = useState(false);

  // Quote calculation math
  const quotationCalculated = useMemo(() => {
    let basePrice = 3000;
    let baseWeeks = 3;

    // Project Type weights
    if (formData.projectType === 'erp') {
      basePrice = 4500;
      baseWeeks = 5;
    } else if (formData.projectType === 'ai') {
      basePrice = 5000;
      baseWeeks = 6;
    } else if (formData.projectType === 'mobile') {
      basePrice = 4000;
      baseWeeks = 4;
    } else if (formData.projectType === 'interactive') {
      basePrice = 3500;
      baseWeeks = 3;
    }

    // Complexity multipliers (Represented as dynamic systemic entropy factor)
    const complexityPrice = (complexity - 1) * 1200;
    const complexityWeeks = (complexity - 1) * 1;

    // User Roles multipliers
    const rolesPrice = (userRoles - 1) * 450;

    // AI booster
    const aiPrice = aiIntegration ? 2200 : 0;
    const aiWeeks = aiIntegration ? 2 : 0;

    const totalBudget = basePrice + complexityPrice + rolesPrice + aiPrice;
    const totalWeeks = baseWeeks + complexityWeeks + aiWeeks;

    return {
      budget: totalBudget,
      weeks: totalWeeks,
      entropy: (complexity * 19.3).toFixed(1) + '%',
    };
  }, [formData.projectType, complexity, userRoles, aiIntegration]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);

    // Simulate cryptographic packet sending
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1800);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', projectType: 'saas', description: '' });
    setSuccess(false);
    setComplexity(3);
    setUserRoles(2);
    setAiIntegration(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex justify-center items-center p-4 overflow-y-auto"
        >
          {/* Main Container */}
          <motion.div
            initial={{ scale: 0.96, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 20 }}
            className="w-full max-w-4xl bg-zinc-950 border border-white/12 rounded-3xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col md:flex-row relative max-h-[90vh] md:max-h-none"
          >
            {/* Close Button hanging top-right */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 border border-white/8 text-gray-400 hover:text-white hover:border-white/15 flex items-center justify-center transition-all cursor-pointer z-20"
            >
              <X className="w-4 h-4" />
            </button>

            {/* LEFT COLUMN: THE REAL-TIME MATHEMATICAL PROJECT ESTIMATOR */}
            <div className="w-full md:w-1/2 p-6 md:p-8 bg-zinc-900/40 border-r border-white/6 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="w-4.5 h-4.5 text-cyan-400" />
                  <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
                    Simulateur de Devis & Vélocité
                  </span>
                </div>

                <h3 className="text-white text-lg md:text-xl font-bold mb-6">
                  Spécifiez vos variables.
                </h3>

                {/* Complexity Slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center text-xs text-gray-300 mb-2">
                    <span className="font-medium text-gray-400">Échelle de complexité :</span>
                    <span className="font-mono text-cyan-400 font-bold">{complexity} / 5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={complexity}
                    onChange={(e) => setComplexity(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 mt-1">
                    <span>Modulaire</span>
                    <span>Hautement critique (SLA)</span>
                  </div>
                </div>

                {/* User Roles Sliders */}
                <div className="mb-6">
                  <div className="flex justify-between items-center text-xs text-gray-300 mb-2">
                    <span className="font-medium text-gray-400">Nombre de profils d'utilisateurs :</span>
                    <span className="font-mono text-[#a855f7] font-bold">{userRoles} rôles</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={userRoles}
                    onChange={(e) => setUserRoles(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/5 rounded-lg appearance-none cursor-pointer accent-[#a855f7]"
                  />
                  <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 mt-1">
                    <span>Mono-User</span>
                    <span>Droits rattachés complexe</span>
                  </div>
                </div>

                {/* Toggle AI capability */}
                <div className="mb-6 bg-black/45 p-4 border border-white/4 rounded-2xl flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-white font-semibold">Brique d'IA autonome ?</span>
                    <span className="text-[10px] text-gray-500 font-mono mt-0.5">Vision OCR, agent WhatsApp, parsing Gemini</span>
                  </div>
                  <button
                    onClick={() => setAiIntegration(!aiIntegration)}
                    className={`w-11 h-6 rounded-full p-1 transition-all flex items-center ${
                      aiIntegration ? 'bg-cyan-400 justify-end' : 'bg-white/10 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full bg-black shadow-md" />
                  </button>
                </div>
              </div>

              {/* Dynamic Bill Box Output */}
              <div className="bg-black/85 p-5 border border-cyan-400/15 rounded-2xl text-[11px] font-mono mt-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 pointer-events-none opacity-10">
                  <Sparkles className="w-12 h-12 text-cyan-400 animate-pulse" />
                </div>

                <div className="flex flex-col gap-2 relative z-10">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-gray-500 uppercase text-[9px]">Calculateur Linéaire</span>
                    <span className="text-cyan-400 font-bold uppercase text-[9px]">ESTIMATION</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className="text-gray-400">Budget estimé :</span>
                    <span className="text-white font-black text-sm">~ {quotationCalculated.budget} €</span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Durée d'exécution :</span>
                    <span className="text-white font-bold">{quotationCalculated.weeks} semaines</span>
                  </div>

                  <div className="flex justify-between items-center border-t border-white/5 pt-2 text-[9px]">
                    <span className="text-gray-500 uppercase">Indice de friction système :</span>
                    <span className="text-rose-400 font-black">{quotationCalculated.entropy}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: CONTACT FORM INPUTS */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              
              <AnimatePresence mode="wait">
                {!success ? (
                  /* THE FORM */
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col h-full justify-between gap-6"
                  >
                    <div>
                      <h3 className="text-white text-lg md:text-xl font-bold mb-6">
                        Formulons l'équation.
                      </h3>

                      <div className="flex flex-col gap-4">
                        {/* Name Input */}
                        <div>
                          <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                            Votre nom ou entité *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Ex : Digital Solution"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-zinc-900 border border-white/8 rounded-xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#a855f7]/65 transition-all"
                          />
                        </div>

                        {/* Email Input */}
                        <div>
                          <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                            Adresse électronique *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="Ex : contact@digitalsolution.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-zinc-900 border border-white/8 rounded-xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#a855f7]/65 transition-all"
                          />
                        </div>

                        {/* Project Type Selected index */}
                        <div>
                          <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                            Typologie d'architecture
                          </label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full bg-zinc-900 border border-white/8 rounded-xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#a855f7]/65 transition-all cursor-pointer"
                          >
                            <option value="saas">Application SaaS (Web / Dashboard)</option>
                            <option value="erp">Logiciel métier / Trésorerie ERP</option>
                            <option value="ai">Brique d'IA autonome (Vision OCR, WhatsApp)</option>
                            <option value="mobile">Application Mobile hybride</option>
                            <option value="interactive">Expérience web interactive (Rendering)</option>
                          </select>
                        </div>

                        {/* Description field */}
                        <div>
                          <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                            Cahier des charges succinct
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Expliquez brièvement votre problématique métier d'affaires."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full bg-zinc-900 border border-white/8 rounded-xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#a855f7]/65 transition-all resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 border-t border-white/5">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-50"
                      >
                        {loading ? (
                          <>
                            <Server className="w-4 h-4 animate-spin" />
                            <span>ENVOI DES DONNÉES EN COURS...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Acheminer le cahier des charges</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  /* SUCCESS BLAZING SCREEN */
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center h-full py-12"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                      <Check className="w-7 h-7" />
                    </div>

                    <h3 className="text-white text-xl md:text-2xl font-black mb-3">
                      Paquets acheminés !
                    </h3>
                    
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-8">
                      Merci pour votre sollicitation. Vos variables de devis estimées (**{quotationCalculated.budget} €** • **{quotationCalculated.weeks} semaines**) ont bien été envoyées. Wilson étudiera votre équation sous 24 heures.
                    </p>

                    <button
                      onClick={resetForm}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/8 hover:border-white/12 text-xs font-mono text-gray-300 hover:text-white transition-all cursor-pointer"
                    >
                      Nouvel essai calculateur
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
