import PrimaryButton from "@/components/PrimaryButton";
import pattern from "@/assets/svg/pattern.svg";
import glow from "@/assets/svg/glow.svg";
import arrowSvg from "@/assets/svg/arrow.svg";
import Image from "next/image";

export default function HeroContentSection() {
  return (
    <section className="relative w-full h-screen md:h-[50vh] overflow-hidden bg-[#1b1d36]">
      {/* Mobile Background Image - Only visible on mobile */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src="/Heromobile.svg"
          alt="Hero background"
          fill
          className="object-cover"
          priority={true}
        />
      </div>

      {/* SVG Pattern and Glow Overlays - Only visible on desktop and tablet */}
      {/* Pattern Layer (bottom layer) */}
      <div className="absolute inset-0 z-0 opacity-70 hidden md:block">
        <Image
          src={pattern}
          alt="Pattern overlay"
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      
      {/* Glow Layer (top layer) */}
      <div className="absolute inset-0 z-[1] opacity-70 hidden md:block">
        <Image
          src={glow}
          alt="Glow overlay"
          fill
          className=""
          priority={false}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full px-4 sm:px-6 lg:px-8 flex items-start justify-center pt-20 md:items-center md:pt-0">
        <div className="text-center space-y-6 max-w-6xl">
          <h1 className="h1-heading text-white">
            Where Vision Gets <span className="font-bold">Velocity.</span>
          </h1>
          <p className="text-sm sm:text-xl max-w-5xl text-white text-center px-2">
            We don't just build software. We architect legacies. By fusing 15
            years of human craftsmanship with the transformative speed of AI, we
            turn ambitious ideas into market-defining digital realities
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4">
            <PrimaryButton
              icon={arrowSvg}
              text="Architect Your Future"
              className="text-white bg-primary-button text-sm arrow-animate"
            />
            <PrimaryButton
              icon={arrowSvg}
              text="Explore Our Realized Visions"
              className="border text-white text-sm border-white arrow-animate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
