"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const slides = [
  {
    id: "vishwam",
    image: "/photos/WhatsApp-Image-2026-06-16-at-21.33.08.jpeg",
    title: "VISHWAMBHARA",
    subtitle: "A NOVEL ON THE LIFE OF SRI CHAITANYA MAHAPRABHU",
    author: "By Na. Mogasale, Karnataka Sahitya Academy awardee",
    ctaText: "BUY NOW",
    ctaLink: "#",
    gradient: "from-[#FADFBA]/80 to-[#FADFBA]/20",
    textDark: true,
  },
  {
    id: "book-prabhupada",
    image: "/photos/WhatsApp-Image-2026-06-16-at-21.33.08-(1).jpeg",
    title: "SING, DANCE AND LEAD",
    subtitle: "LEADERSHIP LESSONS FROM THE TEACHINGS OF SRILA PRABHUPADA",
    author: "By Multiple-award-winning Author & Historian Dr Hindol Sengupta",
    ctaText: "Order Now",
    ctaLink: "#",
    gradient: "from-[#FADFBA]/90 to-transparent",
    textDark: true,
  },
  {
    id: "struggle",
    image: "/photos/WhatsApp-Image-2026-06-16-at-21.33.08-(2).jpeg",
    title: "25 YEARS OF STRUGGLE",
    subtitle: "OF ISKCON-BANGALORE DEVOTEES SUCCESSFUL",
    author: "WITH THE SUPREME COURT VERDICT",
    ctaText: "READ HERE",
    ctaLink: "#",
    gradient: "from-blue-900/90 to-blue-900/30",
    textDark: false,
  },
  {
    id: "annadana",
    image: "/photos/WhatsApp-Image-2026-06-16-at-21.33.08-(3).jpeg",
    title: "Offer Annadana Seva",
    subtitle: "Help us feed up to 1000 pilgrims daily",
    author: "80G tax exemption",
    ctaText: "DONATE NOW",
    ctaLink: "/donate",
    gradient: "from-[#FFF5E6]/90 to-[#FFF5E6]/10",
    textDark: true,
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-[var(--color-bg-primary)]">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] h-full min-w-0"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 z-[1] bg-gradient-to-r ${slide.gradient}`}
              />

              {/* Content */}
              <div className="relative z-[2] w-full h-full flex items-center">
                <div className="container-page flex flex-col items-start text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`max-w-[700px] ${
                      slide.textDark ? "text-slate-900" : "text-white"
                    }`}
                  >
                    <h2
                      className="text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-[1.1] mb-4 tracking-tight uppercase"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {slide.title}
                    </h2>
                    <p
                      className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {slide.subtitle}
                    </p>
                    <p
                      className={`text-[15px] sm:text-[18px] mb-8 font-medium ${
                        slide.textDark ? "text-slate-700" : "text-white/90"
                      }`}
                    >
                      {slide.author}
                    </p>

                    <Link
                      href={slide.ctaLink}
                      className={`inline-flex items-center justify-center px-8 py-4 rounded-full text-[15px] font-bold tracking-wider uppercase transition-transform hover:-translate-y-1 shadow-lg ${
                        slide.textDark
                          ? "bg-gradient-to-br from-[#9c2e2e] to-[#6b1e1e] text-white hover:shadow-[#9c2e2e]/30"
                          : "bg-white text-blue-900 hover:shadow-white/30"
                      }`}
                    >
                      {slide.ctaText}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md border border-white/20 hover:bg-black/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md border border-white/20 hover:bg-black/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
