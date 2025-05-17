import * as React from "react";
import { Button } from "../../ui/button";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[700px] flex flex-col items-center justify-center bg-[#f7f7f5] pt-[50px]  md:pt-24 pb-12">
      {/* website version */}
      <div className=" hidden md:flex  flex-col items-center  w-[900px] mx-auto">
        <div className=" flex flex-col gap-1 font-black font-playfair-important text-[#2b3029] text-center  indent-2 space-y-0.5  ">
          <h1 className="h-[80px] mr-4 relative  text-[66px] ">
            <span className="animate-appear">Restaurer votre </span>
            <span className="inline-block align-middle ">
              <img
                src="/hero1.avif"
                alt="hero1"
                className="inline h-[70px] w-[130px] rounded-full object-cover align-baseline"
              />
            </span>
            <span className="text-[#9aae92] italic font-bold">Sourire</span>
            <span className=" absolute top-3 -right-11">
              <img
                src="/nedjm.avif"
                alt="sparkle"
                className="inline h-[46px] w-[48px] align-top"
              />
            </span>
          </h1>
          <h1 className="h-[80px] relative flex  text-[70px]  ">
            <span className=" absolute top-0 -left- mr-1 rotate-[-32deg]">
              <img
                src="/leaf.avif"
                alt="leaf"
                className="inline h-[38px] w-[48px] align-top"
              />
            </span>
            <span>Naturel: soins doux,</span>
            <span className="inline-block align-middle mx-1">
              <img
                src="/hero2.avif"
                alt="hero2"
                className="inline h-[70px] w-[180px] rounded-full object-cover align-middle"
              />
            </span>
          </h1>
          <h1 className="h-[80px]  text-[70px] ">
            <span className="inline-block align-bottom mx-1">
              <img
                src="/hero3.avif"
                alt="hero3"
                className="inline h-[70px] w-[150px] rounded-full object-cover align-middle"
              />
            </span>
            <span>Priorité au Patient.</span>
          </h1>
        </div>
        <div className="flex justify-center  pt-8 w-full">
          <span className="inline-block  align-end mx-1 ml-[50%] rotate-[-17deg]">
            <img
              src="/arrow.avif"
              alt="arrow"
              className="inline h-[73px] w-[74px] align-middle"
            />
          </span>
        </div>
        <div className="">
          <Button className="bg-[#2b3029] text-newwhite  px-4 py-2 rounded-md shadow-md  font-semibold">
            Prendre rendez-vous
          </Button>
        </div>
      </div>

      {/* mobile version */}
      <div className="flex md:hidden flex-col items-center mx-auto text-[47px]  font-semibold  p-2  text-black">
       
          {/* Un Sourire (with smile image as O) */}
          <div className="flex items-center justify-center  font-playfair-important text-center">
            <span>Un Sourire</span>
            <span className="inline-block align-middle mx-1">
              <img
                src="/hero1.avif"
                alt="hero1"
                className="inline h-[46px] w-[86px] rounded-full object-cover align-baseline"
                style={{ marginBottom: "-8px" }}
              />
            </span>
          </div>
          {/* Naturel (with leaf as accent) */}
          <div className="relative flex items-center justify-center  font-playfair-important  text-center tracking-wider ">
            <span className="inline-block align-middle  ">
              <img
                src="/hero2.avif"
                alt="hero2"
                className="inline h-[47px] w-[128px] rounded-full object-cover align-baseline  "
                style={{ marginBottom: "-8px" }}
              />
            </span>
            <span>Naturel</span>

            <span className="inline-block align-top ml-1 -mt-3 absolute top-[11px] right-[-9px]">
              <img
                src="/leaf.avif"
                alt="leaf"
                className="inline h-[24px] w-[24px] align-top rotate-[35deg]  "
              />
            </span>
          </div>
          {/* préservé avec */}
          <div className="font-black font-playfair-important text-center tracking-wider">
            <span>préservé avec</span>
          </div>
          {/* Douceur (with sparkle and smile image as O) */}
          <div className="flex items-center justify-center font-playfair-important  text-center">
            <span className="inline-block align-middle -mr-2">
              <img
                src="/nedjm.avif"
                alt="sparkle"
                className="inline h-[21px] w-[25px] align-text-top "
              />
            </span>
            <span>Douceur</span>
            <span className="inline-block align-middle mx-1">
              <img
                src="/hero3.avif"
                alt="hero3"
                className="inline h-[47px] w-[115px] rounded-full object-cover align-baseline shadow-md "
                style={{ marginBottom: "-8px" }}
              />
            </span>
          </div>
          {/* Swirl/arrow accent */}
          <div className="flex justify-end pt-4 w-full">
            <span className="inline-block align-end mx-1  rotate-[-17deg]">
              <img
                src="/arrow.avif"
                alt="arrow"
                className="inline h-[50px] w-[50px] align-middle"
              />
            </span>
          </div>
        {/* Button */}
        <div className="pt-2 h-[40px]">
          <Button className="bg-[#243520] flex items-center p-4 text-[#fff] w-fit rounded-md shadow-md font-semibold text-[16px]">
            Prendre rendez-vous
          </Button>
        </div>
    </div>
    </section>
  );
};
