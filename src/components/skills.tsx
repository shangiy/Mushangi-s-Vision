"use client";

import React, { useRef, useEffect } from "react";
import { Section } from "@/components/section";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const skillsData = [
  { skill: "JavaScript", proficiency: 95, fill: "var(--color-javascript)" },
  { skill: "TypeScript", proficiency: 90, fill: "var(--color-typescript)" },
  { skill: "React", proficiency: 92, fill: "var(--color-react)" },
  { skill: "Next.js", proficiency: 88, fill: "var(--color-nextjs)" },
  { skill: "Node.js", proficiency: 85, fill: "var(--color-nodejs)" },
  { skill: "Python", proficiency: 80, fill: "var(--color-python)" },
  { skill: "SQL", proficiency: 78, fill: "var(--color-sql)" },
  { skill: "UI/UX", proficiency: 82, fill: "var(--color-uiux)" },
];

const chartConfig = {
  proficiency: {
    label: "Proficiency",
  },
  javascript: {
    label: "JavaScript",
    color: "hsl(var(--chart-1))",
  },
  typescript: {
    label: "TypeScript",
    color: "hsl(var(--chart-1))",
  },
  react: {
    label: "React",
    color: "hsl(var(--chart-1))",
  },
  nextjs: {
    label: "Next.js",
    color: "hsl(var(--chart-1))",
  },
  nodejs: {
    label: "Node.js",
    color: "hsl(var(--chart-2))",
  },
  python: {
    label: "Python",
    color: "hsl(var(--chart-2))",
  },
  sql: {
    label: "SQL",
    color: "hsl(var(--chart-2))",
  },
  uiux: {
    label: "UI/UX Design",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

// --- Particle Network Component ---
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let w: number, h: number;
    const mouse = { x: -2000, y: -2000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'white';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; 
      }
    }

    const init = () => {
      if (typeof window === 'undefined') return;
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w;
      canvas.height = h;
      particles = [];
      const density = (w * h) / 10000;
      const count = Math.min(Math.floor(density), 120);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      const connectionDist = 140;
      const mouseDist = 220;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - dist / connectionDist)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        const rect = canvas.getBoundingClientRect();
        const mdx = p.x - (mouse.x - rect.left);
        const mdy = p.y - (mouse.y - rect.top);
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < mouseDist) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * (1 - mdist / mouseDist)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x - rect.left, mouse.y - rect.top);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none" />;
}

export function Skills() {
  return (
    <Section id="skills" className="relative bg-slate-950 overflow-hidden border-t-0 py-24 md:py-32">
      {/* Interactive Particle Network Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950 pointer-events-none" />
      <ParticleNetwork />

      <div className="relative z-10 flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
          Skills & Expertise
        </h2>
        <p className="max-w-[700px] text-slate-400 md:text-lg">
          A snapshot of my technical abilities and design skills.
        </p>
      </div>

      <div className="relative z-10 dark">
        <ChartContainer config={chartConfig} className="w-full h-[400px]">
          <BarChart
            accessibilityLayer
            data={skillsData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey="skill"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
              tickFormatter={(value) =>
                chartConfig[value.toLowerCase() as keyof typeof chartConfig]
                  ?.label ?? value
              }
              className="font-medium"
            />
            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" className="bg-slate-900 border-slate-800 text-white" />}
            />
            <Bar dataKey="proficiency" radius={8} />
          </BarChart>
        </ChartContainer>
      </div>
    </Section>
  );
}
