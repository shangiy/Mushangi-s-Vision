'use client';

import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function BrutalistMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  
  const services = [
    "WEBSITE DESIGN",
    "SYSTEM DEVELOPER",
    "SEO",
    "FULL-STACK DEV"
  ];
  
  const marqueeContent = services.join(" * ") + " * ";
  
  return (
    <div className="relative w-full h-32 md:h-48 bg-secondary overflow-hidden flex items-center z-30">
      {/* Tilt Wrapper */}
      <div 
        className="w-[200%] h-24 md:h-32 bg-[#a3e635] flex items-center overflow-hidden rotate-[4deg] scale-110 origin-center shadow-2xl"
        style={{ transform: 'rotate(4deg) skewX(-10deg)' }}
      >
        <div 
          className="flex whitespace-nowrap animate-marquee"
          style={{ 
            animationDuration: '60s',
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
           <span className="font-headline text-4xl md:text-6xl font-black text-black uppercase tracking-tighter px-4 py-2">
              {marqueeContent.repeat(10)}
           </span>
           <span className="font-headline text-4xl md:text-6xl font-black text-black uppercase tracking-tighter px-4 py-2">
              {marqueeContent.repeat(10)}
           </span>
        </div>
      </div>

      {/* Control Button */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 z-40">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsPaused(!isPaused)}
          className="rounded-full bg-black text-white hover:bg-black/80 border-none shadow-xl active:scale-90 transition-transform"
          title={isPaused ? "Play Animation" : "Pause Animation"}
        >
          {isPaused ? <Play className="h-4 w-4 fill-current" /> : <Pause className="h-4 w-4 fill-current" />}
        </Button>
      </div>
    </div>
  );
}
