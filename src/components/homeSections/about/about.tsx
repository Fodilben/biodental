import React from "react";
import { Card, CardContent } from "../../ui/card";

export const About = () => {
  const doctorInfo = {
    name: "Dr.Fetnaci Sofian",
    clinicName: "BioDental",
    philosophy:
      "put people before procedures, and always aim for a natural, lasting result.",
    description: [
      "At BioDental, we believe great dentistry starts with listening. I'm Dr.Fetnaci Sofian — a dentist driven by a simple philosophy:",
      "Since graduating in 2019 from Annaba, I've pursued advanced training in small surgeries, mechanized endodontics, and implantology — but what truly defines my work is the human connection behind every case.",
    ],
  };

  return (
    <section className="w-full py-20 bg-[#9aae92]">
      <div className="container flex flex-col md:flex-row items-start gap-[50px] max-w-[1000px] mx-auto">
        <div
          className="relative w-full md:w-[358px] h-[440px] rounded-[1000px_1000px_8px_8px] bg-cover bg-center"
          style={{ backgroundImage: "url(..//image-7.png)" }}
        />

        <div className="flex flex-col w-full md:w-[592px] items-start gap-[34px]">
          <div className="w-full">
            <h2 className="font-[var(--font-playfair)] font-bold text-[#2b3029] text-[45.5px] tracking-[-0.80px] leading-[60px]">
              Behind Every Confident
              <br />
              Smile
            </h2>
          </div>

          <Card className="w-full bg-transparent border-none shadow-none">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-1">
                <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.03px] leading-[25.2px] font-[var(--font-manrope)]">
                  At{" "}
                  <span className="font-bold text-[17.9px] font-[var(--font-manrope)]">
                    {doctorInfo.clinicName}
                  </span>
                  , we believe great dentistry starts with listening.
                </p>
                <div className="space-y-1">
                  <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.18px] leading-[25.2px] font-[var(--font-manrope)]">
                    I'm{" "}
                    <span className="font-bold text-[#2b3029] text-[24.2px] tracking-[0.24px] leading-[33.6px] ml-1.5 font-[var(--font-manrope)]">
                      {doctorInfo.name}
                    </span>{" "}
                    — a dentist driven by a simple
                  </p>
                  <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.18px] leading-[25.2px] font-[var(--font-manrope)]">
                    philosophy:{" "}
                    <span className="font-bold text-[17.9px] font-[var(--font-manrope)]">
                      put people before procedures
                    </span>
                    , and always aim for a
                  </p>
                  <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.18px] leading-[25.2px] font-[var(--font-manrope)]">
                    <span className="font-bold text-[17.9px] font-[var(--font-manrope)]">
                      natural, lasting result
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.18px] leading-[25.2px] font-[var(--font-manrope)]">
                  Since graduating in 2019 from Annaba, I've pursued advanced
                </p>
                <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.18px] leading-[25.2px] font-[var(--font-manrope)]">
                  training in small surgeries, mechanized endodontics, and
                </p>
                <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.18px] leading-[25.2px] font-[var(--font-manrope)]">
                  implantology — but what truly defines my work is the human
                </p>
                <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.18px] leading-[25.2px] font-[var(--font-manrope)]">
                  connection behind every case.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
