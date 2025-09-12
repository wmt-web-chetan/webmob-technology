
import React from 'react';
import { tabsData } from './tabsData';
import Image from 'next/image';
import serviceImage from "../../assets/images/service.webp"
import pythonSvg from "../../assets/svg/python.svg"

const ServiceTabContent = ({ activeTab }) => {
  const currentTab = tabsData[activeTab];

  if (!currentTab) return null;

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
          {/* Left side - Image */}
          <div className="flex justify-end">
             <Image src={serviceImage} width={450} height={500} priority />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-1">
                {currentTab.title}
              </h2>
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
                    className="px-3 py-1  text-text-secondary rounded-full text-sm border border-primary"
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
              <div className="flex flex-wrap  lg:gap-6">
                {currentTab.tools.logos.map((tool, index) => (
                  <div
                    key={index}
                    className=" bg-light-bg pt-2 pb-2 px-6 border-none rounded-lg flex flex-col items-center justify-center shadow-sm"
                  >
                    <Image src={pythonSvg} width={40} height={40}/>
                    <div className='text-xs mt-1.5'>Python</div>
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabContent;