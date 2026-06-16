"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const templeDarshanImage = "/images/temple-darshan.jpg.png";

const experiences = [
  {
    title: "Sunday Feast",
    badge: "COMMUNITY EXPERIENCE",
    image: templeDarshanImage,
    description:
      "A warm weekly celebration of kirtan, wisdom, prasadam and shared devotional joy.",
  },
  {
    title: "Bhagavad Gita Classes",
    badge: "WISDOM JOURNEY",
    image: templeDarshanImage,
    description:
      "Enter the timeless teachings of the Gita through practical reflection and guided study.",
  },
  {
    title: "Meditation Sessions",
    badge: "INNER STILLNESS",
    image: "/photos/deity_new.png",
    description:
      "Find quiet focus through mantra meditation, breath, sacred sound and gentle presence.",
  },
  {
    title: "Youth Programs",
    badge: "NEXT GENERATION",
    image: "/photos/deity.png",
    description:
      "Nurturing young hearts through culture, service, creativity and spiritual friendship.",
  },
  {
    title: "Kirtan Evenings",
    badge: "SACRED SOUND",
    image: "/photos/deity_new.png",
    description:
      "An immersive evening of devotional music where mantra, rhythm and devotion meet.",
  },
  {
    title: "Festival Celebrations",
    badge: "TEMPLE FESTIVAL",
    image: "/photos/deity_new.png",
    description:
      "Grand celebrations filled with darshan, aarti, flowers, sacred stories and prasadam.",
  },
];

const featuredExperience = {
  title: "Temple Darshan Experience",
  badge: "DAILY DARSHAN",
  image: templeDarshanImage,
  description:
    "Step into the sacred atmosphere of daily darshan and experience the beauty of Radha Krishna through devotion, prayer and spiritual connection.",
};

const featureSlides = [featuredExperience, ...experiences];

export function Programs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? featuredExperience : experiences[activeIndex];

  return (
    <section className="experiences-section" id="programs" aria-labelledby="experiences-heading">
      <div className="experiences-bg" aria-hidden />
      <div className="experiences-overlay" aria-hidden />
      <div className="experiences-particles" aria-hidden />
      <div className="experiences-geometry" aria-hidden />

      <div className="experiences-container">
        <Reveal className="experiences-header">
          <p className="experiences-eyebrow">Spiritual Journeys</p>
          <h2 id="experiences-heading" className="experiences-heading">
            Explore Spiritual Experiences
          </h2>
          <p className="experiences-intro">
            Discover a variety of programs designed to nourish your soul and build a strong
            spiritual foundation.
          </p>
        </Reveal>

        <div className="experiences-layout">
          <Reveal className="experiences-feature-shell">
            <div className="experiences-glow" aria-hidden />
            <article className="experiences-feature-card">
              <div className="experiences-image-stack" aria-hidden>
                {featureSlides.map((slide, index) => {
                  const isActive = slide.title === active.title;

                  return (
                    <Image
                      key={`${slide.title}-${slide.image}-${index}`}
                      src={slide.image}
                      alt=""
                      fill
                      className={`experiences-feature-image${isActive ? " is-active" : ""}`}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={index === 0}
                    />
                  );
                })}
              </div>
              <div className="experiences-feature-gradient" aria-hidden />
              <div className="experiences-badge">{active.badge}</div>
              <div key={active.title} className="experiences-feature-content">
                <h3>{active.title}</h3>
                <p>{active.description}</p>
                <a href="/visit" className="experiences-feature-link">
                  Explore Experience
                  <ArrowRight size={18} aria-hidden />
                </a>
              </div>
            </article>
          </Reveal>

          <div className="experiences-list" aria-label="Spiritual experiences">
            {experiences.map((experience, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  className={`experience-item${isActive ? " is-active" : ""}`}
                  key={experience.title}
                  type="button"
                  onFocus={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span className="experience-accent" aria-hidden />
                  <span className="experience-copy">
                    <span className="experience-kicker">{experience.badge}</span>
                    <span className="experience-title">{experience.title}</span>
                    <span className="experience-description">{experience.description}</span>
                  </span>
                  <ArrowRight className="experience-arrow" size={22} aria-hidden />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
