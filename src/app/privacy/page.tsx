import { PageHeader } from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE, CONTACT } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and protects your personal information.`,
  path: "/privacy",
});

const sections = [
  {
    h: "Information we collect",
    p: "We collect only the information you choose to share with us — your name, email, phone number and (optionally) PAN when you make a donation or subscribe to updates. Payment information is processed entirely by our PCI-DSS compliant payment partner and is never stored on our servers.",
  },
  {
    h: "How we use your information",
    p: "Your details are used to process donations, issue tax-exemption receipts, send you temple updates you have opted into, and respond to your enquiries. We never sell, rent or trade your personal information with third parties.",
  },
  {
    h: "Cookies",
    p: "This website uses only essential cookies required for security and basic functionality. We do not use intrusive advertising or cross-site tracking cookies.",
  },
  {
    h: "Data security",
    p: "All data is transmitted over an encrypted HTTPS connection. We apply strict security headers, a content-security policy and reasonable organisational safeguards to protect your information.",
  },
  {
    h: "Your rights",
    p: "You may request access to, correction of, or deletion of your personal data, and you can unsubscribe from communications at any time. Contact us using the details below to exercise these rights.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        intro="Your trust is sacred to us. This policy explains how we handle your information."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Privacy", href: "/privacy" },
        ]}
      />
      <article className="bg-bg-primary py-20">
        <div className="container-page max-w-3xl space-y-8">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-2xl text-text-primary">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-text-muted">{s.p}</p>
            </section>
          ))}
          <section>
            <h2 className="font-display text-2xl text-text-primary">Contact us</h2>
            <p className="mt-3 leading-relaxed text-text-muted">
              For any privacy questions, email{" "}
              <a className="font-medium text-accent-primary underline" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>{" "}
              or call {CONTACT.phonePrimary}.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
