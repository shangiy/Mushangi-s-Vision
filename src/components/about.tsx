'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Globe, ArrowRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { BrutalistMarquee } from "./brutalist-marquee";
import { SplineScene } from "./spline-scene";

export function About() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window === 'undefined') return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const dist = Math.sqrt(Math.pow(coords.x, 2) + Math.pow(coords.y, 2));
  const maxDist = 1.414; // sqrt(1^2 + 1^2)
  const kineticStrokeWidth = Math.max(0.5, 1.5 * (maxDist - dist));

  return (
    <div id="about">
      {/* Top part of About - AI Enthusiast & Dev */}
      <section className="w-full pt-16 md:pt-24 lg:pt-32 bg-secondary border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <div className="w-full flex items-center justify-center">
              <div className="w-full max-w-lg aspect-square relative">
                <SplineScene />
              </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Globe className="w-6 h-6 animate-spin-slow text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Double tap and drag ur finger on Robots face and move the finger around ur mouse/ trackpad</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-primary">
                      AI Enthusiast & Dev
                  </h3>
                </div>
                <div className="mt-4 text-center md:text-left">
                    <p className="text-foreground md:text-lg">
                        Beyond my core development work, I am deeply fascinated by the world of Artificial Intelligence. I am an avid learner in the AI space, constantly exploring the latest advancements in machine learning, large language models, and generative AI.
                    </p>
                    <p className="text-foreground md:text-lg mt-4">
                        This passion isn't just theoretical; I actively seek ways to integrate intelligent features into my projects to create smarter, more dynamic user experiences.
                    </p>
                    <p className="mt-4 text-foreground md:text-lg">
                        As a techie, I believe in the power of technology to solve real-world problems. Whether it's building a responsive front-end or designing a scalable backend, I'm driven by the challenge of making things work efficiently and elegantly. I'm always experimenting with new tools and frameworks to stay at the forefront of innovation.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom part of About - About Me Details with Marquee behind text and in front of image */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-secondary overflow-hidden">
        {/* The Marquee - Middle layer (z-10) */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 pointer-events-none opacity-80 md:opacity-100">
           <BrutalistMarquee />
        </div>

        <div className="container relative px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left side text - Top layer (z-20) */}
            <div className="relative z-20 animate-in fade-in slide-in-from-left-12 duration-1000 bg-secondary/80 backdrop-blur-sm p-6 rounded-2xl md:bg-transparent md:backdrop-blur-none md:p-0">
              <div className="relative mb-4 group">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                  About Me
                </h2>
                <h2 
                  className="absolute inset-0 font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl select-none pointer-events-none transition-[webkit-text-stroke-width] duration-75"
                  style={{ 
                    transform: 'translate(2px, -2px)',
                    WebkitTextStroke: `${kineticStrokeWidth}px #a3e635`,
                    color: 'transparent'
                  }}
                >
                  About Me
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground md:text-lg">
                I'm a passionate and detail-oriented full-stack developer with a knack for building elegant and user-friendly applications. With a background in both design and engineering, I bridge the gap between aesthetics and functionality.
              </p>
              <p className="mt-4 text-muted-foreground md:text-lg">
                My journey in tech started with a curiosity for how things work, which evolved into a love for creating meaningful digital experiences. I thrive on challenges, continuously learn new technologies, and enjoy collaborating with teams to bring ideas to life.
              </p>
                <div className="mt-8">
                    <a href="/Mushangi's resume.pdf" download="Mushangi's Resume.pdf" className={cn(buttonVariants({ size: "lg" }))}>
                        Check My Resume
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
            {/* Right side image - Bottom layer (z-0) */}
            <div className="flex justify-center animate-in fade-in slide-in-from-right-12 duration-1000 relative z-0">
               <div className="relative">
                  {/* Decorative backdrop for the image */}
                  <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full z-0" />
                  <Image
                    src="/about-image.png"
                    alt="About me"
                    width={400}
                    height={400}
                    className="relative z-10 rounded-full object-cover aspect-square shadow-2xl border-4 border-background"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
