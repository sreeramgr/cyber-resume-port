import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useRevealOnScroll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sreeram G Ramesh — Cybersecurity Analyst & SOC Operator" },
      {
        name: "description",
        content:
          "Cybersecurity graduate student at UT Dallas. SOC operations, vulnerability management, network security, and incident response. Open to full-time roles.",
      },
      { property: "og:title", content: "Sreeram G Ramesh — Cybersecurity Portfolio" },
      {
        property: "og:description",
        content:
          "Defending systems, investigating threats, and strengthening cyber resilience.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
          <Projects />
          <Contact />
      </main>
      <Footer />
    </div>
  );
}
