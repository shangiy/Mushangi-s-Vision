"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { RotatingLogo } from "./rotating-logo";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const closeSheet = () => setSheetOpen(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
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
    // Check if we are on the home page
    if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        // If on another page, navigate to home and then scroll
        window.location.href = '/';
    }
    if (isSheetOpen) {
      closeSheet();
    }
  };

  return (
    <header
      className={cn(
        "w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-sm border-b"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 font-bold text-lg"
        >
          <div className="w-8 h-8">
            <RotatingLogo />
          </div>
          <span className="font-headline">Mushangi P portfolio</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link
                  href="/"
                  onClick={handleLogoClick}
                  className="flex items-center gap-2 font-bold text-lg"
                >
                   <div className="w-8 h-8">
                     <RotatingLogo />
                   </div>
                  <span className="font-headline">Mushangi P portfolio</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
