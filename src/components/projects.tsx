
"use client";

import Image from "next/image";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";


const projects = [
  {
    id: "project-1",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured online store with a modern UI, product management, and a secure checkout process.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    imageUrls: [
      "/e-commerce-system.png",
      "/ecommerce-laptop.png",
      "/alpha-Admin-Dashboard.png",
    ],
    imageHints: ["ecommerce system", "ecommerce laptop", "admin dashboard"],
    liveUrl: "https://6000-firebase-studio-1751840259148.cluster-jbb3mjctu5cbgsi6hwq6u4btwe.cloudworkstations.dev/",
    githubUrl: "#",
  },
  {
    id: "project-2",
    slug: "banking-mobile-app",
    title: "Banking Mobile-App",
    description: "A collaborative tool for teams to organize tasks, set deadlines, and track progress with an intuitive drag-and-drop interface.",
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    imageUrls: ["/Banking App-Layout.png", "/Banking-MobileApp.png"],
    imageHints: ["banking app", "mobile banking"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-4",
    slug: "game-app",
    title: "Game App",
    description: "An interactive game application with engaging UI and real-time features.",
    tags: ["React Native", "Firebase", "Lottie"],
    imageUrls: ["/ludoGame-homepage.png", "/LudoGameboardLayout.png", "/game-Setup.png"],
    imageHints: ["ludo homepage", "ludo gameboard", "game setup"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-6",
    slug: "clients-portfolio",
    title: "Clients Portfolio",
    description: "A beautiful and responsive portfolio website built for a client to showcase their work and skills.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    imageUrls: ["/wanjikuHome.png", "/Wanjiku'sBlog.png", "/Wanjiku'sArtCurator.png", "/Wanjiku'sFooter.png"],
    imageHints: ["client portfolio", "blog section", "art curator", "footer design"],
    liveUrl: "https://wanjiku-s-portfolio.onrender.com/",
    githubUrl: "#",
  },
  {
    id: "project-3",
    slug: "shape-color-generator",
    title: "Shape GEN and color painter web",
    description: "A web application for generating shapes and painting with colors using a canvas.",
    tags: ["HTML5", "Canvas", "JavaScript"],
    imageUrls: ["https://picsum.photos/seed/3/600/400"],
    imageHints: ["data dashboard"],
    liveUrl: "https://shangiy.github.io/colourGen.0/",
    githubUrl: "#",
  },
  {
    id: "project-5",
    slug: "parms-xclusive-cars",
    title: "Parms Xclusive Cars Ltd System",
    description: "Developed a parmsXclusive cars ltd website that allows user and customer to look for their preferred car either to buy or trade-in with an existing car.",
    tags: ["PHP", "MySQL", "HTML/CSS"],
    imageUrls: ["/parmsXclusive trade-in.png", "/parmsXclusive cars ltd LC.png", "/parmsXclusive cars ltd website.png"],
    imageHints: ["car trade-in", "car landing", "car website"],
    liveUrl: "https://shangiy.github.io/p5/",
    githubUrl: "https://shangiy.github.io/p5/",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="p-1 h-full">
        <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-xl">
        <CardHeader>
            {project.imageUrls && project.imageUrls.length > 0 && (
                <Carousel className="w-full" opts={{ loop: true }}>
                    <CarouselContent>
                    {project.imageUrls.map((url, index) => (
                        <CarouselItem key={index}>
                        <div className="aspect-video relative mb-4">
                            <Image
                            src={url}
                            alt={`${project.title} - image ${index + 1}`}
                            fill
                            className="object-cover rounded-t-lg"
                            data-ai-hint={project.imageHints[index] || ""}
                            />
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
            )}
            <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
            <CardDescription className="flex-grow">{project.description}
                {(project.id === 'project-1' || project.id === 'project-3' || project.id === 'project-5' || project.id === 'project-6') && project.liveUrl !== '#' && (
                <p className="mt-2 text-sm break-all">
                    <Link href={project.liveUrl} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        {project.liveUrl}
                    </Link>
                </p>
                )}
            </CardDescription>
            <div className="flex gap-2 mt-4">
            <Button asChild variant="outline" size="sm">
                <Link href={`/portfolio/${project.slug}`}>
                View More
                </Link>
            </Button>
            <Button asChild size="sm">
                <Link href={project.liveUrl} target="_blank">
                <ExternalLink />
                Live Demo
                </Link>
            </Button>
            </div>
        </CardContent>
        </Card>
    </div>
);


export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Projects
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Here are some of the projects I'm proud to have worked on.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee hover:pause">
            {[...projects, ...projects].map((project, index) => (
                <div key={`${project.id}-${index}`} className="flex-none px-4" style={{ width: '33.33%' }}>
                   <ProjectCard project={project} />
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
}
