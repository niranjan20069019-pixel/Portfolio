"use client";

import { motion } from "framer-motion";
import { portfolio, type CertificateRecord } from "@/data/portfolio";
import { ANIMATIONS } from "./animations";
import { cn } from "@/lib/utils";

const groupOrder = [
  { key: "certifications", label: "Certifications & Training" },
  { key: "workshops", label: "Workshops" },
  { key: "hackathons", label: "Hackathons & Innovation" },
] as const;

function getGroups(certificates: CertificateRecord[]) {
  return {
    certifications: certificates.filter(
      (item) => item.category.includes("Cybersecurity") || item.category.includes("Training Program")
    ),
    workshops: certificates.filter((item) => item.category.includes("Workshop")),
    hackathons: certificates.filter((item) => item.category.includes("Hackathon")),
  };
}

function CertificateCard({
  certificate,
  index,
}: {
  certificate: CertificateRecord;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group rounded-2xl border border-white/10 bg-zinc-900/45 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition hover:border-white/20 hover:bg-zinc-900/60",
        certificate.featured && "md:col-span-2"
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-400">
          {certificate.category}
        </span>
        {certificate.featured && (
          <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-amber-200">
            Featured
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-medium tracking-wide text-zinc-100">
        {certificate.title}
      </h3>
      <p className="mt-1 text-sm text-zinc-400">{certificate.organization}</p>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-zinc-500">
        <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1">
          {certificate.date}
        </span>
        <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1">
          {certificate.certificateType}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
        {certificate.description}
      </p>
    </motion.article>
  );
}

export function Experience() {
  const certificates = portfolio.certificates;
  const grouped = getGroups(certificates);
  const timelineEntries = [
    { year: "2024", title: "National Level Short Term Training Program – Java Full Stack with React JS & AI" },
    { year: "2025", title: "SAP HACKFEST – Team Trailblazer" },
    { year: "2025", title: "Next-Gen Security Workshop" },
    { year: "2026", title: "Cybersecurity – Skill India Digital Hub" },
    { year: "2026", title: "Smart India Hackathon – College-Level SIH 2026" },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12"
      aria-labelledby="experience-heading"
    >
      <motion.div
        variants={ANIMATIONS.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Professional chapter
        </p>
        <h2
          id="experience-heading"
          className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Certifications, Workshops & Hackathon Experience
        </h2>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-zinc-400">
          {portfolio.experience.summary}
        </p>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-8">
            {groupOrder.map((group) => {
              const items = grouped[group.key];

              if (!items.length) return null;

              return (
                <div key={group.key}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px flex-1 bg-white/10" />
                    <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                      {group.label}
                    </h3>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {items.map((certificate, index) => (
                      <CertificateCard
                        key={certificate.id}
                        certificate={certificate}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-sm"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Timeline
            </p>
            <div className="relative mt-6 space-y-5 before:absolute before:left-[0.55rem] before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-white/10">
              {timelineEntries.map((entry) => (
                <motion.div
                  key={`${entry.year}-${entry.title}`}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  className="relative pl-8"
                >
                  <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-amber-200/60 bg-amber-400/30 shadow-[0_0_16px_rgba(251,191,36,0.45)]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    {entry.year}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                    {entry.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
