"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EASE_LUXURY, MOTION } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  y?: number;
};

/**
 * Scroll-triggered reveal with Framer Motion.
 * Honours prefers-reduced-motion by showing content immediately.
 */
export function Reveal({ children, className = "", delay = 0, as = "div", y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px", amount: 0.12 });
  const reduced = useReducedMotion();
  const visible = reduced || isInView;

  const Tag = (motion[as as keyof typeof motion] ?? motion.div) as typeof motion.div;

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
