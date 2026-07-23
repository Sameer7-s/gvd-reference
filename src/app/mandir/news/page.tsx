import { headers } from "next/headers";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "News & Media Coverage · Gupt Vrindavan Dham",
  description: "News and media coverage regarding Gupt Vrindavan Dham.",
  path: "/mandir/news",
});

const newsArticles = [
  {
    date: "10/02/2025",
    title: "Garbha Grha will be built on 14 thousand bricks with Shri Ram written on them in Jaipur's Gupt Vrindavan, Krishna-Balaram will be seated there.",
    excerpt: "On the lines of Vrindavan, Gupt Vrindavan is being made in Jaipur too, in which the idols of Krishna-Balram will be placed in the middle, Chaitanya Mahaprabhu and Nityananda Prabhu on their right and Radha-Shyam Sundar on the left. The special thing is that inside the sanctum sanctorum of Gupt Vrindavan where the idols of Thakurji will be installed, 14 thousand bricks with Shri Ram written on them are being placed there.",
  },
  {
    date: "15/11/2024",
    title: "Gupt Vrindavan Dham: 17 storey temple is being built in 6 acres at a cost of 300 crores, will be ready in 2027 on the 300th anniversary of the establishment of Jaipur",
    excerpt: "A new centre of faith is taking shape in Jaipur, famous as Chhoti Kashi. 70 percent of the work of this Gupt Vrindavan Dham, being built at a cost of 300 crores on 6 acres of land on Hare Krishna Marg in Jagatpura, has been completed. This 17-storey grand temple will be completed in 2027 on the occasion of the 300th anniversary of the establishment of Jaipur.",
  },
  {
    date: "05/06/2025",
    title: "Neem, Shisham, Kadamba, Banyan trees will be planted to create a green paradise",
    excerpt: "The 17-storey temple on 6 acres of land will be a wonderful example of architecture.To increase the fame of the Pink City on the national and international stage, trees of many species including neem, sheesham, kadamba, aloe vera, banyan, ashwagandha will be planted to make the under-construction 'Gupt Vrindavan Dham' a green paradise.",
  },
  {
    date: "05/06/2025",
    category: "Chant. Connect. Celebrate",
    title: "RAJASTHAN TO GET SPIRITUAL & CULTURAL MARVEL WITH 'GUPT VRINDAVAN DHAM'",
    excerpt: "India's cultural capital Rajasthan is set to welcome a landmark of spiritual and architectural magnificence with the construction of Gupt Vrindavan Dham in Jaipur. Developed by the Hare Krishna Movement, this 17-storey spiritual and cultural centre is being built on a 6-acre site at Hare Krishna Marg, Jagat-pura, and will be Rajasthan's largest spiritual hub.",
  },
  {
    date: "05/06/2025",
    title: "Gupt Vrindavan Dham will be 17 floors high, '108 peacocks' will dance on the 65 feet high entrance",
    excerpt: "Choti Kashi Jaipur will now also become a symbol of spiritual and architectural splendor, as Jaipur is going to get a unique temple in the form of Gupt Vrindavan Dham. The 17-storey spiritual and cultural center being developed by the Hare Krishna Movement is being constructed on 6 acres of land in Jagatpura. It will be the largest spiritual center in Rajasthan. The main feature of the Dham is its 65 feet high entrance gate, which is decorated with 108 beautiful peacock figures. These will be a symbol of divinity and beauty.",
  },
  {
    date: "10/02/2025",
    title: "With spirituality, challenges will become strength",
    excerpt: "Challenges are a part of our life, we should not be afraid of them, they come to make us stronger.",
  },
  {
    date: "10/02/2025",
    title: "Nityananda Trayodashi : A celebration of divine love and devotion",
    excerpt: "Nityananda Mahaprabhu a central figure in the Gaudiya Vaishnavism tradition. revered as the incarnation of Lord Balram, elder brother of Lord Krishna. His appearance day, celebration the Trayodashi of Magh month, is a significant event in the lives of millions of devotees.",
  },
  {
    date: "21/11/2024",
    title: "A 17-Storey Temple: An Architectural Marvel — The State's Largest Spiritual Center ‘Gupt Vrindavan Dham’ to Offer a Spiritual and Cultural Treasure.",
    excerpt: "Hare Krishna Movement located in Jagatpura is going to give a spiritual and cultural gift to Rajasthan which is called 'Gupt Vrindavan Dham'. This temple is being built on 6 acres of land on Hare Krishna Marg, Jagatpura.",
  },
  {
    date: "11/03/2025",
    title: "Appearance day of the golden form of Radha Krishna 'Chaitanya Mahaprabhu' - 'Gaur Purnima'",
    excerpt: "Sri Chaitanya Mahaprabhu did the great work of binding the whole world in the thread of devotion and starting the Harinam Sankirtan movement, his aim was to establish peace by spreading Krishna devotion all over the world. He is considered to be the promoter of the Gaudiya sect of Vaishnavas and an incarnation of Lord Shri Krishna.",
  },
  {
    date: "21/11/2024",
    title: "Gupt Vrindavan Dham : The 17-storey grand temple being built on six acres of land will be a unique example of architecture.",
    excerpt: "India's glorious state Rajasthan is famous all over the world for its golden history, now another new chapter is going to be added to the pages of the history of this state. Hare Krishna Movement is going to give a spiritual and cultural gift to Jaipur, Rajasthan, which is named 'Gupt Vrindavan Dham'.",
  },
  {
    date: "06/12/2024",
    title: "The concept of Harinam Jap Mandap is now also in Jaipur temples : After chanting 108 names, you will have darshan of Radha Shyam Sundarji",
    excerpt: "The concept of Harinam Jap Mandap will now be seen in the temples of Jaipur as well. After the first Jap Mandap was built in Bengaluru, now Jap Mandaps are being built in the temples of the Krishna Movement in Jaipur, the purpose of which will be to take the name of God as soon as one enters the temple.",
  },
  {
    date: "17/05/2025",
    title: "Wedding rituals will be performed in Vrindavan Dham, Radha-Krishna-Balram will be witnesses of the marriage",
    excerpt: "The Vrindavan Dham being built at a cost of 200 crores on Hare Krishna Marg in Jagatpura area will be the first Krishna temple in the state where one of the sixteen rituals of Hinduism - marriage ritual - will be performed in the temple premises.",
  },
  {
    category: "Geeta Jayanti Special",
    title: "Song of Spiritual Energy of Life",
    excerpt: "Krishna gave the knowledge of Gita to Arjuna in the battle of Kurukshetra through a song, hence it is called Gita. The message that Krishna gave to Arjuna 5000 years ago is as valid today as it was at that time.",
  }
];

