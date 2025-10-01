import React from "react";
import { tabsData } from "./tabsData";
import Image from "next/image";
import serviceImage from "../../assets/images/service.webp";
import pythonSvg from "../../assets/svg/python.svg";
import tensorflowSvg from "../../assets/svg/tensorflowImg.svg";
import pytorchSvg from "../../assets/svg/pytorchImg.svg";
import scikitSvg from "../../assets/svg/Scikit-learn.svg";
import openAiSvg from "../../assets/svg/OpenAI.svg";
import PrimaryButton from "../PrimaryButton";
import arrowSvg from "../../assets/svg/arrow.svg";

const ServiceTabContent = ({ activeTab }) => {
  const currentTab = tabsData[activeTab];

  if (!currentTab) return null;

  const tools = [
    { icon: pythonSvg, name: "Python" },
    { icon: tensorflowSvg, name: "TensorFlow" },
    { icon: pytorchSvg, name: "PyTorch" },
    { icon: scikitSvg, name: "Scikit-learn" },
    { icon: openAiSvg, name: "OpenAI API" },
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-7 lg:gap-10">
          {/* Left side - Image */}
          <div className="flex lg:justify-end lg:w-2/5">
            <Image
              src={serviceImage}
              width={450}
              height={500}
              priority
              alt="Service demonstration image"
              className="w-full aspect-square object-cover rounded-2xl"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 lg:w-3/5">
            <div>
              <h2 className="text-lg font-semibold mb-1">{currentTab.title}</h2>
              <p className="text-text-secondary text-base leading-relaxed">
                {currentTab.description}
              </p>
            </div>

            {/* Projects Section */}
            <div>
              <h3 className="text-lg font-semibold mb-1">
                {currentTab.projects.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {currentTab.projects.items.map((project, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-text-secondary rounded-full text-base border border-primary"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {currentTab.tools.title}
              </h3>
              <p className="text-text-secondary text-base mb-4">
                {currentTab.tools.description}
              </p>
              <div className="flex flex-wrap gap-4 lg:gap-6">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-light-bg pt-2 pb-2 px-6  rounded-lg flex flex-col items-center justify-center shadow-sm hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-500 cursor-pointer"
                  >
                    <Image
                      src={tool.icon}
                      width={40}
                      height={40}
                      alt={`${tool.name} technology logo`}
                    />
                    <div className="text-xs mt-1.5">{tool.name}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex sm:block justify-center">
                <PrimaryButton
                  icon={arrowSvg}
                  text="Explore Our AI Capabilities"
                  className="text-white bg-primary-button text-sm arrow-animate"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabContent;