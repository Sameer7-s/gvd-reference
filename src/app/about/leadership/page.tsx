import { headers } from "next/headers";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Leadership · Gupt Vrindavan Dham",
  description: "Trustees and Authorities of Gupt Vrindavan Dham. Every lasting mission is anchored by steadfast hands.",
  path: "/about/leadership",
});

const trustees = [
  {
    name: "Sri Madhu Pandit Dasa",
    role: "Chairman of GBC",
    content: [
      "Madhu Pandit Dasa was born in Nagercoil, Tamil Nadu. He became a full-time member of ISKCON in 1981 while doing his M.Tech in Civil Engineering from IIT-Bombay. Since then, he has successfully conceived and implemented many large scale public service projects that positively impact millions of people. He has also worked tirelessly to preserve and promote Indian spirituality, culture and heritage among children and youth for their holistic well-being. He is the Chairman and Mentor, Global Hare Krishna Movement and the President of ISKCON Bangalore.",
      "Madhu Pandit Dasa is the Trustee and Chairman of The Akshaya Patra Foundation, which has contributed immensely to alleviate classroom hunger and improve the nutrition levels of children studying in government schools in India. He has led Akshaya Patra to become an efficient Public-Private Partnership (PPP) and an admired social innovation. He provides visionary guidance for the world's largest NGO run school meal programme."
    ]
  },
  {
    name: "Sri Chanchalapathi Dasa",
    role: "Trustee",
    content: [
      "Sri Chanchalapathi Dasa also serves as the Vice Chairman and Co-mentor of the Global Hare Krishna Movement. He is also the President of the Vrindavan Heritage Tower and Co-Founder and Vice Chairman of The Akshaya Patra Foundation.",
      "Born in 1963 in Bengaluru, India, Sri Chanchalapathi Dasa developed a deep interest in the teachings of Srila Prabhupada during his undergraduate studies at PSG College of Technology, Coimbatore. After joining the Indian Institute of Science (IISc), Bangalore, for a Masters in Electrical Communication Engineering, he dedicated his life to the service of ISKCON in 1984. Over the years, he has played a pivotal role in the growth and success of ISKCON Bangalore and The Akshaya Patra Foundation. Additionally, he contributed to the creative direction of the popular 3D animated TV series Little Krishna, which aired on Nickelodeon India."
    ]
  },
  {
    name: "Sri Amitasana Dasa",
    role: "Trustee & President, Gupt Vrindavan Dham",
    content: [
      "Amitasana Dasa was born in 1969 in Namrup, Assam, India. He completed B. Tech. in Computer Science from REC Kurukshetra. He later worked in Kirloskar Computer Services, Bangalore and joined ISKCON Bangalore in 1992. He has organised seminars, workshops and counselling programs to benefit students and professionals from all over the country. He has guided hundreds of people, especially youth, to lead a life of happiness and fulfilment.",
      "Amitasana Dasa is the President of Hare Krishna Movement, Mumbai and Governing Council Member of Hare Krishna Movement, India. He is also the President of Akshaya Patra operations in Maharashtra. Under his Governance, the Foundation has implemented several development initiatives in the region."
    ]
  },
  {
    name: "Sri Suvyakta Narsimha Dasa",
    role: "Trustee",
    content: [
      "Suvyakta Narasimha Dasa was born in 1973 in Moovattupuzha in Kerala. He completed B.E. (Mechanical) from M S Ramaiah Institute of Technology and secured 5th rank in Bangalore University. After graduation, he worked in Lincoln Helios India Ltd. as a Design Engineer. After becoming a full-time missionary of ISKCON Bangalore in 1999, he has been dedicating his skills and expertise for the welfare of society.",
      "Suvyakta Narasimha Dasa successfully designed and operationalised Akshaya Patra’s centralised kitchens in Vrindavan, Lucknow, Jaipur and other locations. He has been instrumental in the setting up of the sprawling Vrindavan Chandrodaya Mandir campus. He is currently serving as Senior Vice President of Hare Krishna Movement, Chennai and also overseeing the operations of Akshaya Patra in Tamil Nadu."
    ]
  },
  {
    name: "Sri Jaganmohan Krishna Dasa",
    role: "Trustee & Vice President, Gupt Vrindavan Dham",
    content: [
      "Jagan Mohan Das is a devoted spiritual leader and senior missionary of ISKCON (International Society for Krishna Consciousness), with over 21 years of dedicated service. As the President of the Hare Krishna Movement in Ahmedabad, he plays a vital role in leading spiritual initiatives, community outreach, and educational programs. He also serves as a trustee of the Sri Krishna Balram Seva Trust, actively promoting Vedic values, cow protection, and social welfare. His enduring commitment reflects a life devoted to spiritual upliftment and selfless service."
    ]
  },
  {
    name: "Sri Anantha Shesha Dasa",
    role: "Trustee & Vice President, Gupt Vrindavan Dham",
    content: [
      "Ananta Sesha Dasa is a postgraduate from IIT Kharagpur and a dedicated spiritual leader in the Hare Krishna Movement for over two decades. He currently serves as the Vice President of Hare Krishna Movement, Jaipur and leads the Hingonia Cattle Rehabilitation Centre, where he has introduced modern operational practices to enhance efficiency and care. Known for his insightful lectures and outreach programs, he has inspired thousands of students and professionals to lead purposeful, Krishna-conscious lives grounded in Vedic wisdom.",
      "In addition to his administrative and spiritual responsibilities, Ananta Sesha Dasa actively conducts seminars, youth programs, and counseling sessions that bridge the gap between ancient Vedic teachings and contemporary life challenges. His unique blend of technical expertise and devotional depth makes him a respected guide for those seeking spiritual growth, ethical leadership, and a life of service rooted in timeless values."
    ]
  }
];

