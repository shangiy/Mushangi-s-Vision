// src/components/skills-marquee.tsx

import { Section } from "@/components/section";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiDocker,
  SiAmazon
} from "@icons-pack/react-simple-icons";

const skills = [
  { name: "HTML5", icon: <SiHtml5 size={40} /> },
  { name: "CSS3", icon: <SiCss3 size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Firebase", icon: <SiFirebase size={40} /> },
  { name: "Git", icon: <SiGit size={40} /> },
  { name: "GitHub", icon: <SiGithub size={40} /> },
  { name: "Figma", icon: <SiFigma size={40} /> },
  { name: "Vercel", icon: <SiVercel size={40} /> },
  { name: "Docker", icon: <SiDocker size={40} /> },
  { name: "AWS", icon: <SiAmazon size={40} /> },
];

const duplicatedSkills = [...skills, ...skills];

export function SkillsMarquee() {
  return (
    <Section id="skills-marquee" className="py-8 md:py-12 lg:py-16">
      <div className="relative overflow-hidden w-full group">
        <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused]">
          {duplicatedSkills.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="mx-8 flex-shrink-0 flex flex-col items-center justify-center text-muted-foreground transition-colors hover:text-foreground">
              {skill.icon}
              <span className="mt-2 text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
