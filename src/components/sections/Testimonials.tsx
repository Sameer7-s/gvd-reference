import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  const testimonials = [
    {
      text: "Visiting the temple completely changed my perspective on life. The atmosphere is filled with absolute peace and devotion.",
      author: "Priya S.",
      role: "Temple Visitor",
    },
    {
      text: "The Bhagavad Gita classes offered here are profoundly transformative. I found clarity and purpose I had been seeking for years.",
      author: "Rahul M.",
      role: "Bhagavad Gita Student",
    },
    {
      text: "Being part of the kirtan is an out-of-this-world experience. The positive energy and welcoming community are unmatched.",
      author: "Anjali K.",
      role: "Community Member",
    },
  ];

  return (
    <section className="luxury-testimonials overflow-hidden relative">
      <style dangerouslySetInnerHTML={{ __html: `
        .luxury-testimonials {
          position: relative;
          width: 100vw;
          max-width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          min-height: max(1100px, 120vh);
          background: radial-gradient(circle at top right, #123D8B 0%, #0B2F73 50%, #061D49 100%);
          padding: clamp(100px, 8vw, 180px) 0 clamp(120px, 10vw, 200px);
          font-family: var(--font-inter);
          z-index: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Divine Heading Glow */
        .divine-heading-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100vw;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%);
          z-index: 2;
          pointer-events: none;
        }

        /* Layer 01: Subtle Texture */
        .luxury-testimonials::before {
          content: "";
          position: absolute;
          inset: 0;
          background: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.04"/%3E%3C/svg%3E');
          pointer-events: none;
          z-index: 3;
          mix-blend-mode: overlay;
        }

        /* Layer 02: Peacock Feather */
        .testimonial-feather {
          position: absolute;
          top: 50%;
          left: -10vw;
          transform: translateY(-50%) scale(1.4);
          height: 100%;
          width: 50vw;
          background: url('/images/footer/peacock.png') no-repeat left center;
          background-size: contain;
          opacity: 0.18;
          z-index: 2;
          pointer-events: none;
        }
        @media (max-width: 1024px) {
          .testimonial-feather { width: 70vw; left: -20vw; scale: 1.3; }
        }

        /* Layer 03: Giant Watermark */
        .testimonial-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-playfair);
          font-weight: 300;
          font-size: 35vw;
          line-height: 0.8;
          color: #FFFFFF;
          opacity: 0.03;
          z-index: 1;
          pointer-events: none;
          user-select: none;
          text-align: center;
          letter-spacing: -2px;
          white-space: nowrap;
        }
        @media (max-width: 767px) {
          .testimonial-watermark { display: none; }
        }

        /* --- Header Section --- */
        .testimonial-header {
          position: relative;
          z-index: 10;
          text-align: center;
          margin-bottom: clamp(60px, 6vw, 120px);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 4vw;
        }

        .header-lotus-icon {
          width: clamp(32px, 3vw, 48px);
          height: clamp(32px, 3vw, 48px);
          margin-bottom: clamp(16px, 1.5vw, 24px);
        }

        .eyebrow-label {
          font-size: clamp(12px, 0.8vw, 16px);
          letter-spacing: clamp(6px, 0.6vw, 10px);
          font-weight: 600;
          color: #D8B36A;
          text-transform: uppercase;
          margin-bottom: clamp(16px, 1.5vw, 24px);
        }

        .main-heading {
          font-family: var(--font-cormorant);
          font-size: clamp(64px, 7vw, 120px);
          font-weight: 600;
          line-height: 1.1;
          color: #FFFFFF;
          margin: 0 0 clamp(16px, 1.5vw, 24px) 0;
          text-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .header-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 1.5vw, 24px);
          width: clamp(160px, 15vw, 300px);
          margin: 0 auto clamp(24px, 2.5vw, 40px);
        }
        .header-divider .line {
          flex: 1;
          height: 1px;
          background: #D8B36A;
          opacity: 0.4;
        }
        .header-divider svg {
          width: clamp(16px, 1.5vw, 24px);
          height: clamp(16px, 1.5vw, 24px);
        }

        .subheading {
          max-width: 800px;
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(18px, 1.2vw, 28px);
          line-height: 1.8;
          margin: 0 auto;
        }

        /* --- Grid & Cards --- */
        .testimonial-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(30px, 2vw, 60px);
          width: clamp(90vw, 95vw, 95vw);
          max-width: none;
          margin: 0 auto;
        }
        @media (max-width: 1200px) {
          .testimonial-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .testimonial-grid { grid-template-columns: 1fr; width: 90vw; }
        }

        .testimonial-card {
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: clamp(24px, 2vw, 36px);
          padding: clamp(32px, 3vw, 52px);
          display: flex;
          flex-direction: column;
          height: clamp(500px, 40vw, 650px);
          width: 100%;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
        }

        .quote-mark {
          position: absolute;
          top: clamp(20px, 2vw, 32px);
          left: clamp(20px, 2vw, 32px);
          font-family: var(--font-playfair);
          font-size: clamp(60px, 6vw, 120px);
          line-height: 1;
          color: #D8B36A;
          opacity: 0.15;
          pointer-events: none;
        }

        .card-bottom-lotus {
          position: absolute;
          bottom: clamp(20px, 2vw, 32px);
          right: clamp(20px, 2vw, 32px);
          width: clamp(30px, 3vw, 50px);
          height: clamp(30px, 3vw, 50px);
          opacity: 0.1;
          pointer-events: none;
        }

        .testimonial-text {
          position: relative;
          z-index: 2;
          font-family: var(--font-cormorant);
          font-size: clamp(20px, 1.8vw, 36px);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 400;
          font-style: italic;
          margin-bottom: clamp(24px, 2vw, 48px);
          margin-top: clamp(16px, 1.5vw, 24px);
          flex-grow: 1;
        }

        .card-author-area {
          position: relative;
          z-index: 2;
          margin-top: auto;
        }

        .card-divider {
          width: clamp(30px, 3vw, 50px);
          height: 1px;
          background: #D8B36A;
          opacity: 0.3;
          margin-bottom: clamp(12px, 1vw, 16px);
        }

        .author-name {
          font-family: var(--font-inter);
          font-size: clamp(18px, 1.2vw, 26px);
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 4px;
        }

        .author-role {
          font-family: var(--font-inter);
          font-size: clamp(12px, 0.8vw, 16px);
          color: rgba(255, 255, 255, 0.7);
        }

      `}} />

      {/* Divine Heading Glow */}
      <div className="divine-heading-glow" />

      {/* Layer 02: Massive Peacock Feather */}
      <div className="testimonial-feather" />

      {/* Layer 03: Background Watermark */}
      <div className="testimonial-watermark">KRISHNA</div>

      {/* Header Section */}
      <Reveal className="testimonial-header" y={40}>
        <svg className="header-lotus-icon" viewBox="0 0 24 24" fill="none" stroke="#D8B36A" strokeWidth="1.2">
          <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z" opacity="0.2"/>
          <path d="M12 14c-1.1 0-2-.9-2-2 0-2.2 2-6 2-6s2 3.8 2 6c0 1.1-.9 2-2 2z" fill="#D8B36A" fillOpacity="0.8"/>
          <path d="M12 22c-2.2 0-4-1.8-4-4 0-3.3 4-8 4-8s4 4.7 4 8c0 2.2-1.8 4-4 4z"/>
          <path d="M7 16c-1.7 0-3-1.3-3-3 0-2.8 3-7 3-7s3 4.2 3 7c0 1.7-1.3 3-3 3z"/>
          <path d="M17 16c1.7 0 3-1.3 3-3 0-2.8-3-7-3-7s-3 4.2-3 7c0 1.7 1.3 3 3 3z"/>
        </svg>

        <div className="eyebrow-label">ETERNAL EXPERIENCES</div>
        <h2 className="main-heading">Voices of Transformation</h2>
        
        <div className="header-divider">
          <div className="line" />
          <svg viewBox="0 0 24 24" fill="none" stroke="#D8B36A" strokeWidth="1.5">
             <circle cx="12" cy="12" r="3" fill="#D8B36A" />
             <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" fill="#D8B36A" opacity="0.5"/>
          </svg>
          <div className="line" />
        </div>

        <p className="subheading">
          Stories of devotion, wisdom, and inner transformation from seekers who found peace through Krishna consciousness.
        </p>
      </Reveal>

      {/* Grid Section */}
      <div className="testimonial-grid">
        {testimonials.map((testimonial, idx) => (
          <Reveal key={idx} delay={idx * 150} y={40}>
            <div className="testimonial-card">
              <div className="quote-mark">“</div>
              
              <p className="testimonial-text">
                {testimonial.text}
              </p>

              <div className="card-author-area">
                <div className="card-divider" />
                <div className="author-name">{testimonial.author}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>

              <svg className="card-bottom-lotus" viewBox="0 0 24 24" fill="none" stroke="#D8B36A" strokeWidth="1.5">
                <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z" opacity="0.2"/>
                <path d="M12 14c-1.1 0-2-.9-2-2 0-2.2 2-6 2-6s2 3.8 2 6c0 1.1-.9 2-2 2z" fill="#D8B36A"/>
              </svg>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
