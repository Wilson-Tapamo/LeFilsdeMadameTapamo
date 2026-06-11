import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [phase, setPhase] = useState<'enter' | 'show' | 'exit'>('enter');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('show'), 800);
    const showTimer = setTimeout(() => setPhase('exit'), 3200);
    const finishTimer = setTimeout(onFinish, 4000);
    return () => { clearTimeout(enterTimer); clearTimeout(showTimer); clearTimeout(finishTimer); };
  }, [onFinish]);

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let animId: number;

    const dots: { x: number; y: number; dx: number; dy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      dots.push({
        x: Math.random() * w,
        y: Math.random() * h,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      dots.forEach(d => {
        d.x += d.dx;
        d.y += d.dy;
        if (d.x < 0) d.x = w;
        if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h;
        if (d.y > h) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${d.alpha})`;
        ctx.fill();
      });
      // connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - dist / 120) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(render);
    };
    render();

    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Canvas background */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Central glow */}
          <div className="absolute w-[60vw] h-[50vh] bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Animated geometric rings */}
          <motion.div
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 0.15 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-96 h-96 rounded-full border border-purple-500/20 pointer-events-none"
          />
          <motion.div
            initial={{ scale: 0, rotate: 90, opacity: 0 }}
            animate={{ scale: 1.2, rotate: 180, opacity: 0.1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute w-[28rem] h-[28rem] rounded-full border border-cyan-500/15 pointer-events-none"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 0.06 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="absolute w-[32rem] h-[32rem] rounded-full border border-blue-500/10 pointer-events-none"
          />

          {/* Rotating geometric shape */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08, rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute w-64 h-64 border border-purple-400/20 pointer-events-none"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Small label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[10px] font-mono tracking-[0.3em] text-purple-400 uppercase mb-6"
            >
              Portfolio v3.5
            </motion.span>

            {/* Animated letters */}
            <div className="flex items-center gap-1 md:gap-2 mb-4">
              {'WILSON'.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter inline-block"
                  style={{ fontFamily: 'var(--font-display), sans-serif', textShadow: '0 0 40px rgba(168,85,247,0.15)' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              {'TAPAMO'.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400"
                  style={{ fontFamily: 'var(--font-display), sans-serif', textShadow: '0 0 40px rgba(6,182,212,0.1)' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="text-xs md:text-sm text-gray-500 font-mono tracking-widest mt-8 uppercase"
            >
              Ingénieur Logiciel Senior
            </motion.p>

            {/* Loading bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mt-12 max-w-[200px]"
            />
          </div>

          {/* Bottom skip hint */}
          <motion.button
            onClick={onFinish}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-10 text-[10px] font-mono tracking-widest text-gray-600 hover:text-white transition-colors cursor-pointer z-10"
          >
            Passer l'intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
