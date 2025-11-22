import Link from "next/link";
import Image from "next/image";
import { Section } from "./section";
import { blogPosts, BlogPost } from "@/lib/blog-posts";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function BlogSection() {
    const recentPosts = blogPosts.slice(0, 2);

    return (
        <Section id="blog" className="bg-white">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    From My Blog
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                    Sharing my thoughts on technology, design, and development.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {recentPosts.map((post: BlogPost) => {
                    const postImage = PlaceHolderImages.find(img => img.id === post.image);
                    return (
                        <Card key={post.slug} className="overflow-hidden transition-all hover:shadow-xl">
                            <Link href={`/blog/${post.slug}`} className="block">
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
                                <CardContent className="p-6">
                                    <h3 className="font-headline text-xl font-bold mb-2">{post.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {post.description}
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>
                    );
                })}
            </div>

            <div className="text-center mt-12">
                <Button asChild variant="outline">
                    <Link href="/blog">
                        View All Posts <ArrowRight className="ml-2 h-4 w-4"/>
                    </Link>
                </Button>
            </div>
        </Section>
    )
}
