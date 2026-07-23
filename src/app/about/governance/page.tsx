import { headers } from "next/headers";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AssetFrame } from "@/components/ui";

export const metadata = buildMetadata({
  title: "Governance · Gupt Vrindavan Dham",
  description: "Governing Council of Gupt Vrindavan Dham. Every movement thrives through inspired leadership.",
  path: "/about/governance",
});

const leaders = [
  {
    name: "Sri Madhu Pandit Dasa",
    content: [
      "Madhu Pandit Dasa was born in Nagercoil, Tamil Nadu. He became a full-time member of ISKCON in 1981 while doing his M.Tech in Civil Engineering from IIT-Bombay. Since then, he has successfully conceived and implemented many large scale public service projects that positively impact millions of people. He has also worked tirelessly to preserve and promote Indian spirituality, culture and heritage among children and youth for their holistic well-being. He is the Chairman and Mentor, Global Hare Krishna Movement and the President of ISKCON Bangalore.",
      "Madhu Pandit Dasa is the Trustee and Chairman of The Akshaya Patra Foundation, which has contributed immensely to alleviate classroom hunger and improve the nutrition levels of children studying in government schools in India. He has led Akshaya Patra to become an efficient Public-Private Partnership (PPP) and an admired social innovation. He provides visionary guidance for the world's largest NGO run school meal programme.",
      "He is also the Chairman of Vrindavan Chandrodaya Mandir and India Heritage Foundation. His stellar contributions have been appreciated through prestigious awards and accolades like Padma Shri, Gandhi Peace Prize, National Award for Child Welfare, Nikkei Asia Prize and Distinguished Alumnus Award by IIT-Bombay."
    ]
  },
  {
    name: "Sri Chanchalapathi Dasa",
    content: [
      "Chanchalapathi Dasa was born in 1963 in Bangalore, Karnataka. While an undergraduate student at PSG College of Technology, Coimbatore, he became interested in the message and mission of Srila Prabhupada. Later, he joined the Indian Institute of Science, Bangalore, for the Masters programme in Electrical Communication Engineering. He became a full-time dedicated member of ISKCON Bangalore in 1984 and has conceived various spiritual, cultural and social development programmes in the service of humanity. He led the creation of Little Krishna, a world-class animation series on the childhood pastimes of Krishna. He is the Vice Chairman of Akshaya Patra and directs the strategy, growth, and governance of the Foundation.",
      "Chanchalapathi Dasa is the Vice Chairman of the Governing Body Committee and Senior Vice President of ISKCON Bangalore. He is also the President of Vrindavan Chandrodaya Mandir, a unique heritage and culture tourism infrastructure project poised to become the tallest Krishna temple in the world."
    ]
  },
  {
    name: "Sri Jai Chaitanya Dasa",
    content: [
      "Jai Chaitanya Dasa was born in 1966 in Trivandradrum Kerala. He came in touch with the teachings of Srila Prabhupada while pursuing his undergraduate course in Commerce at the Mahatma Gandhi College, Trivandrum. He joined ISKCON Bangalore in 1984. He has a deep understanding of the Pancharatra system of Deity worship and meticulously introduced this authentic Vedic tradition in the temples of the movement.",
      "Jai Chaitanya Dasa is a pioneer of ISKCON Bangalore’s organic farming and rural development programs. He was the President of the Bio-Dynamic Association of India and Secretary of the Asian Fairtrade Producers Association. He has strived to establish self-sufficient farm communities by practising sustainable organic agriculture and develop effective marketing strategies for their produce. He envisions a society where every individual can live in harmony with nature in a caring, giving and responsible manner. He is a member of the Governing Body Committee and serves as the Temple President of Hare Krishna Movement, Chennai. He is also the Project Director of the Krishna Lila Theme Park in Bangalore."
    ]
  },
  {
    name: "Sri Stoka Krishna Swami",
    content: [
      "Stoka Krishna Swami was born in 1960 in Mysore, Karnataka. He completed his Bachelors in Electrical Engineering from REC Nagpur. He worked as a lecturer in Malnad College of Engineering, Hassan. Before joining ISKCON in 1989, he also worked for Infosys Technologies Ltd. and Tata Boroughs Ltd. He accepted Sanyasa, the renounced order of spiritual life in 2018. He is a respected teacher and speaker on the philosophy of Krishna Consciousness.",
      "Stoka Krishna Swami is a member of Governing Body Committee of the Hare Krishna Movement. He is currently heading the activities of the Hare Krishna Movement, Chennai. He is also serving as the Dean of Vaishnava Studies and regularly conducts Vaishnava philosophical courses like Bhakti Shastri for devotees across India. He was the President of ISKCON Mysore and initiated several programs for the holistic development of local communities."
    ]
  },
  {
    name: "Sri Amitasana Dasa",
    content: [
      "Amitasana Dasa was born in 1969 in Namrup, Assam, India. He completed B. Tech. in Computer Science from REC Kurukshetra. He later worked in Kirloskar Computer Services, Bangalore and joined ISKCON Bangalore in 1992. He has organised seminars, workshops and counselling programs to benefit students and professionals from all over the country. He has guided hundreds of people, especially youth, to lead a life of happiness and fulfilment.",
      "Amitasana Dasa is the President of Hare Krishna Movement, Mumbai and Governing Council Member of Hare Krishna Movement, India. He is also the President of Akshaya Patra operations in Maharashtra. Under his Governance, the Foundation has implemented several development initiatives in the region."
    ]
  },
  {
    name: "Sri Vasudev Keshav Dasa",
    content: [
      "Vasudev Keshav Dasa was born in 1973 in Kolkata, West Bengal. He studied B.Tech in Electronics and Communication Engineering from REC Warangal and worked in Wipro Systems as a Systems Engineer. He joined ISKCON Bangalore as a full-time missionary in 1998. As the Head of the Deities related services, he has ensured that high standards of worship are maintained in the temples of the Hare Krishna Movement.",
      "He is serving as the Treasurer and Zonal Secretary of Governing Body Committee and the Vice President of ISKCON Bangalore. He is also the Dean of the National Institute of Value Education (NIVE), which is imparting Value Education to hundreds of children so that they grow to become responsible citizens. He has designed learning programs to bring about holistic development in young minds by enriching their physical, mental and spiritual well-being."
    ]
  },
  {
    name: "Sri Rajiv Lochan Dasa",
    content: [
      "Rajiv Lochan Dasa was born in Sonipat, Haryana. He studied Bachelors in Science at St. Joseph’s College (Bangalore) and joined ISKCON Bangalore in 1993. He is known for leading ecstatic kirtans and delivering inspiring lectures on Bhagavad-gita and Srimad Bhagavatam.",
      "Rajiv Lochan Dasa is currently serving as Zonal Secretary of the Governing Body Committee, Hare Krishna Movement and Temple President, ISKCON Hubli. He is supervising the construction of a magnificent Radha Krishna Temple in Hubli. He is the President of Akshaya Patra in Hubli and leads the operations of the world’s largest kitchen there. This best-in-class infrastructure was showcased in National Geographic Channel’s popular documentary series called Mega Kitchens."
    ]
  },
  {
    name: "Sri Satya Gaura Chandra Dasa",
    content: [
      "Satya Gaura Chandra Dasa was born in Rajahmundry, Andhra Pradesh. He is a Gold Medalist in B.Tech (Mechanical Engineering) at Jawaharlal Nehru Technological University, Kakinada. After completing M.Tech from IIT-Chennai, he worked in Novell, a multinational IT firm, before joining ISKCON Bangalore in 1997. He has rendered various services ranging from managing the temple administration to training and development of full-time missionaries.",
      "He is currently serving as the Zonal Secretary of the Governing Body Committee and the President of Hare Krishna Movement, Hyderabad. He initiated the Hare Krishna Charitable Trust, which is extensively feeding the underprivileged sections of society. He is a Trustee of Akshaya Patra and heads its operations in Telangana and Andhra Pradesh. He has set up kitchens in Kandi, Narasingi, Vishakapatnam, Vijayawada and various other locations, thus enabling the Foundation to serve hygienic and nutritious mid-day meals to lakhs of children."
    ]
  },
  {
    name: "Sri Suvyakta Narasimha Dasa",
    content: [
      "Suvyakta Narasimha Dasa was born in 1973 in Moovattupuzha in Kerala. He completed B.E. (Mechanical) from M S Ramaiah Institute of Technology and secured 5th rank in Bangalore University. After graduation, he worked in Lincoln Helios India Ltd. as a Design Engineer. After becoming a full-time missionary of ISKCON Bangalore in 1999, he has been dedicating his skills and expertise for the welfare of society.",
      "Suvyakta Narasimha Dasa successfully designed and operationalised Akshaya Patra’s centralised kitchens in Vrindavan, Lucknow, Jaipur and other locations. He has been instrumental in the setting up of the sprawling Vrindavan Chandrodaya Mandir campus. He is currently serving as Senior Vice President of Hare Krishna Movement, Chennai and also overseeing the operations of Akshaya Patra in Tamil Nadu."
    ]
  }
];

export default async function GovernancePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "#" },
          { name: "Governance", path: "/about/governance" },
        ])}
        nonce={nonce}
      />

      <PageHeader
        eyebrow="Governance"
        title="Governing Council"
        intro="Every movement thrives through inspired leadership. These are the torchbearers, teachers, and guides who transform timeless wisdom into living practice, bringing Krishna consciousness to life across the world."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "#" },
          { name: "Governance", href: "/about/governance" },
        ]}
      />

      <section className="bg-[var(--color-bg-primary)] py-20 sm:py-32">
        <div className="container-page max-w-6xl space-y-24">
          {leaders.map((leader, i) => (
            <Reveal key={i} delay={100}>
              <div className={`flex flex-col gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                {/* Image Placeholder */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-luxury group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {/* Abstract initial as placeholder if no image exists */}
                    <div className="absolute inset-0 flex items-center justify-center font-display text-8xl text-gray-200/50 select-none">
                      {leader.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3">
                  <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] mb-8 pb-6 border-b border-[var(--color-accent-primary)]/10">
                    {leader.name}
                  </h2>
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
    </>
  );
}
