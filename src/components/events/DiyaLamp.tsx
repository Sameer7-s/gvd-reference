"use client";

import { motion, useReducedMotion } from "framer-motion";

type DiyaLampProps = {
  className?: string;
};

export function DiyaLamp({ className }: DiyaLampProps) {
  const reduced = useReducedMotion();

  return (
    <div className={className} aria-hidden="true">
      <div className="sg-diya-glow" />
      <svg viewBox="0 0 56 48" className="sg-diya-svg">
        <ellipse cx="28" cy="38" rx="22" ry="8" fill="#C4A062" opacity="0.5" />
        <path
          d="M8 34 C8 28, 16 24, 28 24 C40 24, 48 28, 48 34 C48 38, 40 42, 28 42 C16 42, 8 38, 8 34 Z"
          fill="#D4AF37"
        />
        <path d="M12 34 C12 30, 18 28, 28 28 C38 28, 44 30, 44 34" fill="#E8C76A" opacity="0.5" />
        <motion.path
          d="M28 24 C26 16, 28 8, 28 4 C28 8, 30 16, 28 24"
          fill="#FF8C2A"
          animate={
            reduced
              ? undefined
              : {
                  opacity: [0.85, 1, 0.9, 1, 0.85],
                  scaleY: [1, 1.08, 0.96, 1.05, 1],
                }
          }
          transition={
            reduced
              ? undefined
              : {
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformOrigin: "28px 24px" }}
        />
        <motion.path
          d="M28 20 C24 12, 22 6, 24 2 C26 6, 30 12, 28 20"
          fill="#FFB347"
          opacity="0.7"
          animate={reduced ? undefined : { opacity: [0.5, 0.85, 0.6, 0.8, 0.5] }}
          transition={
            reduced ? undefined : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </svg>
    </div>
  );
}
