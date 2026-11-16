import { Header } from "@/components/header";
import { InteractiveHero } from "@/components/interactive-hero";
import { BrutalistMarquee } from "@/components/brutalist-marquee";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import { BlogSection } from "@/components/blog-section";
import { SkillsMarquee } from "@/components/skills-marquee";
import { Resume } from "@/components/resume";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <InteractiveHero />
        <BrutalistMarquee />
        <About />
        <Projects />
        <SkillsMarquee />
        <Skills />
        <Resume />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
