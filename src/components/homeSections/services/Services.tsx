import * as React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Card, CardContent } from "../../ui/card";
import { motion } from "framer-motion";

import { RiArrowRightSFill as ArrowIcon } from "react-icons/ri";

export const Services = () => {
  // Service data for the top row
  const topRowServices = [
    {
      id: 1,
      title: "Préservation dentaire",
      description: [
        "Des traitements doux pour",
        "réparer et protéger vos ",
        "dents naturelles.",
      ],
      desc: "Des traitements doux pour réparer et protéger vos dents naturelles.",
      image: "..//image-3.png",
      borderRadius: "rounded-[80px_8px_8px_8px]",
      imageRadius: "rounded-[80px_5px_0px_0px]",
    },
    {
      id: 2,
      title: "Dental Implants",
      description: [
        "Permanent solutions to",
        "remplacer les dents ",
        "manquantes.",
      ],
      image: "..//image-4.png",
      borderRadius: "rounded-lg",
      imageRadius: "rounded-[5px_5px_0px_0px]",
    },
    {
      id: 3,
      title: "Prothèses dentaires",
      description: [
        "Couronnes et bridges ",
        "personnalisés : durabilité et ",
        "esthétique naturelle.",
      ],
      image: "..//image-5.png",
      borderRadius: "rounded-[8px_80px_8px_8px]",
      imageRadius: "rounded-[20px_80px_20px_20px]",
    },
  ];

  // Service data for the bottom row
  const bottomRowServices = [
    {
      id: 1,
      title: "Chirurgie orale et",
      description: [
        "Soins spécialisés pour ",
        "problèmes dentaires ",
        "complexes.",
      ],
      image: "..//image.png",
      borderRadius: "rounded-[8px_8px_8px_80px]",
      imageRadius: "rounded-[20px]",
    },
    {
      id: 2,
      title: "Orthodontie (ODF)",
      description: [
        "Aligner les dents et les",
        "mâchoires pour un sourire ",
        "plus sain et plus confiant",
      ],
      image: "..//image-1.png",
      borderRadius: "rounded-lg",
      imageRadius: "rounded-[20px]",
    },
    {
      id: 3,
      title: "Dentisterie esthétique",
      description: [
        "Améliorer l'apparence de vos",
        "dents pour un sourire ",
        "rayonnant",
      ],
      image: "..//image-2.png",
      borderRadius: "rounded-[8px_8px_80px_8px]",
      imageRadius: "rounded-[20px]",
    },
  ];

  return (
    <section className="w-full py-16 px-[24px] bg-[#9aae92] ">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16 relative">
          <div className="flex flex-col items-center mb-0  md:mb-16 relative w-fit ">
            <div className="text-[34px] md:text-[50px] tracking-[-0.80px] leading-[40px] font-black text-[#2b3029] font-playfair-important text-center relative px-6">
              Que faisons-nous pour prendre soin
              <br />
              de votre sourire?
            </div>
            <div
              className="w-[30px] md:w-[57px] h-[30px] md:h-[57px] absolute right-[33px] md:right-[-40px] -top-0 md:top-[-10px] rotate-y-180 bg-cover"
              style={{ backgroundImage: "url(..//image-6.png)" }}
            />
          </div>
        </div>

        {/* Top row of services */}
        <div className="flex flex-wrap justify-center gap-[60px] mb-16">
          {topRowServices.map((service) => (
            <Card
              key={service.id}
              className={`w-[350px] md:w-[293px] h-[450px] border-4 border-solid border-[#f7f7f5] ${service.borderRadius} overflow-hidden`}
            >
              <div
                className={`w-[350px] md:w-[269px] h-[250px] mx-2 mt-2 bg-cover bg-center ${service.imageRadius}`}
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <CardContent className="p-3">
                <div className="mb-3">
                  {service.title.includes("\n") ? (
                    service.title.split("\n").map((line, index) => (
                      <h3
                        key={index}
                        className="text-[26px] tracking-[-0.80px] font-bold leading-[33.6px]  text-[#2b3029]"
                      >
                        {line}
                      </h3>
                    ))
                  ) : (
                    <h3 className="text-[26px] tracking-[-0.80px] leading-[33.6px] font-bold text-[#2b3029] font-[var(--font-playfair)]">
                      {service.title}
                    </h3>
                  )}
                </div>
                <div className="mb-3 ">
                  {service.description.map((line, index) => (
                    <p
                      key={index}
                      className="text-[17.3px] tracking-[0.18px] leading-[25.2px] font-normal text-[#f7f7f5] whitespace-nowrap"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <div className="flex justify-end px-2">
                  <div className="flex  justify-center items-center text-[#243520]  gap-1 font-playfair-important">
                    <span className="text-[19px] tracking-[0.19px] leading-[26.6px] font-normal ">
                      More
                    </span>
                    <AiOutlineRight className="w-[9px] h-5 mt-1 " />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom row of services */}
        <div className="flex flex-wrap justify-center gap-[60px]">
          {bottomRowServices.map((service) => (
            <Card
              key={service.id}
              className={`w-[350px] md:w-[293px] h-[450px] border-4 border-solid border-[#f7f7f5] ${service.borderRadius} overflow-hidden`}
            >
              <div
                className={`w-[350px] md:w-[269px] h-[250px] mx-2 mt-2 bg-cover bg-center ${service.imageRadius}`}
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <CardContent className="p-3 ">
                <div className="mb-3">
                  <h3 className="text-[27.2px] tracking-[-0.80px] leading-[33.6px] font-bold text-[#2b3029] font-playfair-important">
                    {service.title}
                  </h3>
                </div>
                <div className="mb-3">
                  {service.description.map((line, index) => (
                    <p
                      key={index}
                      className="text-[17.3px] tracking-[0.18px] leading-[25.2px] font-normal text-[#f7f7f5]  whitespace-nowrap"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex justify-end px-2">
                  <div className="flex  justify-center items-center text-[#243520]  gap-1 font-playfair-important">
                    <span className="text-[19px] tracking-[0.19px] leading-[26.6px] font-normal ">
                      More
                    </span>
                    <AiOutlineRight className="w-[9px] h-5 mt-1 " />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
