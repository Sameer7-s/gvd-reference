"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";

const QUALITIES = [
  { n: "1", title: "Kind to Everyone", desc: "Srila Prabhupada’s life was a river of mercy, a true well-wisher of all living beings, flowing without discrimination to uplift all souls." },
  { n: "2", title: "Does Not Quarrel", desc: "Though often opposed, Srila Prabhupada never quarreled but responded with logic, humility, and scripture." },
  { n: "3", title: "Fixed in the Absolute Truth", desc: "He never deviated from the teachings of Bhagavad-gītā and Śrīmad-Bhāgavatam. His conviction in Krishna was unwavering." },
  { n: "4", title: "Equal to Everyone", desc: "Srila Prabhupada saw all living beings as spirit souls, parts and parcels of Krishna. He offered respect and love equally." },
  { n: "5", title: "Faultless", desc: "He lived purely — without personal motive, deceit, or sin. His every word and act was aligned with scriptural truth." },
  { n: "6", title: "Charitable", desc: "He gave the greatest gift — Krishna. Through books, temples, prasadam, and holy names, he distributed spiritual wealth freely." },
  { n: "7", title: "Mild", desc: "Srila Prabhupada’s nature was soft and loving. Even while correcting, his words carried deep care. His mildness made instructions transformative." },
  { n: "8", title: "Clean", desc: "He maintained both internal and external cleanliness. His surroundings were spotless, his habits disciplined." },
  { n: "9", title: "Simple", desc: "Srila Prabhupada lived a life free of duplicity. His message was clear, and his desires were pure — to serve Krishna." },
  { n: "10", title: "Benevolent", desc: "His mission was for others. Every effort, every hardship, was for our benefit — to give us love of Godhead." },
  { n: "11", title: "Peaceful", desc: "Srila Prabhupada was a reservoir of peace. Grounded in Krishna, untouched by material agitation, he brought serenity wherever he went." },
  { n: "12", title: "Completely Attached to Krishna", desc: "His every breath, step, and thought was for Krishna. He served Krishna with such love and surrender." },
  { n: "13", title: "Free from Material Desires", desc: "Though he travelled the world and managed temples, he sought no fame or comfort — only Krishna's pleasure." },
  { n: "14", title: "Meek", desc: "Despite his greatness, Srila Prabhupada never claimed credit. He always said, “I am just a servant of my Guru Maharaj.”" },
  { n: "15", title: "Steady", desc: "No challenge could shake him. Whether facing opposition, illness, or fatigue, he remained firm in his mission." },
  { n: "16", title: "Self-Controlled", desc: "He taught and lived a life of regulated senses. His control over speech, food, and action was exemplary." },
  { n: "17", title: "Does Not Overeat", desc: "Srila Prabhupada honored prasadam with great respect and moderation. His lifestyle reflected simplicity and control." },
  { n: "18", title: "Sane", desc: "In a world full of illusion, Srila Prabhupada’s clarity of purpose and thought was divine. He saw reality as it is." },
  { n: "19", title: "Respectful", desc: "He honored all — from sannyasis to householders, from deities to disciples. His genuine respect uplifted others." },
  { n: "20", title: "Humble", desc: "Though he built a global movement, he saw himself as “a humble servant.” He never demanded honor." },
  { n: "21", title: "Grave", desc: "His depth was oceanic. His speech, actions, and presence carried great weight arising from unshakable realization." },
  { n: "22", title: "Compassionate", desc: "He wept for the suffering of souls in ignorance. His books, lectures, and temples were acts of deep compassion." },
  { n: "23", title: "Friendly", desc: "He was a true well-wisher. Disciples, guests, children — all found a genuine friend in him." },
  { n: "24", title: "Poetic", desc: "Srila Prabhupada’s bhajans, purports, and translations carry divine rhythm and beauty." },
  { n: "25", title: "Expert", desc: "Whether managing temples, writing books, or guiding disciples, Srila Prabhupada was supremely capable." },
  { n: "26", title: "Silent", desc: "He spoke only Krishna-katha. Free from idle talk, his silence was powerful, preserving energy for glorifying Krishna." }
];

export default function QualitiesPage() {
  return (
    <>
      <PageHeader
        title="Qualities of Srila Prabhupada"
        eyebrow="Pure Devotee"
        intro="Srila Prabhupada perfectly displayed the twenty-six qualities of a pure devotee of Lord Krsna."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Srila Prabhupada", href: "/prabhupada" },
          { name: "Qualities", href: "/prabhupada/qualities" },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container-page max-w-4xl">
          <Reveal>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, who successfully distributed the message of Lord Krsna throughout the world, was not an ordinary conditioned soul, governed by the harsh laws of material nature. Although to the unenlightened he may have appeared to exhibit commonplace characteristics, it is evident through the careful study of his life and activities, that Srila Prabhupada perfectly displayed the twenty-six qualities of a pure devotee of Lord Krsna.
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-16">
              We learn from Vedic literature that one who possesses these qualities is necessarily free from material bondage, and enjoys an eternal position in the intimate association of the Supreme Lord. Such a great soul is very rarely found within this material realm, and owing to his unparalleled purity and exalted status, he is worshipable by the entire world.
            </p>
            <SectionHeading 
              title="26 Qualities of His Divine Grace Vishwa Guru Srila Prabhupada" 
              intro="The divine character of a pure devotee as described in the scriptures and perfectly exemplified by Srila Prabhupada." 
              align="center"
              className="mb-16"
            />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {QUALITIES.map((q, i) => (
              <Reveal key={q.n} delay={(i % 2) * 100}>
                <div className="bg-bg-secondary p-6 rounded-2xl h-full border border-gray-100 hover:shadow-temple transition-shadow">
                  <div className="text-accent-primary font-display text-4xl mb-3 opacity-20 font-bold">{q.n.padStart(2, '0')}</div>
                  <h3 className="text-xl font-display font-medium text-text-primary mb-2 -mt-8 relative z-10">{q.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{q.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 bg-accent-light/10 p-8 rounded-3xl border border-accent-light/20">
            <p className="text-text-primary font-medium leading-relaxed text-center">
              His Divine Grace A.C. Bhaktivedanta Swami Prabhupada perfectly embodied all twenty-six qualities. As the ideal teacher and acharya, he not only instructed these qualities but lived them fully, showing us the true path of devotion. By following in his footsteps, we can cultivate these transcendental qualities, purify our hearts, and serve Krsna in a way that brings benefit to all living beings.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
