
"use client";

import { Section } from "@/components/section";
import { User, MapPin, Phone, Mail, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const resumeData = {
  name: "Mushangi",
  experience:
    "2+ years as a full-stack developer at various tech companies. Led the development of an e-commerce platform, increasing sales by 20%. Specialized in building scalable microservices and responsive front-end interfaces. I have learn several computer language and frameworks and practice by developing website have i have design using the knowledge i learn through resorces online like w3school.com and youtube. ",
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
          This section showcases the raw data that could be used to dynamically
          generate a resume. Below is a styled preview.
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

      <div className="mt-16">
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem>
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden md:flex">
                    {/* Left Column */}
                    <div className="md:w-1/3 p-8 bg-slate-800 text-white">
                    <div className="flex justify-center mb-6">
                        <Image
                        src="/about-image.png"
                        alt="Mushangi Patrick"
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-slate-700 object-cover aspect-square"
                        data-ai-hint="profile picture"
                        />
                    </div>
                    <div className="space-y-4 text-sm">
                        <div className="flex items-center gap-3">
                        <MapPin size={16} /> <span>Nairobi, Kenya</span>
                        </div>
                        <div className="flex items-center gap-3">
                        <Phone size={16} /> <span>+254 727 607 824</span>
                        </div>
                        <div className="flex items-center gap-3">
                        <Mail size={16} /> <span>mushangip0@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                        <Globe size={16} /> <Link href="https://mushangis-portfolio.onrender.com/" className="text-cyan-400 hover:underline break-all" target="_blank">https://mushangis-portfolio.onrender.com/</Link>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-bold uppercase tracking-wider text-cyan-400 mb-3">Objective</h3>
                        <p className="text-sm text-slate-300">To Build and maintain websites that are functional, user-friendly, and visually appealing.</p>
                        <p className="text-sm text-slate-300 mt-2">To Design and develop software systems that support business operations or specialized tasks.</p>
                        <p className="text-sm text-slate-300 mt-2">To Craft the visual and interactive aspects of digital products to enhance user experience and brand identity.</p>
                    </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:w-2/3 p-8 text-slate-700 bg-white">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2 mb-4">EXPERIENCE</h3>
                            <div className="mb-6">
                                <p className="font-semibold">September 2025 – December 2025</p>
                                <p className="italic">Office Attaché Student - Centrino Technology Ltd, Kenya</p>
                                <p className="text-sm mt-1">Support database design, SQL queries, and basic system testing.</p>
                            </div>
                            <div>
                                <p className="font-semibold">2022 – Present</p>
                                <p className="italic">Freelance Website Designer & Developer, WebApp / System Developer</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                <li>Built systems interacting with SQL databases for authentication, data storage, and content management.</li>
                                <li>Designed modern UI/UX layouts using best design practices.</li>
                                <li>Delivered responsive websites optimized for mobile and desktop. (Checkout my portfolio link onrender.com)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2 mb-4">SKILLS</h3>
                            <div className="text-sm space-y-3">
                                <p><strong className="font-semibold">Web Development:</strong> HTML, CSS, JavaScript, PHP, Django (beginner), Responsive Design</p>
                                <p><strong className="font-semibold">UI/UX Design:</strong> Wireframing, Prototyping, Figma, User Interface Layout</p>
                                <p><strong className="font-semibold">System Development:</strong> SQL Databases, Authentication Systems, API integration</p>
                                <p><strong className="font-semibold">Tools:</strong> VS Code, Git/GitHub, XAMPP, Canva</p>
                                <p><strong className="font-semibold">Soft Skills:</strong> Communication, Problem Solving, Team Collaboration</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2 mb-4">PROJECTS</h3>
                            <p className="text-sm mb-2">I have Client Websites (4 Projects) and am currently developing two portfolio websites</p>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Built portfolio sites, business sites, and system-driven web apps.</li>
                                <li>Integrated SQL databases for dynamic content and user management.</li>
                                <li>developed a web game that plays in a browser, to continue to learn the Unity game engine. <Link href="https://mushangis-portfolio.onrender.com/" className="text-primary font-semibold hover:underline" target="_blank">(it loads a bit!)</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden md:flex">
                     {/* Left Column */}
                    <div className="md:w-1/3 p-8 bg-slate-800 text-white">
                        <div className="flex justify-center mb-6">
                            <Image
                            src="/about-image.png"
                            alt="Mushangi Patrick"
                            width={150}
                            height={150}
                            className="rounded-full border-4 border-slate-700 object-cover aspect-square"
                            data-ai-hint="profile picture"
                            />
                        </div>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-3">
                            <MapPin size={16} /> <span>Nairobi, Kenya</span>
                            </div>
                            <div className="flex items-center gap-3">
                            <Phone size={16} /> <span>+254 727 607 824</span>
                            </div>
                            <div className="flex items-center gap-3">
                            <Mail size={16} /> <span>mushangip0@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                            <Globe size={16} /> <Link href="https://mushangis-portfolio.onrender.com/" className="text-cyan-400 hover:underline break-all" target="_blank">https://mushangis-portfolio.onrender.com/</Link>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-bold uppercase tracking-wider text-cyan-400 mb-3">Objective</h3>
                            <p className="text-sm text-slate-300">To Build and maintain websites that are functional, user-friendly, and visually appealing.</p>
                            <p className="text-sm text-slate-300 mt-2">To Design and develop software systems that support business operations or specialized tasks.</p>
                            <p className="text-sm text-slate-300 mt-2">To Craft the visual and interactive aspects of digital products to enhance user experience and brand identity.</p>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="md:w-2/3 p-8 text-slate-700 bg-white">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2 mb-4">EDUCATION</h3>
                            <div className="mb-6">
                                <p className="font-semibold">2022 – 2026 (Expected graduation)</p>
                                <p className="italic">Bachelor of Science in Information Technology (BSc IT)</p>
                                <p className="italic">At Mount Kenya University</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                <li>Coursework: Web Development, System Analysis, Software Engineering, Networking, Database Systems</li>
            </ul>
                            </div>
                            <div className="mb-6">
                                <p className="font-semibold">2019 – 2021 (short course)</p>
                                <p className="italic">Data Communications Certification & Practical Field Work</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                <li>Completed 2 years of hands-on experience during the COVID-19 period.</li>
                                <li>Worked with networking, cabling, routers/switches, and basic system troubleshooting</li>
            </ul>
                            </div>
                            <div className="mb-6">
                                <p className="font-semibold">2015 - 2018 (Secondary School)</p>
                                <p className="italic">Siakago High Secondary School - Grade C+</p>
                            </div>
                            <div>
                                <p className="font-semibold">2006 – 2014 (Primary School)</p>
                                <p className="italic">Korinyang Primary School - marks 361</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2 mb-4">COMMUNICATION</h3>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                <li>Strong communication skills from working with clients and project stakeholders.</li>
                                <li>Ability to translate client requirements into technical specifications.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2 mb-4">LEADERSHIP</h3>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                <li>Coordinated with clients, set timelines, and delivered quality solutions</li>
                                <li>Led small freelance development projects from planning to deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </Section>
  );
}
