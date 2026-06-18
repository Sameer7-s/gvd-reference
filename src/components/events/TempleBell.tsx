"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

type TempleBellProps = {
  className?: string;
  delay?: number;
};

function BellSvg({ className, gradId }: { className?: string; gradId: string }) {
  return (
    <svg viewBox="0 0 48 72" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4E5F2" />
          <stop offset="35%" stopColor="#90B4CE" />
          <stop offset="70%" stopColor="#5D809E" />
          <stop offset="100%" stopColor="#3E5B75" />
        </linearGradient>
      </defs>
      <line x1="24" y1="0" x2="24" y2="14" stroke="#7898B0" strokeWidth="2" />
      <circle cx="24" cy="16" r="3" fill="#B6D0E6" />
      <path
        d="M12 22 C12 18, 18 14, 24 14 C30 14, 36 18, 36 22 L38 52 C38 58, 32 62, 24 62 C16 62, 10 58, 10 52 Z"
        fill={`url(#${gradId})`}
      />
      <ellipse cx="24" cy="22" rx="10" ry="3" fill="#D4E5F2" opacity="0.6" />
      <path d="M18 62 Q24 68 30 62" fill="none" stroke="#3E5B75" strokeWidth="2" />
      <circle cx="24" cy="66" r="2.5" fill="#5D809E" />
    </svg>
  );
}

export function TempleBell({ className, delay = 0 }: TempleBellProps) {
  const reduced = useReducedMotion();
  const gradId = useId().replace(/:/g, "");

  return (
    <motion.div
      className={className}
      aria-hidden="true"
      animate={reduced ? undefined : { y: [-8, 8, -8] }}
      transition={
        reduced
          ? undefined
          : {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }
      }
    >
      <BellSvg className="sg-bell-svg" gradId={gradId} />
    </motion.div>
  );
}
