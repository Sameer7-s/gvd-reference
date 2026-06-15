"use client";

import { useRef } from "react";
import { BookOpen, Heart, Star, Users, type LucideIcon } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EASE_LUXURY } from "@/lib/motion";

type Experience = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  floatDuration: number;
  iconFloatDuration: number;
  revealDelay: number;
  staggerOffset?: boolean;
};

const EXPERIENCES: Experience[] = [
  {
    Icon: Star,
    title: "Daily Worship",
    desc: "Experience divine darshan and authentic spiritual practices.",
    floatDuration: 14,
    iconFloatDuration: 13,
    revealDelay: 0,
  },
  {
    Icon: BookOpen,
    title: "Bhagavad Gita Wisdom",
    desc: "Timeless teachings for modern challenges and inner peace.",
    floatDuration: 17,
    iconFloatDuration: 15,
    revealDelay: 120,
    staggerOffset: true,
  },
  {
    Icon: Heart,
    title: "Community Service",
    desc: "Food distribution and selfless service to humanity.",
    floatDuration: 15,
    iconFloatDuration: 16,
    revealDelay: 240,
  },
  {
    Icon: Users,
    title: "Spiritual Growth",
    desc: "Join a supportive community of devotees and seekers.",
    floatDuration: 18,
    iconFloatDuration: 12,
    revealDelay: 360,
    staggerOffset: true,
  },
];

function ExperienceCard({ experience }: { experience: Experience }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px", amount: 0.2 });
  const reduced = useReducedMotion();
  const visible = reduced || isInView;
  const { Icon, title, desc, floatDuration, iconFloatDuration, revealDelay, staggerOffset } =
    experience;

  return (
    <motion.div
      ref={ref}
      className={staggerOffset ? "experience-card-float--offset" : undefined}
      initial={reduced ? false : { opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.9,
        ease: EASE_LUXURY,
        delay: reduced ? 0 : revealDelay / 1000,
      }}
    >
      <div
        className="experience-card-float"
        style={
          reduced
            ? undefined
            : ({ "--float-duration": `${floatDuration}s` } as React.CSSProperties)
        }
      >
        <article className="experience-card group">
          <div
            className="experience-card-icon-wrap"
            style={
              reduced
                ? undefined
                : ({ "--icon-float-duration": `${iconFloatDuration}s` } as React.CSSProperties)
            }
          >
            <Icon size={24} strokeWidth={1.5} aria-hidden />
          </div>

          <h3 className="experience-card-title">
            {title}
            <span className="experience-card-title-line" aria-hidden />
          </h3>

          <p className="experience-card-desc">{desc}</p>
        </article>
      </div>
    </motion.div>
  );
}

export function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-10% 0px", amount: 0.3 });
  const reduced = useReducedMotion();
  const leftVisible = reduced || leftInView;

  return (
    <section className="experience-section" aria-labelledby="experience-heading">
      <div className="experience-container">
        {/* Left — editorial narrative */}
        <motion.div
          ref={leftRef}
          className="experience-left"
          initial={reduced ? false : { opacity: 0, y: 30 }}
          animate={leftVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: EASE_LUXURY }}
        >
          <p className="experience-eyebrow">Discover the Path</p>

          <h2 id="experience-heading" className="experience-heading">
            A Journey Towards
            <br />
            Inner Peace
          </h2>

          <p className="experience-description">
            Our temple is more than a place of worship; it is a sanctuary for the soul. We offer a
            holistic path to spiritual awakening through devotion, education, and community service.
            Step out of the chaos of daily life and discover the profound peace that comes from a
            genuine connection with the divine.
          </p>

          <div className="experience-divider" aria-hidden />
        </motion.div>

        {/* Right — curated experience grid */}
        <div className="experience-grid">
          {EXPERIENCES.map((item) => (
            <ExperienceCard key={item.title} experience={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
