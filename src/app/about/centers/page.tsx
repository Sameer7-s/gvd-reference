import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Centers - Gupt Vrindavan Dham",
  description: "Directory of Hare Krishna Movement centers worldwide.",
};

const CENTERS = [
  "ISKCON Bangalore",
  "ISKCON - Vaikuntha Hill",
  "Vrindavan Chandrodaya Mandir",
  "Gupt Vrindavan Dham",
  "Hare Krishna Mandir Kota",
  "ISKCON Hubli",
  "Hare Krishna Golden Temple",
  "Iskcon Mangalore",
  "ISKCON Mysore",
  "Hare Krishna Mandir, Bhadaj, Ahmedabad",
  "Hare Krishna Ashram Malaysia",
  "Hare Krishna Movement Chennai",
  "Sri Krishna Balaram Mandir - Sunnyvale, USA",
  "Hare Krishna Movement, Guwahati",
  "Hare Krishna Movement Dehradun",
  "India Heritage Foundation - Boston",
  "India Heritage Foundation, NJ/NY",
  "Hare Krishna Movement Pune",
  "Hare Krishna Movement, Coimbatore",
  "Hare Krishna Movement, Bellary",
  "Hare Krishna Movement India, Vijayawada",
  "Hare Krishna Movement, Mumbai",
  "Hare Krishna Movement, Lucknow",
  "Hare Krishna Movement, Tirupati",
  "Hare Krishna Ashram, Johor",
  "Hare Krishna Movement, Bhilai",
  "Hare Krishna Movement, Visakhapatnam",
  "Hare Krishna Movement, Puri"
];

const OTHER_CENTERS = [
  "1. Hare Krishna Movement, Dharmapuri",
  "2. London Preaching Center"
];

export default function OurCentersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/temple_architecture_4k.png"
            alt="Our Centers Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0e0a1f]/80" />
        </div>
        <div className="relative z-10 text-center px-4 mt-8">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3 tracking-wide drop-shadow-md">
            Our Centers
          </h1>
          <p className="font-sans text-xs md:text-sm text-gray-200 font-semibold tracking-widest uppercase">
            Home / Mandir / Our Centers
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed mb-12 text-center md:text-left max-w-6xl">
          This directory gives a list of those centres of the Hare Krishna Movement which accept Srila Prabhupada as the only Acharya or Diksha Guru of the movement. Each of these centres is independently governed and the confederation of these worldwide centres is known as Srila Prabhupada's Hare Krishna Movement or ISKCON Bangalore Group of centres.
        </p>

        {/* Grid of Centers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {CENTERS.map((center, index) => (
            <div key={index} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src={`/images/temple_architecture_4k.png`}
                  alt={center}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#f4f0fa] p-5 flex-grow flex items-center justify-center text-center">
                <h3 className="font-bold text-gray-900 text-[14px] leading-snug">
                  {center}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Other Associated Centers */}
        <div className="max-w-6xl">
          <h4 className="font-bold text-gray-900 text-lg mb-4">List of Other Associated Centers</h4>
          <ul className="space-y-3">
            {OTHER_CENTERS.map((center, idx) => (
              <li key={idx} className="text-gray-700 text-sm font-medium">
                {center}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
