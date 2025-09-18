import Image from "next/image";
import React from "react";
import arrow from "../../assets/svg/union.svg";
import nonhoverIcon from "../../assets/svg/arrow.svg"

const CaseStudyCard = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-2 h-full flex flex-col w-full hover:shadow-lg transition-shadow duration-300 group">
      <div className="flex justify-center">
        <Image src={data?.image} width={600} className="rounded-3xl hover:scale-105 transition-transform duration-300" alt={data?.title || "Case study image"} />
      </div>
      <div className="px-3 mt-3 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold">{data?.title}</h3>
        <p className="text-text-secondary text-base max-w-lg mt-3 flex-grow">
          {data?.description}
        </p>
      </div>
      <div className="flex justify-between items-center gap-20 px-3 mt-3 mb-4">
      <div className="flex gap-2 lg:gap-3   flex-wrap">
        {data?.tags.map((item, index) => (
          <div key={index} className="bg-[#C4C7CE33] text-text-secondary p-1 rounded-full text-sm inline-block lg:px-5 py-2">
            {item}
          </div>
        ))}
      </div>
      <div className="relative w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 flex-shrink-0">
        <Image src={nonhoverIcon} alt="Arrow icon" className="block group-hover:hidden transition-all duration-300" width={20} height={20}/>
        <Image src={arrow} alt="Arrow icon" className="hidden group-hover:block transition-all duration-300" width={20} height={20}/>
      </div>
      </div>
     
    </div>
  );
};

export default CaseStudyCard;
