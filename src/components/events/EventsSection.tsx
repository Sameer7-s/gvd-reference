"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Lotus } from "@/components/decor";
import { TempleBackground } from "./TempleBackground";
import { TempleArch } from "./TempleArch";
import { EventCategoryCards } from "./EventCategoryCard";

function LotusDivider() {
  return (
    <div className="sg-lotus-divider" aria-hidden="true">
      <span className="sg-lotus-divider-line" />
      <Lotus className="sg-lotus-divider-icon text-[#C89A4B]" />
      <span className="sg-lotus-divider-line" />
    </div>
  );
}

function FooterOrnament() {
  return (
    <div className="sg-footer-ornament">
      <span className="sg-footer-scroll" aria-hidden="true" />
      <Link href="/visit" className="sg-footer-link">
        View all events and temple calendar
      </Link>
      <span className="sg-footer-scroll sg-footer-scroll--reverse" aria-hidden="true" />
    </div>
  );
}

export function EventsSection() {
  return (
    <section
      id="events"
      className="sacred-gatherings-section"
      aria-labelledby="sacred-gatherings-heading"
    >
      <TempleBackground />

      <div className="sg-container">
        <Reveal className="sg-header">
          <LotusDivider />
          <p className="sg-eyebrow">Upcoming</p>
          <h2 id="sacred-gatherings-heading" className="sg-heading">
            Sacred Gatherings
          </h2>
          <p className="sg-subtitle">
            Moments of devotion, celebration, and spiritual connection.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <TempleArch />
        </Reveal>

        <Reveal delay={160}>
          <EventCategoryCards />
        </Reveal>

        <Reveal delay={220}>
          <FooterOrnament />
        </Reveal>
      </div>
    </section>
  );
}
