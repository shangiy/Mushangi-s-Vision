'use client';

import React from 'react';

export function BrutalistMarquee() {
  const services = [
    "WEBSITE DESIGN",
    "SYSTEM DEVELOPER",
    "SEO",
    "FULL-STACK DEV"
  ];
  
  const marqueeContent = services.join(" * ") + " * ";
  
  return (
    <div className="relative w-full h-32 md:h-48 bg-slate-950 overflow-hidden flex items-center z-30">
      <div 
        className="w-[200%] h-24 md:h-32 bg-[#a3e635] flex items-center overflow-hidden rotate-[4deg] scale-110 origin-center"
        style={{ transform: 'rotate(4deg) skewX(-10deg)' }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
           <span className="font-headline text-4xl md:text-6xl font-black text-black uppercase tracking-tighter px-4 py-2">
              {marqueeContent.repeat(10)}
           </span>
           <span className="font-headline text-4xl md:text-6xl font-black text-black uppercase tracking-tighter px-4 py-2">
              {marqueeContent.repeat(10)}
           </span>
        </div>
      </div>
    </div>
  );
}
