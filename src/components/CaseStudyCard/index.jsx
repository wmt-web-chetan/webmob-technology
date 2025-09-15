import Image from "next/image";
import React from "react";
import arrow from "../../assets/svg/union.svg";

const CaseStudyCard = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-2 h-full flex flex-col w-full">
      <div className="flex justify-center">
        <Image src={data?.image} width={600} className="rounded-3xl" alt={data?.title || "Case study image"} />
      </div>
      <div className="px-3 mt-3 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold">{data?.title}</h3>
        <p className="text-text-secondary text-base max-w-lg mt-3 flex-grow">
          {data?.description}
        </p>
      </div>
      <div className="flex gap-3 mt-3 mb-4 flex-wrap">
        {data?.tags.map((item, index) => (
          <div key={index} className="bg-[#C4C7CE33] text-text-secondary p-1 rounded-full text-sm inline-block px-5 py-2">
            {item}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default CaseStudyCard;
