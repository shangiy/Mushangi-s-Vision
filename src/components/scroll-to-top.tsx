"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleVisibilityAndSetProgress = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    if (scrollableHeight > 0) {
        setProgress((window.scrollY / scrollableHeight) * 100);
    } else {
        setProgress(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibilityAndSetProgress);
    return () => {
      window.removeEventListener("scroll", toggleVisibilityAndSetProgress);
    };
  }, []);

  const circumference = 2 * Math.PI * 20; // 2 * pi * radius (radius is 20)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={scrollToTop}
        className={cn(
          "relative h-14 w-14 rounded-full transition-opacity duration-300",
          "bg-background/80 hover:bg-background/90 text-primary shadow-lg backdrop-blur-sm",
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 44 44"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="22"
            cy="22"
            r="20"
            className="stroke-current text-primary/20"
            strokeWidth="3"
            fill="transparent"
          />
          <circle
            cx="22"
            cy="22"
            r="20"
            className="stroke-current text-primary transition-all duration-300"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            strokeLinecap="round"
            transform="rotate(-90 22 22)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
            <ArrowUp className="h-6 w-6" />
        </div>
      </button>
    </div>
  );
}
