import React, { useState, useEffect } from "react";
import { tabsData } from "./tabsData";
import Image from "next/image";
import serviceImage from "../../assets/images/service.webp";
import pythonSvg from "../../assets/svg/python.svg";
import PrimaryButton from "../PrimaryButton";
import arrowSvg from "../../assets/svg/arrow.svg";

const ServiceTabContent = ({ activeTab }) => {
  const [isVisible, setIsVisible] = useState(true);
  const currentTab = tabsData[activeTab];

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [activeTab]);

  if (!currentTab) return null;

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div
          key={activeTab}
          className={`flex flex-col lg:flex-row gap-8 md:gap-7 lg:gap-10 transition-opacity duration-300 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
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
                {currentTab.tools.logos.map((_, index) => (
                  <div
                    key={index}
                    className="bg-light-bg pt-2 pb-2 px-6 border-none rounded-lg flex flex-col items-center justify-center shadow-sm"
                  >
                    <Image
                      src={pythonSvg}
                      width={40}
                      height={40}
                      alt="Technology logo"
                    />
                    <div className="text-xs mt-1.5">Python</div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
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
