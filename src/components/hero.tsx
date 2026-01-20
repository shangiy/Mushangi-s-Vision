"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, LocateIcon } from "lucide-react";
import { Button } from "./ui/button";

const StaggeredText = ({ text }: { text: string }) => {
  // Using state to ensure animation runs on client-side render
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <span aria-label={text} className="inline-block">
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="animate-stagger-in"
          style={isMounted ? { animationDelay: `${index * 0.02}s` } : { opacity: 0 }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};


export function Hero() {
  const fullText = "A creative developer specializing in the design and development of elegant website ,with technical expertise to deliver functional and scalable webApp experiences.";

  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center overflow-hidden py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/30 animate-gradient" />
      <div className="container px-4 md:px-6 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-in fade-in slide-in-from-left-12 duration-1000 text-center md:text-left">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm mb-4">
              <LocateIcon className="mr-2 h-4 w-4" /> Nairobi, Kenya
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              Mushangi P portfolio
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl md:mx-0 min-h-[96px] md:min-h-[56px]">
              <StaggeredText text={fullText} />
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-in fade-in slide-in-from-right-12 duration-1000">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/hero-image.png"
                  alt="Hero Image"
                  width={400}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <Link href="#about" aria-label="Scroll down">
                <div className="flex flex-col items-center gap-1 text-muted-foreground animate-bounce">
                    <ArrowDown className="h-6 w-6" />
                    <span className="text-xs">Scroll</span>
                </div>
            </Link>
        </div>
      </div>
    </section>
  );
}
