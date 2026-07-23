import { headers } from "next/headers";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { DarshanGallery } from "@/components/DarshanGallery";

export const metadata = buildMetadata({
  title: "Darshans · Gupt Vrindavan Dham",
  description: "View daily darshans from Gupt Vrindavan Dham.",
  path: "/mandir/darshans",
});

export default async function DarshansPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Mandir", path: "#" },
          { name: "Darshans", path: "/mandir/darshans" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="Darshans"
        title="Darshans"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Mandir", href: "#" },
          { name: "Darshans", href: "/mandir/darshans" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20">
        <div className="container-page max-w-6xl">
          <DarshanGallery />
        </div>
      </section>
    </>
  );
}
