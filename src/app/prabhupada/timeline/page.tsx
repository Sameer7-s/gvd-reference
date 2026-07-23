"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";

const TIMELINE = [
  { year: "1896", event: "Srila Prabhupada was born in Calcutta, West Bengal on 1st September." },
  { year: "1901", event: "Srila Prabhupada conducted a Ratha Yatra festival in a suburb of Calcutta." },
  { year: "1902", event: "Srila Prabhupada began worshiping Radha-Krishna." },
  { year: "1916", event: "Srila Prabhupada joined as a Student of Philosophy at Scottish Churches’ College." },
  { year: "1918", event: "Entered into married life (grihastha ashrama)." },
  { year: "1920", event: "Appeared in BA Exam." },
  { year: "1921", event: "Appointed as assistant manager of Bose Laboratory. Joined Mahatma Gandhi’s movement." },
  { year: "1922", event: "Met his spiritual master, Srila Bhaktisiddhanta Sarasvati Thakura, who ordered him to preach in the West." },
  { year: "1925", event: "Visited Vrindavana for the first time." },
  { year: "1928", event: "Assisted in establishing Allahabad center of Gaudiya Matha." },
  { year: "1932", event: "Initiated by Srila Bhaktisiddhanta Sarasvati Thakura." },
  { year: "1934", event: "Helped establish Gowalia Tank center of Gaudiya Matha." },
  { year: "1935", event: "Instructed by his spiritual master on publishing books and constructing temples." },
  { year: "1936", event: "A final order from his spiritual master to preach in the West." },
  { year: "1939", event: "Honored with the title “Bhaktivedanta” by the society of Gaudiya Vaishnavas." },
  { year: "1944", event: "Started the Back to Godhead Magazine." },
  { year: "1953", event: "Started League of Devotees in Jhansi. Initiated his first disciple, Acharya Prabhakar." },
  { year: "1954", event: "Retired from family life, adopting vanaprastha order of life." },
  { year: "1959", event: "Accepted renounced order of life (sannyasa)." },
  { year: "1960", event: "Published first book, Easy Journey to Other Planets." },
  { year: "1962", event: "Published Volume 1 of First Canto of Srimad Bhagavatam." },
  { year: "1965", event: "Journeyed to the USA in order to fulfill the order of his spiritual master. During that journey at Jaladuta ship for about 1 month, he experienced two heart attacks." },
  { year: "1966", event: "Established the International Society for Krishna Consciousness." },
  { year: "1967", event: "Completed translation and commentary of Bhagavad-gita As It Is." },
  { year: "1968", event: "Bhagavad-gita As It Is published by Macmillan Company." },
  { year: "1972", event: "Established the Bhaktivedanta Book Trust (BBT) for publishing his books." },
  { year: "1975", event: "Completed translation of and published Sri Chaitanya Charitamrita in 17 volumes." },
  { year: "1976", event: "Established the Bhaktivedanta Institute for Scientific Preaching." },
  { year: "1977", event: "At the age of 81, he disappeared from this material world in Vrindavan, India." },
];

export default function TimelinePage() {
  return (
    <>
      <PageHeader
        title="Srila Prabhupada Milestones"
        eyebrow="Timeline"
        intro="Abhay Charanaravinda Bhaktivedanta Swami Prabhupada was the founder of the International Society for Krishna Consciousness, commonly known as the 'Hare Krishna movement'."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Srila Prabhupada", href: "/prabhupada" },
          { name: "Milestone Timeline", href: "/prabhupada/timeline" },
        ]}
      />

      <section className="py-24 bg-white relative">
        <div className="container-page max-w-3xl">
          <Reveal>
             <SectionHeading title="A Journey of Devotion" align="center" className="mb-16" />
          </Reveal>

          <div className="relative border-l-2 border-accent-light/30 pl-8 ml-4 md:ml-12 space-y-12 py-8">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={(i % 4) * 50} className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-accent-primary shadow-sm" />
                <div className="flex flex-col gap-1">
                  <span className="text-accent-primary font-display font-bold text-2xl tracking-wide">{item.year}</span>
                  <p className="text-text-primary text-lg leading-relaxed">{item.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
