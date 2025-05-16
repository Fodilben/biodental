'use client';
import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";


const initialImages = [
  {
    id: 1,
    src: "/TESI-PAGE/t-hero-1.avif",
    alt: "Smile 1",
    style: "z-30 left-1/2 -translate-x-1/2 top-0 rotate-[15deg] shadow-2xl",
    width: 180,
    height: 180,
  },
  {
    id: 2,
    src: "/TESI-PAGE/t-hero-2.avif",
    alt: "Smile 2",
    style: "z-20 left-[10%] top-[120px] rotate-[-12deg] shadow-xl",
    width: 170,
    height: 170,
  },
  {
    id: 3,
    src: "/TESI-PAGE/t-hero-3.avif",
    alt: "Smile 3",
    style: "z-10 left-[55%] top-[150px] rotate-[8deg] shadow-lg",
    width: 170,
    height: 170,
  },
];

export default function TestimonialHeroSection() {
  return (
    <section className="w-full bg-[#9aae92] flex justify-center items-center py-16 lg:py-[40px] h-[100vh] overflow-hidden">
      <div className="max-w-6xl pt-10 w-full mx-auto flex flex-col md:flex-row gap-8 md:gap-0 px-4 md:px-12 lg:px-4 items-center justify-center ">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center md:justify-start md:pt-11 z-10">
          <div className="w-full md:max-w-xl lg:max-w-2xl">
            <h1 className="font-playfair-important font-black text-[44px] md:text-[50px] leading-[1.1] text-[#2B3029] text-left mb-5">
              Sourires authentiques,
              <br />
              histoires <span className="text-[#f7f7f5]">vraies</span> et de
              <br />
              nouvelles vies
            </h1>
            <p className="text-[#F7F7F5] text-[24px]  space-y-1  mb-8">
              <span className="text-[#2B3029]"> Découvrez</span> le confort et
              la confiance que nos soins dentaires personnalisés ont apportés à
              des personnes de tous âges.
            </p>
            <Button className="bg-[#263820]  text-white rounded-lg px-4 py-2 text-[16px] text-base font-semibold w-fit" style={{ boxShadow: '0px 4px 16px 0px rgba(44,50,41,0.18)' }}>
              Prendre rendez-vous
            </Button>
          </div>
        </div>
        {/* Right: Static Images */}
        <div className="relative flex-1 flex items-center justify-center min-h-[350px] md:min-h-[420px]">
          {/* Top image (child) */}
          <motion.img
            src="/TESI-PAGE/t-hero-1.png"
            alt="Smile 1"
            width={200}
            height={236}
            className="absolute w-[190px] h-[236px] rounded-[32px] z-30 left-1/2 top-6 -translate-x-1/2 rotate-[-13deg] shadow-2xl object-cover cursor-grab"
            style={{ boxShadow: '0 8px 32px 0 rgba(60, 80, 60, 0.18)' }}
            drag
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileTap={{ scale: 0.95, cursor: 'grabbing' }}
            dragSnapToOrigin
          />
          {/* Bottom left image (teeth) */}
          <motion.img
            src="/TESI-PAGE/t-hero-2.png"
            alt="Smile 2"
            width={300}
            height={140}
            className="absolute w-[300px] h-[140px] z-20 left-[40px] bottom-4 rotate-[-30deg] rounded-t-[50px] rounded-br-[50px] shadow-xl object-cover cursor-grab"
            style={{ boxShadow: '0 8px 32px 0 rgba(60, 80, 60, 0.18)' }}
            drag
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileTap={{ scale: 0.95, cursor: 'grabbing' }}
            dragSnapToOrigin
          />
          {/* Bottom right image (braces) */}
          <motion.img
            src="/TESI-PAGE/t-hero-3.png"
            alt="Smile 3"
            width={260}
            height={140}
            className="absolute w-[260px] h-[140px] z-10 right-0 bottom-7 rotate-[25deg] rounded-tr-[50px] rounded-bl-[50px] shadow-xl object-cover cursor-grab"
            style={{ boxShadow: '0 8px 32px 0 rgba(60, 80, 60, 0.18)' }}
            drag
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileTap={{ scale: 0.95, cursor: 'grabbing' }}
            dragSnapToOrigin
          />
        </div>
      </div>
    </section>
  );
}
