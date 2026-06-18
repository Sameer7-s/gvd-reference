"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * SectionBlurTransition
 * Places a tall, scroll-parallax gradient fade between a dark section (above)
 * and a light section (below). The blurred orb in the centre drifts slightly
 * as the user scrolls, giving a luxurious depth effect.
 *
 * Props
 *  fromColor  — CSS color of the outgoing section bg  (default: dark navy)
 *  toColor    — CSS color of the incoming section bg  (default: light blue-grey)
 *  height     — height of the transition band (default: 180px)
 */
export function SectionBlurTransition({
  fromColor = "#041120",
  toColor = "#E8EFF8",
  height = 180,
}: {
  fromColor?: string;
  toColor?: string;
  height?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Orb drifts upward as section scrolls into view
  const orbY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "relative",
        height,
        overflow: "hidden",
        // Hard gradient: from-section colour → to-section colour
        background: `linear-gradient(to bottom, ${fromColor} 0%, ${toColor} 100%)`,
        zIndex: 2,
      }}
    >
      {/* Frosted glass orb — the blur centrepiece */}
      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
          y: orbY,
          opacity: orbOpacity,
          width: "min(520px, 80vw)",
          height: "min(260px, 50vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(100,160,230,0.18) 0%, rgba(100,160,230,0.06) 55%, transparent 100%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Soft vignette edges left & right so orb doesn't feel clipped */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to right, ${fromColor}55 0%, transparent 20%, transparent 80%, ${toColor}55 100%)`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
