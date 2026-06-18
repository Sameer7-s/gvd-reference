import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section 
      className="w-full section-padding relative overflow-hidden flex items-center justify-center text-center"
      style={{
        background: "linear-gradient(to bottom, #E2EBF4 0%, #F4F8FC 100%)"
      }}
    >
      <Reveal className="container-page relative z-10 flex flex-col items-center">
        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] mb-6 max-w-[800px] text-[var(--color-text-primary)]">
          Begin Your Spiritual Journey Today
        </h2>
        <p className="text-[18px] md:text-[22px] leading-[1.6] text-[var(--color-text-muted)] mb-12 max-w-[600px]">
          Join thousands seeking peace, wisdom, and purpose through Krishna Consciousness.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/visit"
            className="flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px]"
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
            Visit Temple
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center transition-all duration-300 hover:bg-black/5"
            style={{
              height: "64px",
              padding: "0 48px",
              borderRadius: "var(--radius-full)",
              background: "transparent",
              border: "1px solid rgba(17,17,17,0.1)",
              color: "var(--color-text-primary)",
              fontSize: "18px",
              fontWeight: 500,
              fontFamily: "var(--font-inter)"
            }}
          >
            Contact Us
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
