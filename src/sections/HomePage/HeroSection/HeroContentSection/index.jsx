import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import React from "react";
import patternglow from "@/assets/svg/svgpatternforHero.svg";

// Hero Content Section with overlay and text (50% of viewport height on desktop, full height on mobile)
export function HeroContentSection({ isMobile }) {
  return (
    <section className="relative w-full h-screen md:h-[50vh] overflow-hidden bg-[#1b1d36]">
      {/* Mobile Background Image - Only bgHero.webp on mobile */}
      {isMobile && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/bgHero.webp"
            alt="Hero background"
            fill
            className="object-cover"
            priority={true}
          />
          {/* Dark overlay for better text readability on mobile */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}
        </div>
      )}

      {/* SVG Pattern Overlay - Only visible on desktop and tablet */}
      {!isMobile && (
        <div className="absolute inset-0 z-0">
          <Image
            src={patternglow}
            alt="Pattern overlay"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      )}

      {/* Content Container - Top positioned on mobile, centered on desktop */}
      <div className={`relative z-10 h-full px-4 sm:px-6 lg:px-8 ${
        isMobile 
          ? 'flex items-start justify-center pt-20' 
          : 'flex items-center justify-center'
      }`}>
        <div className="text-center space-y-6 max-w-6xl">
          <h1 className="h1-heading text-white">
            Where Vision Gets{" "}
            <span className="font-bold">Velocity.</span>
          </h1>
          <p className=" text-sm sm:text-xl max-w-5xl text-white text-center px-2">
            We don't just build software. We architect legacies. By fusing 15
            years of human craftsmanship with the transformative speed of AI, we
            turn ambitious ideas into market-defining digital realities
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4">
            <PrimaryButton
              text="Architect Your Future"
              className="text-white bg-primary-button text-sm"
            />
            <PrimaryButton
              text="Explore Our Realized Visions"
              className="border text-white text-sm border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}