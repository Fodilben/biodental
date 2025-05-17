"use client";
import dynamic from "next/dynamic";

const GallerySection = dynamic(
  () => import("./testimonialSections/GallerySection"),
  { ssr: false }
);

export default function GallerySectionClient() {
  return <GallerySection />;
} 