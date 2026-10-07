"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ANIMATIONS } from "./animations";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
      aria-labelledby="about-heading"
    >
      <motion.div
        variants={ANIMATIONS.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          About
        </p>
        <h2
          id="about-heading"
          className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          AI & ML student building practical, impactful software.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
          {portfolio.bio}
        </p>

        <div className="mt-16 grid gap-10 border-t border-white/5 pt-12 sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {portfolio.currently.label}
            </p>
            <p className="mt-3 text-xl font-medium text-zinc-100">
              {portfolio.currently.value}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {portfolio.focus.label}
            </p>
            <ul className="mt-3 space-y-2">
              {portfolio.focus.items.map((item) => (
                <li key={item} className="text-[15px] text-zinc-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
