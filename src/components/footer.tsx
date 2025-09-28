import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { RotatingLogo } from "./rotating-logo";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="w-24 h-24">
            <RotatingLogo />
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Mushangi Patrick Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com/shangiy" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
