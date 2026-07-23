"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { AssetFrame, Button } from "@/components/ui";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        eyebrow="Vision for the Future"
        intro="Take a glance at our upcoming grand projects to uplift the social consciousness by exhibiting cultural heritage of India."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Activities", href: "/activities" },
          { name: "Projects", href: "/activities/projects" },
        ]}
      />

      <section className="py-24 bg-white relative">
        <div className="container-page">
          <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-10">
            <Reveal className="group flex flex-col bg-bg-secondary rounded-[2rem] p-4 border border-gray-100 hover:shadow-luxury transition-shadow">
              <AssetFrame 
                label="Hare Krishna Sewal Mandir" 
                tone="saffron" 
                className="w-full aspect-video rounded-xl mb-6 overflow-hidden" 
              />
              <div className="px-4 pb-6 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-medium text-text-primary mb-3">Hare Krishna Sewal Mandir</h3>
                <p className="text-text-muted leading-relaxed mb-6 flex-1">
                  Gupt Vrindavan Dham is preparing a grand Gaushala project between the hills of Bharatpur for our sacred cows.
                </p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
