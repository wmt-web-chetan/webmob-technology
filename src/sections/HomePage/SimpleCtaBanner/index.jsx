import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import React from "react";
import Checks from "@/assets/svg/Checks.svg"
import arrowSvg from "@/assets/svg/arrow.svg"
// import styles from "./SimpleCtaBanner.module.css";

const SimpleCtaBanner = () => {
  return (
    <div className="relative min-h-[214px] sm:min-h-[350px] bg-dark-bg overflow-hidden">
      {/* Cube background images */}
      <div className="absolute inset-0">
        {/* Top-left cube */}
        {/* <div className="absolute top-[-46px] sm:top-[-120px] md:top-[-110px]  opacity-50  h-[55%] sm:h-96 ">
          <Image 
            src={Checks} 
            alt="" 
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </div> */}
        {/* <div className="block sm:hidden absolute bottom-[-161px] sm:bottom-[-46px]  h-96 rotate-180 "> */}
          <Image 
            src={Checks} 
            alt="" 
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        {/* </div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center  min-h-[300px] sm:min-h-[350px]  text-center">
        {/* Main heading */}
        <div className='flex justify-center'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white leading-tight'>
         Let's Move Your Project From <span className='font-bold'>'Someday'</span> to <span className=' font-bold'>'Sprint One'</span>.
        </h2>
      </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12">
          <PrimaryButton
            icon={arrowSvg}
            text="Start Your Project Blueprint"
            className="text-white bg-primary-button text-sm arrow-animate"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleCtaBanner;