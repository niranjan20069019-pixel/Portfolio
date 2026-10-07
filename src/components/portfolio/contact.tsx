"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ANIMATIONS } from "./animations";

function isExternal(href: string) {
  return href.startsWith("http");
}

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 pb-36 pt-20 sm:px-8 lg:px-12"
      aria-labelledby="contact-heading"
    >
      <motion.div
        variants={ANIMATIONS.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          {portfolio.contact.heading}
        </p>
        <h2
          id="contact-heading"
          className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {portfolio.name.full}
        </h2>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-zinc-400">
          {portfolio.contact.blurb}
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {portfolio.contact.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={isExternal(link.href) ? "_blank" : undefined}
                rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-zinc-900/40 px-5 py-4 backdrop-blur-sm transition hover:border-white/12 hover:bg-zinc-900/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition group-hover:text-white">
                  <link.icon size={18} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    {link.label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm text-zinc-200">
                    {link.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-20 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center gap-5 text-center">
            <div>
              <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.2em] text-zinc-200">
                {portfolio.name.full}
              </p>
              <p className="mt-1.5 text-xs text-zinc-500">{portfolio.role}</p>
            </div>
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {portfolio.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={isExternal(item.href) ? "_blank" : undefined}
                    rel={
                      isExternal(item.href) ? "noopener noreferrer" : undefined
                    }
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900/60 text-zinc-400 transition hover:border-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                  >
                    <item.icon size={16} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-zinc-600">
              © 2026 {portfolio.name.full}
            </p>
          </div>
        </footer>
      </motion.div>
    </section>
  );
}
