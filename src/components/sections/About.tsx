"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="sanctuary-section" aria-labelledby="sanctuary-heading">
      {/* Layer 1 — Krishna artwork */}
      <div className="sanctuary-bg" aria-hidden />

      {/* Layer 1.5 - Watermark */}
      <div className="sanctuary-watermark" aria-hidden>KRISHNA</div>
      <div className="sanctuary-mandala" aria-hidden />
      <div className="sanctuary-feather" aria-hidden>
        <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 190 C 50 190, 48 100, 50 20 C 52 100, 50 190, 50 190 Z" stroke="#C9A15B" strokeWidth="0.5"/>
          <path d="M50 20 C 30 40, 20 80, 50 120 C 80 80, 70 40, 50 20 Z" stroke="#0D7C72" strokeWidth="0.5" fill="rgba(13, 124, 114, 0.1)"/>
          <circle cx="50" cy="55" r="8" stroke="#C9A15B" strokeWidth="0.5" fill="rgba(10, 74, 122, 0.5)"/>
          <circle cx="50" cy="55" r="4" fill="#041F38"/>
          <path d="M50 40 Q 35 30 25 50" stroke="#C9A15B" strokeWidth="0.3"/>
          <path d="M50 45 Q 30 40 20 60" stroke="#C9A15B" strokeWidth="0.3"/>
          <path d="M50 50 Q 25 50 15 70" stroke="#C9A15B" strokeWidth="0.3"/>
          <path d="M50 60 Q 30 70 25 90" stroke="#C9A15B" strokeWidth="0.3"/>
          <path d="M50 70 Q 35 85 30 105" stroke="#C9A15B" strokeWidth="0.3"/>
          <path d="M50 40 Q 65 30 75 50" stroke="#C9A15B" strokeWidth="0.3"/>
          <path d="M50 45 Q 70 40 80 60" stroke="#C9A15B" strokeWidth="0.3"/>
          <path d="M50 50 Q 75 50 85 70" stroke="#C9A15B" strokeWidth="0.3"/>
          <path d="M50 60 Q 70 70 75 90" stroke="#C9A15B" strokeWidth="0.3"/>
          <path d="M50 70 Q 65 85 70 105" stroke="#C9A15B" strokeWidth="0.3"/>
        </svg>
      </div>

      {/* Layer 2 — premium gradient overlay */}
      <div className="sanctuary-overlay" aria-hidden />



      {/* Layer 3 — content */}
      <div className="sanctuary-container">
        <div className="sanctuary-left sanctuary-reveal">
          <div className="sanctuary-eyebrow-wrap">
            <p className="sanctuary-eyebrow">ABOUT OUR SANCTUARY</p>
            <div className="sanctuary-eyebrow-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 9 8 12 12C15 8 12 2 12 2Z" fill="#C9A15B"/>
                <path d="M12 22C12 22 9 16 12 12C15 16 12 22 12 22Z" fill="#C9A15B"/>
                <path d="M2 12C2 12 8 9 12 12C8 15 2 12 2 12Z" fill="#C9A15B"/>
                <path d="M22 12C22 12 16 9 12 12C16 15 22 12 22 12Z" fill="#C9A15B"/>
                <circle cx="12" cy="12" r="2" fill="#C9A15B"/>
              </svg>
            </div>
          </div>

          <h2 id="sanctuary-heading" className="sanctuary-heading">
            Ancient Wisdom.
            <br />
            Modern Spiritual Living.
          </h2>

          <div className="sanctuary-divider-wrap">
            <div className="sanctuary-divider-line"></div>
            <div className="sanctuary-divider-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 9 8 12 12C15 8 12 2 12 2Z" fill="#C9A15B"/>
                <path d="M12 22C12 22 9 16 12 12C15 16 12 22 12 22Z" fill="#C9A15B"/>
                <path d="M2 12C2 12 8 9 12 12C8 15 2 12 2 12Z" fill="#C9A15B"/>
                <path d="M22 12C22 12 16 9 12 12C16 15 22 12 22 12Z" fill="#C9A15B"/>
                <circle cx="12" cy="12" r="2" fill="#C9A15B"/>
              </svg>
            </div>
            <div className="sanctuary-divider-line"></div>
          </div>

          <p className="sanctuary-description">
            A sanctuary where timeless devotion meets contemporary spiritual living. Here, ancient
            wisdom flows through daily worship, kirtan, and community seva — inviting every seeker
            into the presence of Krishna.
          </p>

        </div>

        <div className="sanctuary-right sanctuary-reveal sanctuary-reveal--delayed">

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
            <div className="sanctuary-float-header">
              <span className="sanctuary-float-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C12 2 9 8 12 12C15 8 12 2 12 2Z" fill="#C9A15B"/>
                  <path d="M12 22C12 22 9 16 12 12C15 16 12 22 12 22Z" fill="#C9A15B"/>
                  <path d="M2 12C2 12 8 9 12 12C8 15 2 12 2 12Z" fill="#C9A15B"/>
                  <path d="M22 12C22 12 16 9 12 12C16 15 22 12 22 12Z" fill="#C9A15B"/>
                  <circle cx="12" cy="12" r="2" fill="#C9A15B"/>
                </svg>
              </span>
              <p className="sanctuary-float-title">Daily Worship</p>
            </div>
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
