
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-16 md:grid-cols-2 items-start max-w-5xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Contact Me</h1>
                            <p className="mt-4 text-muted-foreground md:text-lg">
                                I'm available for freelance projects and full-time positions. Let's build something amazing together.
                            </p>
                        </div>
                        <Card className="bg-secondary">
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 text-sm">
                                <div className="flex items-center gap-4">
                                    <Phone className="h-5 w-5 text-primary"/>
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <a href="tel:+254727607824" className="text-muted-foreground hover:text-primary transition-colors">+254 727 607 824</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="h-5 w-5 text-primary"/>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <a href="mailto:mushangip0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">mushangip0@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="h-5 w-5 text-primary"/>
                                    <div>
                                        <h4 className="font-semibold">Location</h4>
                                        <p className="text-muted-foreground">Nairobi, Kenya</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Download className="h-5 w-5 text-primary"/>
                                    <div>
                                        <h4 className="font-semibold">Resume</h4>
                                        <a href="/resume.docx" download className="text-primary font-medium hover:underline">Download Resume (.docx)</a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                       <Contact />
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
