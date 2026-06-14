import { MapPin, Phone, Mail, Navigation, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Button } from "@/components/ui";
import { Mandala } from "@/components/decor";
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
    <section id="visit" className="relative overflow-hidden bg-maroon-950 py-20 text-cream sm:py-28">
      <Mandala className="pointer-events-none absolute -right-32 -top-20 h-[30rem] w-[30rem] text-gold-500/[0.06] animate-spin-slower" />

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
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-300">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-cream/85 transition-colors hover:text-gold-300">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-cream/85">{item.value}</p>
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
              className="border-gold-300/40 bg-transparent text-cream hover:bg-gold-500/10"
            >
              <Phone className="h-4 w-4" />
              Call the Temple
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[2rem] border border-gold-500/25 shadow-temple-lg">
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
