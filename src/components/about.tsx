import Image from "next/image";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="about" className="bg-secondary">
      <div className="text-center mb-16">
        <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            AI Enthusiast & Techie
        </h3>
        <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-muted-foreground md:text-lg">
                Beyond my core development work, I am deeply fascinated by the world of Artificial Intelligence. I am an avid learner in the AI space, constantly exploring the latest advancements in machine learning, large language models, and generative AI. This passion isn't just theoretical; I actively seek ways to integrate intelligent features into my projects to create smarter, more dynamic user experiences.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
                As a techie, I believe in the power of technology to solve real-world problems. Whether it's building a responsive front-end or designing a scalable backend, I'm driven by the challenge of making things work efficiently and elegantly. I'm always experimenting with new tools and frameworks to stay at the forefront of innovation.
            </p>
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
