"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ANIMATIONS } from "./animations";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12"
      aria-labelledby="education-heading"
    >
      <motion.div
        variants={ANIMATIONS.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Education
        </p>
        <h2
          id="education-heading"
          className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Academic path
        </h2>

        <ol className="mt-10 space-y-0 border-l border-white/10">
          {portfolio.education.map((item) => (
            <li key={item.degree} className="relative pl-8 pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-blue-400/60 bg-zinc-950"
              />
              <h3 className="text-lg font-medium text-zinc-100">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{item.institution}</p>
              <p className="mt-3 text-sm text-zinc-300">
                CGPA: <span className="tabular-nums text-white">{item.cgpa}</span>
              </p>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
