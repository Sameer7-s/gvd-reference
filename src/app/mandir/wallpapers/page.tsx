"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, AssetFrame } from "@/components/ui";
import { Download, Search, Plus, Filter, Heart } from "lucide-react";

const WALLPAPERS = [
  { title: "Radha Raman Ji Mahamantra HD", category: "Deities", tone: "saffron" },
  { title: "Krishna with Animals Miniature Art HD", category: "Lord Krishna", tone: "krishna" },
  { title: "Jagannath Ji Aarti Pujari Sacred Darshan", category: "Lord Jagannath", tone: "maroon" },
  { title: "Radharani Pink Floral Gopa Darshan", category: "Deities", tone: "gold" },
  { title: "Krishna Ji Cinematic Bansuri Close Darshan", category: "Deities", tone: "night" },
  { title: "Krishna Ji Purple Poshak Bansuri Darshan", category: "Deities", tone: "krishna" },
  { title: "Venkateswara Balaji Cosmic Divine Art", category: "General", tone: "saffron" },
  { title: "Radharaman Ji Butterfly Poshak Digital Art", category: "Deities", tone: "gold" },
  { title: "Radha Raman Ji Deity HD", category: "Deities", tone: "maroon" },
  { title: "Bal Krishna Leela Sepia Art HD", category: "Lord Krishna", tone: "gold" },
  { title: "Jagannath Puri Sudarshana Chakra Flag Photo", category: "Lord Jagannath", tone: "night" },
  { title: "Radharani Purple Poshak Royal Umbrella Darshan", category: "Deities", tone: "krishna" },
  { title: "Radha Krishna Cute Vrindavan Forest Art", category: "Radha Krishna", tone: "saffron" },
  { title: "Krishna Ji Colorful Poshak Close Darshan", category: "Deities", tone: "gold" },
  { title: "Govind Dev Ji Enchanted Forest Darshan", category: "Deities", tone: "krishna" },
  { title: "Srila Prabhupada Joyful Disciples Collage", category: "Acharyas", tone: "saffron" },
  { title: "Cute Bal Krishna with Mango Animated HD", category: "Lord Krishna", tone: "gold" },
  { title: "Radha Krishna Gopis Vrindavan Leela Painting", category: "Radha Krishna", tone: "maroon" },
  { title: "Jagannath Ji Devotee Divine Touch Art", category: "Lord Jagannath", tone: "night" },
  { title: "Balaram Ji Jasmine Floral Crown Darshan", category: "Deities", tone: "saffron" },
  { title: "Jagannath Ji Marigold Shringar Temple Darshan", category: "Lord Jagannath", tone: "gold" },
  { title: "Radharani Lotus Pink Garland Darshan", category: "Deities", tone: "maroon" },
  { title: "Radharaman Ji Pearl Poshak Oil Painting", category: "Deities", tone: "krishna" },
  { title: "Krishna Flute Dark Aesthetic HD", category: "Lord Krishna", tone: "night" },
  { title: "Jagannath Ji Bougainvillea Diya Sacred Art", category: "Lord Jagannath", tone: "saffron" },
  { title: "Jagannath Ji Vibrant Pixel Art Darshan", category: "Lord Jagannath", tone: "krishna" },
  { title: "Radharani Blue Floral Starlit Sky Darshan", category: "Deities", tone: "night" },
  { title: "Jagannath Puri Temple Divine Overlay", category: "Lord Jagannath", tone: "saffron" },
  { title: "Radharani Vibrant Floral Shringar Darshan", category: "Deities", tone: "maroon" },
  { title: "Radharaman Ji Pencil Sketch Art", category: "Deities", tone: "gold" },
] as const;

const CATEGORIES = ["All Categories", ...Array.from(new Set(WALLPAPERS.map(w => w.category)))];

const FAQS = [
  {
    q: "Are these Krishna wallpapers free to download?",
    a: "Yes, all wallpapers are completely free to download for personal use. Feel free to use them as your phone or desktop backgrounds.",
  },
  {
    q: "How do I download a wallpaper?",
    a: "Simply hover over any wallpaper image and click the download icon to save it directly to your device.",
  },
  {
    q: "Which sizes and resolutions are available?",
    a: "Our wallpapers are available in high-definition (HD) and 4K resolutions, optimized for both mobile and desktop screens to ensure the best quality.",
  },
  {
    q: "Can I share these wallpapers with friends and family?",
    a: "Absolutely! We encourage you to share these divine images with your loved ones to spread spiritual joy and devotion.",
  },
  {
    q: "How often are new wallpapers added?",
    a: "We regularly update our collection with new divine artworks, digital illustrations, and high-quality temple photography.",
  },
];

