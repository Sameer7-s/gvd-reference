"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, AssetFrame, Button } from "@/components/ui";
import { Lotus } from "@/components/decor";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Clock, Leaf, BookOpen, Music, Heart, Utensils, Home, Sun } from "lucide-react";

export default function ExploreTemplePage() {
  const stats = [
    { label: "Spiritual Campus", value: "3.5 Lakh", suffix: "Sq Ft" },
    { label: "Annual Visitors", value: "5M", suffix: "+" },
    { label: "Cows Under Gau Seva", value: "10K", suffix: "+" },
    { label: "Spiritual Engagement", value: "24", suffix: "hours" },
  ];

  const divineExperiences = [
    {
      title: "Mangla Aarti",
      desc: "Make your morning truly blessed and peaceful with the divine darshan of Sri Sri Krishna Balaram.",
      icon: <Sun className="w-6 h-6" />,
      tone: "saffron" as const,
    },
    {
      title: "Spiritual Learning",
      desc: "Explore the pastimes, leelas, and teachings of Lord Krishna.",
      icon: <BookOpen className="w-6 h-6" />,
      tone: "maroon" as const,
    },
    {
      title: "Harinaam Experience",
      desc: "Engage in constant chanting and kirtan.",
      icon: <Music className="w-6 h-6" />,
      tone: "gold" as const,
    },
    {
      title: "Kichdi Prasadam Seva",
      desc: "Serving the sanctified prasadam to devotees and people in need.",
      icon: <Utensils className="w-6 h-6" />,
      tone: "krishna" as const,
    },
    {
      title: "Festivals and Celebrations",
      desc: "Celebrate grand festivals with high spirit and spirituality.",
      icon: <Heart className="w-6 h-6" />,
      tone: "night" as const,
    },
  ];

  return (
    <>
      <PageHeader
        title="Explore Temple"
        eyebrow="Mandir"
        intro="Explore Gupt Vrindavan Dham: Amenities & Divine Experience"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Mandir", href: "/mandir" },
          { name: "Explore Temple", href: "/mandir/explore" },
        ]}
      />

      {/* --- QUICK STATS --- */}
      <section className="py-12 bg-white relative -mt-8 z-10 mx-4 sm:mx-12 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100">
        <div className="container-page px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 100} className="flex flex-col items-center text-center px-4">
                <div className="text-3xl md:text-5xl font-display font-medium text-accent-primary mb-2">
                  {stat.value}<span className="text-xl md:text-2xl text-accent-secondary ml-1">{stat.suffix}</span>
                </div>
                <div className="text-sm font-semibold tracking-wider uppercase text-text-muted">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOUNDATION --- */}
      <section className="py-24 bg-bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none translate-x-1/3 -translate-y-1/3">
          <Lotus className="w-96 h-96" />
        </div>
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our Foundation"
              title="A Living Heritage of Bhakti"
              intro="Old traditions kept alive, with utmost devotion"
              align="center"
            />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Reveal delay={100} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50 hover:shadow-temple transition-shadow group">
              <div className="w-14 h-14 rounded-full bg-accent-light/20 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform">
                <Sun className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Daily Aarti</h3>
              <p className="text-text-muted leading-relaxed">
                From day one, the temple follows the traditional Pancharatrika-vidhi, offering daily aartis in the devotional mood of Vrindavan.
              </p>
            </Reveal>

            <Reveal delay={200} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50 hover:shadow-temple transition-shadow group">
              <div className="w-14 h-14 rounded-full bg-accent-light/20 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform">
                <Music className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Chanting of the Holy Names</h3>
              <p className="text-text-muted leading-relaxed">
                Constant chanting and Harinama Sankirtan, making the space purely devotional for the devotees.
              </p>
            </Reveal>

            <Reveal delay={300} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50 hover:shadow-temple transition-shadow group">
              <div className="w-14 h-14 rounded-full bg-accent-light/20 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Prasadam Seva</h3>
              <p className="text-text-muted leading-relaxed">
                Sancitifed prasadam prepared and served daily as an offering to all, promoting compassion in society.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- DIVINE EXPERIENCES --- */}
      <section className="py-24 bg-white relative">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Divine Experiences"
              title="The Essence of Bhakti, Lived Daily"
              intro="From vibrant community experiences to every moment spent at Sri Sri Krishna Balaram temple, peace is offered and one is brought closer to the Lord."
              align="center"
              className="mb-16"
            />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divineExperiences.map((exp, i) => (
              <Reveal key={i} delay={i * 100}>
                <AssetFrame tone={exp.tone} className="h-64 p-8 flex flex-col justify-end group cursor-pointer hover:shadow-temple transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mb-4 backdrop-blur-sm">
                      {exp.icon}
                    </div>
                    <h3 className="text-white text-xl font-display font-medium mb-2">{exp.title}</h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {exp.desc}
                    </p>
                  </div>
                </AssetFrame>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- PEACEFUL CORNERS / GARDEN --- */}
      <section className="py-24 bg-[#0F1D36] text-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Peaceful Corners"
                title="Vrindavan Garden - A Scenic Retreat"
                intro="Enjoy the beauty, serene which is full of greenery and peace - a perfect venue for hosting events and spending quality time with family and friends."
                light
                align="left"
              />
              
              <ul className="mt-10 space-y-6">
                {[
                  { title: "Peaceful meditative surrounding", desc: "Calm environment surrounded by greenery." },
                  { title: "Ideal Space for Hosting Events", desc: "Best for gatherings and small functions." },
                  { title: "Well-Managed and Accessible", desc: "Clean, organized, and easy to access." },
                  { title: "365 Days Open", desc: "Well-maintained Green Garden Space for visitors." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-light shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-white/70 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200} className="relative">
              <AssetFrame label="Sacred Garden" tone="night" arched className="aspect-[4/5] w-full max-w-md mx-auto" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-3xl border-4 border-[#0F1D36] overflow-hidden shadow-2xl hidden md:block">
                 <AssetFrame label="Garden View" tone="maroon" className="w-full h-full rounded-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- FACILITIES --- */}
      <section className="py-24 bg-bg-secondary">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <SectionHeading
                eyebrow="Facilities"
                title="Bringing Devotees Together"
                intro="Sit together and enjoy freshly served prasadam in a warm and peaceful atmosphere."
              />
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100} className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col gap-4">
               <h3 className="text-2xl font-display font-medium text-text-primary border-b border-gray-100 pb-4">Peaceful Darshan Spaces</h3>
               <p className="text-text-muted">Large darshan hall with meditation and collective chanting.</p>
            </Reveal>

            <Reveal delay={200} className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col gap-4">
               <h3 className="text-2xl font-display font-medium text-text-primary border-b border-gray-100 pb-4">Organized Dining Halls</h3>
               <p className="text-text-muted">Well-sanitized dining areas with healthy meals served daily to all the devotees.</p>
            </Reveal>

            <Reveal delay={300} className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col gap-4">
               <h3 className="text-2xl font-display font-medium text-text-primary border-b border-gray-100 pb-4">Spiritual Learning Zones</h3>
               <p className="text-text-muted">Dedicated areas for spiritual learning, teachings, and cultural programs.</p>
            </Reveal>

            <Reveal delay={400} className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col gap-4">
               <h3 className="text-2xl font-display font-medium text-text-primary border-b border-gray-100 pb-4">Visitor Comfort & Support</h3>
               <p className="text-text-muted">Support services and a help desk to resolve devotees' queries, ensuring a hassle-free and peaceful visit.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- PRASADAM / ANNAKOOT --- */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                  <AssetFrame label="Annakoot Restaurant" tone="gold" className="aspect-square rounded-[2rem]" />
                  <AssetFrame label="Prasadam Serving" tone="saffron" className="aspect-square rounded-[2rem] translate-y-8" />
               </div>
            </Reveal>

            <Reveal delay={200} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/10 text-accent-primary font-bold text-sm tracking-widest uppercase mb-6">
                10K+ Prasadam Served Monthly
              </div>
              <SectionHeading
                title="Annakoot - Saatvik Dining Restaurant"
                intro="Enjoy the taste of freshly prepared sattvik diets, made with love and devotion, nourishing both your body and soul."
                align="left"
              />
              <ul className="mt-8 grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {["Sattvik and Hygienic", "Large Dining Hall", "Freshly Prepared Daily", "Perfect fit for Families", "Pure ingredients", "Spiritual Atmosphere"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-primary font-medium">
                    <div className="w-5 h-5 rounded-full bg-accent-primary text-white flex items-center justify-center text-xs">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- STAY WITH US & COW WELFARE --- */}
      <section className="py-24 bg-bg-secondary">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Stay With Us */}
            <Reveal className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
               <SectionHeading eyebrow="Stay With Us" title="Comfortable Stay" align="left" className="mb-8" />
               <p className="text-text-muted mb-8 leading-relaxed">
                 Enjoy a serene and comfortable stay within the divine environment of Gupt Vrindavan Dham. Designed for pilgrims, families, and seekers of peace.
               </p>
               <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-2xl text-accent-primary mb-1">500+</h4>
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">Guests Monthly</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-accent-primary mb-1">24/7</h4>
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">Assistance</p>
                  </div>
               </div>
               <AssetFrame label="Guest Rooms" tone="night" className="h-48 w-full" />
            </Reveal>

            {/* Cow Welfare */}
            <Reveal delay={200} className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
               <SectionHeading eyebrow="Gaushala" title="Cow Welfare & Care" align="left" className="mb-8" />
               <p className="text-text-muted mb-8 leading-relaxed">
                 Dedicated to cow care and Protection. Our Gaushala works towards protecting the universal mother by providing shelter, nutritious food, and medical support.
               </p>
               <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-2xl text-accent-primary mb-1">+10K</h4>
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">Cows under care</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-accent-primary mb-1">365 Days</h4>
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">Care and Support</p>
                  </div>
               </div>
               <AssetFrame label="Cow Feeding" tone="saffron" className="h-48 w-full" />
            </Reveal>

          </div>
        </div>
      </section>

      {/* --- SUSTAINABILITY --- */}
      <section className="py-24 bg-[#0F1D36] text-white">
        <div className="container-page text-center">
          <Reveal>
             <SectionHeading 
                eyebrow="Sustainability" 
                title="Prakriti Seva - Serving Lord’s Creation" 
                intro="As said in the Bhagavad Gita, Lord Krishna is the source of all energies, and by using them in His service, one’s life becomes perfect."
                light 
             />
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { title: "Solar Energy", desc: "Using natural energy sources", icon: <Sun className="w-8 h-8" /> },
              { title: "Zero Waste", desc: "Simple living, avoiding unnecessary consumption", icon: <Leaf className="w-8 h-8" /> },
              { title: "Water Conservation", desc: "Preserving sacred resources like water", icon: <Sun className="w-8 h-8" /> }, // could use droplet icon but reusing Sun for simplicity if others unavailable
              { title: "Organic Farming", desc: "Preparation of Prasadam without chemicals", icon: <Leaf className="w-8 h-8" /> },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} className="flex flex-col items-center gap-4 text-center group">
                 <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-accent-primary transition-colors duration-500">
                    {item.icon}
                 </div>
                 <h4 className="font-display text-xl font-medium">{item.title}</h4>
                 <p className="text-white/60 text-sm max-w-[200px]">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- FESTIVALS --- */}
      <section className="py-24 bg-bg-primary">
         <div className="container-page">
            <Reveal>
               <SectionHeading 
                  eyebrow="Vrindavan Utsav" 
                  title="Spirit of Festivals at Gupt Vrindavan Dham" 
                  intro="Celebrate the holy festivals of Vaishnava tradition with us and indulge yourself in kirtan, seva, and spiritual happiness."
               />
            </Reveal>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
               {[
                 { title: "Balaram Jayanti 2026", date: "Aug 28, 2026", desc: "Lord Balaram appeared as the son of Mother Rohini and Vasudeva. His auspicious appearance day is celebrated as Balaram Purnima..." },
                 { title: "Sri Krishna Janmashtami", date: "Sep 4, 2026", desc: "The auspicious appearance day of Lord Krishna, the younger brother of Lord Balarama is celebrated on the eighth day of the waning moon..." },
                 { title: "Vyasa Puja", date: "Sep 5, 2026", desc: "The appearance day of Srila Prabhupada, the founder-acharya of ISKCON is celebrated as Vyasa Puja. Srila Prabhupada was born in 1896..." },
                 { title: "Nandotsav 2026", date: "Sep 5, 2026", desc: "Nandotsav is a festival celebrated the day after the festival Janmashtami, which celebrates the Lord Krishna's birth." },
               ].map((fest, i) => (
                  <Reveal key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-accent-light/50 transition-colors">
                     <div className="w-24 h-24 shrink-0 rounded-2xl bg-gradient-to-br from-accent-light/30 to-accent-secondary/10 flex flex-col items-center justify-center text-accent-primary">
                        <span className="text-xs uppercase font-bold tracking-widest">{fest.date.split(" ")[0]}</span>
                        <span className="text-3xl font-display font-medium leading-none">{fest.date.split(" ")[1].replace(",", "")}</span>
                     </div>
                     <div>
                        <h4 className="text-xl font-display font-medium mb-2">{fest.title}</h4>
                        <p className="text-sm text-text-muted line-clamp-2">{fest.desc}</p>
                     </div>
                  </Reveal>
               ))}
            </div>
         </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="container-page text-center relative">
          <Reveal>
             <SectionHeading 
                eyebrow="Join Our Divine Journey" 
                title="Be a Part of Lord’s Divine Seva" 
                intro="Every contribution and visit is counted as a part of serving the Lotus Feet of the Lord. Help us in building Gupt Vrindavan Dham, a place of devotion, simplicity, and spiritual awakening."
             />
             <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" href="/donate">Offer Seva</Button>
                <Button variant="outline" size="lg" href="/contact">Join the Legacy</Button>
             </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
