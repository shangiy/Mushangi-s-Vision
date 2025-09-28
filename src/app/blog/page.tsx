import Link from "next/link";
import Image from "next/image";
import { blogPosts, BlogPost } from "@/lib/blog-posts";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                My Blog
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Thoughts, tutorials, and insights on web development and design.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post: BlogPost) => {
                const postImage = PlaceHolderImages.find(img => img.id === post.image);
                return (
                    <Card key={post.slug} className="overflow-hidden transition-all hover:shadow-xl">
                        <Link href={`/blog/${post.slug}`} className="block h-full">
                           <div className="flex flex-col h-full">
                                <CardHeader className="p-0">
                                    {postImage && (
                                        <div className="aspect-video relative">
                                            <Image
                                                src={postImage.imageUrl}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={postImage.imageHint}
                                            />
                                        </div>
                                    )}
                                </CardHeader>
                                <CardContent className="p-6 flex flex-col flex-grow">
                                    <h2 className="font-headline text-xl font-bold mb-2">{post.title}</h2>
                                    <p className="text-sm text-muted-foreground mb-4">{new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    <p className="text-muted-foreground leading-relaxed flex-grow">
                                        {post.description}
                                    </p>
                                </CardContent>
                            </div>
                        </Link>
                    </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
