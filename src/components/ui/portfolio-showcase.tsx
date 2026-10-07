"use client";

import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Experience } from "@/components/portfolio/experience";
import { Contact } from "@/components/portfolio/contact";
import { FloatingNav } from "@/components/portfolio/floating-nav";

export default function PortfolioShowcase() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
      {/* Ambient base glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(39,39,42,0.55),_transparent_55%)]"
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>

      <FloatingNav />
    </div>
  );
}
