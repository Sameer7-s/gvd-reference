"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { Book, CheckCircle2 } from "lucide-react";

export default function BooksPage() {
  const cat1 = [
    "On The Way to Krishna", "Elevation to Krishna Consciousness", "Krishna Consciousness – The Matchless Gift",
    "Krishna the Reservoir of Pleasure", "Perfection of Yoga", "Krishna Consciousness – The Topmost Yoga System",
    "Beyond Birth and Death", "Perfect Questions, Perfect Answers", "Easy Journey to Other Planets",
    "Raja Vidya: The King of Knowledge", "Transcendental Teachings of Prahlada Maharaja", "Coming Back: The Science of Reincarnation",
    "Message of Godhead *", "Civilization and Transcendence *", "The Hare Krishna Challenge *",
    "The Scientific Basis of Krishna Consciousness *", "Sword of Knowledge *", "The Nectar of Instruction",
    "The Path of Perfection", "Issues of Back to Godhead Magazine", "Srila Prabhupada Lilamrita #"
  ];

  const cat2 = [
    "Introduction to Bhagavad Gita As It Is", "The Science of Self-Realization", "Journey of Self Discovery",
    "Life Comes from Life", "The Nectar of Devotion (Only Part One)", "Teachings of Queen Kunti",
    "Teachings of Lord Kapila", "Teachings of Lord Chaitanya", "Sri Isopanisad",
    "Few Shlokas of Bhagavad Gita Every Day", "Krishna Book #", "Srimad Bhagavatam (1st Canto) #", "A Second Chance #"
  ];

  const cat3 = [
    "Bhagavad Gita As It Is", "Srimad Bhagavatam (Canto by Canto)", "The Nectar of Devotion (Part II and Part III)", "Chaitanya Charitamrita"
  ];

  return (
    <>
      <PageHeader
        title="Srila Prabhupada Books"
        eyebrow="Transcendental Wisdom"
        intro="Why Reading Srila Prabhupada's Books is Essential for Spiritual Life"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Srila Prabhupada", href: "/prabhupada" },
          { name: "Books", href: "/prabhupada/books" },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="prose prose-lg text-text-muted">
              <p className="lead text-xl text-text-primary mb-8 font-medium">
                Welcome, dear reader, on a journey to explore the profound wisdom contained within the books of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, the founder-acharya of the International Society for Krishna Consciousness (ISKCON).
              </p>
              <p>
                In an age where information is abundant but often superficial, Srila Prabhupada's books offer a deep and authentic understanding of life, spirituality, and our eternal connection with the Supreme Personality of Godhead, Lord Krishna. This blog aims to illuminate the significance of engaging with these transcendental literatures and how they can revolutionize your life.
              </p>
              
              <h2 className="text-3xl font-display font-medium text-text-primary mt-12 mb-6">Who is Srila Prabhupada?</h2>
              <p>
                At the heart of Srila Prabhupada’s mission was the printing and distribution of transcendental books, an instruction he received from his spiritual master, Srila Bhaktisiddhanta Sarasvati Thakur, which he embraced as his life and soul. Despite countless challenges, he tirelessly worked in the early morning hours, meticulously translating and writing these books for the upliftment of humanity.
              </p>
              <p>
                Srila Prabhupada is widely regarded as one of the most influential spiritual teachers of the 20th century. His books are revered for carrying the original potency of the śāstra, as he presented scriptures such as Bhagavad-gītā and Śrīmad-Bhāgavatam exactly as they are, without personal interpretation.
              </p>
              
              <blockquote className="border-l-4 border-accent-primary pl-6 py-4 my-8 bg-accent-light/5 rounded-r-xl italic text-text-primary">
                “Every morning, when I sit here to write my books, Kṛṣṇa comes personally and dictates to me what to write.”
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Suggested Sequence */}
      <section className="py-24 bg-bg-secondary relative">
        <div className="container-page max-w-4xl">
          <Reveal>
            <SectionHeading 
              title="A Suggested Sequence for Reading" 
              intro="This sequence is designed for a structured and gradual understanding of Krishna Consciousness, starting from foundational books to in-depth scriptures."
              align="center"
              className="mb-16"
            />
          </Reveal>

          <div className="space-y-12">
            {/* Category I */}
            <Reveal delay={100} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative">
              <div className="absolute top-0 right-0 p-8 text-accent-light/20">
                <Book className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-display font-medium text-accent-primary mb-2">CATEGORY I</h3>
              <p className="text-sm uppercase tracking-widest text-text-muted font-bold mb-8">Foundational Reading</p>
              <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
                {cat1.map((book, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                    <span className="text-text-primary font-medium">{book}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Category II */}
            <Reveal delay={200} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative">
              <div className="absolute top-0 right-0 p-8 text-accent-light/20">
                <Book className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-display font-medium text-accent-primary mb-2">CATEGORY II</h3>
              <p className="text-sm uppercase tracking-widest text-text-muted font-bold mb-8">To be read after completing Category I</p>
              <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
                {cat2.map((book, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                    <span className="text-text-primary font-medium">{book}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Category III */}
            <Reveal delay={300} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative">
              <div className="absolute top-0 right-0 p-8 text-accent-light/20">
                <Book className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-display font-medium text-accent-primary mb-2">CATEGORY III</h3>
              <p className="text-sm uppercase tracking-widest text-text-muted font-bold mb-8">Advanced Scriptures</p>
              <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
                {cat3.map((book, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                    <span className="text-text-primary font-medium">{book}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={400} className="text-sm text-text-muted mt-8 bg-white/50 p-6 rounded-xl border border-gray-200/50">
              <p><strong>Note:</strong></p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Books marked with (*) are optional.</li>
                <li>Books marked with (#) can be read simultaneously with other books.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quotes & Importance */}
      <section className="py-24 bg-white">
        <div className="container-page max-w-4xl">
          <Reveal>
            <SectionHeading 
              eyebrow="The Indispensable Importance of Reading" 
              title="Quotes and Incidents" 
              align="left"
              className="mb-12"
            />
            
            <div className="space-y-6">
               {[
                 "Because Bhagavad Gita is spoken by the Supreme Personality of Godhead, one need not read any other Vedic literature. One need only attentively and regularly hear and read Bhagavad Gita.",
                 "I am requesting all of my students to read my books very seriously every day without fail. In this way, if your mind becomes absorbed at least one or two hours daily…",
                 "In my books, the philosophy of Krishna Consciousness is explained fully. So if there is anything which you do not understand, then you simply have to read again and again. By reading daily, the knowledge will be revealed to you, and by this process, your spiritual life will develop.",
                 "If one reads one line of this literature, although it is presented in broken language, but if he simply hears there is Kṛṣṇa, then his sinful activities immediately vanish.",
                 "Every day you have to read, study, and learn my books just like a lawyer learns the law books. You must know everything, chapter and verse. If you do not know, how will you preach?",
                 "I will never die. I will live forever in my books; and If you want to know me, read my books."
               ].map((quote, i) => (
                 <div key={i} className="bg-bg-secondary p-6 rounded-2xl border-l-4 border-accent-primary">
                    <p className="text-lg italic text-text-primary">"{quote}"</p>
                    <p className="text-sm font-semibold text-text-muted mt-3">— Srila Prabhupada</p>
                 </div>
               ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-display font-medium text-text-primary mb-4">Embark on Your Reading Journey Today</h3>
              <p className="text-text-muted leading-relaxed max-w-2xl mx-auto">
                The wisdom and guidance contained within Srila Prabhupada's books are an unparalleled resource for anyone seeking genuine spiritual understanding and lasting happiness. Don't delay – begin your journey into the ocean of Srila Prabhupada's wisdom today!
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
