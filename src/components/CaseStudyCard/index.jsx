import Image from "next/image";
import React from "react";
import arrow from "../../assets/svg/union.svg";
import arrowGreySvg from "@/assets/svg/arrow-grey.svg";
import arrowBlueSvg from "@/assets/svg/arrow-blue.svg";

const CaseStudyCard = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-2 sm:p-4 h-full flex flex-col w-full hover:shadow-lg transition-shadow duration-500 group">
      <div className="flex justify-center bg-[#eeeff1] rounded-2xl p-4 h-48 md:h-56 lg:h-64 xl:h-72">
        <Image
          src={data?.image}
          width={600}
          className="rounded-2xl group-hover:scale-105 transition-transform duration-500 object-contain h-full w-auto"
          alt={data?.title || "Case study image"}
        />
      </div>
      <div className="px-3 mt-6 xl:mt-3 flex-grow flex flex-col">
        <h3 className=" text-lg  lg:text-2xl font-semibold w-full">
          {data?.title}
        </h3>
        <p className="text-text-secondary text-sm sm:text-base max-w-lg  mt-3 mb-3 flex-grow">
          {data?.description}
        </p>
      </div>
      <div className="flex justify-between items-end  px-3 mt-3 mb-4">
        <div className="flex gap-2 lg:gap-3 flex-wrap">
          {data?.tags.map((item, index) => (
            <div
              key={index}
              className="bg-[#C4C7CE33] text-text-primary p-1 rounded-full text-xs sm:text-sm inline-block px-3 lg:px-5 py-2"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="relative w-8 h-8 md:w-10 md:h-10 border-text-secondary border border-solid rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:text-primary">
          {/* <Image
            src={arrowGreySvg}
            alt="Arrow icon"
            width={24}
            height={24}
            className="transition-transform duration-500 ease-in-out group-hover:text-primary group-hover:-rotate-45"
          /> */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground transition-transform duration-500 ease-in-out group-hover:text-primary group-hover:-rotate-45"
          >
            <path
              d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
