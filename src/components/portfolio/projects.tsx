"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand";
import { portfolio, type Project } from "@/data/portfolio";
import { ANIMATIONS } from "./animations";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const visibleStack = project.stack.slice(0, project.featured ? 8 : 6);
  const hiddenStackCount = project.stack.length - visibleStack.length;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 90 }}
      whileHover={{ y: -3 }}
      className={cn(
        "group flex flex-col rounded-2xl border bg-zinc-900/40 p-6 backdrop-blur-sm transition hover:bg-zinc-900/60",
        project.featured
          ? "border-blue-400/20 hover:border-blue-400/35 md:col-span-1"
          : "border-white/5 hover:border-white/12"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border",
              project.featured
                ? "border-blue-400/25 bg-blue-500/10 text-blue-300"
                : "border-white/10 bg-white/[0.03] text-zinc-300"
            )}
          >
            <project.icon size={20} aria-hidden />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-medium tracking-wide text-zinc-100">
                {project.name}
              </h3>
              {project.featured && (
                <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-300">
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <ul
        className="mt-5 flex flex-wrap gap-2"
        aria-label={`${project.name} technologies`}
      >
        {visibleStack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-400"
          >
            {tech}
          </li>
        ))}
        {hiddenStackCount > 0 && (
          <li className="rounded-md border border-white/5 px-2 py-0.5 text-[11px] text-zinc-500">
            +{hiddenStackCount} more
          </li>
        )}
      </ul>

      <div className="mt-5">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-zinc-500 transition hover:text-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
        >
          Key features
          <ChevronDown
            size={14}
            className={cn("transition-transform", open && "rotate-180")}
            aria-hidden
          />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 space-y-1.5 overflow-hidden text-sm text-zinc-400"
            >
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400/70" />
                  <span>{feature}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
        >
          <GithubIcon size={14} />
          GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white px-3.5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ExternalLink size={14} aria-hidden />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12"
      aria-labelledby="projects-heading"
    >
      <motion.div
        variants={ANIMATIONS.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Selected Work
            </p>
            <h2
              id="projects-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Projects
            </h2>
            <p className="mt-3 max-w-xl text-sm text-zinc-500">
              Public repositories from my GitHub — full-stack, AI, and civic
              platforms I&apos;ve built and iterated on.
            </p>
          </div>
          <a
            href={portfolio.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          >
            <GithubIcon size={16} />
            {portfolio.github.label}
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {portfolio.projects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
