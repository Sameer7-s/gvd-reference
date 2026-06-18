"use client";

import Link from "next/link";
import { SITE, SOCIALS, NAV } from "@/lib/site";
import { BrandIcon } from "./brand";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const columnVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: EASE } 
  },
};

export function Footer() {
  const year = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="footer-area">
      <style dangerouslySetInnerHTML={{ __html: `
        /* --- Base Footer --- */
        .footer-area {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .luxury-footer {
          position: relative;
          width: 100%;
          height: auto;
          background: linear-gradient(180deg, #F4F8FC 0%, #E2EBF4 50%, #D4E2F0 100%);
          padding-top: 0;
          padding-bottom: 0;
        }

        /* --- Mantra Section --- */
        .mantra-section-wrap {
          position: relative;
          width: 100%;
          background-color: #02163f;
          background-image: url('/images/footer/mantra-bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 650px;
          max-height: 750px;
          height: 700px;
          margin-bottom: 80px;
          box-shadow: inset 0 20px 50px rgba(0,0,0,0.2);
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .mantra-section-wrap { min-height: 600px; height: 600px; }
        }
        @media (max-width: 767px) {
          .mantra-section-wrap { min-height: auto; max-height: none; height: auto; padding: 80px 24px; margin-bottom: 40px; }
        }

        /* Gold Particles */
        .mantra-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .particle-layer {
          position: absolute;
          background-image: radial-gradient(circle, #90E0EF 1.5px, transparent 1.5px);
          background-size: 40px 40px;
        }
        .particle-layer.layer-1 {
          top: 0; right: 0; width: 40%; height: 50%;
          opacity: 0.15;
          mask-image: radial-gradient(ellipse at top right, black 0%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at top right, black 0%, transparent 70%);
        }
        .particle-layer.layer-2 {
          bottom: 0; left: 0; width: 40%; height: 50%;
          opacity: 0.12;
          mask-image: radial-gradient(ellipse at bottom left, black 0%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at bottom left, black 0%, transparent 70%);
        }
        .particle-layer.layer-3 {
          top: 20%; left: 20%; width: 60%; height: 60%;
          opacity: 0.05;
          mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
          -webkit-mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
        }

        /* Watermark */
        .luxury-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.1);
          font-family: var(--font-playfair);
          font-weight: 300;
          font-size: 240px;
          line-height: 0.85;
          color: #B8D3EB;
          opacity: 0.02;
          z-index: 2;
          pointer-events: none;
          user-select: none;
          text-align: center;
          letter-spacing: -2px;
          filter: blur(5px);
          display: none; /* Hidden since it's baked into background */
        }
        @media (max-width: 767px) {
          .luxury-watermark { display: none; }
        }

        /* Peacock Feather */
        .luxury-peacock {
          position: absolute;
          right: 40px;
          bottom: 30px;
          height: 420px;
          width: auto;
          opacity: 0.6;
          filter: blur(0.3px);
          z-index: 3;
          pointer-events: none;
          animation: floatFeather 12s ease-in-out infinite;
          display: none; /* Hidden since it's baked into background */
        }
        @keyframes floatFeather {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        @media (max-width: 1024px) {
          .luxury-peacock { height: 320px; }
        }
        @media (max-width: 767px) {
          .luxury-peacock { display: none; }
        }

        /* Mantra Container */
        .mantra-container {
          position: relative;
          width: 100%;
          max-width: 70vw;
          margin: 0 auto;
          text-align: center;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        @media (min-width: 1400px) {
          .mantra-container { max-width: 900px; }
        }
        @media (max-width: 767px) {
          .mantra-container { max-width: 100%; }
        }

        .mantra-top-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin: 0 auto 50px;
          width: 100%;
          max-width: 220px;
          opacity: 0.85;
          filter: drop-shadow(0 0 8px rgba(29, 92, 150, 0.4));
        }
        .mantra-top-divider .line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #B8D3EB, transparent);
        }

        .mantra-text {
          font-family: var(--font-cormorant);
          font-size: 60px;
          letter-spacing: 0.08em;
          line-height: 1.6;
          font-weight: 500;
          background: linear-gradient(180deg, #EBF3FC 0%, #76A8D6 50%, #123A8C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }
        @media (max-width: 1024px) {
          .mantra-text { font-size: 48px; }
        }
        @media (max-width: 767px) {
          .mantra-text { font-size: 32px; line-height: 1.5; }
        }

        /* Section to Footer Transition */
        .mantra-footer-transition {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 120px;
          background: linear-gradient(180deg, rgba(2,22,63,0) 0%, #F4F8FC 100%);
          pointer-events: none;
          z-index: 20;
          backdrop-filter: blur(2px);
        }
        .mantra-footer-transition::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #90E0EF 1.5px, transparent 1.5px);
          background-size: 30px 30px;
          opacity: 0.15;
          mask-image: linear-gradient(180deg, black 0%, transparent 100%);
          -webkit-mask-image: linear-gradient(180deg, black 0%, transparent 100%);
        }

        /* --- Footer Grid --- */
        .luxury-footer-grid {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 64px;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .luxury-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            padding: 0 48px;
          }
        }
        @media (max-width: 767px) {
          .luxury-footer-grid {
            grid-template-columns: 1fr;
            gap: 50px;
            padding: 0 24px;
            text-align: center;
          }
        }

        /* --- Columns Content --- */
        .luxury-col {
           display: flex;
           flex-direction: column;
           align-items: flex-start;
        }
        @media (max-width: 767px) {
           .luxury-col { align-items: center; }
        }

        /* Decorative Divider */
        .luxury-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 120px;
          margin: 20px 0;
          opacity: 0.7;
        }
        .luxury-divider .line {
          flex: 1;
          height: 1px;
          background: #1D5C96;
        }
        @media (max-width: 767px) {
          .luxury-divider { margin: 20px auto; }
        }

        /* Brand Column */
        .brand-logo-container {
           width: 70px;
           height: 70px;
           background: url('/images/footer/mandala.png') no-repeat center;
           background-size: contain;
           opacity: 0.8;
           margin-bottom: 12px;
           mix-blend-mode: multiply;
        }

        .luxury-brand-heading {
          font-family: var(--font-cormorant);
          font-size: 38px;
          font-weight: 600;
          color: #123A8C;
          line-height: 1.1;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .luxury-brand-desc {
          font-family: var(--font-inter);
          color: rgba(30,30,30,0.72);
          font-size: 18px;
          line-height: 1.9;
          width: 100%;
          max-width: 300px;
          margin: 0;
        }

        .luxury-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(29, 92, 150, 0.3);
          background: rgba(255, 255, 255, 0.85);
          color: #123A8C;
          transition: all 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .luxury-social-icon:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(18, 58, 140, 0.25);
          border-color: rgba(29, 92, 150, 0.8);
        }

        /* Links Columns */
        .luxury-col-title {
          font-family: var(--font-cormorant);
          font-size: 48px;
          color: #123A8C;
          margin: 0;
          font-weight: 500;
          letter-spacing: 0.03em;
        }

        .luxury-link-item {
          position: relative;
          display: inline-flex;
          align-items: center;
          font-family: var(--font-inter);
          color: #4D4D4D;
          font-size: 20px;
          font-weight: 500;
          line-height: 1;
          padding: 12px 0;
          transition: all 400ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .luxury-link-item::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 100%;
          height: 1px;
          background: #1D5C96;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .luxury-link-item:hover {
          color: #123A8C;
          transform: translateX(8px);
        }

        .luxury-link-item:hover::after {
          transform: scaleX(1);
        }

        /* Contact Section */
        .contact-block {
          display: flex;
          flex-direction: column;
          margin-bottom: 28px;
        }
        @media (max-width: 767px) {
           .contact-block { align-items: center; text-align: center; }
        }

        .contact-label {
          font-family: var(--font-inter);
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1D5C96;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .contact-value {
          font-family: var(--font-inter);
          font-size: 18px;
          line-height: 1.6;
          color: #444444;
          word-break: break-word;
        }
        
        .contact-value a:hover {
          color: #123A8C;
        }

        .contact-sub-label {
          font-size: 15px;
          color: #777;
          margin-bottom: 2px;
          font-family: var(--font-inter);
          font-weight: 500;
        }

        .contact-separator {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(29,92,150,0.15), transparent);
          margin: 14px 0;
        }
        @media (max-width: 767px) {
          .contact-separator { background: linear-gradient(90deg, transparent, rgba(29,92,150,0.15), transparent); }
        }

        /* --- Legal Bar --- */
        .legal-bar {
          position: relative;
          width: 100%;
          height: 80px;
          border-top: 1px solid rgba(29, 92, 150, 0.15);
          padding: 0 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-inter);
          font-size: 14px;
          color: rgba(30,30,30,0.6);
          z-index: 10;
        }
        @media (max-width: 767px) {
          .legal-bar {
             height: auto;
             flex-direction: column;
             gap: 16px;
             text-align: center;
             padding: 24px;
          }
          .legal-lotus { display: none; }
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .legal-links a {
          transition: color 300ms ease;
        }
        .legal-links a:hover {
          color: #1D5C96;
        }
        
        /* --- Decorative Assets (Footer) --- */
        .ornament-tl { 
          position: absolute;
          top: -50px; 
          left: -50px; 
          width: 400px; 
          height: 400px; 
          background: url('/images/footer/mandala.png') no-repeat top left; 
          background-size: 150%; 
          opacity: 0.05;
          mix-blend-mode: multiply;
          pointer-events: none;
          z-index: 3;
        }
        @media (max-width: 1024px) {
          .ornament-tl { width: 250px; height: 250px; }
        }
        @media (max-width: 767px) {
          .ornament-tl { width: 150px; height: 150px; opacity: 0.03; }
        }
      `}} />

      {/* Mantra Section */}
      <section className="mantra-section-wrap">
        <div className="mantra-particles">
          <div className="particle-layer layer-1" />
          <div className="particle-layer layer-2" />
          <div className="particle-layer layer-3" />
        </div>

        <div className="mantra-container">
          <div className="mantra-top-divider">
            <div className="line" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8D3EB" strokeWidth="1.5">
              <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z" opacity="0.2"/>
              <path d="M12 14c-1.1 0-2-.9-2-2 0-2.2 2-6 2-6s2 3.8 2 6c0 1.1-.9 2-2 2z" fill="#B8D3EB"/>
              <path d="M12 22c-2.2 0-4-1.8-4-4 0-3.3 4-8 4-8s4 4.7 4 8c0 2.2-1.8 4-4 4z"/>
            </svg>
            <div className="line" />
          </div>

          <div className="mantra-text">
            HARE KRISHNA HARE KRISHNA<br />
            KRISHNA KRISHNA HARE HARE<br />
            HARE RAMA HARE RAMA<br />
            RAMA RAMA HARE HARE
          </div>
        </div>

        <div className="mantra-footer-transition" />
      </section>

      {/* Main Footer */}
      <footer className="luxury-footer overflow-hidden relative">
        <div className="ornament-tl" />

        {/* Main Grid */}
        <motion.div 
        className="luxury-footer-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Column 1 - Brand */}
        <motion.div variants={shouldReduceMotion ? {} : columnVariant} className="luxury-col col-brand">
          <div className="brand-logo-container" />
          
          <h3 className="luxury-brand-heading">
            Hare Krishna<br/>Movement
          </h3>
          
          <div className="luxury-divider" style={{ justifyContent: 'flex-start' }}>
            <div className="line" style={{ flex: 'none', width: '40px' }} />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C96" strokeWidth="1.5">
              <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z" opacity="0.2"/>
              <path d="M12 14c-1.1 0-2-.9-2-2 0-2.2 2-6 2-6s2 3.8 2 6c0 1.1-.9 2-2 2z" fill="#1D5C96"/>
              <path d="M12 22c-2.2 0-4-1.8-4-4 0-3.3 4-8 4-8s4 4.7 4 8c0 2.2-1.8 4-4 4z"/>
            </svg>
            <div className="line" style={{ flex: 'none', width: '40px' }} />
          </div>

          <p className="luxury-brand-desc mb-8">
            A sanctuary of devotion, wisdom, culture and timeless Krishna consciousness.
          </p>
          
          <div className="flex items-center gap-4 mt-2">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="luxury-social-icon" aria-label={s.label}>
                <BrandIcon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Column 2 - Quick Links */}
        <motion.div variants={shouldReduceMotion ? {} : columnVariant} className="luxury-col">
          <h3 className="luxury-col-title">QUICK LINKS</h3>
          
          <div className="luxury-divider" style={{ justifyContent: 'flex-start' }}>
            <div className="line" style={{ flex: 'none', width: '40px' }} />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C96" strokeWidth="1.5">
              <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z" opacity="0.2"/>
              <path d="M12 14c-1.1 0-2-.9-2-2 0-2.2 2-6 2-6s2 3.8 2 6c0 1.1-.9 2-2 2z" fill="#1D5C96"/>
              <path d="M12 22c-2.2 0-4-1.8-4-4 0-3.3 4-8 4-8s4 4.7 4 8c0 2.2-1.8 4-4 4z"/>
            </svg>
            <div className="line" style={{ flex: 'none', width: '40px' }} />
          </div>

          <ul className="flex flex-col w-full mt-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="luxury-link-item">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3 - Contact */}
        <motion.div variants={shouldReduceMotion ? {} : columnVariant} className="luxury-col">
          <h3 className="luxury-col-title">CONTACT</h3>
          
          <div className="luxury-divider" style={{ justifyContent: 'flex-start' }}>
            <div className="line" style={{ flex: 'none', width: '40px' }} />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C96" strokeWidth="1.5">
              <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z" opacity="0.2"/>
              <path d="M12 14c-1.1 0-2-.9-2-2 0-2.2 2-6 2-6s2 3.8 2 6c0 1.1-.9 2-2 2z" fill="#1D5C96"/>
              <path d="M12 22c-2.2 0-4-1.8-4-4 0-3.3 4-8 4-8s4 4.7 4 8c0 2.2-1.8 4-4 4z"/>
            </svg>
            <div className="line" style={{ flex: 'none', width: '40px' }} />
          </div>
          
          <div className="contact-block mt-2">
            <span className="contact-label">PHONE</span>
            <span className="contact-value">+91 XXXXX XXXXX</span>
          </div>

          <div className="contact-block">
            <span className="contact-label">EMAIL</span>
            <span className="contact-value">
              <a href="mailto:info@guptvrindavandham.org" className="transition-colors">info@guptvrindavandham.org</a>
            </span>
          </div>

          <div className="contact-block">
            <span className="contact-label">VISIT</span>
            <span className="contact-value">
              Gupt Vrindavan Dham<br />
              Parikrama Marg, Vrindavan<br />
              Uttar Pradesh, India
            </span>
          </div>
        </motion.div>

        {/* Column 4 - Darshan Hours */}
        <motion.div variants={shouldReduceMotion ? {} : columnVariant} className="luxury-col">
          <h3 className="luxury-col-title">HOURS</h3>
          
          <div className="luxury-divider" style={{ justifyContent: 'flex-start' }}>
            <div className="line" style={{ flex: 'none', width: '40px' }} />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5C96" strokeWidth="1.5">
              <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z" opacity="0.2"/>
              <path d="M12 14c-1.1 0-2-.9-2-2 0-2.2 2-6 2-6s2 3.8 2 6c0 1.1-.9 2-2 2z" fill="#1D5C96"/>
              <path d="M12 22c-2.2 0-4-1.8-4-4 0-3.3 4-8 4-8s4 4.7 4 8c0 2.2-1.8 4-4 4z"/>
            </svg>
            <div className="line" style={{ flex: 'none', width: '40px' }} />
          </div>

          <div className="contact-block mt-2">
            <span className="contact-label">DARSHAN HOURS</span>
            <div className="contact-sub-label">Morning:</div>
            <span className="contact-value">4:00 AM – 1:00 PM</span>
            <div className="contact-separator" />
            <div className="contact-sub-label">Evening:</div>
            <span className="contact-value">4:00 PM – 9:00 PM</span>
          </div>
          
          <div className="contact-block mt-4">
            <span className="contact-label">OFFICE HOURS</span>
            <span className="contact-value">9:00 AM – 6:00 PM</span>
          </div>
        </motion.div>

      </motion.div>

      {/* Legal Bar */}
      <div className="legal-bar">
        <div>© {year} Hare Krishna Movement</div>
        
        <svg className="legal-lotus" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D5C96" strokeWidth="1.5" opacity="0.8">
          <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z" opacity="0.2"/>
          <path d="M12 14c-1.1 0-2-.9-2-2 0-2.2 2-6 2-6s2 3.8 2 6c0 1.1-.9 2-2 2z" fill="currentColor"/>
        </svg>

        <div className="legal-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
    </div>
  );
}