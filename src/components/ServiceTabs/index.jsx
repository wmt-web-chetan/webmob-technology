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
      <div className="flex flex-wrap justify-center gap-2 2xl:gap-8 px-4 py-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-2 py-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab
                ? 'text-primary'
                : 'text-gray-600 hover:text-secondary'
            }`}
          >
            {tab}
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-primary rounded-b-full transition-all duration-500 ease-in-out ${
              activeTab === tab ? 'w-1/2 opacity-100' : 'w-0 opacity-0'
            }`}></div>
          </button>
        ))}
      </div>
      <ServiceTabContent activeTab={activeTab} />
    </div>
  );
};

export default ServiceTabs;