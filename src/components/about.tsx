import Image from "next/image";
import { Section } from "@/components/section";
import { SplineScene } from "./spline-scene";
import { Globe } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <Section id="about" className="bg-secondary">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="w-full h-full">
            <SplineScene />
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
            <div className="mt-4">
                <p className="text-foreground md:text-lg">
                    Beyond my core development work, I am deeply fascinated by the world of Artificial Intelligence. I am an avid learner in the AI space, constantly exploring the latest advancements in machine learning, large language models, and generative AI. This passion isn't just theoretical; I actively seek ways to integrate intelligent features into my projects to create smarter, more dynamic user experiences.
                </p>
                <p className="mt-4 text-foreground md:text-lg">
                    As a techie, I believe in the power of technology to solve real-world problems. Whether it's building a responsive front-end or designing a scalable backend, I'm driven by the challenge of making things work efficiently and elegantly. I'm always experimenting with new tools and frameworks to stay at the forefront of innovation.
                </p>
            </div>
        </div>
      </div>
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="animate-in fade-in slide-in-from-left-12 duration-1000">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            I'm a passionate and detail-oriented full-stack developer with a knack for building elegant and user-friendly applications. With a background in both design and engineering, I bridge the gap between aesthetics and functionality.
          </p>
          <p className="mt-4 text-muted-foreground md:text-lg">
            My journey in tech started with a curiosity for how things work, which evolved into a love for creating meaningful digital experiences. I thrive on challenges, continuously learn new technologies, and enjoy collaborating with teams to bring ideas to life.
          </p>
            <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="#resume">
                        Check My Resume
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
        <div className="flex justify-center animate-in fade-in slide-in-from-right-12 duration-1000">
           <Image
            src="/about-image.png"
            alt="About me"
            width={400}
            height={400}
            className="rounded-full object-cover aspect-square shadow-lg border-4 border-background"
          />
        </div>
      </div>
    </Section>
  );
}
