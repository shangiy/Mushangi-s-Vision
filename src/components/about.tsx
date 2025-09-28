import Image from "next/image";
import { Section } from "@/components/section";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const profileImage = PlaceHolderImages.find(
  (img) => img.id === "mushangi-profile"
);

export function About() {
  return (
    <Section id="about" className="bg-secondary">
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
        </div>
        <div className="flex justify-center animate-in fade-in slide-in-from-right-12 duration-1000">
          {profileImage && (
             <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              width={400}
              height={400}
              className="rounded-full object-cover aspect-square shadow-lg border-4 border-background"
              data-ai-hint={profileImage.imageHint}
            />
          )}
        </div>
      </div>
    </Section>
  );
}
