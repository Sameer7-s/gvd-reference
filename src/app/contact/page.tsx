import { headers } from "next/headers";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, Button } from "@/components/ui";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Contact Us · Gupt Vrindavan Dham",
  description: "Inquire or get in touch with Gupt Vrindavan Dham.",
  path: "/contact",
});

const faqs = [
  "What are the temple timings for darshan at the Hare Krishna temple in Jaipur?",
  "What is the best time to visit the Hare Krishna Mandir in Jaipur?",
  "How can I become a member or participate in activities at the temple?",
  "Can I stay at the Hare Krishna temple in Jaipur?"
];

export default async function ContactPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Mandir", path: "#" },
          { name: "Contact Us", path: "/contact" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="Contact Us"
        title="Inquire or get in touch"
        intro="For support, inquiry, or feedback, please reach out to the Gupt Vrindavan Dham. We anticipate hearing from you. You are welcome to contact us through any convenient method."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Mandir", href: "#" },
          { name: "Contact Us", href: "/contact" },
        ]}
      />

      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <Reveal>
                <div className="space-y-2">
                  <h2 className="font-display text-3xl text-[var(--color-text-primary)]">Contact Information</h2>
                  <p className="text-[var(--color-text-muted)]">Reach out to us directly via email or phone.</p>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={100}>
                  <div className="flex items-start gap-5">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-1">Email Us</p>
                      <a href="mailto:info@guptvrindavandham.org" className="text-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors">info@guptvrindavandham.org</a>
                    </div>
                  </div>
                </Reveal>
                
                <Reveal delay={150}>
                  <div className="flex items-start gap-5">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-1">Call Us</p>
                      <a href="tel:+919799999881" className="text-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors">+91-97999 99881</a>
                    </div>
                  </div>
                </Reveal>
                
                <Reveal delay={200}>
                  <div className="flex items-start gap-5">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-1">Office Hours</p>
                      <p className="text-lg text-[var(--color-text-muted)]">9:00 am - 6:00 pm</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={300}>
                <div className="bg-[var(--color-bg-secondary)] rounded-3xl p-8 border border-[var(--color-accent-primary)]/10">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-[var(--color-accent-primary)] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display text-xl text-[var(--color-text-primary)] mb-2">Gupt Vrindavan Dham</h4>
                      <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">Hare Krishna Marg, Jagatpura,<br/>Jaipur-302017</p>
                      <Link href="#" className="text-sm font-semibold text-[var(--color-accent-primary)] hover:underline uppercase tracking-wider">
                        Get Directions
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <Reveal delay={200}>
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-[var(--color-accent-primary)]/10 shadow-luxury">
                <div className="mb-8">
                  <h3 className="font-display text-2xl text-[var(--color-text-primary)] mb-2">Send us a Message</h3>
                  <p className="text-[var(--color-text-muted)]">Fill out the form below, and one of our friendly team members will get back to you shortly.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[var(--color-text-primary)]">Name*</label>
                      <input type="text" placeholder="Enter Name" className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border-transparent focus:border-[var(--color-accent-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 transition-all outline-none" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[var(--color-text-primary)]">Phone*</label>
                      <input type="tel" placeholder="Enter Phone No." className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border-transparent focus:border-[var(--color-accent-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 transition-all outline-none" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--color-text-primary)]">Email*</label>
                    <input type="email" placeholder="Enter Email" className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border-transparent focus:border-[var(--color-accent-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 transition-all outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--color-text-primary)]">Subject</label>
                    <input type="text" placeholder="Enter Subject" className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border-transparent focus:border-[var(--color-accent-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--color-text-primary)]">Message*</label>
                    <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border-transparent focus:border-[var(--color-accent-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 transition-all outline-none resize-none" required></textarea>
                  </div>
                  <Button variant="primary" size="lg" className="w-full">
                    Submit Message
                  </Button>
                </form>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-bg-secondary)] py-20 sm:py-24">
        <div className="container-page max-w-4xl">
          <Reveal className="text-center mb-12">
            <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" intro="Still have any questions? Contact our Team via info@guptvrindavandham.org." className="mx-auto" />
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="bg-white rounded-2xl p-6 flex justify-between items-center cursor-pointer border border-[var(--color-accent-primary)]/10 hover:shadow-sm transition-all group">
                  <h4 className="font-medium text-[var(--color-text-primary)] pr-8">{faq}</h4>
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-accent-primary)] group-hover:bg-[var(--color-accent-primary)] group-hover:text-white transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={250} className="text-center pt-6">
              <Link href="#" className="inline-block text-[var(--color-accent-primary)] font-medium hover:underline underline-offset-4">
                Show More FAQs
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
