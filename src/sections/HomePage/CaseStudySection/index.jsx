import CaseStudyCard from "@/components/CaseStudyCard";
import React from "react";
import vivaImage from "../../../assets/images/viva.jpg"
import stream from "../../../assets/images/stream.png"
import PrimaryButton from "@/components/PrimaryButton";
import arrowSvg from "../../../assets/svg/arrow.svg"
import VivaImg from "@/assets/svg/vivaImg.svg"
import MellyImg from "@/assets/svg/MellyImg.svg"
import LoImg from "@/assets/svg/LoImg.svg"
import LasavistaImg from "@/assets/svg/LaSavistaImg.svg"


const CaseStudySection = () => {
  const caseStudyData = [
    {
      id: 1,
      title: "BrockerAIQ",
      description: "Robust B2B/B2C eCommerce and POS Solution with Dynamic Pricing, Marketplace Integration, and Real-Time Inventory Sync.",
      tags: ["Bulk Return", "Multichannel", "My Wallet", "Pay Later"],
      image: LoImg,
      
    },
    {
      id: 2,
      title: "StreamBase",
      description: "Revolutionizing AV Distribution with Seamless, Scalable, and Ultra-Low Latency Video and Audio Over IP",
      tags: ["AV over IP", "IP  Based Routing", "Video-Wall Support"],
      image: VivaImg,
    },
    {
      id: 3,
      title: "Melly",
      description: "Melly is a mental and emotional wellness app that helps enhance one’s mental health.",
      tags: ["Categorized  Content ", "CBT Exercise", "Melly Coach AI"],
      image: MellyImg,
    },
    {
      id: 4,
      title: "La Savista",
      description: "La savista uses smart technology (Bluetooth and NFC) to create an invisible guide that helps users explore their surroundings independently.",
      tags: ["Voice Guide", "Digital Trail Guide", "Smart Object Recognition"],
      image: LasavistaImg,
    }
  ];

  return (
    <div className="bg-light-bg pt-14 pb-10 px-wrapper ">
      <div className="flex justify-center text-center mb-8 xl:mb-12">
        <h2 className="h2-heading">
          Our Work is{" "}
          <span className="text-gradient-primary font-bold">Our Proof.</span>
           Analyze the Unredacted{" "}
          <span className="text-gradient-primary font-bold">Evidence.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 md:gap-4 xl:gap-4 2xl:gap-6 mx-auto items-stretch">
        {caseStudyData.map((study, caseStudyIndex) => (
          <div key={caseStudyIndex} className="flex">
             <CaseStudyCard data={study}/>
            </div>
        ))}
      </div>
       <div className="flex justify-center mt-12">
        <PrimaryButton
          icon={arrowSvg}
          text="View All Case Studies "
          className="text-white bg-primary-button text-sm arrow-animate"
        />
      </div>
     
    </div>
  );
};

export default CaseStudySection;
