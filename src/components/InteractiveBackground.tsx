import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  type: 'math' | 'physics' | 'quantum' | 'game' | 'anime';
  symbol?: string; // For math
  angle?: number; // For physics orbital/anime rotation
  orbitRadius?: number; // For physics orbital
  pulsePhase?: number; // For quantum waves
  pulseSpeed?: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 180, active: false });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Symbols for mathematical/physical representation
    const mathSymbols = ['∫', '∑', 'φ', 'π', '∞', 'λ', 'θ', '√', 'Δ', '∂'];
    const animeSymbols = ['★', '✦', '✧', '⚡', '❂'];

    // Category colors
    const colors = {
      math: 'rgba(168, 85, 247, 0.65)', // purple
      physics: 'rgba(59, 130, 246, 0.65)', // electric blue
      quantum: 'rgba(6, 182, 212, 0.75)', // cyan
      game: 'rgba(236, 72, 153, 0.65)', // pink/rose
      anime: 'rgba(249, 115, 22, 0.65)', // glowing orange
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(130, Math.floor((width * height) / 11000));
      const categories: ('math' | 'physics' | 'quantum' | 'game' | 'anime')[] = [
        'math',
        'physics',
        'quantum',
        'game',
        'anime',
      ];

      for (let i = 0; i < particleCount; i++) {
        const type = categories[i % categories.length];
        const x = Math.random() * width;
        const y = Math.random() * height;

        const particle: Particle = {
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          baseX: x,
          baseY: y,
          size: Math.random() * 2 + 1.5,
          color: colors[type],
          type,
        };

        // Specific properties based on theme
        if (type === 'math') {
          particle.symbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
          particle.size = Math.random() * 4 + 10; // larger for font rendering
        } else if (type === 'physics') {
          particle.angle = Math.random() * Math.PI * 2;
          particle.orbitRadius = Math.random() * 15 + 8;
        } else if (type === 'quantum') {
          particle.pulsePhase = Math.random() * Math.PI * 2;
          particle.pulseSpeed = 0.02 + Math.random() * 0.03;
        } else if (type === 'anime') {
          particle.symbol = animeSymbols[Math.floor(Math.random() * animeSymbols.length)];
          particle.size = Math.random() * 4 + 9;
          particle.angle = Math.random() * Math.PI * 2;
        }

        particles.push(particle);
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY + scrollRef.current;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.active = false;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialize
    createParticles();
    scrollRef.current = window.scrollY;

    // Simulation loop
    const render = () => {
      try {
        ctx.clearRect(0, 0, width, height);

        // Radial base ambient lighting of the background canvas
        const mouse = mouseRef.current;
        const scrollY = scrollRef.current;

        // Draw mouse background spotlight
        if (mouse.active) {
          const mouseXCanvas = mouse.x;
          const mouseYCanvas = mouse.y - scrollY;
          const spotlight = ctx.createRadialGradient(
            mouseXCanvas,
            mouseYCanvas,
            0,
            mouseXCanvas,
            mouseYCanvas,
            350
          );
          spotlight.addColorStop(0, 'rgba(34, 60, 110, 0.08)');
          spotlight.addColorStop(0.5, 'rgba(88, 34, 110, 0.04)');
          spotlight.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = spotlight;
          ctx.fillRect(0, 0, width, height);
        }

        // Draw static background gradients simulating glowing dust clouds
        // Top-right electric blue
        let gradientObj1 = ctx.createRadialGradient(width * 0.8, height * 0.2, 0, width * 0.8, height * 0.2, width * 0.6);
        gradientObj1.addColorStop(0, 'rgba(59, 130, 246, 0.03)');
        gradientObj1.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradientObj1;
        ctx.fillRect(0, 0, width, height);

        // Bottom-left purple/magenta
        let gradientObj2 = ctx.createRadialGradient(width * 0.1, height * 0.8, 0, width * 0.1, height * 0.8, width * 0.6);
        gradientObj2.addColorStop(0, 'rgba(168, 85, 247, 0.025)');
        gradientObj2.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradientObj2;
        ctx.fillRect(0, 0, width, height);

        // Update and draw particles
        particles.forEach((p) => {
          if (!p) return;
          // Apply vertical scroll parallax
          const displayY = p.y - scrollY * 0.22;

          // Mouse interaction
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          // Repel from mouse vector
          if (mouse.active && dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const targetVx = (dx / dist) * force * -2.5;
            const targetVy = (dy / dist) * force * -2.5;
            p.vx += (targetVx - p.vx) * 0.15;
            p.vy += (targetVy - p.vy) * 0.15;
          } else {
            // Attract back gently to virtual home coordinate (baseX, baseY)
            const homeDx = p.baseX - p.x;
            const homeDy = p.baseY - p.y;
            p.vx += homeDx * 0.001;
            p.vy += homeDy * 0.001;
          }

          // Apply friction/drag to maintain smooth, calm pace
          p.vx *= 0.94;
          p.vy *= 0.94;

          // Add soft ambient drift
          p.x += p.vx + (Math.sin(p.y * 0.005 + p.baseX) * 0.05);
          p.y += p.vy + (Math.cos(p.x * 0.005 + p.baseY) * 0.05);

          // Map boundary check: Wrap boundaries with soft margins
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + scrollY * 0.22 + 20;
          if (p.y > height + scrollY * 0.22 + 20) p.y = -20;

          // Render Particle according to its artistic category
          ctx.save();
          ctx.fillStyle = p.color || 'rgba(255, 255, 255, 0.65)';

          if (p.type === 'math' && p.symbol) {
            // Render formulas/letters
            ctx.font = `italic ${p.size}px "JetBrains Mono", monospace`;
            ctx.fillText(p.symbol, p.x, displayY);
          } else if (p.type === 'physics') {
            // Render atomic nuclei and orbiting electrons
            ctx.beginPath();
            ctx.arc(p.x, displayY, p.size, 0, Math.PI * 2);
            ctx.fill();

            // Render electron path orbital
            if (p.angle !== undefined && p.orbitRadius !== undefined) {
              p.angle += 0.035; // orbit speed
              const electronX = p.x + Math.cos(p.angle) * p.orbitRadius;
              const electronY = displayY + Math.sin(p.angle) * p.orbitRadius * 0.5; // perspective ellipse

              // Orbit line
              ctx.beginPath();
              ctx.ellipse(p.x, displayY, p.orbitRadius, p.orbitRadius * 0.5, 0, 0, Math.PI * 2);
              ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
              ctx.lineWidth = 0.5;
              ctx.stroke();

              // Electron particle
              ctx.beginPath();
              ctx.arc(electronX, electronY, 2, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(6, 182, 212, 0.8)';
              ctx.fill();
            }
          } else if (p.type === 'quantum') {
            // Quantum wave function representation
            if (p.pulsePhase !== undefined && p.pulseSpeed !== undefined) {
              p.pulsePhase += p.pulseSpeed;
              const quantumRadius = p.size + Math.sin(p.pulsePhase) * 6;
              const opacity = 0.15 + Math.sin(p.pulsePhase) * 0.1;

              // Main center
              ctx.beginPath();
              ctx.arc(p.x, displayY, p.size, 0, Math.PI * 2);
              ctx.fill();

              // Superposition blur ring
              ctx.beginPath();
              ctx.arc(p.x, displayY, quantumRadius, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          } else if (p.type === 'game') {
            // Render gaming pixels and polygons
            ctx.beginPath();
            // Draw a small diagnostic rectangle/pixel block
            ctx.rect(p.x - p.size, displayY - p.size, p.size * 2, p.size * 2);
            ctx.fill();

            // Occasionally link adjacent pixels into a retro wireframe polygonal node
          } else if (p.type === 'anime' && p.symbol) {
            // Render rotating energy star symbols
            if (p.angle !== undefined) {
              p.angle += 0.008;
              ctx.translate(p.x, displayY);
              ctx.rotate(p.angle);
              ctx.font = `${p.size}px "Inter", sans-serif`;
              ctx.fillText(p.symbol, -p.size / 2, p.size / 2);
            }
          }
          ctx.restore();
        });

        // Draw elegant constellation lines between nodes of aligned frequencies
        ctx.lineWidth = 0.65;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];

            if (!p1 || !p2) continue;

            // Distance bounds
            const threshold = 100;
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.hypot(dx, dy);

            if (dist < threshold) {
              const displayY1 = p1.y - scrollY * 0.22;
              const displayY2 = p2.y - scrollY * 0.22;

              // Connection line opacity based on distance
              const alpha = ((threshold - dist) / threshold) * 0.14;
              const colorStr1 = p1.color || 'rgba(255, 255, 255, 0.65)';
              const colorStr2 = p2.color || 'rgba(255, 255, 255, 0.65)';

              ctx.strokeStyle = p1.type === p2.type 
                ? colorStr1.replace('0.65', `${alpha}`).replace('0.75', `${alpha}`)
                : `rgba(255, 255, 255, ${alpha * 0.5})`;

              ctx.beginPath();
              ctx.moveTo(p1.x, displayY1);
              ctx.lineTo(p2.x, displayY2);
              ctx.stroke();
            }
          }
        }
      } catch (e) {
        console.warn("Recovered from background canvas frame rendering error:", e);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="cosmic-constellation-background"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
