import React from "react";
import { Button } from "../../components/ui/button";
import "../../styles/heroAnimation.css";

const AboutHero = () => {
  return (
    <div className="about-hero-section relative flex flex-col items-center justify-center min-h-[70vh] w-full px-4 py-16 overflow-hidden">
      {/* Full-screen background gradient */}
      <div className="about-hero-bg-gradient" />
      {/* 3 rotating blurred colored circles */}
      <div className="about-hero-orbit-circle about-hero-orbit-circle-1" />
      <div className="about-hero-orbit-circle about-hero-orbit-circlin e-2" />
      <div className="about-hero-orbit-circle about-hero-orbit-circle-3" />
      <div className="about-hero-orbit-circle about-hero-orbit-circle-4" />
      <div className="about-hero-orbit-circle about-hero-orbit-circle-5" />
      <div className="about-hero-orbit-circle about-hero-orbit-circle-6" />
      <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center py-10  z-50  ">
        <div className="py-10">
          <p className="text-[27px] md:text-[40px] text-[#3A4B35] indent-5 ">
            <span className="font-medium">Chez</span>
            <span className="text-[34px] md:text-[55px] italic font-bold font-playfair-important  pl-1 leading-1">
              BioDental
            </span>
            <span className="font-extralight">
              ,"La dentisterie aussi naturelle et rassurante qu'une bouffée
              d'air frais. Ces principes reflètent notre calme assurance, notre
              expertise pointue et notre dévouement au bien-être des patients.
            </span>
          </p>
          <Button className="mt-4 bg-[#222222] text-white rounded-lg shadow-[0px_0.71px_0.71px_-0.62px_#00000026,0px_1.81px_1.81px_-1.25px_#00000024,0px_3.62px_3.62px_-1.88px_#00000024,0px_6.87px_6.87px_-2.5px_#00000021,0px_13.65px_13.65px_-3.12px_#0000001a,0px_30px_30px_-3.75px_#0000000d] hover:bg-[#333333]">
            <span className="text-[16px] leading-[16.8px]  font-normal">
              Prendre rendez-vous
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;