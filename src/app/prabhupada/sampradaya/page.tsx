"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";

export default function SampradayaPage() {
  const sampradayas = [
    {
      name: "Sri Sampradaya",
      founder: "Sri Laksmi Devi (the consort of Lord Vishnu)",
      acharya: "Sri Ramanujacharya",
      philosophy: "Visistadvaita Vedanta (Krishna is one but souls are dependent part of him)",
      teachings: "Krishna is supreme and the souls are dependent. Emphasis on worship of Lakshmi-Narayan. Devotion to Lord Vishnu with surrender leads to liberation.",
      scriptures: "Sri Bhasya (Ramanuja’s commentary on the Vedanta Sutras), Bhagavad Gita, Vishnu Purana.",
      followers: "Sri Vaishnavas (mainly in South India, temples like Srirangam, Tirupati)."
    },
    {
      name: "Brahma Sampradaya",
      founder: "Lord Brahma (first created being and secondary creator)",
      acharya: "Sri Madhvacharya (1238–1317 CE)",
      philosophy: "Dvaita Vedanta (Krishna is completely different from Soul)",
      teachings: "Describes the origin of spiritual knowledge and glorifies Krishna as the Supreme Personality of Godhead. The soul needs to practice bhakti to serve Him.",
      scriptures: "Brahma Sūtra Bhāṣya, Bhagavad Gita, Mahabharat (Tatparya Nirṇaya).",
      followers: "Madhva Vaishnavas (mainly in Karnataka and Udupi)."
    },
    {
      name: "Rudra Sampradaya",
      founder: "Lord Shiva (Rudra)",
      acharya: "Sri Vishnuswami and later Sri Vallabhacharya (1479–1531 CE)",
      philosophy: "Suddhadvaita Vedanta (Everything is Krishna but he remains supreme)",
      teachings: "Krishna is Supreme and everything in the universe is his expansion. Bhakti should be performed in pure love. Introduced the Pushti where Krishna showers mercy freely.",
      scriptures: "Bhagavad Gita, Srimad Bhagavatam, Vallabha’s commentaries.",
      followers: "Followers focus on the worship of Sri Nathji in temples like Nathdwara."
    },
    {
      name: "Kumara Sampradaya",
      founder: "The Four Kumaras (Sanaka, Sanandana, Sanatana, Sanatkumara)",
      acharya: "Sri Nimbarkacharya (circa 12th century CE)",
      philosophy: "Dvaitadvaita Vedanta (Soul is both one with and different from Krishna)",
      teachings: "Through bhakti devotion the jiva can attain liberation while surrendering to the supreme Lord. The most elevated form of devotion exists when one experiences natural love towards Radha & Krishna.",
      scriptures: "Bhagavad Gita, Srimad Bhagavatam, Vedanta Sutras with Nimbarka’s commentary.",
      followers: "Nimbarka Sampradāya (mainly in Vrindavan, Rajasthan, and parts of North India)."
    }
  ];

  return (
    <>
      <PageHeader
        title="What is Sampradaya?"
        eyebrow="Authorized Guru Shishya Parampara"
        intro="The term Sampradaya in Sanskrit means a spiritual lineage or disciplic tradition. It translates to a tradition or system that transmits spiritual knowledge through a bona fide chain of teachers and disciples."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Srila Prabhupada", href: "/prabhupada" },
          { name: "Sampradaya", href: "/prabhupada/sampradaya" },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="prose prose-lg text-text-muted">
              <p className="lead text-xl text-text-primary mb-8 font-medium">
                In the Bhagavad Gita (4.2), Lord Krishna confirms: <br/><br/>
                <span className="italic text-accent-primary">"Evam parampara-praptam imam rajarsayo viduh..."</span><br/>
                "This supreme science was thus received through the chain of disciplic succession."
              </p>
              
              <h2 className="text-3xl font-display font-medium text-text-primary mt-12 mb-6">Why Disciplic Succession (Parampara) is Essential</h2>
              <p>
                Sampradāya is the essential ingredient while passing down the knowledge in every field of life be it material or spiritual. Vedic Scriptures warns one to not be doomed on the path of Self-realization by following any path haphazardly.
              </p>
              <p>
                The Padma Purāṇa states: <strong>sampradāya-vihīnā ye mantrās te niṣphalā matāḥ</strong><br/>
                “Any mantra that does not come in disciplic succession is considered to be useless.”
              </p>
              <p>
                The bonafide spiritual master coming in the authorised disciplic succession is called “a transparent via medium” between the Lord and the neophyte devotee, since he doesn’t alter the original teachings. If there is an alteration during transmitting the knowledge to a student the teacher is to be better called a cheater.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 Sampradayas */}
      <section className="py-24 bg-bg-secondary relative">
        <div className="container-page max-w-5xl">
          <Reveal>
            <SectionHeading 
              title="The Four Vaishnava Sampradayas Explained" 
              intro="The Padma Purana mentions 4 authorised Vaishnava Sampradāyas (the disciplic successions which maintains Lord Vishnu as the Supreme). sri-brahma-rudra-sanakah vaisnavah ksiti-pavanah."
              align="center"
              className="mb-16"
            />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {sampradayas.map((s, i) => (
              <Reveal key={i} delay={i * 100} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-accent-light transition-colors">
                <h3 className="text-2xl font-display font-medium text-accent-primary mb-6">{s.name}</h3>
                <div className="space-y-3 text-sm">
                  <p><strong className="text-text-primary">Founder:</strong> <span className="text-text-muted">{s.founder}</span></p>
                  <p><strong className="text-text-primary">Prominent Acharya:</strong> <span className="text-text-muted">{s.acharya}</span></p>
                  <p><strong className="text-text-primary">Philosophy:</strong> <span className="text-text-muted">{s.philosophy}</span></p>
                  <p><strong className="text-text-primary">Main Teachings:</strong> <span className="text-text-muted">{s.teachings}</span></p>
                  <p><strong className="text-text-primary">Main Scriptures:</strong> <span className="text-text-muted">{s.scriptures}</span></p>
                  <p><strong className="text-text-primary">Prominent Followers:</strong> <span className="text-text-muted">{s.followers}</span></p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={400} className="mt-12 text-center bg-accent-light/10 p-6 rounded-2xl border border-accent-light/20 text-text-primary font-medium">
             These four are the only authentic Vaishnava Sampradayas as per Vedic authority. Only those who recieve knowledge from these authorized Sampradaya can understand the truth about Krishna.
          </Reveal>
        </div>
      </section>

      {/* Gaudiya Line */}
      <section className="py-24 bg-white">
        <div className="container-page max-w-4xl">
          <Reveal>
            <SectionHeading 
              title="Gaudiya Vaishnava Sampradaya" 
              eyebrow="The Madhva-Gaudiya Line"
              align="left"
              className="mb-8"
            />
            <div className="prose prose-lg text-text-muted">
               <p>
                 The current Brahma-Sampradāya is known as the Madhva-Gauḍīya-sampradāya. It originated from the first created being Lord Brahma himself, who received the knowledge directly from Lord Krishna within his heart.
               </p>
               <p>The Gaudiya tradition is known for:</p>
               <ul>
                 <li>Emphasis on Nama-sankirtana (chanting the holy names)</li>
                 <li>Exclusive devotion to Radha-Krishna</li>
                 <li>Writings of the Six Goswamis of Vrindavan</li>
               </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
