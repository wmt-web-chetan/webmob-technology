import Image from "next/image";
import React from "react";
import bullet from "../../../assets/svg/bullet.svg";
import AiPoweredRightSection from "@/components/AipoweredRightSection";

const AipoweredVelocity = () => {
  return (
    <div className="px-wrapper">
      <div className="flex justify-center text-center">
        <h2 className="h2-heading">
          The Symbiosis: How We Achieve{" "}
          <span className="text-gradient-primary font-bold">5X Velocity</span>
        </h2>
      </div>
      <div className="flex gap-5 mt-10">
        <div className="flex-1 py-4">
          <p className="text-lg text-text-primary   ">
            This isn't about developers just working harder. It's about them
            working smarter, amplified by a suite of proprietary and
            best-in-class AI tools. This fusion of human expertise and machine
            intelligence is our secret to delivering higher quality software,
            faster than you thought possible. Explore the five core accelerators
            of our development engine.
          </p>
          <div className="mt-8">
            {[1, 2, 3, 4].map((item) => {
              return (
                <div className="flex gap-5 mb-3">
                  {" "}
                  <Image src={bullet} width={10} />{" "}
                  <div className="text-text-secondary">
                    70% Faster Time-to-Market
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
            <AiPoweredRightSection/>
        </div>
      </div>
    </div>
  );
};

export default AipoweredVelocity;
