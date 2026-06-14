import { PageHeader } from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE, CONTACT } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms & Donation Policy",
  description: `Terms of use and donation policy for ${SITE.name}.`,
  path: "/terms",
});

const sections = [
  {
    h: "Use of this website",
    p: "This website is provided for information and to facilitate worship, visits and charitable contributions to Hare Krishna Movement, Visakhapatnam. By using the site you agree to use it lawfully and not to attempt to disrupt or compromise its security.",
  },
  {
    h: "Donations",
    p: "All contributions made through this website are voluntary charitable donations in support of the temple's spiritual and humanitarian activities. Donations are made to a registered charitable trust and a receipt eligible for tax exemption is issued for every contribution.",
  },
  {
    h: "Refund policy",
    p: "As donations are voluntary offerings, they are generally non-refundable. If a donation was made in error or charged in duplicate, please contact us within 7 days and we will review the request in good faith.",
  },
  {
    h: "Intellectual property",
    p: "The deity images, artwork, text and design of this website are the property of the trust or are used with permission, and may not be reproduced for commercial purposes without consent.",
  },
  {
    h: "Limitation of liability",
    p: "Information such as timings and festival dates is provided in good faith and may change according to the Vaishnava calendar and temple schedule. Please confirm with the temple before planning your visit.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Donation Policy"
        intro="The terms under which we offer this website and accept your generous contributions."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Terms", href: "/terms" },
        ]}
      />
      <article className="bg-cream py-20">
        <div className="container-page max-w-3xl space-y-8">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-2xl text-maroon-900">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
            </section>
          ))}
          <section>
            <h2 className="font-display text-2xl text-maroon-900">Questions</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Reach us at{" "}
              <a className="font-medium text-saffron-700 underline" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>{" "}
              or {CONTACT.phonePrimary}.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
