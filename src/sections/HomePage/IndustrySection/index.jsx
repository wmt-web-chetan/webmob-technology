"use client";
import Image from "next/image";
import React, { useState } from "react";
import bullet from "../../../assets/svg/bullet.svg";
import honeywell from "../../../assets/svg/honeywell.svg";
import PrimaryButton from "@/components/PrimaryButton";
import section from "../../../assets/images/section.jpg";

// Import black and white SVGs for each industry
import homeBlack from "../../../assets/svg/homeblack.svg";
import homeWhite from "../../../assets/svg/homewhite.svg";
import fintechBlack from "../../../assets/svg/fintechblack.svg";
import fintechWhite from "../../../assets/svg/fintechwhite.svg";
import logisticsBlack from "../../../assets/svg/logisticsblack.svg";
import logisticsWhite from "../../../assets/svg/logisticswhite.svg";
import edtechBlack from "../../../assets/svg/Edtechblack.svg";
import edtechWhite from "../../../assets/svg/Edtechwhite.svg";
import healthcareBlack from "../../../assets/svg/Healthcareblack.svg";
import healthcareWhite from "../../../assets/svg/Healthcarewhite.svg";
import entertainmentBlack from "../../../assets/svg/Entertainmentblack.svg";
import entertainmentWhite from "../../../assets/svg/Entertainmentwhite.svg";
import sportBlack from "../../../assets/svg/sportblack.svg";
import sportWhite from "../../../assets/svg/sportwhite.svg";
import ecommerceBlack from "../../../assets/svg/Ecommerceblack.svg";
import ecommerceWhite from "../../../assets/svg/Ecommercewhite.svg";
import arrowSvg from "../../../assets/svg/arrow.svg"

