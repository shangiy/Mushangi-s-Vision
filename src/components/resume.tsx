"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/section";
import { getResumeSummary } from "@/app/actions";
import { Skeleton } from "./ui/skeleton";
import { Bot, User } from "lucide-react";
import { Button } from "./ui/button";

const resumeData = {
  name: "Mushangi",
  experience:
    "5+ years as a full-stack developer at various tech companies. Led the development of a major e-commerce platform, increasing sales by 20%. Specialized in building scalable microservices and responsive front-end interfaces. Mentored junior developers and improved team coding standards.",
  skills:
    "JavaScript, TypeScript, React, Next.js, Node.js, Python, Flask, SQL, MongoDB, Docker, AWS, UI/UX Design, Agile Methodologies",
};

export function Resume() {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchResume = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getResumeSummary(resumeData);
      setSummary(result.resume);
    } catch (e) {
      setError("Failed to generate resume summary. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResume();
  }, []);

  return (
    <Section id="resume">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Dynamic Resume
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          An AI-powered summary of my professional experience and skills.
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
                <span className="font-semibold">Experience:</span> {resumeData.experience}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                <span className="font-semibold">Skills:</span> {resumeData.skills}
              </p>
            </div>
          </div>

          <hr className="my-6" />

          <div className="flex items-start gap-4">
            <div className="bg-accent rounded-full p-2 text-accent-foreground">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              {isLoading ? (
                <div className="space-y-2 mt-2">
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[75%]" />
                </div>
              ) : error ? (
                <div className="text-destructive mt-2">
                  <p>{error}</p>
                  <Button onClick={fetchResume} size="sm" className="mt-2">
                    Regenerate
                  </Button>
                </div>
              ) : (
                <p className="text-muted-foreground whitespace-pre-wrap mt-1">{summary}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
