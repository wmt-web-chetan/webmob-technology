import Image from "next/image";
import React from "react";

const AwardCard = ({ image, text }) => {
  return (
    <div
      className="rounded-2xl lg:rounded-3xl bg-white shadow-[0_0_16px_0_rgba(0,0,0,0.08)] 
                    w-full min-w-[120px] max-w-[180px] sm:max-w-[200px] xl:max-w-[160px] 2xl:max-w-[180px]
                    flex flex-col items-center justify-center 
                    py-3 sm:py-4 lg:py-5 xl:py-4 2xl:py-5
                    min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] xl:min-h-[160px] 2xl:min-h-[180px]
                    mx-auto"
    >
      {/* Badge Circle */}
      <div className="rounded-full flex items-center justify-center relative flex-shrink-0">
        <div className="w-12 sm:w-16 lg:w-18 xl:w-14 2xl:w-16 rounded-full bg-white flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt="Award Logo"
              className="w-full h-full object-contain rounded-full"
            />
          ) : (
            <span className="text-orange-500 font-bold text-sm sm:text-lg xl:text-base">
              ∞
            </span>
          )}
        </div>
      </div>

      {/* Text */}
      <p
        className="mt-2 sm:mt-3 lg:mt-4 xl:mt-3 text-center text-text-primary font-medium 
                   text-xs sm:text-sm lg:text-base xl:text-sm 2xl:text-base 
                   px-2 leading-tight sm:leading-relaxed 
                   flex-grow flex items-center hyphens-auto"
      >
        {text}
      </p>
    </div>
  );
};

export default AwardCard;
