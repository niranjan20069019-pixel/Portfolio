"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ANIMATIONS } from "./animations";

export function Portrait() {
  const { portrait, status, floatingCard } = portfolio;

  return (
    <motion.div
      layout="position"
      className="relative mx-auto w-[min(100%,22rem)] sm:w-[24rem] lg:w-[28rem] aspect-square shrink-0"
    >
      {/* Outer rotating dashed ring */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-8%] rounded-full border border-dashed border-white/15 border-l-blue-400/40"
      />

      {/* Second faint dashed ring */}
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-16%] rounded-full border border-dashed border-white/5"
      />

      {/* Soft radial glow */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[-4%] rounded-full bg-gradient-to-br from-blue-500/40 via-indigo-600/20 to-transparent blur-3xl"
      />

      {/* Glass circular frame */}
      <div className="absolute inset-0 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.65)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />

        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
          className="relative z-0 h-full w-full"
        >
          <motion.div
            variants={ANIMATIONS.portrait}
            initial="initial"
            animate="animate"
            className="relative h-full w-full"
          >
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              priority
              sizes="(max-width: 768px) 88vw, 28rem"
              className="object-cover object-[center_18%] scale-[1.02]"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Availability pill */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 120, damping: 18 }}
        className="absolute -bottom-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-3.5 py-2 text-[10px] font-medium tracking-[0.14em] text-zinc-200 backdrop-blur-xl shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {status.label}
        </div>
      </motion.div>

      {/* Floating student card */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 120, damping: 18 }}
        className="absolute -right-2 top-[12%] z-20 hidden sm:block"
      >
        <div className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-zinc-400">
            {floatingCard.title}
          </p>
          <p className="mt-1 text-[11px] tracking-wide text-zinc-200">
            {floatingCard.subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
