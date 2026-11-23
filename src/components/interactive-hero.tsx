'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Particle Background Component ---
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let w: number, h: number;
    const mouse = { x: -2000, y: -2000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 0.5; // Slightly larger particles
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.shadowBlur = 8; // More glow
        ctx.shadowColor = 'white';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // Whiter particles
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset for lines
      }
    }

    const init = () => {
      if (typeof window === 'undefined') return;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      particles = [];
      const density = (w * h) / 9000;
      const count = Math.min(Math.floor(density), 150);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      const connectionDist = 120;
      const mouseDist = 200;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        p.draw();

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            ctx.beginPath();
            // Thicker and whiter lines (alpha increased from 0.15 to 0.4)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.4 * (1 - dist / connectionDist)})`;
            ctx.lineWidth = 1.0; // Increased from 0.5
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect particles to mouse
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < mouseDist) {
          ctx.beginPath();
          // Thicker and whiter lines to mouse (alpha increased from 0.3 to 0.7)
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.7 * (1 - mdist / mouseDist)})`;
          ctx.lineWidth = 1.5; // Increased from 0.8
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
}

export function InteractiveHero() {
  const [isPaused, setIsPaused] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isPaused) return;

      const { innerWidth, innerHeight } = window;
      // Normalizing to -1 to 1 range
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      
      setCoords({ x, y });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isPaused || !e.touches[0]) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.touches[0].clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.touches[0].clientY - innerHeight / 2) / (innerHeight / 2);
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isPaused]);

  // Rigorous Physics-based movement calculations
  const tiltX = coords.y * 40; // High amplitude tilt for "stress"
  const tiltY = coords.x * -40;
  const translateX = coords.x * 80; // High amplitude translation
  const translateY = coords.y * 80;
  const skewX = coords.x * 12; // Skewing for "paper stress" feel
  const skewY = coords.y * 12;
  const scale = 1 + Math.abs(coords.x * 0.1) + Math.abs(coords.y * 0.1); // Dynamic scaling for "pressure"

  const dist = Math.sqrt(Math.pow(coords.x - (-1), 2) + Math.pow(coords.y - 1, 2));
  const maxDist = 2.82;
  const kineticStrokeWidth = Math.max(0.5, 0.5 + (maxDist - dist) * 1.5);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center cursor-default select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Particle Network Canvas Background */}
      <ParticleBackground />

      {/* Minimalist Header Overlay */}
      <div className="absolute top-8 right-8 z-50 text-right">
        <h2 className="font-headline text-xs md:text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">
          Portfolio | 2026
        </h2>
      </div>

      {/* Decorative Background Text - Animated Diagonally */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden z-10">
        <h1 className="font-headline text-[20vw] font-black leading-none text-white select-none whitespace-nowrap animate-diagonal-scroll">
          MUSHANGI P
        </h1>
      </div>

      {/* Content Grid */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center h-full">
        {/* Left Side (Empty or for future text) */}
        <div className="hidden md:block"></div>

        {/* Right Side: Interactive 3D Portrait - Rigorous Movement */}
        <div className="flex justify-center md:justify-end">
          <div 
            className="relative w-full max-w-[280px] md:max-w-[420px] transition-transform duration-150 ease-out will-change-transform"
            style={{
              transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateX(${translateX}px) translateY(${translateY}px) skew(${skewX}deg, ${skewY}deg) scale(${scale})`,
              filter: `drop-shadow(${coords.x * -30}px ${coords.y * 30}px 40px rgba(0,0,0,0.6))`
            }}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/hero-image.png"
                alt="Mushangi Patrick Portrait"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom UI Elements */}
      <div className="absolute bottom-12 left-8 z-50">
        <div className="flex flex-col gap-2">
          <span className="font-headline text-xl font-bold text-white uppercase tracking-widest">Patrick Mushangi</span>
          
          <div className="relative">
            {/* Back Layer (Solid Slate) */}
            <div className="flex flex-col leading-none text-slate-300">
              <span className="font-body text-3xl md:text-7xl font-bold uppercase tracking-wider">FULL-STACK DEVELOPER &</span>
              <span className="font-body text-3xl md:text-7xl font-bold uppercase tracking-wider mt-1">WEBAPP DESIGNER</span>
            </div>
            
            {/* Front Layer (Kinetic Outline - Lime Green) */}
            <div 
              className="absolute inset-0 flex flex-col leading-none select-none pointer-events-none transition-[webkit-text-stroke-width] duration-75"
              style={{ 
                transform: 'translate(3px, -3px)',
                WebkitTextStroke: `${kineticStrokeWidth * 2}px #a3e635`,
                color: 'transparent'
              }}
            >
              <span className="font-body text-3xl md:text-7xl font-bold uppercase tracking-wider">FULL-STACK DEVELOPER &</span>
              <span className="font-body text-3xl md:text-7xl font-bold uppercase tracking-wider mt-1">WEBAPP DESIGNER</span>
            </div>

            {/* Third Layer (Slightly offset white stroke for extra depth/glitch feel) */}
            <div 
              className="absolute inset-0 flex flex-col leading-none select-none pointer-events-none opacity-30 transition-[webkit-text-stroke-width] duration-75"
              style={{ 
                transform: 'translate(1.5px, -1.5px)',
                WebkitTextStroke: `${kineticStrokeWidth}px white`,
                color: 'transparent'
              }}
            >
              <span className="font-body text-3xl md:text-7xl font-bold uppercase tracking-wider">FULL-STACK DEVELOPER &</span>
              <span className="font-body text-3xl md:text-7xl font-bold uppercase tracking-wider mt-1">WEBAPP DESIGNER</span>
            </div>
          </div>
        </div>
      </div>

      {/* Motion Toggle Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsPaused(!isPaused)}
          className="rounded-full bg-slate-800/50 backdrop-blur-md border-white/10 text-white hover:bg-[#a3e635] hover:text-black transition-all group"
          title={isPaused ? "Resume Motion" : "Pause Motion"}
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          <span className="sr-only">{isPaused ? "Resume Motion" : "Pause Motion"}</span>
        </Button>
      </div>

      {/* Gradient Vignette for Depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-30" />
    </section>
  );
}
