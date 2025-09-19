import Image from "next/image";
import React from "react";
import arrow from "../../assets/svg/union.svg";
import arrowGreySvg from "@/assets/svg/arrow-grey.svg";
import arrowBlueSvg from "@/assets/svg/arrow-blue.svg";

const CaseStudyCard = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-2 h-full flex flex-col w-full hover:shadow-lg transition-shadow duration-300 group">
      <div className="flex justify-center">
        <Image
          src={data?.image}
          width={600}
          className="rounded-3xl hover:scale-105 transition-transform duration-300"
          alt={data?.title || "Case study image"}
        />
      </div>
      <div className="px-3 mt-3 flex-grow flex flex-col">
        <h3 className="text-2xl font-semibold">{data?.title}</h3>
        <p className="text-text-secondary text-base max-w-lg mt-3 flex-grow">
          {data?.description}
        </p>
      </div>
      <div className="flex justify-between items-center gap-20 px-3 mt-3 mb-4">
        <div className="flex gap-2 lg:gap-3 flex-wrap">
          {data?.tags.map((item, index) => (
            <div
              key={index}
              className="bg-[#C4C7CE33] text-text-primary p-1 rounded-full text-sm inline-block lg:px-5 py-2"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="relative w-12 h-12 border-text-secondary border-solid border-[1px] rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-all duration-300">
          {/* Grey arrow - visible by default */}
          <Image
            src={arrowGreySvg}
            alt="Arrow icon"
            className="transition-opacity duration-300 group-hover:opacity-0 absolute"
            width={24}
            height={24}
          />    
          {/* Blue arrow - visible on hover */}
          <Image
            src={arrowBlueSvg}
            alt="Arrow icon"
            className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute"
            width={54}
            height={54}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
