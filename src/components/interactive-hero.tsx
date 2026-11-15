'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function InteractiveHero() {
  const [isPaused, setIsPaused] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isPaused) return;

      const { innerWidth, innerHeight } = window;
      // Calculate normalized coordinates (-1 to 1)
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

  // Max tilt angles
  const tiltX = coords.y * 15; // Rotate around X axis based on Y movement
  const tiltY = coords.x * -15; // Rotate around Y axis based on X movement
  const translateX = coords.x * 20;
  const translateY = coords.y * 20;

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#a3e635] flex items-center justify-center cursor-default select-none"
      style={{ perspective: '1000px' }}
    >
      {/* Minimalist Header Overlay */}
      <div className="absolute top-8 right-8 z-50 text-right">
        <h2 className="font-headline text-xs md:text-sm font-bold tracking-[0.3em] text-black/80">
          INDEPENDENT PORTFOLIO / 2026
        </h2>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <h1 className="font-headline text-[20vw] font-black leading-none text-black select-none whitespace-nowrap">
          MUSHANGI P
        </h1>
      </div>

      {/* Interactive 3D Portrait */}
      <div 
        className="relative z-10 w-full max-w-md md:max-w-xl transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateX(${translateX}px) translateY(${translateY}px)`,
        }}
      >
        <div className="relative aspect-[3/4] w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <Image
            src="/hero-image.png"
            alt="Mushangi Patrick Portrait"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Bottom UI Elements */}
      <div className="absolute bottom-8 left-8 z-50">
        <div className="flex flex-col gap-1">
          <span className="font-headline text-sm font-bold text-black uppercase tracking-widest">Patrick Mushangi</span>
          <span className="font-body text-xs text-black/60 uppercase tracking-wider">Full-Stack Developer & Designer</span>
        </div>
      </div>

      {/* Motion Toggle Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsPaused(!isPaused)}
          className="rounded-full bg-white/20 backdrop-blur-md border-black/10 hover:bg-[#a3e635] hover:text-black transition-all group"
          title={isPaused ? "Resume Motion" : "Pause Motion"}
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          <span className="sr-only">{isPaused ? "Resume Motion" : "Pause Motion"}</span>
        </Button>
      </div>

      {/* Gradient Vignette for Depth */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/5" />
    </section>
  );
}
