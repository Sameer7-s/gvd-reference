"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, AssetFrame } from "@/components/ui";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  const albums = [
    {
      id: "1",
      title: "Temple Festivals",
      desc: "Browse the vast collection of photographs from festivals celebrated at Gupt Vrindavan Dham. Relive the festive experiences and spiritual bliss through the devotional memories captured in these celebrations.",
      tone: "saffron" as const,
      imagePlaceholder: "Festival Celebrations",
    },
    {
      id: "2",
      title: "Biggest Cultural Complex",
      desc: "Explore the Largest Cultural Centre of Rajasthan through an extensive collection of photos, and discover the special architectural designs and interiors.",
      tone: "maroon" as const,
      imagePlaceholder: "Cultural Complex Architecture",
    },
    {
      id: "3",
      title: "Activities",
      desc: "Memories of the variegated cultural activities, including traditional dance, drama, and musical kirtans and bhajans, performed at Gupt Vrindavan Dham.",
      tone: "gold" as const,
      imagePlaceholder: "Cultural Activities & Kirtan",
    },
    {
      id: "4",
      title: "Events",
      desc: "Check out the highlights of the spiritual events hosted by Gupt Vrindavan Dham and rejuvenate yourself with spiritual fervor.",
      tone: "krishna" as const,
      imagePlaceholder: "Spiritual Events",
    },
    {
      id: "5",
      title: "Folk Residency",
      desc: "Discover the vibrant lifestyle at Folk Residency, enclosing youth culture, programs, tours, and beyond. Envision an atmosphere saturated with spiritual routines and a commitment to focused living.",
      tone: "night" as const,
      imagePlaceholder: "Folk Residency & Youth Programs",
    }
  ];

  return (
    <>
      <PageHeader
        title="Gallery"
        eyebrow="Mandir"
        intro="The temple gallery housed a stunning collection of clicked images, each a visual tribute to its divine aura. From intricate carvings to sacred rituals, these photos captured the essence of spirituality in vivid detail. Each image spoke volumes, preserving the temple's sanctity in a timeless visual narrative."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Mandir", href: "/mandir" },
          { name: "Gallery", href: "/mandir/gallery" },
        ]}
      />

      <section className="py-24 bg-bg-secondary relative">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="A Visual Journey of Devotion"
              intro="Explore our curated collections of moments that define the spiritual essence of Gupt Vrindavan Dham."
              align="center"
              className="mb-16"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, index) => {
              // Creating a dynamic, masonry-like layout
              const isWide = index === 0 || index === 3;
              
              return (
                <Reveal 
                  key={album.id} 
                  delay={index * 100} 
                  className={`flex flex-col group ${isWide ? "md:col-span-2 lg:col-span-2" : ""}`}
                >
                   <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-luxury transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                      <div className={`relative w-full ${isWide ? 'aspect-[21/9] sm:aspect-[21/9]' : 'aspect-[4/3]'} overflow-hidden`}>
                         <AssetFrame 
                            tone={album.tone} 
                            label={album.imagePlaceholder} 
                            className="w-full h-full rounded-none group-hover:scale-105 transition-transform duration-700" 
                         />
                         <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-text-primary shadow-sm">
                            <ImageIcon className="w-3.5 h-3.5 text-accent-primary" />
                            <span className="uppercase tracking-widest text-[10px]">Album</span>
                         </div>
                      </div>
                      <div className="p-8 flex flex-col flex-1">
                         <h3 className="text-2xl font-display font-medium text-text-primary mb-3">
                           <span className="text-accent-primary mr-2 opacity-50 font-sans text-lg">{album.id}.</span> 
                           {album.title}
                         </h3>
                         <p className="text-text-muted leading-relaxed flex-1">
                           {album.desc}
                         </p>
                         <div className="mt-6 pt-6 border-t border-gray-100/60">
                           <Link href={`/mandir/gallery/${album.id}`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-primary group-hover:text-accent-secondary transition-colors">
                             Explore Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                           </Link>
                         </div>
                      </div>
                   </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
