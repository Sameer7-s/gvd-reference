import { headers } from "next/headers";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { LotusDivider } from "@/components/decor";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { MapPin, Globe } from "lucide-react";

export const metadata = buildMetadata({
  title: "Our Centers · Gupt Vrindavan Dham",
  description: "A directory of the centres of the Hare Krishna Movement worldwide.",
  path: "/about/centers",
});

const centers = [
  "ISKCON Bangalore",
  "ISKCON - Vaikuntha Hill",
  "Vrindavan Chandrodaya Mandir",
  "Gupt Vrindavan Dham",
  "Nandgram Dham, Kota",
  "ISKCON Hubli",
  "Hare Krishna Golden Temple",
  "Iskcon Mangalore",
  "ISKCON Mysore",
  "Hare Krishna Mandir, Bhadaj, Ahmedabad",
  "Hare Krishna Ashram Malaysia",
  "Dakshina Dwaraka Dham, Chennai",
  "Sri Krishna Balaram Mandir – Sunnyvale, USA",
  "Hare Krishna Movement, Guwahati",
  "Hare Krishna Movement Dehradun",
  "India Heritage Foundation - Boston",
  "India Heritage Foundation, NJ/NY",
  "Hare Krishna Movement Pune",
  "Hare Krishna Movement, Coimbatore",
  "Hare Krishna Movement, Bellary",
  "Hare Krishna Gokula Kshetram",
  "Hare Krishna Movement, Mumbai",
  "Hare Krishna Movement, Lucknow",
  "Hare Krishna Movement, Tirupati",
  "Hare Krishna Ashram, Johor",
  "Hare Krishna Movement, Bhilai",
  "Hare Krishna Movement, Visakhapatnam",
  "Hare Krishna Movement, Puri"
];

const associatedCenters = [
  "Hare Krishna Movement, Dharmapuri",
  "London Preaching Centre"
];

export default async function CentersPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Mandir", path: "#" },
          { name: "Our Centers", path: "/about/centers" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="Global Presence"
        title="Our Centers"
        intro="Srila Prabhupada's Hare Krishna Movement Worldwide"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Mandir", href: "#" },
          { name: "Our Centers", href: "/about/centers" },
        ]}
      />

      {/* Intro Section */}
      <section className="bg-[var(--color-bg-primary)] py-20">
        <div className="container-page max-w-4xl text-center">
          <Reveal>
            <p className="text-xl leading-relaxed text-[var(--color-text-primary)] font-medium">
              This directory gives a list of those centres of the Hare Krishna Movement which accept Srila Prabhupada as the only Acarya or Diksha Guru of the movement.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              Each of these centres is independently governed and the confederation of these worldwide centres is known as Srila Prabhupada's Hare Krishna Movement or ISKCON Bangalore Group of centres.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="bg-[var(--color-bg-secondary)] py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="text-center">
            <SectionHeading
              className="mx-auto"
              eyebrow="Directory"
              title="Global Centers"
            />
          </Reveal>
          <LotusDivider className="mt-8 mx-auto" />
          
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {centers.map((center, i) => (
              <Reveal key={center} delay={(i % 8) * 50}>
                <div className="group flex items-start gap-4 rounded-2xl border border-[var(--color-accent-primary)]/10 bg-white p-5 transition-all duration-300 hover:border-[var(--color-accent-primary)]/40 hover:shadow-luxury">
                  <div className="mt-1 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[var(--color-accent-primary)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg leading-snug text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors duration-300">{center}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Associated Centers */}
      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
        <div className="container-page max-w-4xl">
          <Reveal className="text-center">
            <SectionHeading
              className="mx-auto"
              eyebrow="Network"
              title="List of Other Associated Centers"
            />
          </Reveal>
          
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {associatedCenters.map((center, i) => (
              <Reveal key={center} delay={i * 100}>
                <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-[var(--color-bg-secondary)] p-6">
                  <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-white text-gray-400">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg text-[var(--color-text-primary)]">{center}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
