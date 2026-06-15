import { Heart, BookOpen, Users, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function About() {
  const features = [
    {
      icon: <Star size={28} className="text-[var(--color-accent-primary)]" />,
      title: "Daily Worship",
      desc: "Experience divine darshan and authentic spiritual practices.",
    },
    {
      icon: <BookOpen size={28} className="text-[var(--color-accent-primary)]" />,
      title: "Bhagavad Gita Wisdom",
      desc: "Timeless teachings for modern challenges and inner peace.",
    },
    {
      icon: <Heart size={28} className="text-[var(--color-accent-primary)]" />,
      title: "Community Service",
      desc: "Food distribution and selfless service to humanity.",
    },
    {
      icon: <Users size={28} className="text-[var(--color-accent-primary)]" />,
      title: "Spiritual Growth",
      desc: "Join a supportive community of devotees and seekers.",
    },
  ];

  return (
    <section className="w-full section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-page flex flex-col lg:flex-row gap-16 items-center">
        <Reveal className="w-full lg:w-1/2">
          <h2 className="text-[36px] md:text-[48px] leading-[1.2] mb-6">
            A Journey Towards Inner Peace
          </h2>
          <p className="text-[18px] leading-[1.7] mb-8">
            Our temple is more than a place of worship; it is a sanctuary for the soul. We offer a holistic path to spiritual awakening through devotion, education, and community service. Step out of the chaos of daily life and discover the profound peace that comes from a genuine connection with the divine.
          </p>
          <div className="w-[60px] h-[2px] bg-[var(--color-accent-primary)] rounded-full" />
        </Reveal>

        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <Reveal key={idx} delay={idx * 80}>
            <div 
              className="bg-white p-8 rounded-[var(--radius-card)] shadow-luxury transition-all duration-300 hover:shadow-luxury-hover hover:-translate-y-2 group h-full"
            >
              <div className="mb-6 p-4 bg-[var(--color-bg-secondary)] inline-block rounded-2xl group-hover:bg-[var(--color-accent-primary)]/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-[20px] mb-3">{item.title}</h3>
              <p className="text-[15px] leading-[1.6]">
                {item.desc}
              </p>
            </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