export default function WallpapersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredWallpapers = WALLPAPERS.filter(w => {
    const matchesSearch = w.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All Categories" || w.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader
        title="DOWNLOAD FREE 4K WALLPAPERS"
        eyebrow="GVD"
        intro="Immerse yourself in divine beauty with our high-quality collection of sacred wallpapers for your devices."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Mandir", href: "/mandir" },
          { name: "Wallpapers", href: "/mandir/wallpapers" },
        ]}
      />

      {/* --- FEATURED SECTION --- */}
      <section className="py-16 bg-white relative">
        <div className="container-page">
           <Reveal>
              <SectionHeading title="Featured Wallpapers" eyebrow="Highlights" align="left" className="mb-10" />
           </Reveal>
           <div className="grid md:grid-cols-2 gap-8">
              <Reveal className="relative group overflow-hidden rounded-[2rem] shadow-sm hover:shadow-temple transition-shadow h-96">
                 <AssetFrame tone="saffron" className="w-full h-full" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-display font-medium mb-1">Radha Krishna Divine Love Art</h3>
                    <p className="text-white/80 font-medium tracking-wide uppercase text-sm mb-4">Radha Krishna</p>
                    <button className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-text-primary font-semibold text-sm hover:bg-accent-light hover:text-white transition-colors">
                      <Download className="w-4 h-4" /> Download 4K
                    </button>
                 </div>
              </Reveal>

              <Reveal delay={100} className="relative group overflow-hidden rounded-[2rem] shadow-sm hover:shadow-temple transition-shadow h-96">
                 <AssetFrame tone="night" className="w-full h-full" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-display font-medium mb-1">Hanuman Ji Samadhi Mobile Art</h3>
                    <p className="text-white/80 font-medium tracking-wide uppercase text-sm mb-4">Lord Hanuman</p>
                    <button className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-text-primary font-semibold text-sm hover:bg-accent-light hover:text-white transition-colors">
                      <Download className="w-4 h-4" /> Download 4K
                    </button>
                 </div>
              </Reveal>
           </div>
        </div>
      </section>

      {/* --- EXPLORE SECTION --- */}
      <section className="py-24 bg-bg-secondary relative">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
               <SectionHeading title="Browse by Category" align="left" />
               
               <div className="flex flex-col sm:flex-row gap-4">
                 <div className="relative">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                   <input 
                     type="text" 
                     placeholder="Search by name . . ." 
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full sm:w-64 pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all text-sm font-medium"
                   />
                 </div>
                 <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-white text-text-primary hover:bg-gray-50 transition-colors text-sm font-semibold">
                   <Filter className="w-4 h-4" /> All Hashtags
                 </button>
               </div>
            </div>

            {/* Categories filter */}
            <div className="flex flex-wrap gap-2 mb-12">
              {CATEGORIES.map(category => (
                <button 
                  key={category} 
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeCategory === category 
                      ? "bg-accent-primary text-white" 
                      : "bg-white border border-gray-200 text-text-muted hover:border-accent-primary/50 hover:text-accent-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Wallpapers Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredWallpapers.length > 0 ? (
              filteredWallpapers.map((wallpaper, index) => {
                // Determine height variation to create masonry effect
                const heightClass = index % 3 === 0 ? "h-96" : index % 2 === 0 ? "h-[22rem]" : "h-72";
                
                return (
                  <Reveal key={wallpaper.title} delay={(index % 4) * 50} className="break-inside-avoid">
                     <div className="relative group overflow-hidden rounded-[2rem] bg-white shadow-sm border border-gray-100 hover:shadow-temple transition-all duration-300 transform hover:-translate-y-1">
                        <div className={`relative w-full ${heightClass} overflow-hidden`}>
                           <AssetFrame tone={wallpaper.tone as any} className="w-full h-full rounded-none transition-transform duration-700 group-hover:scale-105" />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                           
                           {/* Hover Actions */}
                           <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                              <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur text-text-primary flex items-center justify-center hover:bg-accent-primary hover:text-white transition-colors shadow-sm">
                                <Heart className="w-5 h-5" />
                              </button>
                              <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur text-text-primary flex items-center justify-center hover:bg-accent-primary hover:text-white transition-colors shadow-sm">
                                <Download className="w-5 h-5" />
                              </button>
                           </div>
                        </div>
                        <div className="p-5">
                           <h4 className="font-semibold text-text-primary leading-snug line-clamp-2">{wallpaper.title}</h4>
                           <p className="text-xs uppercase tracking-wider text-accent-primary mt-2 font-bold">{wallpaper.category}</p>
                        </div>
                     </div>
                  </Reveal>
                );
              })
            ) : (
              <div className="col-span-full py-20 text-center text-text-muted">
                No wallpapers found matching your search criteria.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- FAQs --- */}
      <section className="py-24 bg-white relative">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Helpful Info"
              title="Frequently Asked Questions"
              align="center"
              className="mb-12"
            />
          </Reveal>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={faq.q} delay={i * 50}>
                  <div
                    className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                      isOpen
                        ? "border-accent-primary/40 bg-white shadow-luxury"
                        : "border-gray-100 bg-bg-primary/50"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="font-display text-lg text-text-primary">{faq.q}</span>
                        <Plus
                          className={`h-5 w-5 shrink-0 text-accent-primary transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                      </button>
                    </h3>
                    <div
                      className="grid transition-all duration-300 ease-soft"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 leading-relaxed text-text-muted">{faq.a}</p>
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
