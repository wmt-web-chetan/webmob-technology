import TailwindSlider from "@/components/Slider";
import TestimonialCard from "@/components/TestimonialCard";
import React from "react";

const TestimonialSection = () => {
  return (
    <div className=" bg-light-bg">
      <div className="px-wrapper-v2 section-padding-y  3xl:max-w-8xl mx-auto">
        <div className="flex justify-center ">
          <h2 className="h2-heading text-center">
            The{" "}
            <span className="font-bold text-gradient-primary">
              Human Experience
            </span>{" "}
            Tech-Powered Partnership
          </h2>
        </div>
        <div className="flex justify-center mt-4">
          <p className="h2-description xl:max-w-[80%]  2xl:max-w-[80%]  3xl:max-w-[80%]  text-center">
            Technology is our tool, but people are our purpose. Hear directly
            from the leaders and innovators we've had the privilege of
            partnering with.
          </p>
        </div>
        <div className="mt-10">
          <TestimonialCard/>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
