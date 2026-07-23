"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const templeDarshanImage = "/images/temple-darshan.jpg";

const experiences = [
  {
    title: "Sunday Feast",
    badge: "COMMUNITY EXPERIENCE",
    image: templeDarshanImage,
    description:
      "A warm weekly celebration of kirtan, wisdom, prasadam and shared devotional joy.",
  },
  {
    title: "Bhagavad Gita Classes",
    badge: "WISDOM JOURNEY",
    image: templeDarshanImage,
    description:
      "Enter the timeless teachings of the Gita through practical reflection and guided study.",
  },
  {
    title: "Meditation Sessions",
    badge: "INNER STILLNESS",
    image: "/photos/deity_new.png",
    description:
      "Find quiet focus through mantra meditation, breath, sacred sound and gentle presence.",
  },
  {
    title: "Youth Programs",
    badge: "NEXT GENERATION",
    image: "/photos/deity.png",
    description:
      "Nurturing young hearts through culture, service, creativity and spiritual friendship.",
  },
  {
    title: "Kirtan Evenings",
    badge: "SACRED SOUND",
    image: "/photos/deity_new.png",
    description:
      "An immersive evening of devotional music where mantra, rhythm and devotion meet.",
  },
  {
    title: "Festival Celebrations",
    badge: "TEMPLE FESTIVAL",
    image: "/photos/deity_new.png",
    description:
      "Grand celebrations filled with darshan, aarti, flowers, sacred stories and prasadam.",
  },
];

const featuredExperience = {
  title: "Temple Darshan Experience",
  badge: "DAILY DARSHAN",
  image: templeDarshanImage,
  description:
    "Step into the sacred atmosphere of daily darshan and experience the beauty of Radha Krishna through devotion, prayer and spiritual connection.",
};

const featureSlides = [featuredExperience, ...experiences];

function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor;
}

export function Programs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? featuredExperience : experiences[activeIndex];
  
  const sectionRef = useRef<HTMLElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 20;
      targetY = y * 20;
    };

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.05);
      currentY = lerp(currentY, targetY, 0.05);

      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(${currentX * -1}px, ${currentY * -1}px, 0)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate3d(${currentX * 1.5}px, ${currentY * 1.5}px, 0)`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translate3d(${currentX * -0.5}px, ${currentY * -0.5}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Generate falling feathers once to prevent hydration mismatch
  const [particles, setParticles] = useState<Array<{left: number, delay: number, duration: number, opacity: number, scale: number, rotation: number}>>([]);
  
  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 20 + Math.random() * 15,
        opacity: 0.2 + Math.random() * 0.4,
        scale: 0.3 + Math.random() * 0.5,
        rotation: Math.random() * 360
      }))
    );
  }, []);

  return (
    <section ref={sectionRef} className="experiences-section" id="programs" aria-labelledby="experiences-heading">
      <div className="experiences-ambient-glow" aria-hidden />

      <div className="experiences-mist experiences-mist-tr" aria-hidden />
      <div className="experiences-mist experiences-mist-bl" aria-hidden />
      <div className="experiences-mist experiences-mist-center" aria-hidden />

      <div className="experiences-parallax-container" aria-hidden>
        <div ref={layer1Ref} className={`experiences-feather-primary ${activeIndex !== null ? 'is-hovering' : ''}`}>
          <div className="experiences-feather-sweep" />
        </div>
        
        <div ref={layer2Ref} className="experiences-feather-secondary" />

        <div ref={layer3Ref} className="experiences-micro-feathers">
          <div className="micro-feather micro-feather-1" />
          <div className="micro-feather micro-feather-2" />
          <div className="micro-feather micro-feather-3" />
          <div className="micro-feather micro-feather-4" />
          <div className="micro-feather micro-feather-5" />
        </div>
      </div>

      <div className="experiences-particle-system" aria-hidden>
        {particles.map((p, i) => (
          <div key={i} className="experience-falling-feather" style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--base-opacity': p.opacity,
            '--base-scale': p.scale,
            '--start-rot': `${p.rotation}deg`
          } as React.CSSProperties} />
        ))}
      </div>

      <div className="experiences-container">
        <Reveal className="experiences-header">
          <p className="experiences-eyebrow">Spiritual Journeys</p>
          <h2 id="experiences-heading" className="experiences-heading">
            Explore Spiritual Experiences
          </h2>
          <p className="experiences-intro">
            Discover a variety of programs designed to nourish your soul and build a strong
            spiritual foundation.
          </p>
        </Reveal>

        <div className="experiences-layout">
          <Reveal className="experiences-feature-shell">
            <div className="experiences-glow" aria-hidden />
            <article className="experiences-feature-card">
              <div className="experiences-image-stack" aria-hidden>
                <div className="experiences-card-silhouette" />
                {featureSlides.map((slide, index) => {
                  const isActive = slide.title === active.title;

                  return (
                    <Image
                      key={`${slide.title}-${slide.image}-${index}`}
                      src={slide.image}
                      alt=""
                      fill
                      className={`experiences-feature-image${isActive ? " is-active" : ""}`}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={index === 0}
                    />
                  );
                })}
              </div>
              <div className="experiences-feature-gradient" aria-hidden />
              <div className="experiences-badge">{active.badge}</div>
              <div key={active.title} className="experiences-feature-content">
                <h3>{active.title}</h3>
                <p>{active.description}</p>
                <a href="/visit" className="experiences-feature-link">
                  Explore Experience
                  <ArrowRight size={18} aria-hidden />
                </a>
              </div>
            </article>
          </Reveal>

          <div className="experiences-list" aria-label="Spiritual experiences">
            {experiences.map((experience, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  className={`experience-item${isActive ? " is-active" : ""}`}
                  key={experience.title}
                  type="button"
                  onFocus={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span className="experience-accent" aria-hidden />
                  <span className="experience-copy">
                    <span className="experience-kicker">{experience.badge}</span>
                    <span className="experience-title">{experience.title}</span>
                    <span className="experience-description">{experience.description}</span>
                  </span>
                  <ArrowRight className="experience-arrow" size={22} aria-hidden />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
