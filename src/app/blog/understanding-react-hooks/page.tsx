import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-posts";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function BlogPostPage() {
  const post = blogPosts.find(p => p.slug === 'understanding-react-hooks');

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find(img => img.id === post.image);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <article className="container prose prose-lg dark:prose-invert max-w-4xl mx-auto px-4 md:px-6">
            {postImage && (
                <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        data-ai-hint={postImage.imageHint}
                    />
                </div>
            )}
            <div className="text-center mb-8">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{post.title}</h1>
                <p className="text-muted-foreground mt-2">{new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <div className="mt-4 flex justify-center gap-2">
                    <Badge>React</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>Web Development</Badge>
                </div>
            </div>

            <div
                className="prose-p:text-muted-foreground prose-headings:font-headline prose-a:text-primary prose-strong:text-foreground prose-code:bg-muted prose-code:p-1 prose-code:rounded-md prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/```jsx/g, '<pre><code class="language-jsx">').replace(/```/g, '</code></pre>') }}
            />
        </article>
      </main>
      <Footer />
    </div>
  );
}
