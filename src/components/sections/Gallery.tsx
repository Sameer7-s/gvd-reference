"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Lotus, Mandala, PeacockFeather } from "@/components/decor";

const templeDarshanImage = "/images/temple-darshan.jpg.png";

const timelineItems = [
  {
    number: "01",
    title: "Temple Architecture",
    description: "Marvel at intricate carvings and sacred designs crafted with devotion.",
    image: templeDarshanImage,
    alt: "Temple architecture with ornate sacred carvings",
  },
  {
    number: "02",
    title: "Morning Aarti",
    description: "Experience the divine beginning of the day with auspicious aarti and prayers.",
    image: "/photos/deity_new.png",
    alt: "Morning aarti lamp ceremony at the temple altar",
  },
  {
    number: "03",
    title: "Festival Celebrations",
    description: "Grand celebrations filled with flowers, lights, and spiritual bliss.",
    image: "/photos/deity.png",
    alt: "Festival celebration with decorated deities and flowers",
  },
  {
    number: "04",
    title: "Kirtan Evenings",
    description: "Immerse yourself in soulful kirtan and devotional music.",
    image: "/photos/krishna.png",
    alt: "Devotees gathered for an evening kirtan program",
  },
  {
    number: "05",
    title: "Devotee Gatherings",
    description: "A community bound by devotion, love, and spiritual connection.",
    image: templeDarshanImage,
    alt: "Devotees gathered together in the temple hall",
  },
] as const;

function EyebrowLabel() {
  return (
    <div className="tm-eyebrow-wrap">
      <Lotus className="tm-eyebrow-lotus text-[#C9A15B]" />
      <div className="tm-eyebrow-row">
        <div className="tm-eyebrow-rule" aria-hidden="true">
          <span className="tm-eyebrow-line" />
          <span className="tm-eyebrow-diamond" />
        </div>
        <p className="tm-eyebrow">Temple Gallery</p>
        <div className="tm-eyebrow-rule tm-eyebrow-rule--reverse" aria-hidden="true">
          <span className="tm-eyebrow-line" />
          <span className="tm-eyebrow-diamond" />
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section
      id="gallery"
      className="temple-moments-section"
      aria-labelledby="temple-moments-heading"
    >
      <div className="tm-paper-texture" aria-hidden="true" />
      <PeacockFeather className="tm-peacock" aria-hidden="true" />
      <Mandala className="tm-mandala text-[#C9A15B]" petals={24} aria-hidden="true" />

      <div className="tm-container">
        <Reveal className="tm-header">
          <EyebrowLabel />
          <h2 id="temple-moments-heading" className="tm-heading">
            Temple Moments
          </h2>
          <p className="tm-description">
            Experience the beauty of devotion, sacred architecture, timeless rituals, and the
            living traditions that make every visit to the temple unforgettable.
          </p>
        </Reveal>

        <div className="tm-content">
          {/* Column 1: Featured Image */}
          <Reveal className="tm-featured">
            <div className="tm-featured-image-wrap">
              <Image
                src="/photos/deity.png"
                alt="Radha Krishna deities on the temple altar with warm golden lighting"
                fill
                className="object-cover object-center"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 70vw, 55vw"
                priority
              />
              <div className="tm-featured-badge">
                <Star className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Most Visited</span>
              </div>
              <aside className="tm-overlay-card">
                <Lotus className="h-5 w-5 text-[#C9A15B]" aria-hidden="true" />
                <h3 className="tm-overlay-title">Daily Darshan Experience</h3>
                <p className="tm-overlay-description">
                  Witness the divine presence of Radha Krishna and experience the sacred atmosphere
                  of daily worship.
                </p>
                <div className="tm-overlay-divider" aria-hidden="true" />
                <Link href="/visit" className="tm-overlay-cta">
                  Explore Moments <span aria-hidden="true">→</span>
                </Link>
              </aside>
            </div>
          </Reveal>

          {/* Column 2: Vertical Image Stack */}
          {timelineItems.map((item, index) => (
            <Reveal
              key={item.number}
              delay={(index + 1) * 80}
              className={`tm-stack-image tm-stack-image--${index}`}
            >
              <div className="tm-stack-image-wrap group">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-[filter] duration-300 group-hover:brightness-110"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 15vw"
                />
              </div>
            </Reveal>
          ))}

          {/* Column 3: Timeline */}
          <div className="tm-timeline-column">
            <div className="tm-timeline-line" aria-hidden="true" />

            {timelineItems.map((item, index) => (
              <Reveal key={item.number} delay={(index + 1) * 80} className="tm-timeline-item-wrap">
                <article className="tm-timeline-item">
                  <span className="tm-timeline-dot" aria-hidden="true" />
                  <div className="tm-timeline-copy">
                    <span className="tm-timeline-number">{item.number}</span>
                    <h3 className="tm-timeline-title">{item.title}</h3>
                    <p className="tm-timeline-description">{item.description}</p>
                  </div>
                  <Link
                    href="/visit"
                    className="tm-arrow-btn"
                    aria-label={`Explore ${item.title}`}
                  >
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
