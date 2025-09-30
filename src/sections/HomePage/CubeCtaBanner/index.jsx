import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import React from "react";
import roundcube1 from "@/assets/images/RoundCube1.png";
import roundcube2 from "@/assets/images/RoundCube2.png";
import roundcube3 from "@/assets/images/RoundCube3.png";
import arrowSvg from "@/assets/svg/arrow.svg";
import blueArrowSvg from "@/assets/svg/bluearrow.svg";

const CubeCtaBanner = () => {
  return (
    <div className="relative min-h-[400px] bg-light-bg overflow-hidden">
      {/* Cube background images */}
      <div className="absolute inset-0">
        {/* Top-left cube */}
        <div className="absolute bottom-[-57px]  left-[-50px] sm:bottom-[-57px] sm:left-[-50px] lg:top-[-120px] lg:left-66 3xl:top-[-120px] 3xl:left-90 h-35 sm:h-52 ">
          <Image
            src={roundcube1}
            alt=""
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom-right cube */}
        <div className="absolute top-[-180px] right-[-120px] sm:top-[-180px] sm:right-[-120px]  lg:top-[230px] lg:right-[-190px] h-80  sm:h-[600px] ">
          <Image
            src={roundcube2}
            alt=""
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Left-center floating cube */}
        <div className=" hidden lg:block absolute top-96 left-30  transform -translate-y-1/2  h-40 ">
          <Image
            src={roundcube3}
            alt=""
            width={112}
            height={112}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Subtle gradient overlay for depth */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px]  text-center">
        {/* Main heading */}
        <div className="flex justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-gray-900 leading-tight">
            The <span className="text-gradient-primary font-bold">Future</span>{" "}
            Doesn't Wait.{" "}
            <span className="text-gradient-primary font-bold">Neither</span>{" "}
            Should You.
          </h2>
        </div>

        {/* Subtitle */}
        <div className="flex justify-center mt-4 sm:mt-5">
          <p className="h2-description text-2xl sm:text-lg text-text-secondary max-w-4xl text-center leading-relaxed px-2 sm:px-0">
            You have the vision. We have the architecture, the technology, and
            the team to build it into a market-defining reality. The
            conversation starts here. Let's discuss the blueprint for your
            future.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6">
          <PrimaryButton
            icon={arrowSvg}
            text="Schedule a Strategic Call"
            className="text-white bg-primary-button arrow-animate"
          />
          <PrimaryButton
            icon={blueArrowSvg}
            text="Send Us Your Project Brief"
            className="gradient-border-button-pulse arrow-animate"
          />
        </div>
      </div>
    </div>
  );
};

export default CubeCtaBanner;
