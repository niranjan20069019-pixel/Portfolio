"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ANIMATIONS } from "./animations";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12"
      aria-labelledby="skills-heading"
    >
      <motion.div
        variants={ANIMATIONS.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Skills
        </p>
        <h2
          id="skills-heading"
          className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Core strengths
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((skill, idx) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, type: "spring", stiffness: 100 }}
              whileHover={{ y: -2 }}
              className="rounded-2xl border border-white/5 bg-zinc-900/40 p-5 backdrop-blur-sm transition hover:border-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-blue-400/80">
                  <skill.icon size={18} aria-hidden />
                </span>
                <span className="text-sm font-medium text-zinc-200">
                  {skill.label}
                </span>
              </div>
              <div className="relative mt-4 h-1 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + idx * 0.08 }}
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500/80 to-indigo-400/60"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Also used in projects
          </p>
          <p className="mt-2 max-w-xl text-sm text-zinc-500">
            Technologies demonstrated in my public GitHub repositories — not
            claimed as professional work experience.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {portfolio.projectTechnologies.map((tech, idx) => (
              <motion.li
                key={tech.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-zinc-900/50 px-3.5 py-2 text-sm text-zinc-300 backdrop-blur-sm">
                  <tech.icon size={14} className="text-blue-400/70" aria-hidden />
                  {tech.label}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
