import type { Variants } from "framer-motion";

export const ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.12 },
    },
  } satisfies Variants,
  item: {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  } satisfies Variants,
  portrait: {
    initial: {
      opacity: 0,
      scale: 1.35,
      filter: "blur(15px)",
      rotate: 8,
      y: 40,
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      rotate: 0,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 22, delay: 0.15 },
    },
  } satisfies Variants,
  section: {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  } satisfies Variants,
};
