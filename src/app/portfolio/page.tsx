import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SplineScene } from "@/components/spline-scene";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
                Mushangi
              </h1>
              <p className="text-xl text-muted-foreground">Full-Stack Developer</p>
              
              <h2 className="font-headline text-2xl font-bold tracking-tight mt-12">Summary</h2>
              <p>Highly accomplished Full-Stack Developer with 2+ years of experience spearheading robust and scalable solutions across various tech organisation. An expertise in  full development lifecycle of complex platforms, specializing in microservices architecture and responsive front-end interfaces. Demonstrated ability to drive business growth, as evidenced by a 20% increase in sales on a major e-commerce platform. Adept at mentoring junior developers and elevating team coding standards through best practices and collaborative development.</p>

              <h2 className="font-headline text-2xl font-bold tracking-tight mt-12">Experience</h2>
              <div className="mb-6">
                <h3 className="font-semibold">Full-Stack Developer | Various Tech Companies</h3>
                <p className="text-sm text-muted-foreground">Present</p>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>Led the full-stack development and successful launch of a major e-commerce platform, directly contributing to a 20% increase in sales.</li>
                  <li>Designed, developed, and maintained scalable microservices architectures, ensuring high availability and performance.</li>
                  <li>Built and optimized responsive front-end user interfaces, enhancing user experience and engagement.</li>
                  <li>Mentored junior developers, conducted comprehensive code reviews, and implemented improved team coding standards and development workflows.</li>
                  <li>Collaborated with cross-functional teams to define project requirements, architectural designs, and deployment strategies.</li>
                </ul>
              </div>

              <h2 className="font-headline text-2xl font-bold tracking-tight mt-12">Skills</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Programming Languages</h4>
                  <p>JavaScript, TypeScript, Python</p>
                </div>
                <div>
                  <h4 className="font-semibold">Front-End</h4>
                  <p>React, Next.js</p>
                </div>
                <div>
                  <h4 className="font-semibold">Back-End</h4>
                  <p>Node.js, Flask</p>
                </div>
                <div>
                  <h4 className="font-semibold">Databases</h4>
                  <p>SQL, MongoDB</p>
                </div>
                <div>
                  <h4 className="font-semibold">Cloud & DevOps</h4>
                  <p>Docker, AWS</p>
                </div>
                <div>
                  <h4 className="font-semibold">Methodologies & Tools</h4>
                  <p>UI/UX Design, Agile Methodologies</p>
                </div>
              </div>
            </div>

            <div className="sticky top-24">
              <SplineScene />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
