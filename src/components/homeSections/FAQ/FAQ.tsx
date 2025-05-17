import * as React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Card, CardContent } from "../../ui/card";

export const FAQ = () => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is the cost of a dental bridge in Algeria?",
      answer:
        "The cost of a dental bridge in Algeria typically ranges from 20,000 to 50,000 DZD per tooth, depending on materials used (porcelain, zirconia, or metal) and complexity of the case. At BioDental, we offer flexible payment options to make quality dental bridges accessible.",
    },
    {
      question:
        "How often should I see my dentist during orthodontic treatment?",
      answer:
        "During orthodontic treatment, we recommend visits every 4-6 weeks for adjustments and progress monitoring. Regular appointments ensure your treatment stays on track and allows us to address any issues promptly. Each appointment typically takes 20-30 minutes.",
    },
    {
      question: "Which dental braces are right for me?",
      answer:
        "The right braces depend on your specific needs, lifestyle, and budget. We offer traditional metal braces, ceramic (tooth-colored) braces, and clear aligners. During your consultation, we'll assess your dental structure, treatment goals, and preferences to recommend the most suitable option for optimal results.",
    },
  ];

  return (
    <div className="w-full py-[60px] md:py-20 bg-[#9aae92] px-[20px] md:px-[30px] lg:px-0">
      <div className="max-w-[1050px] mx-auto relative">
        {/* FAQ Title */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9aae92] px-3">
          <h2 className="font-playfair-important font-bold text-[#2b3029] text-[45.5px] tracking-[-0.80px] leading-[60px]">
            FAQs
          </h2>
        </div>

        {/* FAQ Card */}
        <Card className="rounded-2xl border-2 border-solid border-[#f7f7f5] mt-0   md:mt-8  pt-5 md:pt-14">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-t border-[#f7f7f5] py-2"
                >
                  <AccordionTrigger className="flex items-center gap-6 hover:no-underline group">
                    <span className="relative flex items-center justify-center">
                      <AiOutlinePlus className="h-[30px] w-[30px] flex-shrink-0 text-white transition-transform duration-300 group-data-[state=open]:rotate-45" />
                    </span>
                    <span className="text-left font-medium text-[#2b3029] text-[24px] tracking-[-0.80px] leading-[28.8px]">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-[54px] transition-all duration-500 ease-in-out data-[state=open]:opacity-100 data-[state=open]:translate-y-0 data-[state=closed]:opacity-0 data-[state=closed]:-translate-y-2 text-white text-[18px] leading-[26px] mt-2 font-normal">
                    {item.answer || "Content not provided"}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
