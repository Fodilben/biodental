// import { TestimonialCard } from "../ui/card";

import { ReviewCard } from "../ui/ReviewCard";

const testimonials = [
  {
    avatar: "S",
    name: "sultana sweets",
    rating: 5,
    text: "travail très pro , à l'écoute des demandes",
  },
];

const TestimonialsSection = () => (
  <section className="w-full min-h-[587px] bg-[var(--main-green)] py-12">
    <h2 className="w-full mx-auto pt-8 font-playfair-important font-black text-[#f7f7f5] text-[50px] tracking-[-0.80px] leading-[60px] text-center mb-16">
      Votre confiance, selon leurs mots…
    </h2>
    <div className="flex flex-wrap justify-center gap-10">
      {testimonials.map((t, i) => (
        <ReviewCard key={i} {...t} />
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
