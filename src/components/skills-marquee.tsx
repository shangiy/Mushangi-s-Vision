
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
  { name: "HTML5", icon: <SiHtml5 size={40} color="#E34F26" /> },
  { name: "CSS3", icon: <SiCss3 size={40} color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
  { name: "React", icon: <SiReact size={40} color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} color="#339933" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
  { name: "Python", icon: <SiPython size={40} color="#3776AB" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#4169E1" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  { name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" /> },
  { name: "Git", icon: <SiGit size={40} color="#F05032" /> },
  { name: "GitHub", icon: <SiGithub size={40} color="#181717" /> },
  { name: "Figma", icon: <SiFigma size={40} color="#F24E1E" /> },
  { name: "Vercel", icon: <SiVercel size={40} color="#000000" /> },
  { name: "Docker", icon: <SiDocker size={40} color="#2496ED" /> },
  { name: "AWS", icon: <SiAmazon size={40} color="#FF9900" /> },
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
