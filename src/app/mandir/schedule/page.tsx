import { headers } from "next/headers";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Button } from "@/components/ui";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Our Schedule · Gupt Vrindavan Dham",
  description: "Regular Temple Timings at Gupt Vrindavan Dham. The day begins with the Mangala darshan of the Lord, followed by various devotional activities.",
  path: "/mandir/schedule",
});

const schedule = [
  { name: "Mangla Aarti", time: "04:30" },
  { name: "Shringar Aarti & Guru Puja", time: "07:30" },
  { name: "Srimad Bhagavatam Discourse", time: "08:30" },
  { name: "Bhog Aarti", time: "12:00" },
  { name: "Darshan Closed", time: "13:00", highlight: true },
  { name: "Sandhya Aarti", time: "19:00" },
  { name: "Shayan Aarti", time: "20:15" },
  { name: "Darshan Closed", time: "20:45", highlight: true },
];

const ctas = [
  { title: "Book Daily Prasadam", button: "Book Now" },
  { title: "Volunteer with us", button: "Fill the Form" },
  { title: "Career Openings", button: "Join us" },
  { title: "Square Feet Seva", button: "Donate Now" },
  { title: "Contact Us", button: "Get in Touch" },
  { title: "Annadaan Seva", button: "Sponsor Now" },
  { title: "Gau Seva", button: "Offer Seva" },
];

export default async function SchedulePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Mandir", path: "#" },
          { name: "Our Schedule", path: "/mandir/schedule" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="Regular Temple Timings"
        title="Our Schedule"
        intro="The Gupt Vrindavan Dham offers darshan at definite times each day, beginning with early Mangala darshan and concluding with evening sandhya darshan. The Lord receives six aartis and six bhoga offerings daily, complemented by harmonic devotional bhajans and kirtans. Furthermore, weekends feature a palaki utsava in the main temple hall."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Mandir", href: "#" },
          { name: "Our Schedule", href: "/mandir/schedule" },
        ]}
      />

      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            
            {/* Left Col: Schedule */}
            <div>
              <Reveal>
                <div className="mb-10">
                  <h2 className="font-display text-3xl text-[var(--color-text-primary)] mb-4">Today’s Schedule</h2>
                  <p className="text-[var(--color-text-text-muted)] text-lg leading-relaxed">
                    The day begins with the Mangala darshan of the Lord, followed by various devotional activities including aartis, chanting of Hare Krishna, kirtan, and Bhagavata pravacan. We invite you to participate in today's Temple programs and nourish your soul.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-[1.375rem] before:w-px before:bg-gradient-to-b before:from-[var(--color-accent-primary)]/40 before:via-[var(--color-accent-primary)]/20 before:to-transparent">
                {schedule.map((item, i) => (
                  <Reveal key={i} delay={i * 50}>
                    <div className="relative flex items-center gap-6 group">
                      <div className={`h-12 w-12 rounded-full border-2 flex items-center justify-center bg-white relative z-10 transition-colors ${item.highlight ? 'border-gray-200 text-gray-400' : 'border-[var(--color-accent-primary)]/30 text-[var(--color-accent-primary)] group-hover:border-[var(--color-accent-primary)] group-hover:bg-[var(--color-accent-primary)]/5'}`}>
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className={`flex-1 rounded-2xl p-5 sm:px-6 flex justify-between items-center transition-all ${item.highlight ? 'bg-gray-50 border border-transparent' : 'bg-white border border-[var(--color-accent-primary)]/10 shadow-sm hover:shadow-md'}`}>
                        <h4 className={`font-medium ${item.highlight ? 'text-gray-500' : 'text-[var(--color-text-primary)] text-lg'}`}>{item.name}</h4>
                        <span className={`font-display tracking-widest text-lg ${item.highlight ? 'text-gray-400' : 'text-[var(--color-accent-primary)] font-semibold'}`}>{item.time}</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Col: Events and CTAs */}
            <div className="space-y-12">
              <Reveal delay={100}>
                <div className="bg-[var(--color-bg-secondary)] rounded-3xl p-8 sm:p-10 border border-[var(--color-accent-primary)]/10">
                  <h3 className="font-display text-2xl text-[var(--color-text-primary)] mb-4">Upcoming Special Events</h3>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] text-xs font-bold tracking-widest uppercase rounded-full mb-3">Festival</span>
                    <h4 className="font-display text-3xl text-[var(--color-text-primary)] mb-3">Gaur Purnima</h4>
                    <p className="text-[var(--color-text-text-muted)] text-base">
                      Numerous festivals and celebrations are held throughout the year to please the Deities. Intensify your devotion for Sri Sri Krishna Balaram by visiting and participating in the temple activities.
                    </p>
                  </div>
                  <Button variant="primary">Learn More</Button>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div>
                  <h3 className="font-display text-2xl text-[var(--color-text-primary)] mb-6">Discover Gupt Vrindavan Dham</h3>
                  <p className="text-[var(--color-text-text-muted)] mb-6">Learn more about what you can do.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {ctas.map((cta, i) => (
                      <div key={i} className="bg-white border border-gray-100 p-5 rounded-2xl hover:border-[var(--color-accent-primary)]/30 hover:shadow-sm transition-all group flex flex-col justify-between h-32">
                        <h4 className="font-medium text-[var(--color-text-primary)]">{cta.title}</h4>
                        <Link href="#" className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-primary)] font-semibold uppercase tracking-wider group-hover:text-[var(--color-accent-secondary)] transition-colors">
                          {cta.button} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
