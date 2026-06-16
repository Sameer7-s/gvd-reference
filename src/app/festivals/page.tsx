import { headers } from "next/headers";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Festivals } from "@/components/sections/Festivals";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Festivals · Celebrate Devotion",
  description:
    "Join us in celebrating the auspicious festivals and pastimes of the Lord at the Hare Krishna Movement, Visakhapatnam.",
  path: "/festivals",
  keywords: ["festivals HKM Vizag", "ISKCON Visakhapatnam festivals", "Janmashtami Vizag", "Ratha Yatra"],
});

export default async function FestivalsPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Festivals", path: "/festivals" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="The Vaishnava Calendar"
        title="Celebrate Devotion"
        intro="The temple calendar is alive with colour, kirtan and feasting. Join us as we celebrate the pastimes of the Lord through the year."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Festivals", href: "/festivals" },
        ]}
      />

      <Festivals />
    </>
  );
}
