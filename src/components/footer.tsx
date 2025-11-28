import Link from "next/link";
import { Github, Linkedin, Twitter, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { RotatingLogo } from "./rotating-logo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">About Me</h3>
            <p className="text-sm leading-relaxed">
              A creative and passionate full-stack developer dedicated to building elegant, functional, and user-friendly web experiences. I thrive on turning complex problems into beautiful, intuitive designs.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Button asChild variant="ghost" size="icon" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-full">
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-full">
                <Link href="https://github.com/shangiy" target="_blank">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-full">
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support & Legal Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support & Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hovertext-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1 text-primary"/>
                <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p>Nairobi, Kenya</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 mt-1 text-primary"/>
                <div>
                    <h4 className="font-semibold text-white mb-1">Availability</h4>
                    <p>Mon - Fri: 9.00am - 6.00pm</p>
                    <p>Available for freelance projects</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 mt-1 text-primary"/>
                <div>
                    <h4 className="font-semibold text-white mb-1">Quick Contact</h4>
                    <Link href="/portfolio" className="block hover:text-white">contact@mushangi.dev</Link>
                    <a href="tel:+254727607824" className="block hover:text-white">+254 727 607 824</a>
                </div>
            </div>
        </div>

      </div>
      <div className="bg-gray-950/50">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-4 py-4">
            <p className="text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Mushangi Patrick Portfolio . Developed by{' '}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="https://mushangis-portfolio.onrender.com/" target="_blank" className="font-bold text-primary hover:underline">
                        Coder+
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Dev : Mushangi Patrick Coder+ , see more</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                . All rights reserved.
            </p>
            <div className="w-10 h-10">
                <RotatingLogo />
            </div>
        </div>
      </div>
    </footer>
  );
}
