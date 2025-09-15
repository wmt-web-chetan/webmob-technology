
import HeroVideo from "@/components/HeroVideo";
import PrimaryButton from "@/components/PrimaryButton";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full px-wrapper h-screen overflow-hidden">
      <HeroVideo/>
      <div className="absolute inset-0 flex flex-col items-center justify-center xl:justify-start  xl:mt-36 2xl:mt-38 3xl:mt-60">
        <div className="text-center space-y-6">
          <h1 className="h1-heading text-white">
            Where Vision Gets{" "}
            <span className="font-bold text-gradient-primary">Velocity</span>
          </h1>
          <p className="text-md max-w-4xl text-white text-center px-2">
            We don't just build software. We architect legacies. By fusing 15
            years of human craftsmanship with the transformative speed of AI, we
            turn ambitious ideas into market-defining digital realities
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4">
            <PrimaryButton text="Architect Your Future" className="text-white bg-primary-button text-sm"/>
            <PrimaryButton text=" Explore Our Realized Visions" className="border text-white text-sm border-white"/>
          </div>
        </div>
      </div>

      {/* Overlay gradient (optional for text readability) */}
      {/* <div className="absolute inset-0 bg-black/40 z-0"></div> */}
    </section>
  );
}
