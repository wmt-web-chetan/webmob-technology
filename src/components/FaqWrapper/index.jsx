"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import plusIconSvg from "@/assets/svg/plusIcon.svg";

const FaqWrapper = ({ leftColumnFaqs, rightColumnFaqs }) => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const handleToggle = (faqId) => {
    setOpenFaqId((prevId) => (prevId === faqId ? null : faqId));
  };

  return (
    <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
      {/* Left Column */}
      <div>
        {leftColumnFaqs?.map((faq) => (
          <FaqItem
            key={faq.id}
            faq={faq}
            isOpen={openFaqId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>

      {/* Right Column */}
      <div>
        {rightColumnFaqs?.map((faq) => (
          <FaqItem
            key={faq.id}
            faq={faq}
            isOpen={openFaqId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </div>
  );
};

const FaqItem = ({ faq, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`border border-gray-200 rounded-lg mb-3 sm:mb-4 transition-all duration-300 ease-in-out ${
        isOpen ? "bg-blue-50 border-blue-200" : "bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-start transition-colors duration-200 cursor-pointer ${
          isOpen ? "text-primary" : "text-gray-800"
        }`}
      >
        <span
          className={`pr-3 sm:pr-4 text-base sm:text-lg leading-snug sm:leading-relaxed ${
            isOpen ? "font-semibold" : "font-medium"
          }`}
        >
          {faq.question}
        </span>
        <div className="flex-shrink-0 mt-0.5 sm:mt-1">
          <Image
            src={plusIconSvg}
            alt=""
            className={`w-4 h-4 sm:w-4 sm:h-4 text-primary font-bold text-lg sm:text-xl transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          />
        </div>
      </button>

      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="px-4 sm:px-6 pb-3 sm:pb-4">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqWrapper;