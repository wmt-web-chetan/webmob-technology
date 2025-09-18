"use client"
import React, { useState } from 'react';

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={`border border-gray-200 rounded-lg mb-3 sm:mb-4 transition-all duration-200 ${isOpen ? 'bg-blue-50 border-blue-200' : 'bg-white'}`}>
      <button
        onClick={toggleOpen}
        className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-start transition-colors duration-200 cursor-pointer ${isOpen ? 'text-primary' : 'text-gray-800'}`}
      >
        <span className={`pr-3 sm:pr-4 text-base sm:text-lg leading-snug sm:leading-relaxed ${isOpen ? 'font-semibold' : 'font-medium'}`}>{faq.question}</span>
        <div className="flex-shrink-0 mt-0.5 sm:mt-1">
          {isOpen ? (
            <span className="w-4 h-4 sm:w-5 sm:h-5 text-primary font-bold text-lg sm:text-xl">×</span>
          ) : (
            <span className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 font-normal text-lg sm:text-xl">+</span>
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-3 sm:pb-4">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;