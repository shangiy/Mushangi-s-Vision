
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { projectsData } from "@/lib/projects-data";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => (
    <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-xl">
      <CardHeader className="p-0">
          {project.imageUrls && project.imageUrls.length > 0 && (
            <div className="aspect-video relative">
              <Image
                src={project.imageUrls[0]}
                alt={`${project.title} - primary image`}
                fill
                className="object-cover"
                data-ai-hint={project.imageHints[0] || ""}
              />
            </div>
          )}
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        <CardDescription className="flex-grow mb-4">{project.description}</CardDescription>
        <div className="flex gap-2 mt-auto">
          <Button asChild variant="outline" size="sm">
              <Link href={`/portfolio/${project.slug}`}>
              View More
              </Link>
          </Button>
          {project.liveUrl !== '#' && (
          <Button asChild size="sm">
              <Link href={project.liveUrl} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
              </Link>
          </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Project Portfolio
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                    Browse through a selection of my work. Click on any project to see more details.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
