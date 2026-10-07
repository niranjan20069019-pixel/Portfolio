"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolio, type NavId } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function FloatingNav() {
  const [active, setActive] = useState<NavId>("about");

  useEffect(() => {
    const sectionIds = portfolio.nav.map((n) => n.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: NavId) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-3 sm:bottom-7"
    >
      <motion.div
        layout
        className="pointer-events-auto flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-white/10 bg-zinc-900/80 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/5 backdrop-blur-2xl scrollbar-none"
      >
        {portfolio.nav.map((item) => {
          const isActive = active === item.id;
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              whileTap={{ scale: 0.96 }}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative h-11 min-w-[3.75rem] shrink-0 rounded-full px-2.5 text-xs font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 sm:min-w-[5rem] sm:px-3.5 sm:text-sm",
                isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="island-surface"
                  className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/5 shadow-inner"
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -bottom-0.5 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </nav>
  );
}
