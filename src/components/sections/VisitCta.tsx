import { MapPin, Phone, Mail, Navigation, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Button } from "@/components/ui";

import { CONTACT } from "@/lib/site";

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${CONTACT.mapsQuery}`;
const mapEmbed = `https://www.google.com/maps?q=${CONTACT.mapsQuery}&output=embed`;

export function VisitCta() {
  const items = [
    {
      icon: MapPin,
      label: "Address",
      value: `${CONTACT.addressLine}, ${CONTACT.street}, ${CONTACT.locality}, ${CONTACT.region} ${CONTACT.postalCode}`,
    },
    { icon: Phone, label: "Call", value: CONTACT.phonePrimary, href: `tel:${CONTACT.phonePrimaryRaw}` },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Clock, label: "Open", value: "Daily · 4:30 AM – 1 PM & 4:30 – 8:30 PM" },
  ];

  return (
    <section id="visit" className="relative overflow-hidden bg-black py-20 text-white sm:py-28">


      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            light
            align="left"
            eyebrow="Plan Your Visit"
            title="Come home to Krishna"
            intro="You are warmly welcome at the Hare Krishna Vaikuntham Cultural Centre. Bring your family, take darshan, honour prasadam and find peace."
            className="max-w-none"
          />

          <ul className="mt-8 space-y-4">
            {items.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[var(--color-accent-primary)]/25 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-primary)]">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-white/85 transition-colors hover:text-[var(--color-accent-primary)]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/85">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={mapsLink} variant="gold" size="md" external>
              <Navigation className="h-4 w-4" />
              Get Directions
            </Button>
            <Button
              href={`tel:${CONTACT.phonePrimaryRaw}`}
              variant="outline"
              size="md"
              className="border-[var(--color-accent-primary)]/40 bg-transparent text-white hover:bg-[var(--color-accent-primary)]/10"
            >
              <Phone className="h-4 w-4" />
              Call the Temple
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-accent-primary)]/25 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <iframe
              title="Map to Hare Krishna Vaikuntham Cultural Centre, Visakhapatnam"
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