const authorities = [
  { name: "Sri Amitasana Dasa", role: "President, Gupt Vrindavan Dham" },
  { name: "Sri Jaganmohan Krishna Dasa", role: "Vice President, Gupt Vrindavan Dham" },
  { name: "Sri Anantha Shesha Dasa", role: "Vice President, Gupt Vrindavan Dham" },
  { name: "Sri Radha Priya Dasa", role: "Vice President, Gupt Vrindavan Dham" },
  { name: "Sri Nikhileshwar Krishna Dasa", role: "Vice President, Gupt Vrindavan Dham" },
  { name: "Sri Shyam Sundar Dasa", role: "Vice President, Gupt Vrindavan Dham" },
  { name: "Sri Ajita Krishna Dasa", role: "Associated Vice President, Gupt Vrindavan Dham" },
  { name: "Sri Raghupati Dasa", role: "Associated Vice President, Gupt Vrindavan Dham" },
];

export default async function LeadershipPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "#" },
          { name: "Leadership", path: "/about/leadership" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="Leadership"
        title="Trustees and Authorities"
        intro="Every lasting mission is anchored by steadfast hands. These are the trustees and authorities who protect, preserve, and propel the Hare Krishna Movement—ensuring every decision honors Srila Prabhupada's purpose and the path of bhakti."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "#" },
          { name: "Leadership", href: "/about/leadership" },
        ]}
      />

      {/* Trustees */}
      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-32">
        <div className="container-page max-w-6xl space-y-24">
          {trustees.map((leader, i) => (
            <Reveal key={i} delay={100}>
              <div className={`flex flex-col gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                {/* Image Placeholder */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-luxury group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center font-display text-8xl text-gray-200/50 select-none">
                      {leader.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3">
                  <div className="mb-8 pb-6 border-b border-[var(--color-accent-primary)]/10">
                    <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] mb-2">
                      {leader.name}
                    </h2>
                    <p className="text-[var(--color-accent-primary)] font-medium text-lg uppercase tracking-wide">
                      {leader.role}
                    </p>
                  </div>
                  <div className="space-y-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
                    {leader.content.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 pt-4">
                    <Link href="#" className="inline-flex items-center gap-2 text-[var(--color-accent-primary)] font-medium hover:text-[var(--color-accent-secondary)] transition-colors group">
                      Read More <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Authorities */}
      <section className="bg-[var(--color-bg-secondary)] py-20 sm:py-32">
        <div className="container-page max-w-5xl">
          <Reveal className="text-center mb-16">
            <SectionHeading eyebrow="Leadership" title="Authorities" className="mx-auto" />
          </Reveal>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {authorities.map((auth, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="bg-white p-6 rounded-2xl border border-[var(--color-accent-primary)]/10 shadow-sm flex items-center gap-6 hover:shadow-luxury transition-all">
                  <div className="flex-shrink-0 h-16 w-16 bg-[var(--color-accent-primary)]/5 rounded-full flex items-center justify-center text-[var(--color-accent-primary)] font-display text-xl">
                    {auth.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-[var(--color-text-primary)] mb-1">{auth.name}</h4>
                    <p className="text-sm text-[var(--color-text-muted)]">{auth.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
