
import HeroVideo from "@/components/HeroVideo";
import PrimaryButton from "@/components/PrimaryButton";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full   overflow-hidden">
      <HeroVideo/>
      

      {/* Overlay gradient (optional for text readability) */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
}
