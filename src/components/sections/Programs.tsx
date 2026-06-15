import { Reveal } from "@/components/Reveal";

export function Programs() {
  const programs = [
    { title: "Daily Darshan", size: "lg:col-span-2 lg:row-span-2", bg: "bg-white", img: "/photos/deity.png", text: "Experience the divine presence daily." },
    { title: "Sunday Feast", size: "lg:col-span-1 lg:row-span-1", bg: "bg-[var(--color-bg-secondary)]", text: "A grand weekly celebration with kirtan and prasadam." },
    { title: "Bhagavad Gita Classes", size: "lg:col-span-1 lg:row-span-1", bg: "bg-white", text: "Deep dive into ancient wisdom." },
    { title: "Meditation Sessions", size: "lg:col-span-1 lg:row-span-1", bg: "bg-[var(--color-bg-tertiary)]", text: "Find inner peace through mantra meditation." },
    { title: "Youth Programs", size: "lg:col-span-1 lg:row-span-1", bg: "bg-[var(--color-accent-primary)]/10", text: "Empowering the next generation." },
    { title: "Festivals", size: "lg:col-span-2 lg:row-span-1", bg: "bg-[var(--color-text-primary)] text-white", text: "Grand celebrations throughout the year." },
    { title: "Volunteer", size: "lg:col-span-1 lg:row-span-1", bg: "bg-white", text: "Joy of selfless service." },
    { title: "Retreats", size: "lg:col-span-1 lg:row-span-1", bg: "bg-[var(--color-bg-secondary)]", text: "Immersive spiritual journeys." },
  ];

  return (
    <section className="w-full section-padding bg-[var(--color-bg-primary)]">
      <div className="container-page">
        
        <Reveal className="text-center mb-16">
          <h2 className="text-[36px] md:text-[48px] leading-[1.2] mb-4">
            Explore Spiritual Experiences
          </h2>
          <p className="text-[18px] max-w-[600px] mx-auto">
            Discover a variety of programs designed to nourish your soul and build a strong spiritual foundation.
          </p>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {programs.map((prog, idx) => (
            <Reveal key={idx} delay={idx * 60} className={prog.size}>
            <div 
              className={`h-full ${prog.bg} p-8 rounded-[var(--radius-card)] shadow-luxury transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury-hover flex flex-col justify-end relative overflow-hidden group`}
            >
              {prog.img && (
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${prog.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}
              <div className="relative z-10">
                <h3 className={`text-[24px] mb-2 ${prog.bg.includes('text-white') ? 'text-white' : ''}`}>
                  {prog.title}
                </h3>
                <p className={`text-[15px] ${prog.bg.includes('text-white') ? 'text-white/80' : 'text-[var(--color-text-muted)]'}`}>
                  {prog.text}
                </p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
