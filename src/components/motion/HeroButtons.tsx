"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticWrap } from "./MagneticWrap";
import { EASE_LUXURY } from "@/lib/motion";

const tapScale = (reduced: boolean | null) =>
  reduced ? undefined : { scale: 0.97 };

type HeroPrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function HeroPrimaryButton({ href, children, className = "", style }: HeroPrimaryButtonProps) {
  const reduced = useReducedMotion();

  return (
    <MagneticWrap className="w-full sm:w-auto">
      <motion.div
        whileHover={reduced ? undefined : { scale: 1.03 }}
        whileTap={tapScale(reduced)}
        transition={{ duration: 0.25, ease: EASE_LUXURY }}
        style={{ willChange: "transform" }}
      >
        <Link
          href={href}
          className={`group w-full sm:w-auto flex items-center justify-center gap-2 ${className}`}
          style={{
            height: "56px",
            padding: "0 36px",
            borderRadius: "var(--radius-full)",
            background: "var(--color-text-primary)",
            color: "var(--color-bg-white)",
            fontSize: "16px",
            fontWeight: 500,
            boxShadow: "0 8px 24px rgba(17, 17, 17, 0.15)",
            fontFamily: "var(--font-inter)",
            transition: "box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
            ...style,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(17, 17, 17, 0.15)";
          }}
        >
          {children}
          <ArrowRight
            size={18}
            className="transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[4px]"
            aria-hidden
          />
        </Link>
      </motion.div>
    </MagneticWrap>
  );
}

type HeroSecondaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function HeroSecondaryButton({ href, children, className = "", style }: HeroSecondaryButtonProps) {
  const reduced = useReducedMotion();

  return (
    <MagneticWrap className="w-full sm:w-auto">
      <motion.div
        whileHover={reduced ? undefined : { scale: 1.02 }}
        whileTap={tapScale(reduced)}
        transition={{ duration: 0.25, ease: EASE_LUXURY }}
        style={{ willChange: "transform" }}
      >
        <Link
          href={href}
          className={`hero-btn-secondary w-full sm:w-auto flex items-center justify-center ${className}`}
          style={{
            height: "56px",
            padding: "0 36px",
            borderRadius: "var(--radius-full)",
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(17,17,17,0.1)",
            color: "var(--color-text-primary)",
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "var(--font-inter)",
            ...style,
          }}
        >
          {children}
        </Link>
      </motion.div>
    </MagneticWrap>
  );
}
