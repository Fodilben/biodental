import { Footer } from "../../components/homeSections/footer/footer";
import { Nav } from "../../components/ui/nav";
import { Reviews } from "@/components/homeSections/reviews/page";

import {
  galleryImages,
  TestimonialHeroSection,
  TestimonialsSection,
  GallerySection,
  MoreImagesSection
} from "../../components/testimonialSections";
import { CTA } from "../../components/homeSections/CTA/CTA";
import { PhonePopup } from './../../components/ui/nav';
let showPhone =false

export default function TestimonialsPage() {
  return (
    <div className="relative w-full bg-[#F7F7F5]">
      <Nav />
      <PhonePopup open={showPhone} />
      <TestimonialHeroSection />
      <Reviews />
      <GallerySection />
      <MoreImagesSection />
      <CTA />
      <Footer />
    </div>
  );
} 