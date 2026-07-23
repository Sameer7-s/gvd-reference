"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";

export default function FactsPage() {
  return (
    <>
      <PageHeader
        title="Facts about Srila Prabhupada"
        eyebrow="Key Facts"
        intro="The movement has been initiated by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. Anyone could obey the religious teachings."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Srila Prabhupada", href: "/prabhupada" },
          { name: "Facts", href: "/prabhupada/facts" },
        ]}
      />

      <section className="py-24 bg-bg-secondary">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 prose prose-lg text-text-muted space-y-6">
              <p>
                Abhay Charanaravinda Bhaktivedanta Swami was born on 1 September 1896 and died on 14 November 1977. He has been popularly known as Srila Prabhupada. Initially his name was Abhay Charan De. He has been an Indian spiritual teacher along with founder-preceptor of International Society for Krishna Consciousness. 
              </p>
              <p>
                "Srila" has been an adjective associated with the noun "sri." "Sri-la" indicates wealth, beauty, and opulence. "Sri" also indicates the three Vedas. Therefore, "srila" indicates a scholar who understands the three Vedas. It has been recognized worldwide as the "Hare Krishna Movement".
              </p>
              <p>
                He appeared in Calcutta (Kolkata) and was trained in Scottish Church College. Prior to getting into the life of a renunciate in 1950, he was married and had children, running a tiny business on pharmaceutical products.
              </p>
              <p>
                In the year 1959, Srila Prabhupada took sannyasa or renunciation. He began writing commentaries on the scriptures of Vaishnavism. He travelled as a monk of the Vaishnava order. Srila Prabhupada was a great communicator of Gaudiya Vaishnavism along with Indian theology. He spread the message in the West via his leadership qualities. He founded ISKCON in the year 1966.
              </p>
              <p>
                The translation along with the commentary on Bhagavad Gītā, named Bhagavad-Gita As It Is, has been highly regarded by the adherents of ISKCON and a number of scholars. It has been the top translation work in the English language. 
              </p>
              <div className="border-l-4 border-accent-primary pl-6 py-4 my-8 bg-accent-light/5 rounded-r-xl text-text-primary">
                <h4 className="font-display font-medium text-xl mb-2">The Legacy Continues</h4>
                <p className="text-sm m-0">
                  By February 2014, ISKCON had gained a milestone of sharing half a billion books since 1965. The movement is promoting Gaudiya Vaishnavism across the world, continuing the school under the Vaishnav tradition established by his guru, Bhaktisiddhanta Sarasvati.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
