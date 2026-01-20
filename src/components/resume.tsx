"use client";

import { Section } from "@/components/section";
import { User } from "lucide-react";

const resumeData = {
  name: "Mushangi",
  experience:
    "5+ years as a full-stack developer at various tech companies. Led the development of a major e-commerce platform, increasing sales by 20%. Specialized in building scalable microservices and responsive front-end interfaces. Mentored junior developers and improved team coding standards.",
  skills:
    "JavaScript, TypeScript, React, Next.js, Node.js, Python, Flask, SQL, MongoDB, Docker, AWS, UI/UX Design, Agile Methodologies",
};

export function Resume() {
  return (
    <Section id="resume">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Dynamic Resume
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          This section showcases the raw data that was used to feed an AI to
          dynamically generate a resume summary.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-card p-6 rounded-lg shadow-lg border">
          <div className="flex items-start gap-4">
            <div className="bg-primary rounded-full p-2 text-primary-foreground">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">My Raw Input</h3>
              <p className="text-muted-foreground text-sm mt-1">
                <span className="font-semibold">Experience:</span>{" "}
                {resumeData.experience}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                <span className="font-semibold">Skills:</span> {resumeData.skills}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
