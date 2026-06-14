import { headers } from "next/headers";
import { HandHeart, ReceiptText, ShieldCheck, HeartHandshake } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { DonationForm } from "@/components/DonationForm";
import { Reveal } from "@/components/Reveal";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Donate · Offer a Seva",
  description:
    "Support Hare Krishna Movement, Visakhapatnam. Contribute to Anna-Daan, Subhojanam, mid-day meals, gaushala and Nitya Seva. 100% secure, tax-exempt donations with instant receipts.",
  path: "/donate",
  keywords: ["donate HKM Vizag", "Anna Daan donation", "temple seva donation Visakhapatnam", "80G temple donation"],
});

const reasons = [
  { icon: HandHeart, title: "Feed the hungry", text: "Your gift serves sanctified meals to those in need." },
  { icon: ReceiptText, title: "80G tax benefit", text: "Registered trust — every donation is tax-exempt." },
  { icon: ShieldCheck, title: "100% secure", text: "Encrypted, PCI-DSS compliant payment processing." },
  { icon: HeartHandshake, title: "Total transparency", text: "Receipts issued and funds devoted to seva." },
];

export default async function DonatePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Donate", path: "/donate" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="Seva — Loving Service"
        title="Offer a seva to Sri Krishna"
        intro="Charity performed for the pleasure of the Lord is never lost. Choose a cause, give from the heart, and become an eternal partner in the dham's mission."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Donate", href: "/donate" },
        ]}
      />

      <section className="bg-cream py-10">
        <div className="container-page grid grid-cols-2 gap-4 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="flex h-full flex-col items-start gap-2 rounded-2xl border border-gold-500/20 bg-ivory/70 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-saffron-500 to-maroon-700 text-cream">
                  <r.icon className="h-5 w-5" />
                </span>
                <h2 className="font-display text-lg text-maroon-900">{r.title}</h2>
                <p className="text-sm text-muted">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="rounded-[2rem] border border-gold-500/25 bg-ivory/80 p-6 shadow-temple-lg sm:p-10">
              <DonationForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
