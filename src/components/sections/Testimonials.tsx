import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  const testimonials = [
    {
      text: "Visiting the temple completely changed my perspective on life. The atmosphere is filled with absolute peace and devotion.",
      author: "Priya S.",
    },
    {
      text: "The Bhagavad Gita classes offered here are profoundly transformative. I found clarity and purpose I had been seeking for years.",
      author: "Rahul M.",
    },
    {
      text: "Being part of the kirtan is an out-of-this-world experience. The positive energy and welcoming community are unmatched.",
      author: "Anjali K.",
    },
  ];

  return (
    <section className="w-full section-padding bg-[var(--color-bg-primary)]">
      <div className="container-page">
        <Reveal className="text-center mb-16">
          <h2 className="text-[36px] md:text-[48px] leading-[1.2] mb-4">
            Voices of Transformation
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Reveal key={idx} delay={idx * 90}>
            <div 
              className="bg-white p-10 rounded-[var(--radius-card)] shadow-luxury flex flex-col justify-between h-full"
            >
              <div>
                <span className="text-[60px] text-[var(--color-accent-primary)]/20 leading-none" style={{ fontFamily: "var(--font-playfair)" }}>&ldquo;</span>
                <p className="text-[18px] leading-[1.8] text-[var(--color-text-muted)] -mt-4 mb-8 italic">
                  {testimonial.text}
                </p>
              </div>
              <div className="font-semibold text-[16px] text-[var(--color-text-primary)]">
                — {testimonial.author}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
