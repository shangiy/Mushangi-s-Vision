import { notFound } from "next/navigation";
import Image from "next/image";
import { projectsData } from "@/lib/projects-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <article className="container max-w-4xl mx-auto px-4 md:px-6">
          {project.imageUrls && project.imageUrls.length > 0 && (
            <Carousel className="w-full mb-8" opts={{ loop: true }}>
              <CarouselContent>
                {project.imageUrls.map((url, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={url}
                        alt={`${project.title} - image ${index + 1}`}
                        fill
                        className="object-cover"
                        data-ai-hint={project.imageHints[index] || ""}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.imageUrls.length > 1 && (
                <>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                </>
              )}
            </Carousel>
          )}

          <div className="text-center mb-8">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{project.title}</h1>
            <div className="mt-4 flex justify-center flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto prose-p:text-muted-foreground prose-headings:font-headline prose-a:text-primary prose-strong:text-foreground">
            <p>{project.description}</p>
            {project.longDescription.split('\\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            {project.githubUrl && project.githubUrl !== '#' && (
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <Button asChild>
                <Link href={project.liveUrl} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return projectsData.map(project => ({
    slug: project.slug,
  }));
}
