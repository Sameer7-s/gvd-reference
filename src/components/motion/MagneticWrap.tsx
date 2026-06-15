"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MagneticWrapProps = {
  children: ReactNode;
  className?: string;
  maxOffset?: number;
};

/** Subtle cursor-follow offset for premium CTAs (max 4px). */
export function MagneticWrap({ children, className = "", maxOffset = 4 }: MagneticWrapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setOffset({
      x: Math.max(-maxOffset, Math.min(maxOffset, relX * maxOffset)),
      y: Math.max(-maxOffset, Math.min(maxOffset, relY * maxOffset)),
    });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.4 }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
