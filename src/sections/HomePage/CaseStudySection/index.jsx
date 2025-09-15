import CaseStudyCard from "@/components/CaseStudyCard";
import React from "react";
import vivaImage from "../../../assets/images/viva.jpg"

const CaseStudySection = () => {
  const caseStudyData = [
    {
      id: 1,
      title: "Vive Wireless",
      description: "Robust B2B/B2C eCommerce and POS Solution with Dynamic Pricing, Marketplace Integration, and Real-Time Inventory Sync.",
      tags: ["UX Design", "Webdesign", "App Store", "Post Card"],
      image: vivaImage,
      
    },
    {
      id: 2,
      title: "StreamBase",
      description: "StreamBase is a real-time analytics and decision engine that helps companies build applications that can process massive amounts of streaming data.",
      tags: ["Email Design", "Event Friendly", "Web API Support"],
      image: vivaImage,
    },
    {
      id: 3,
      title: "Melly",
      description: "Let's cooking for a bit. Feel free to explore those great cooking blog pages and those recipes and those tasty photos.",
      tags: ["Impressive Sound", "VR Content", "Web Control"],
      image: vivaImage,
    },
    {
      id: 4,
      title: "La Savista",
      description: "La Savista wants to be the ultimate place for cryptocurrency trades with an easy-to-use and complete trading software solution.",
      tags: ["Voice Studio", "Travel Tool Design", "Chart Report Navigation"],
      image: vivaImage,
    }
  ];

  return (
    <div className="bg-light-bg section-padding-y px-wrapper">
      <div className="flex justify-center text-center mb-12">
        <h2 className="h2-heading">
          Our Work is{" "}
          <span className="text-gradient-primary font-bold">Our Proof.</span>
          Analyze the Unredacted{" "}
          <span className="text-gradient-primary font-bold">Evidence.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto items-stretch">
        {caseStudyData.map((study, caseStudyIndex) => (
          <div key={caseStudyIndex} className="flex">
             <CaseStudyCard data={study}/>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudySection;
