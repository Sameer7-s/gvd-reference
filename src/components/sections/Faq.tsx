"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { FAQS } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-cream py-20 sm:py-28">
      <div className="container-page max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Good to Know"
            title="Frequently Asked Questions"
            intro="Everything you need to plan a peaceful and fulfilling visit to the dham."
          />
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-saffron-400 bg-ivory shadow-temple"
                      : "border-gold-500/20 bg-ivory/70"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-lg text-maroon-900">{faq.q}</span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-saffron-600 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    className="grid transition-all duration-300 ease-soft"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-muted">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
