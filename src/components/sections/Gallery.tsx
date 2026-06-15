import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function Gallery() {
  const images = [
    { src: "/photos/deity.png", alt: "Deity Darshan", size: "col-span-2 row-span-2" },
    { src: "/photos/deity.png", alt: "Temple Architecture", size: "col-span-1 row-span-1" },
    { src: "/photos/deity.png", alt: "Kirtan", size: "col-span-1 row-span-1" },
    { src: "/photos/deity.png", alt: "Festival Celebration", size: "col-span-1 row-span-1" },
    { src: "/photos/deity.png", alt: "Community Service", size: "col-span-1 row-span-1" },
  ];

  return (
    <section className="w-full section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-page">
        <Reveal className="text-center mb-16">
          <h2 className="text-[36px] md:text-[48px] leading-[1.2] mb-4">
            Temple Moments
          </h2>
          <p className="text-[18px] max-w-[600px] mx-auto text-[var(--color-text-muted)]">
            Glimpses of devotion, architecture, and spiritual celebrations.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <Reveal key={idx} delay={idx * 70} className={img.size}>
            <div 
              className="relative h-full rounded-[var(--radius-md)] overflow-hidden group shadow-luxury"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