const IndustrySection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [expandedIndustry, setExpandedIndustry] = useState(0); // Track which industry is expanded (only one at a time)

  const industries = [
    {
      name: "Real Estate",
      title: "Real Estate & PropTech",
      description:
        "We're digitizing the property lifecycle, from immersive AR-powered virtual tours to AI-driven platforms that optimize property management and predict market trends.",
      features: [
        "AI-driven property valuation models",
        "IoT for intelligent building management",
        "VR/AR for immersive property showcases",
        "Predictive analytics for investment opportunities",
      ],
      work: "We built a platform that reduced commercial property closing times by 30%.",
      buttonText: "Explore Our PropTech Solutions",
      image: section,
      iconBlack: homeBlack,
      iconWhite: homeWhite,
    },
    {
      name: "FinTech",
      title: "Financial Technology",
      description:
        "Revolutionizing financial services with blockchain, AI-powered fraud detection, and seamless digital payment solutions that ensure security and compliance.",
      features: [
        "Blockchain-based secure transactions",
        "AI-powered fraud detection systems",
        "Real-time payment processing",
        "Regulatory compliance automation",
      ],
      work: "We developed a payment system that processes 1M+ transactions daily with 99.99% uptime.",
      buttonText: "Explore Our FinTech Solutions",
      image: section,
      iconBlack: fintechBlack,
      iconWhite: fintechWhite,
    },
    {
      name: "Logistics",
      title: "Supply Chain & Logistics",
      description:
        "Optimizing supply chains with IoT tracking, predictive analytics, and automated warehouse management systems for maximum efficiency.",
      features: [
        "Real-time shipment tracking",
        "Predictive demand forecasting",
        "Automated warehouse management",
        "Route optimization algorithms",
      ],
      work: "We created a logistics platform that reduced delivery times by 40%.",
      buttonText: "Explore Our Logistics Solutions",
      image: section,
      iconBlack: logisticsBlack,
      iconWhite: logisticsWhite,
    },
    {
      name: "EdTech",
      title: "Educational Technology",
      description:
        "Transforming education with personalized learning platforms, virtual classrooms, and AI-driven assessment tools.",
      features: [
        "Personalized learning algorithms",
        "Virtual classroom platforms",
        "Automated assessment systems",
        "Student progress analytics",
      ],
      work: "We built an e-learning platform serving 500K+ students globally.",
      buttonText: "Explore Our EdTech Solutions",
      image: section,
      iconBlack: edtechBlack,
      iconWhite: edtechWhite,
    },
    {
      name: "Healthcare",
      title: "Healthcare Technology",
      description:
        "Advancing healthcare with telemedicine platforms, AI diagnostics, and secure patient data management systems.",
      features: [
        "Telemedicine platforms",
        "AI-powered diagnostics",
        "Secure patient data management",
        "Real-time health monitoring",
      ],
      work: "We developed a telehealth platform used by 100+ healthcare providers.",
      buttonText: "Explore Our HealthTech Solutions",
      image: section,
      iconBlack: healthcareBlack,
      iconWhite: healthcareWhite,
    },
    {
      name: "Entertainment",
      title: "Media & Entertainment",
      description:
        "Creating immersive entertainment experiences with streaming platforms, content management, and audience analytics.",
      features: [
        "High-performance streaming platforms",
        "Content management systems",
        "Audience analytics and insights",
        "Interactive media experiences",
      ],
      work: "We built a streaming platform handling 10M+ concurrent users.",
      buttonText: "Explore Our Entertainment Solutions",
      image: section,
      iconBlack: entertainmentBlack,
      iconWhite: entertainmentWhite,
    },
    {
      name: "Sports",
      title: "Sports Technology",
      description:
        "Enhancing sports experiences with performance analytics, fan engagement platforms, and live streaming solutions.",
      features: [
        "Athlete performance analytics",
        "Fan engagement platforms",
        "Live streaming solutions",
        "Sports betting platforms",
      ],
      work: "We created a sports analytics platform used by professional teams.",
      buttonText: "Explore Our Sports Solutions",
      image: section,
      iconBlack: sportBlack,
      iconWhite: sportWhite,
    },
    {
      name: "E-commerce",
      title: "E-commerce Solutions",
      description:
        "Powering online retail with scalable platforms, AI recommendations, and seamless payment integrations.",
      features: [
        "Scalable e-commerce platforms",
        "AI-powered product recommendations",
        "Seamless payment integrations",
        "Inventory management systems",
      ],
      work: "We built an e-commerce platform processing $50M+ in annual sales.",
      buttonText: "Explore Our E-commerce Solutions",
      image: section,
      iconBlack: ecommerceBlack,
      iconWhite: ecommerceWhite,
    },
  ];

  const toggleIndustryExpansion = (index) => {
    if (expandedIndustry === index) {
      setExpandedIndustry(-1); // Close if clicking the same one
      // Don't reset activeIndustry to -1, keep it at current index for tablet/desktop view
      // Only the mobile view should not show active state when closed
    } else {
      setExpandedIndustry(index); // Open the clicked one
      setActiveIndustry(index); // Set active state when opening
    }
  };
  

  return (
    <div className="px-wrapper section-padding-y">
      <div className="flex justify-center   ">
        <h2 className="h2-heading  text-center">
          Fluent in the Language of Your{" "}
          <span className="font-bold text-gradient-custom">
            Industry's Code
          </span>{" "}
        </h2>
      </div>
      <div className="flex justify-center mt-3">
        <p className="h2-description lg:max-w-3xl  xl:max-w-4xl  2xl:max-w-5xl 3xl:max-w-7xl text-center">
          Technology is universal, but its application must be specific to be
          effective. We bring deep domain expertise to every project, ensuring
          your solution is not just technically brilliant, but perfectly aligned
          with the unique challenges and opportunities of your vertical.
        </p>
      </div>
      <div className=" rounded-2xl  p-2  md:p-3 md:py-4 mt-8 ">
        {/* Mobile Accordion - Only visible on small screens */}
        <div className="md:hidden">
          <div className="bg-light-bg rounded-xl p-2 space-y-1">
            {industries.map((industry, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                {/* Accordion Header */}
                <button
               className={`w-full flex items-center justify-between p-3 rounded-t-lg rounded-b-0  transition-all duration-200 ${
                expandedIndustry === index
                  ? 'bg-white shadow-sm  ' 
                  : ''
              }`}
                  onClick={() => toggleIndustryExpansion(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      expandedIndustry === index ? 'bg-primary' : ''
                    }`}>
                      <Image
                        src={expandedIndustry === index ? industry.iconWhite : industry.iconBlack}
                        width={18}
                        alt={`${industry.name} industry icon`}
                      />
                    </div>
                    <span className={`font-medium text-left ${
                      expandedIndustry === index ? 'text-text-secondary' : 'text-gray-600'
                    }`}>
                      {industry.name}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      expandedIndustry === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all bg-white rounded-b-lg duration-300 ease-in-out ${
                  expandedIndustry === index 
                    ? 'max-h-[1000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-2 bg-white/50 rounded-b-lg mx-3 mb-2">
                    {/* Industry Image */}
                    <div className="mb-4">
                      <Image
                        src={industry.image}
                        width={300}
                        alt={`${industry.title} industry showcase image`}
                        className="w-full aspect-[4/3] object-cover rounded-lg"
                      />
                    </div>

                    <h4 className="font-semibold text-text-secondary mb-2 text-base">
                      {industry.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    {/* All Features */}
                    <div className="mb-4">
                      {industry.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2 mb-2">
                          <Image
                            src={bullet}
                            width={8}
                            alt="Feature bullet point"
                            className="mt-1 flex-shrink-0"
                          />
                          <span className="text-sm text-gray-600 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Our Work */}
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <span className="text-sm text-gray-500 font-semibold min-w-fit">
                          Our Work:
                        </span>
                        <span className="text-sm text-gray-600">{industry.work}</span>
                      </div>
                    </div>

                    {/* Company Logos */}
                    <div className="mb-4">
                      <div className="flex gap-2 flex-wrap">
                        {[1, 2, 3, 4].map((item, logoIndex) => (
                          <div
                            key={logoIndex}
                            className="border p-2 px-3 border-red-600 rounded-full"
                          >
                            <Image
                              src={honeywell}
                              width={50}
                              height={20}
                              alt="Honeywell partner company logo"
                              className="w-12"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-4">
                      <PrimaryButton
                        icon={arrowSvg}
                        text={industry.buttonText}
                        className="text-white bg-primary-button text-xs sm:text-sm py-2 px-4 transition-all duration-300 arrow-animate w-full sm:w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Tab Bar - Visible on md to lg screens */}
        <div className="hidden md:block xl:hidden mb-4 relative">
          {/* Left white overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          {/* Right white overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          <div
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 p-2 px-3 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeIndustry === index
                    ? "bg-primary text-white shadow-sm"
                    : "bg-light-bg text-text-secondary hover:bg-gray-200"
                }`}
                onClick={() => setActiveIndustry(index)}
              >
                <div
                  className={`p-1 rounded-lg ${
                    activeIndustry === index ? "bg-white/20" : "bg-white"
                  }`}
                >
                  <Image
                    src={
                      activeIndustry === index
                        ? industry.iconWhite
                        : industry.iconBlack
                    }
                    width={16}
                    alt={`${industry.name} industry icon`}
                    className=""
                  />
                </div>
                <div className={`text-sm font-medium`}>{industry.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 md:gap-4 xl:gap-4 2xl:gap-7 3xl:gap-10 2xl:min-h-[300px] ">
          {/* Tab Section - Only visible on XL+ screens */}
          <div className=" hidden xl:block xl:col-span-2 2xl:col-span-2">
            <div className="bg-light-bg p-2 h-full flex flex-col xl:gap-2 2xl:gap-3 rounded-2xl">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                    activeIndustry === index
                      ? "bg-white "
                      : "bg-transparent hover:bg-white/50"
                  }`}
                  onClick={() => setActiveIndustry(index)}
                >
                  <div
                    className={`p-1 rounded-lg ${
                      activeIndustry === index ? "bg-primary" : ""
                    }`}
                  >
                    <Image
                      src={
                        activeIndustry === index
                          ? industry.iconWhite
                          : industry.iconBlack
                      }
                      width={20}
                      alt={`${industry.name} industry icon`}
                      className=""
                    />
                  </div>
                  <div
                    className={`text-base ${
                      activeIndustry === index
                        ? "text-text-secondary font-medium"
                        : "text-text-secondary"
                    }`}
                  >
                    {industry.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Content Section - Hidden on mobile, visible on tablet and desktop */}
          <div className="hidden md:flex md:col-span-1 lg:col-span-6 xl:col-span-5 order-2 md:order-1 xl:order-1 flex-col justify-between">
            <div
              className="transition-all duration-500 ease-in-out opacity-100 animate-fade-in"
              key={`content-${activeIndustry}`}
            >
              <div>
                <h3 className="text-xl mt-4 md:mt-0 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl font-semibold transition-all duration-300">
                  {industries[activeIndustry].title}
                </h3>
              </div>
              <p className="text-sm md:text-md 2xl:text-lg text-text-secondary mt-3 transition-all duration-300">
                {industries[activeIndustry].description}
              </p>
              <div className="mt-4">
                {industries[activeIndustry].features.map((feature, index) => {
                  return (
                    <div
                      key={index}
                      className="flex gap-2 md:gap-5 mb-3 transition-all duration-300"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Image
                        src={bullet}
                        width={10}
                        alt="Feature bullet point"
                      />
                      <div className="text-text-secondary text-sm md:text-md 2xl:text-lg">
                        {feature}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex mt-6 transition-all duration-300">
                <span className="font-semibold text-sm md:text-md 2xl:text-lg inline-block w-40 md:w-22 lg:w-20 2xl:w-42 3xl:w-28">
                  Our Work:
                </span>
                <div className="text-sm md:text-md 2xl:text-lg">
                  {industries[activeIndustry].work}
                </div>
              </div>
              <div className="flex gap-2 md:gap-3 mt-4 flex-wrap transition-all duration-300">
                {[1, 2, 3, 4].map((item, index) => (
                  <div
                    key={index}
                    className="border p-2 md:p-3 px-3 md:px-4 border-red-600 rounded-full"
                  >
                    <Image
                      src={honeywell}
                      width={60}
                      height={24}
                      alt="Honeywell partner company logo"
                      className="md:w-20 xl:w-20 2xl:w-20 3xl:w-22"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <PrimaryButton
                icon ={arrowSvg}
                  text={industries[activeIndustry].buttonText}
                  className="text-white bg-primary-button text-md py-3 transition-all duration-300 arrow-animate"
                />
              </div>
            </div>
          </div>
          
          {/* Image Section - Hidden on mobile, visible on tablet and desktop */}
          <div className="hidden md:block md:col-span-1 lg:col-span-6 xl:col-span-5 order-1 md:order-2 xl:order-2 xl:h-full">
            <div
              className="transition-all duration-500 ease-in-out opacity-100 animate-fade-in w-full xl:h-full"
              key={`image-${activeIndustry}`}
            >
              <Image
                src={industries[activeIndustry].image}
                width={300}
                alt={`${industries[activeIndustry].title} industry showcase image`}
                className="w-full aspect-square md:aspect-[4/3] xl:h-full xl:aspect-auto object-cover rounded-2xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;