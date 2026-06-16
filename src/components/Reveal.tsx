"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EASE_LUXURY, MOTION } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  y?: number;
};

export function Reveal({ children, className = "", delay = 0, as = "div", y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px", amount: 0.12 });
  const reduced = useReducedMotion();
  const visible = reduced || isInView;

  let Tag: any = motion.div;
  if (as === "section") Tag = motion.section;
  else if (as === "article") Tag = motion.article;
  else if (as === "span") Tag = motion.span;
  else if (as === "p") Tag = motion.p;
  else if (as === "h1") Tag = motion.h1;
  else if (as === "h2") Tag = motion.h2;
  else if (as === "h3") Tag = motion.h3;
  else if (as === "header") Tag = motion.header;
  else if (as === "footer") Tag = motion.footer;
  else if (as === "nav") Tag = motion.nav;

  return (
    <Tag
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: MOTION.section.duration,
        ease: EASE_LUXURY,
        delay: reduced ? 0 : delay / 1000,
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </Tag>
  );
}
