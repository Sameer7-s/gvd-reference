const fs = require('fs');
const content = fs.readFileSync('src/components/Footer.tsx', 'utf-8');

let newContent = content.replace(/<footer className="luxury-footer overflow-hidden relative">/, `<div className="footer-area">`);

newContent = newContent.replace(/\/\* --- Base Footer --- \*\/[\s\S]*?`\}\} \/>/, `/* --- Base Footer --- */
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
          background: linear-gradient(180deg, #FDFCF8 0%, #FAF8F2 50%, #F7F4EC 100%);
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
          background-image: radial-gradient(circle, #D4AF37 1.5px, transparent 1.5px);
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
          color: #E2C785;
          opacity: 0.02;
          z-index: 2;
          pointer-events: none;
          user-select: none;
          text-align: center;
          letter-spacing: -2px;
          filter: blur(5px);
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
          filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.4));
        }
        .mantra-top-divider .line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #E2C785, transparent);
        }

        .mantra-text {
          font-family: var(--font-cormorant);
          font-size: 60px;
          letter-spacing: 0.08em;
          line-height: 1.6;
          font-weight: 500;
          background: linear-gradient(180deg, #FFF3D3 0%, #E2C785 50%, #B8860B 100%);
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
          background: linear-gradient(180deg, rgba(2,22,63,0) 0%, rgba(253,252,248,1) 100%);
          pointer-events: none;
          z-index: 20;
          backdrop-filter: blur(2px);
        }
        .mantra-footer-transition::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #D4AF37 1.5px, transparent 1.5px);
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
          background: #C9A54A;
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
          border: 1px solid rgba(214, 177, 77, 0.3);
          background: rgba(255, 255, 255, 0.85);
          color: #123A8C;
          transition: all 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .luxury-social-icon:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(212, 175, 55, 0.25);
          border-color: rgba(214, 177, 77, 0.8);
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
          background: #C9A54A;
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
          color: #C9A54A;
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
          background: linear-gradient(90deg, rgba(201,165,74,0.15), transparent);
          margin: 14px 0;
        }
        @media (max-width: 767px) {
          .contact-separator { background: linear-gradient(90deg, transparent, rgba(201,165,74,0.15), transparent); }
        }

        /* --- Legal Bar --- */
        .legal-bar {
          position: relative;
          width: 100%;
          height: 80px;
          border-top: 1px solid rgba(212, 175, 55, 0.15);
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
          color: #C9A54A;
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
      \`}} />`);

newContent = newContent.replace(/\{\/\* Decorative Assets \*\/\}[\s\S]*?<motion\.div/m, `{/* Mantra Section */}
      <section className="mantra-section-wrap">
        <div className="mantra-particles">
          <div className="particle-layer layer-1" />
          <div className="particle-layer layer-2" />
          <div className="particle-layer layer-3" />
        </div>

        <div className="luxury-watermark">HARE<br/>KRISHNA</div>
        <img src="/images/footer/peacock.png" alt="" className="luxury-peacock" />

        <div className="mantra-container">
          <div className="mantra-top-divider">
            <div className="line" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E2C785" strokeWidth="1.5">
              <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z" opacity="0.2"/>
              <path d="M12 14c-1.1 0-2-.9-2-2 0-2.2 2-6 2-6s2 3.8 2 6c0 1.1-.9 2-2 2z" fill="#E2C785"/>
              <path d="M12 22c-2.2 0-4-1.8-4-4 0-3.3 4-8 4-8s4 4.7 4 8c0 2.2-1.8 4-4 4z"/>
            </svg>
            <div className="line" />
          </div>

          <div className="mantra-text">
            HARE KRISHNA HARE KRISHNA<br className="md:hidden" /> KRISHNA KRISHNA HARE HARE<br/>
            HARE RAMA HARE RAMA<br className="md:hidden" /> RAMA RAMA HARE HARE
          </div>
        </div>

        <div className="mantra-footer-transition" />
      </section>

      {/* Main Footer */}
      <footer className="luxury-footer overflow-hidden relative">
        <div className="ornament-tl" />

        {/* Main Grid */}
        <motion.div`);

newContent = newContent.replace(/\{\/\* Mantra Strip \*\/\}[\s\S]*?\{\/\* Legal Bar \*\/\}/m, `{/* Legal Bar */}`);

newContent = newContent.replace(/<\/footer>\s*\);\s*\}\s*$/, `</footer>\n    </div>\n  );\n}`);

fs.writeFileSync('src/components/Footer.tsx', newContent);
