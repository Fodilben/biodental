import { CTA } from "@/components/homeSections/CTA/CTA";
import { Nav } from "@/components/ui/nav";
import { Footer } from "@/components/homeSections/footer"
import  {ServicesHero}  from "@/components/ServicesSections/ServicesHero";
import ServicesSec from "@/components/ServicesSections/ServicesSec";
import { Features } from "@/components/homeSections/features/Features";

export default function Services() {
  return (
    <div className="relative w-full bg-[#9aae92] ">
      <Nav />
      <Features issevice={true} />
      <ServicesSec />
      <CTA />
      <Footer />
    </div>
  );
}
