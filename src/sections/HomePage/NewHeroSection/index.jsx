import HeroVideo from "@/components/HeroVideo";
import PrimaryButton from "@/components/PrimaryButton";
import React from "react";

const NewHeroSection = () => {
  return (
    <section className="relative w-full px-wrapper min-h-screen overflow-hidden">
      {/* Desktop background video */}
      <div className="hidden lg:block">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/bgHero.webp"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Mobile background image */}
      <div 
        className="lg:hidden absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bgHero.webp')" }}
      ></div>

      {/* Content section */}
      <div className="relative z-10 flex flex-col items-center justify-center xl:justify-start xl:mt-36 2xl:mt-38 3xl:mt-60 min-h-screen lg:h-screen">
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
            <PrimaryButton
              text="Architect Your Future"
              className="text-white bg-primary-button text-sm"
            />
            <PrimaryButton
              text=" Explore Our Realized Visions"
              className="border text-white text-sm border-white"
            />
          </div>
        </div>

        {/* Mobile video section - positioned below buttons */}
        <div className="lg:hidden mt-8 w-full max-w-lg">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;