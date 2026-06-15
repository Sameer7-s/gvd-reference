import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function Donate() {
  return (
    <section className="w-full section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #FFFCF7 0%, #FFF4D9 50%, #F5E6B3 100%)",
        }}
      />
      
      <div className="container-page relative z-10">
        <Reveal>
        <div className="max-w-[800px] mx-auto bg-white/80 backdrop-blur-xl p-12 md:p-16 rounded-[var(--radius-card)] shadow-luxury text-center">
          <h2 className="text-[36px] md:text-[48px] leading-[1.2] mb-6">
            Support Spiritual Growth
          </h2>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-[var(--color-text-muted)] mb-10 max-w-[600px] mx-auto">
            Your contribution helps spread wisdom, devotion, education, and community service. Join us in building a sanctuary of peace for all.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px]"
            style={{
              height: "64px",
              padding: "0 48px",
              borderRadius: "var(--radius-full)",
              background: "var(--color-text-primary)",
              color: "white",
              fontSize: "18px",
              fontWeight: 500,
              boxShadow: "0 12px 30px rgba(17, 17, 17, 0.15)",
              fontFamily: "var(--font-inter)"
            }}
          >
            Donate Now
          </Link>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
