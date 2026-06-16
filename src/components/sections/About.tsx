"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="sanctuary-section" aria-labelledby="sanctuary-heading">
      {/* Layer 1 — Krishna artwork */}
      <div className="sanctuary-bg" aria-hidden />

      {/* Layer 2 — premium gradient overlay */}
      <div className="sanctuary-overlay" aria-hidden />

      {/* Gold particle field */}
      <div className="sanctuary-particles" aria-hidden />

      {/* Layer 3 — content */}
      <div className="sanctuary-container">
        <div className="sanctuary-left sanctuary-reveal">
          <p className="sanctuary-eyebrow">About Our Sanctuary</p>

          <h2 id="sanctuary-heading" className="sanctuary-heading">
            Ancient Wisdom.
            <br />
            Modern Spiritual Living.
          </h2>

          <p className="sanctuary-description">
            A sanctuary where timeless devotion meets contemporary spiritual living. Here, ancient
            wisdom flows through daily worship, kirtan, and community seva — inviting every seeker
            into the presence of Krishna.
          </p>

        </div>

        <div className="sanctuary-right sanctuary-reveal sanctuary-reveal--delayed">
          <div className="sanctuary-image-glow" aria-hidden />

          <div className="sanctuary-image-wrap">
            <Image
              src="/photos/krishna.png"
              alt="Krishna Darshan at the temple"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 650px"
              priority
            />
          </div>

          <article className="sanctuary-float-card sanctuary-float-card--stats">
            <p className="sanctuary-float-stat">50+ Years</p>
            <p className="sanctuary-float-label">of Spiritual Service</p>
          </article>

          <article className="sanctuary-float-card sanctuary-float-card--experience">
            <p className="sanctuary-float-title">Daily Worship</p>
            <p className="sanctuary-float-desc">
              Experience sacred darshan
              <br />
              and devotional practices.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
