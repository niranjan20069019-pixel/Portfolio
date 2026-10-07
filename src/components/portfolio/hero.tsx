"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand";
import { portfolio } from "@/data/portfolio";
import { ANIMATIONS } from "./animations";
import { Portrait } from "./portrait";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-28 pt-16 sm:px-8 lg:px-12"
    >
      {/* Breathing background glow */}
      <motion.div
        aria-hidden
        animate={{
          background: [
            "radial-gradient(circle at 70% 40%, rgba(59,130,246,0.16), transparent 55%)",
            "radial-gradient(circle at 55% 55%, rgba(99,102,241,0.14), transparent 55%)",
            "radial-gradient(circle at 75% 35%, rgba(59,130,246,0.16), transparent 55%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <motion.div
          variants={ANIMATIONS.container}
          initial="hidden"
          animate="visible"
          className="order-1 flex flex-col items-start text-left"
        >
          <motion.p
            variants={ANIMATIONS.item}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500"
          >
            {portfolio.label}
          </motion.p>

          <motion.h1
            variants={ANIMATIONS.item}
            className="font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">
              {portfolio.name.first}
            </span>
            <span className="mt-1 block text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-600">
              {portfolio.name.last}
            </span>
          </motion.h1>

          <motion.p
            variants={ANIMATIONS.item}
            className="mt-5 text-base font-medium text-zinc-300 sm:text-lg"
          >
            {portfolio.role}
          </motion.p>

          <motion.p
            variants={ANIMATIONS.item}
            className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-[15px]"
          >
            {portfolio.tagline}
          </motion.p>

          <motion.div
            variants={ANIMATIONS.item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Projects
              <ArrowDownRight
                size={16}
                className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            >
              Contact Me
            </button>
            <a
              href={portfolio.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            >
              <GithubIcon size={16} />
              {portfolio.github.label}
            </a>
          </motion.div>

          <motion.div
            variants={ANIMATIONS.item}
            className="mt-10 flex flex-wrap gap-8 border-t border-white/5 pt-6"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Status
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {portfolio.status.short}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Location
              </p>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-zinc-300">
                <MapPin size={14} className="text-zinc-500" />
                {portfolio.location}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: portrait */}
        <div className="order-2 flex justify-center lg:justify-end">
          <Portrait />
        </div>
      </div>
    </section>
  );
}
