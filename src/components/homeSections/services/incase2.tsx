"use client";
import React from "react";
import  BeforeAfterSlider  from "./CustomBeforeAfterSlider";
import "react-before-after-slider-component/dist/build.css";
import { motion } from "framer-motion";
const beforeAfterPairs = Array(9).fill({
  before: "/before-after/before1.avif",
  after: "/before-after/after1.avif",
});

// Custom delimiter icon as a circle with < and > using CSS
const CustomDelimiterIcon = () => (
  <div className="custom-delimiter-circle">
    <span className="chevron chevron-left" />
    <span className="chevron chevron-right" />
  </div>
);

const GallerySection = () => (
  <section
    className="w-full min-h-screen py-12 px-[50px] md:px-0"
    style={{ background: "#9AAF94" }}
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, type: "spring" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2
        className="max-w-2xl mx-auto mb-12 font-playfair-important text-[#2b3029] font-black text-4xl md:text-5xl text-center tracking-tight animate__animated animate__fadeInUp"
        style={{ fontWeight: 900 }}
      >
        Voir nos patients heureux
      </h2>
    </motion.div>
    <div
      className="mx-auto grid gap-8"
      style={{
        maxWidth: 1000,
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {beforeAfterPairs.map((pair, idx) => (
        <div key={idx} className="w-full" style={{ height: 192 }}>
          <BeforeAfterSlider
            firstImage={{ imageUrl: pair.before, alt: "Avant" }}
            secondImage={{ imageUrl: pair.after, alt: "Après" }}
            className="rounded-xl overflow-hidden w-full h-full custom-delimiter-icon"
            delimiterIconStyles={{
              width: 64,
              height: 64,
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