export default async function NewsPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "News Media", path: "/mandir/news" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="News & Media Coverage"
        title="News Media"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "News Media", href: "/mandir/news" },
        ]}
      />

      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-32">
        <div className="container-page max-w-5xl">
          <div className="grid gap-8">
            {newsArticles.map((article, i) => (
              <Reveal key={i} delay={i * 30}>
                <article className="group bg-white rounded-3xl p-8 sm:p-10 border border-[var(--color-accent-primary)]/10 shadow-sm hover:shadow-luxury transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                    {article.date && (
                      <div className="flex items-center gap-2 text-[var(--color-accent-primary)] font-medium text-sm">
                        <Calendar size={16} />
                        <time>{article.date}</time>
                      </div>
                    )}
                    {article.category && (
                      <>
                        {article.date && <span className="hidden sm:block text-gray-300">•</span>}
                        <span className="inline-block px-3 py-1 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] text-xs font-bold tracking-widest uppercase rounded-full">
                          {article.category}
                        </span>
                      </>
                    )}
                  </div>
                  
                  <h2 className="font-display text-2xl sm:text-3xl text-[var(--color-text-primary)] mb-4 leading-tight group-hover:text-[var(--color-accent-primary)] transition-colors">
                    <Link href="#">{article.title}</Link>
                  </h2>
                  
                  <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  
                  <Link href="#" className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-primary)] font-semibold uppercase tracking-wider hover:text-[var(--color-accent-secondary)] transition-colors">
                    Read Full Article <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
