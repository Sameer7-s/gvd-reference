"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { AssetFrame } from "@/components/ui";
import { Heart, Instagram, Download } from "lucide-react";

export default function QuotesPage() {
  const quotes = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <PageHeader
        title="Srila Prabhupada Quotes"
        eyebrow="Words of Wisdom"
        intro="Explore the profound teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, bringing light to the path of self-realization."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Srila Prabhupada", href: "/prabhupada" },
          { name: "Quotes", href: "/prabhupada/quotes" },
        ]}
      />

      <section className="py-24 bg-bg-secondary">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {quotes.map((q, i) => (
              <Reveal key={q} delay={(i % 4) * 100} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-luxury transition-shadow group flex flex-col">
                <AssetFrame 
                  label={`Quote ${q}`} 
                  tone={["saffron", "maroon", "gold", "krishna", "night"][i % 5] as any} 
                  className="aspect-square w-full rounded-2xl mb-4 group-hover:scale-[1.02] transition-transform duration-300"
                />
                
                <div className="flex items-center justify-between mt-auto pt-2 px-2">
                   <button className="flex flex-col items-center gap-1 text-text-muted hover:text-red-500 transition-colors">
                     <Heart className="w-5 h-5" />
                     <span className="text-[10px] uppercase font-bold tracking-wider">Like</span>
                   </button>
                   <button className="flex flex-col items-center gap-1 text-text-muted hover:text-accent-primary transition-colors">
                     <Instagram className="w-5 h-5" />
                     <span className="text-[10px] uppercase font-bold tracking-wider">Instagram</span>
                   </button>
                   <button className="flex flex-col items-center gap-1 text-text-muted hover:text-accent-secondary transition-colors">
                     <Download className="w-5 h-5" />
                     <span className="text-[10px] uppercase font-bold tracking-wider">Download</span>
                   </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
