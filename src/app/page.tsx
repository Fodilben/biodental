import { Nav } from "../components/ui/nav";
import { Footer } from "../components/homeSections/footer/footer";
import { FAQ } from "../components/homeSections/FAQ/FAQ";
import { Services } from "../components/homeSections/services/Services";
import { About } from "../components/homeSections/about/about";
import { CTA } from "../components/homeSections/CTA/CTA";
import  {Features}  from "../components/homeSections/features/Features";
import { Hero } from "../components/homeSections/hero/hero";
import { Reviews } from "@/components/homeSections/reviews/page";

export default function Page() {
  return (
    <div className="w-full bg-[#F7F7F5]">
      <Nav />
      <div className="relative">
        <div className="w-full bg-[#F7F7F5] overflow-hidden">
          {/* Header Section */}
          <div className="w-full">
            <Hero />
          </div>
          {/* Testimonials Section */}
          <About />
          <Features />
      <Services />
          <Reviews />
          <FAQ />
        </div>
        <div className="fixed bottom-8 right-8 w-[142px] h-9 bg-[#F7F7F5] rounded-[10px] shadow-[0px_0.64px_1.15px_-1.12px_#00000042,0px_1.93px_3.48px_-2.25px_#0000003d,0px_5.11px_9.19px_-3.38px_#00000031,0px_16px_28.8px_-4.5px_#00000008]" />
      </div>
      <CTA />
      <Footer />
    </div>
  );
} 