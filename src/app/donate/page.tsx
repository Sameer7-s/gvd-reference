import { headers } from "next/headers";
import { HandHeart, ReceiptText, ShieldCheck, HeartHandshake } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { DonationForm } from "@/components/DonationForm";
import { Reveal } from "@/components/Reveal";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { getSevas } from "@/lib/content";

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
  const sevas = await getSevas();

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

      <section className="bg-bg-primary py-10">
        <div className="container-page grid grid-cols-2 gap-4 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="flex h-full flex-col items-start gap-2 rounded-2xl border border-accent-primary/20 bg-bg-white/70 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-white">
                  <r.icon className="h-5 w-5" />
                </span>
                <h2 className="font-display text-lg text-text-primary">{r.title}</h2>
                <p className="text-sm text-text-muted">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-bg-primary pb-24">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="rounded-[2rem] border border-accent-primary/25 bg-bg-white/80 p-6 shadow-luxury-hover sm:p-10">
              <DonationForm sevas={sevas} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
