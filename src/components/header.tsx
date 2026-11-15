
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { RotatingLogo } from "./rotating-logo";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Home", isHome: true },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSheet = () => setSheetOpen(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/") {
        handleLogoClick(e);
        return;
    }
    if (href.startsWith("/#") && window.location.pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (isSheetOpen) {
      closeSheet();
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        window.location.href = '/';
    }
    if (isSheetOpen) {
      closeSheet();
    }
  };

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300 py-4 px-4 md:px-8",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo & Name */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3 font-bold text-lg group"
        >
          <div className="w-10 h-10 transition-transform group-hover:scale-110">
            <RotatingLogo />
          </div>
          <span className="font-headline text-foreground tracking-tight hidden sm:inline-block">
            MUSHANGI PATRICK
          </span>
        </Link>

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* Nav Pill */}
          <nav className="flex items-center gap-1 bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-2xl border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "text-[13px] font-bold px-4 py-1.5 rounded-full transition-all duration-200 uppercase tracking-wider",
                  link.isHome 
                    ? "bg-[#a3e635] text-black hover:bg-[#bef264]" 
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-[1px] h-4 bg-white/20 mx-2" />
            <a 
              href="/Mushangi's resume.pdf" 
              download 
              className="flex items-center gap-1.5 text-[13px] font-bold px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all uppercase tracking-wider"
            >
              CV <Download className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Theme Toggle Pill */}
          <div className="flex items-center bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-2xl">
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-200 text-[12px] font-bold uppercase tracking-wider",
                theme === "light" 
                  ? "bg-[#a3e635] text-black" 
                  : "text-white/60 hover:text-white"
              )}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Light</span>
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                "flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-200 text-[12px] font-bold uppercase tracking-wider",
                theme === "dark" 
                  ? "bg-[#a3e635] text-black" 
                  : "text-white/60 hover:text-white"
              )}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Dark</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
            <div className="bg-slate-900/90 rounded-full p-1 flex items-center shadow-lg">
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-full text-[#a3e635]"
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm border-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 py-8">
                <Link
                  href="/"
                  onClick={handleLogoClick}
                  className="flex items-center gap-2 font-bold text-xl"
                >
                   <div className="w-10 h-10">
                     <RotatingLogo />
                   </div>
                  <span className="font-headline tracking-tighter">MUSHANGI P</span>
                </Link>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-lg font-bold px-4 py-3 rounded-xl transition-colors uppercase tracking-widest",
                        link.isHome ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      )}
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a 
                    href="/Mushangi's resume.pdf" 
                    download 
                    className="flex items-center justify-between text-lg font-bold px-4 py-3 rounded-xl hover:bg-muted transition-colors uppercase tracking-widest"
                  >
                    Download CV <Download className="w-5 h-5" />
                  </a>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
