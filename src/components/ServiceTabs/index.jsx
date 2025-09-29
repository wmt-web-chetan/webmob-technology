'use client';
import React, { useState } from 'react';
import ServiceTabContent from './ServiceTabContent';

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState('AI & LM');
  
  const tabs = [
    'AI & LM',
    'Web',
    'Mobile',
    'UI/UX',
    'QA',
    'DevOps',
    'Blockchain Development',
    'IOT'
  ];

  return (
    <div className="w-full bg-white">
      {/* Fixed mobile scrolling container with blur shadows */}
      <div className="relative">
        {/* Left blur shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* Right blur shadow */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="overflow-x-auto overflow-y-hidden px-4 py-6 scrollbar-hide">
          <div className="flex justify-center gap-2 md:gap-4 2xl:gap-8 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-3 md:px-4 py-2 text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-200 flex-shrink-0 ${
                activeTab === tab
                  ? 'text-primary'
                  : 'text-text-primary hover:text-secondary'
              }`}
            >
              {tab}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-primary rounded-b-full transition-all duration-500 ease-in-out ${
                activeTab === tab ? 'w-1/2 opacity-100' : 'w-0 opacity-0'
              }`}></div>
            </button>
          ))}
          </div>
        </div>
      </div>
      <ServiceTabContent activeTab={activeTab} />
    </div>
  )
};

export default ServiceTabs;