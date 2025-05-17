import * as React from "react";
import { ReviewCard } from "../../ui/ReviewCard";
import "./reviews-carousel.css";

const reviews: Array<{
  avatar: string;
  name: string;
  rating: number;
  text: string;
  platform: "google" | "instagram";
}> = [
  {
    avatar: "S",
    name: "Sofien Necira",
    rating: 5,
    text: "Un accueil chaleureux w khedma machallah",
    platform: "google",
  },
  {
    avatar: "S",
    name: "Sofien Necira",
    rating: 5,
    text: "Un accueil chaleureux w khedma machallah",
    platform: "google",
  },
  {
    avatar: "S",
    name: "Sofien Necira",
    rating: 5,
    text: "Un accueil chaleureux w khedma machallah",
    platform: "google",
  },
  {
    avatar: "S",
    name: "Sofien Necira",
    rating: 5,
    text: "Un accueil chaleureux w khedma machallah",
    platform: "google",
  },
];

export const Reviews = () => {
  // Duplicate the reviews for seamless infinite scroll
  const cards = [...reviews, ...reviews];
  return (
    <section className="relative w-full h-full md:h-[95vh] bg-[#243520] flex flex-col items-center py-16  px-6 md:px-0 pb-12">
      <h2 className="text-white text-[34px] md:text-[50px] font-bold mb-30 text-center font-playfair-important">
        Votre confiance, selon leurs mots...
      </h2>
      <div
        className="relative w-full max-w-[1150px] overflow-hidden pb-8 md:pb-0"
        style={{
          maskImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 3.5%, rgb(0, 0, 0) 96.5%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 3.5%, rgb(0, 0, 0) 96.5%, rgba(0, 0, 0, 0) 100%)',
        }}
      >
        <div className="reviews-carousel flex gap-[250px] items-center w-max pt-[20px]">
          {cards.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};
