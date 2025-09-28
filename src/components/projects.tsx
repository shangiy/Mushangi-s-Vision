import Image from "next/image";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with a modern UI, product management, and a secure checkout process.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    imageUrls: [
      "/e-commerce-system.png",
      "/ecommerce-laptop.png",
    ],
    imageHints: ["ecommerce system", "ecommerce laptop"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A collaborative tool for teams to organize tasks, set deadlines, and track progress with an intuitive drag-and-drop interface.",
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    imageUrls: ["/ecommerce-laptop.png"],
    imageHints: ["ecommerce laptop"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Data Analytics Dashboard",
    description: "An interactive dashboard for visualizing complex datasets, featuring customizable charts and real-time data updates.",
    tags: ["Python", "Flask", "D3.js", "WebSocket"],
    imageUrls: ["https://picsum.photos/seed/3/600/400"],
    imageHints: ["data dashboard"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

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

      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
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
                        {project.imageUrls.length > 1 && (
                          <>
                            <CarouselPrevious className="absolute left-4" />
                            <CarouselNext className="absolute right-4" />
                          </>
                        )}
                      </Carousel>
                    )}
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="flex-grow">{project.description}</CardDescription>
                     <div className="flex gap-2 mt-4">
                        <Button asChild variant="outline" size="sm">
                          <Link href={project.githubUrl} target="_blank">
                            <Github />
                            GitHub
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12" />
      </Carousel>
    </Section>
  );
}