"use client";
import React from "react";
import Image from "next/image";
import bulb from "@/assets/svg/bulb.svg?url";
import growthIcon from "@/assets/svg/growth.svg";
import efficiencyIcon from "@/assets/svg/meter.svg?url";
import PrimaryButton from "@/components/PrimaryButton";
import arrowSvg from "@/assets/svg/arrow.svg";

export default function IntelligenceReturn({
  mainTitle = "The Tangible Return on Intelligence",
  mainDescription = "Partnering with us isn't an expense; it's an investment in your competitive advantage. Our AI-augmented process delivers a measurable return across the three most critical areas of your business.",
  cards = [
    {
      icon: bulb,
      title: "Innovation: 3X More Time Spent on Strategic Features",
      description:
        "When your development partner isn’t bogged down by bugs and repetitive tasks, they can focus on what truly matters: building the innovative, game-changing features that will set you apart.",
    },
    {
      icon: growthIcon,
      title: "Growth: Up to 25% Increase in Conversion & Engagement",
      description:
        "Higher quality, faster-loading, and more intuitive products lead directly to happier users. Our process results in applications that perform better, leading to measurable increases in your most important growth metrics.",
    },
    {
      icon: efficiencyIcon,
      title: "Efficiency: Up to 40% Reduction in Development Timelines",
      description:
        "By automating code generation, testing, and project management, we eliminate friction and accelerate your time-to-market, allowing you to capture opportunities before your competition.",
    },
  ],
  ctaText = "See the Velocity in Action →",
}) {
  return (
    <section className="px-wrapper section-padding-y mx-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-6">
          <div className="space-y-4 max-w-3xl">
            <div className="h2-heading text-center sm:text-start leading-tight">
              {mainTitle.split(" ").map((word, index) =>
                word.toLowerCase() === "intelligence" ? (
                  <span
                    key={index}
                    className="text-gradient-primary font-semibold"
                  >
                    {word}{" "}
                  </span>
                ) : (
                  `${word} `
                )
              )}
            </div>
            <p className="h2-description max-w-2xl  text-center sm:text-start ">
              {mainDescription}
            </p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-3xl shadow-sm border border-text-disabled  hover:border-primary hover:shadow-lg hover:scale-102 transition-all duration-500 flex flex-col h-full">
          <div className="space-y-4 flex flex-col flex-grow">
            <div
              className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-[16px] bg-white "
              style={{ boxShadow: "0 0 9.9px 4px rgba(51, 95, 255, 0.24)" }}
            >
              <Image
                src={cards[0].icon}
                alt="Innovation Icon"
                width={32}
                height={32}
              />
            </div>

            <div className="space-y-2 mt-4">
              <h3 className="text-xl font-semibold">{cards[0].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {cards[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Smaller Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 md:mt-5">
        {cards.slice(1).map((card, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-3xl shadow-sm border border-text-disabled hover:border-primary hover:shadow-lg hover:scale-102 transition-all duration-500  flex flex-col h-full"
          >
            <div className="space-y-4 flex flex-col flex-grow">
              <div
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-[16px] bg-white"
                style={{ boxShadow: "0 0 9.9px 4px rgba(51, 95, 255, 0.24)" }}
              >
                <Image src={card.icon} alt="Card Icon" width={32} height={32} />
              </div>

              <div className="space-y-2 mt-4">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12">
        <PrimaryButton
          icon={arrowSvg}
          text="See the Velocity in Action"
          className="text-white bg-primary-button text-sm arrow-animate"
        />
      </div>
    </section>
  );
}
