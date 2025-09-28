"use client";

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

export function Skills() {
  return (
    <Section id="skills" className="bg-secondary">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skills & Expertise
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          A snapshot of my technical abilities and design skills.
        </p>
      </div>

      <ChartContainer config={chartConfig} className="w-full h-[400px]">
        <BarChart
          accessibilityLayer
          data={skillsData}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="skill"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
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
            tickFormatter={(value) => `${value}%`}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar dataKey="proficiency" radius={8} />
        </BarChart>
      </ChartContainer>
    </Section>
  );
}
