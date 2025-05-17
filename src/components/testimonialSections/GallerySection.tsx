"use client";
import React from "react";
import BeforeAfterSlider from "./CustomBeforeAfterSlider";
import "react-before-after-slider-component/dist/build.css";
import "./CustomBeforeAfterSlider.scss";

const beforeAfterPairs = [
  {
    before: "/before-after/before 1.png",
    after: "/before-after/after 1.png",
  },
  {
    before: "/before-after/before 2.png",
    after: "/before-after/after 2.png",
  },
  {
    before: "/before-after/before 3.png",
    after: "/before-after/after 3.png",
  },
  {
    before: "/before-after/before 4.png",
    after: "/before-after/after 4.png",
  },
  {
    before: "/before-after/before 5.png",
    after: "/before-after/after 5.png",
  },
  {
    before: "/before-after/before 6.jpeg",
    after: "/before-after/after 6.jpeg",
  },
  {
    before: "/before-after/before 7.jpeg",
    after: "/before-after/after 7.jpeg",
  },
];

// CSS to ensure consistent image display
const customStyles = `
  .before-after-slider, 
  .before-after-slider__first-photo-container, 
  .before-after-slider__second-photo-container {
    height: 100% !important;
  }
  
  .image-container {
    aspect-ratio: 3/2;
    height: auto !important;
    max-height: 210px;
  }
`;

const GallerySection = () => (
  <section
    className="w-full min-h-screen py-12 px-[50px] md:px-0"
    style={{ background: "#9AAF94" }}
  >
    <style dangerouslySetInnerHTML={{ __html: customStyles }} />
    <h2
      className="max-w-2xl mx-auto mb-12 font-playfair-important text-[#2b3029] font-black text-4xl md:text-5xl text-center tracking-tight"
      style={{ fontWeight: 900 }}
    >
      Voir nos patients heureux
    </h2>
    <div
      className="mx-auto grid gap-8"
      style={{
        maxWidth: 1200,
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {beforeAfterPairs.map((pair, idx) => (
        <div
          key={idx}
          className="w-full image-container rounded-xl overflow-hidden"
        >
          <BeforeAfterSlider
            firstImage={{ imageUrl: pair.before, alt: "Avant" }}
            secondImage={{ imageUrl: pair.after, alt: "Après" }}
            className="w-full h-full custom-delimiter-icon"
            delimiterIconStyles={{
              width: 56,
              height: 56,
              backgroundColor: "rgba(255,255,255,0.4)",
              border: "1px solid rgba(255,255,255,0.24)",
              borderRadius: "50%",
              position: "relative",
              boxShadow: "0 0 8px 2px rgba(0,0,0,0.10)",
            }}
          />
        </div>
      ))}
    </div>
  </section>
);

export default GallerySection;
