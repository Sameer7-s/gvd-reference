"use client";

import { useEffect, useState, type RefObject } from "react";

type ParallaxPoint = { x: number; y: number };

/**
 * Normalized mouse position within a container (-1 … 1).
 * Returns {0,0} on leave and when reduced motion is preferred.
 */
export function useMouseParallax(ref: RefObject<HTMLElement | null>): ParallaxPoint {
  const [point, setPoint] = useState<ParallaxPoint>({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setPoint({ x, y });
    };

    const onLeave = () => setPoint({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);

  return point;
}

export function parallaxOffset(
  point: ParallaxPoint,
  px: number,
): { x: number; y: number } {
  return { x: point.x * px, y: point.y * px };
}
