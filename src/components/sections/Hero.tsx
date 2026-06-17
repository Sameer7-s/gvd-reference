import React from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';

export function Hero() {
  return (
    <section className="luxury-hero overflow-hidden relative w-full min-h-[100vh] flex items-center">
      <style dangerouslySetInnerHTML={{ __html: `
        .luxury-hero {
          background-color: #FAF8F4;
          position: relative;
          z-index: 1;
        }

        /* Paper Texture */
        .luxury-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.03"/%3E%3C/svg%3E');
          pointer-events: none;
          z-index: 2;
        }

        /* Watercolor Clouds */
        .hero-cloud-1 {
          position: absolute;
          top: -10%; right: 10%;
          width: 50%; height: 70%;
          background: radial-gradient(ellipse at center, #EAF1FB 0%, transparent 70%);
          filter: blur(100px);
          opacity: 0.8;
          z-index: 2;
        }
        .hero-cloud-2 {
          position: absolute;
          bottom: -20%; left: -10%;
          width: 60%; height: 80%;
          background: radial-gradient(ellipse at center, #DCE8F9 0%, transparent 70%);
          filter: blur(120px);
          opacity: 0.6;
          z-index: 2;
        }
        .hero-cloud-3 {
          position: absolute;
          top: 30%; left: 30%;
          width: 40%; height: 50%;
          background: radial-gradient(ellipse at center, #F3F7FD 0%, transparent 70%);
          filter: blur(90px);
          opacity: 0.7;
          z-index: 2;
        }

        /* Temple Architecture */
        .hero-temple {
          position: absolute;
          bottom: 0;
          right: -5%;
          width: 60%;
          height: 50%;
          background: url('/images/footer/skyline.png') no-repeat bottom right;
          background-size: contain;
          opacity: 0.25;
          mix-blend-mode: multiply;
          filter: sepia(1) hue-rotate(190deg) saturate(1.2) brightness(1.1) blur(1px);
          z-index: 3;
          pointer-events: none;
        }

        /* Sacred Mandalas */
        .hero-mandala {
          position: absolute;
          width: 400px;
          height: 400px;
          background: url('/images/footer/mandala.png') no-repeat center;
          background-size: contain;
          opacity: 0.10;
          mix-blend-mode: multiply;
          filter: sepia(1) hue-rotate(30deg) saturate(3) brightness(1.2) contrast(1.2);
          z-index: 3;
          pointer-events: none;
        }
        .hm-tl { top: -100px; left: -100px; }
        .hm-tr { top: -100px; right: -100px; }
        .hm-br { bottom: -100px; right: 10%; width: 300px; height: 300px; }

        /* Floating Gold Particles */
        .hero-particles {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#C89B3C 1px, transparent 1px);
          background-size: 120px 120px;
          background-position: 0 0;
          opacity: 0.2;
          z-index: 4;
          pointer-events: none;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
        }

        /* Watermark Typography */
        .hero-watermark {
          position: absolute;
          top: 10%;
          right: 5%;
          font-family: var(--font-playfair);
          font-size: 320px;
          font-weight: 300;
          line-height: 0.8;
          color: #151515;
          opacity: 0.04;
          z-index: 2;
          text-align: right;
          letter-spacing: -4px;
          pointer-events: none;
          user-select: none;
        }
        @media (max-width: 1440px) { .hero-watermark { font-size: 240px; top: 15%; } }
        @media (max-width: 1024px) { .hero-watermark { font-size: 180px; } }
        @media (max-width: 767px) { .hero-watermark { display: none; } }

        /* Peacock Feather */
        .hero-feather {
          position: absolute;
          left: 2%;
          bottom: 5%;
          height: 85%;
          width: 45%;
          background: url('/images/footer/peacock.png') no-repeat bottom left;
          background-size: contain;
          z-index: 5;
          pointer-events: none;
          filter: drop-shadow(20px 40px 60px rgba(24,62,147,0.15)) saturate(1.2) brightness(1.05);
          transform-origin: bottom left;
          animation: float-feather 8s ease-in-out infinite alternate;
        }
        @media (max-width: 1024px) {
          .hero-feather { width: 40%; height: 70%; left: -5%; bottom: 0; opacity: 0.4; z-index: 2; filter: blur(2px); }
        }
        @media (max-width: 767px) {
          .hero-feather { display: none; }
        }

        @keyframes float-feather {
          0% { transform: rotate(0deg) translateY(0px); }
          100% { transform: rotate(2deg) translateY(-15px); }
        }

        /* Center Content Layout */
        .hero-content-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          justify-content: flex-end;
          padding: 0 5%;
        }
        @media (max-width: 1024px) {
          .hero-content-wrapper { justify-content: center; text-align: center; }
        }

        .hero-content {
          width: 55%;
          padding-top: 100px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        @media (max-width: 1024px) {
          .hero-content { width: 100%; max-width: 800px; align-items: center; }
        }

        .hero-lotus {
          margin-bottom: 24px;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-inter);
          font-size: 14px;
          letter-spacing: 6px;
          font-weight: 600;
          color: #C89B3C;
          text-transform: uppercase;
          margin-bottom: 32px;
        }
        .hero-eyebrow::before, .hero-eyebrow::after {
          content: "";
          display: block;
          width: 24px;
          height: 1px;
          background: #C89B3C;
          opacity: 0.5;
        }

        .hero-headline {
          font-family: var(--font-cormorant);
          font-size: 72px;
          font-weight: 500;
          line-height: 1.15;
          color: #183E93;
          margin: 0 0 32px 0;
          position: relative;
        }
        .hero-headline::before {
          content: "“";
          position: absolute;
          left: -60px;
          top: -20px;
          font-family: var(--font-playfair);
          font-size: 120px;
          color: #C89B3C;
          opacity: 0.3;
          line-height: 1;
        }
        .hero-headline::after {
          content: "”";
          position: absolute;
          right: -40px;
          bottom: -40px;
          font-family: var(--font-playfair);
          font-size: 120px;
          color: #C89B3C;
          opacity: 0.3;
          line-height: 1;
        }
        @media (max-width: 1440px) { .hero-headline { font-size: 60px; } }
        @media (max-width: 1024px) { 
          .hero-headline { font-size: 48px; }
          .hero-headline::before { left: -30px; }
          .hero-headline::after { right: -20px; bottom: -20px; }
        }
        @media (max-width: 767px) { 
          .hero-headline { font-size: 36px; }
          .hero-headline::before, .hero-headline::after { display: none; }
        }

        .hero-description {
          font-family: var(--font-inter);
          font-size: 20px;
          line-height: 1.8;
          color: #555555;
          margin-bottom: 48px;
          max-width: 600px;
        }
        @media (max-width: 1024px) {
           .hero-description { font-size: 18px; margin-bottom: 40px; }
        }

        .hero-author {
          font-family: var(--font-inter);
          font-size: 18px;
          font-style: italic;
          color: #888888;
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hero-author::before {
          content: "—";
          color: #C89B3C;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        @media (max-width: 767px) {
          .hero-actions { flex-direction: column; width: 100%; gap: 16px; }
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          height: 64px;
          padding: 0 40px;
          background: linear-gradient(135deg, #183E93, #2A54B5);
          color: #FFFFFF;
          font-family: var(--font-inter);
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 2px;
          border-radius: 32px;
          text-transform: uppercase;
          transition: transform 300ms ease, box-shadow 300ms ease;
          box-shadow: 0 10px 30px rgba(24,62,147,0.25);
        }
        .hero-btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(24,62,147,0.4);
        }
        @media (max-width: 767px) { .hero-btn-primary { width: 100%; } }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          height: 64px;
          padding: 0 40px;
          background: transparent;
          color: #B38D4E;
          border: 1px solid rgba(200, 155, 60, 0.4);
          font-family: var(--font-inter);
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 2px;
          border-radius: 32px;
          text-transform: uppercase;
          transition: all 300ms ease;
        }
        .hero-btn-secondary:hover {
          background: rgba(200, 155, 60, 0.05);
          transform: translateY(-4px);
        }
        @media (max-width: 767px) { .hero-btn-secondary { width: 100%; } }

      `}} />

      {/* Layer 2: Watercolor Clouds */}
      <div className="hero-cloud-1" />
      <div className="hero-cloud-2" />
      <div className="hero-cloud-3" />

      {/* Layer 3: Watermark */}
      <div className="hero-watermark">HARE<br/>KRISHNA</div>

      {/* Layer 4: Mandalas */}
      <div className="hero-mandala hm-tl" />
      <div className="hero-mandala hm-tr" />
      <div className="hero-mandala hm-br" />

      {/* Layer 5: Particles */}
      <div className="hero-particles" />

      {/* Layer 6: Temple Silhouette */}
      <div className="hero-temple" />

      {/* Layer 7: Peacock Feather */}
      <div className="hero-feather" />

      {/* Layer 8: Content */}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <Reveal delay={100} y={40}>
            {/* Gold Lotus */}
            <svg className="hero-lotus" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1">
              <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z" opacity="0.2"/>
              <path d="M12 14c-1.1 0-2-.9-2-2 0-2.2 2-6 2-6s2 3.8 2 6c0 1.1-.9 2-2 2z" fill="#C89B3C" fillOpacity="0.8"/>
              <path d="M12 22c-2.2 0-4-1.8-4-4 0-3.3 4-8 4-8s4 4.7 4 8c0 2.2-1.8 4-4 4z"/>
              <path d="M7 16c-1.7 0-3-1.3-3-3 0-2.8 3-7 3-7s3 4.2 3 7c0 1.7-1.3 3-3 3z"/>
              <path d="M17 16c1.7 0 3-1.3 3-3 0-2.8-3-7-3-7s-3 4.2-3 7c0 1.7 1.3 3 3 3z"/>
            </svg>
          </Reveal>

          <Reveal delay={200} y={40}>
            <div className="hero-eyebrow">ETERNAL WISDOM</div>
          </Reveal>

          <Reveal delay={300} y={40}>
            <h1 className="hero-headline">
              True peace begins<br/>
              when the heart remembers<br/>
              its eternal relationship<br/>
              with Krishna.
            </h1>
          </Reveal>

          <Reveal delay={400} y={40}>
            <p className="hero-description">
              Through devotion, kirtan, sacred wisdom, and spiritual community, discover a life filled with purpose, compassion, and inner fulfillment.
            </p>
            <div className="hero-author">Bhagavad Gita</div>
          </Reveal>

          <Reveal delay={500} y={40}>
            <div className="hero-actions">
              <Link href="/visit" className="hero-btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z" opacity="0.3"/>
                  <path d="M12 14c-1.1 0-2-.9-2-2 0-2.2 2-6 2-6s2 3.8 2 6c0 1.1-.9 2-2 2z" fill="currentColor"/>
                </svg>
                VISIT TEMPLE
              </Link>
              <Link href="/about" className="hero-btn-secondary">
                LEARN MORE
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
