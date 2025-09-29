import React from "react";
import Image from "next/image";
import dummySvg from "../../assets/svg/Group.svg";
import codeswap from "../../assets/svg/chatgpt.svg";
import github from "../../assets/svg/github.svg";
import harbor from "../../assets/svg/harbor.svg";
import copilot from "../../assets/svg/copilot.svg";
import bullet from "../../assets/svg/bullet.svg";
import framer from "../../assets/svg/Framer.svg";

const cards = [
  {
    id: 1,
    title: "AI-Powered Code Augmentation",
    description:
      "Our developers don't start from a blank page. They leverage intelligent assistants that can generate entire code blocks, suggest algorithms, and translate natural language into functional code, turning hours of work into minutes.",
    features: [
      "Accelerates boilerplate and complex function creation.",
      "Ensures adherence to best practices and coding standards.",
      "Reduces cognitive load, freeing developers for strategic problem-solving.",
    ],
    icons: [github, copilot, codeswap, harbor],
  },
  {
    id: 2,
    title: "Intelligent Testing & Quality Assurance",
    description:
      "AI-driven testing frameworks automatically generate test cases, identify edge cases, and perform continuous quality checks throughout the development process.",
    features: [
      "Automated test case generation and execution.",
      "Real-time code quality monitoring and suggestions.",
      "Predictive bug detection before deployment.",
    ],
    icons: [copilot, harbor, github, codeswap],
  },
  {
    id: 3,
    title: "Smart Project Management",
    description:
      "Advanced algorithms analyze project complexity, team capacity, and historical data to optimize resource allocation and predict delivery timelines with unprecedented accuracy.",
    features: [
      "Predictive timeline estimation and resource optimization.",
      "Intelligent task prioritization and dependency mapping.",
      "Real-time progress tracking and bottleneck identification.",
    ],
    icons: [codeswap, github, copilot, harbor],
  },
  {
    id: 4,
    title: "Automated DevOps Pipeline",
    description:
      "Self-managing CI/CD pipelines that automatically optimize deployment strategies, manage infrastructure scaling, and ensure security compliance across all environments.",
    features: [
      "Zero-downtime deployments with intelligent rollback.",
      "Automated infrastructure scaling and cost optimization.",
      "Continuous security scanning and compliance monitoring.",
    ],
    icons: [harbor, codeswap, copilot, github],
  },
];

const AiPoweredRightSection = () => {
  return (
    <div className="relative">
      <div>
        <div>
          <div className="py-0 sm:py-8">
            {cards.map((card, index) => {
              const stickyPositions = ["top-26", "top-30", "top-34", "top-38"];
              return (
                <div
                  key={card.id}
                  className={`border sticky ${stickyPositions[index]} hover:shadow-2xl border-text-disabled rounded-2xl px-2.5 md:px-4 lg:px-7 xl:px-8 py-6 space-y-6 mb-4 bg-white h-auto`}
                >
                  <div className="flex gap-3.5 items-center">
                    <div className="bg-light-bg inline-block py-4 px-4 rounded-2xl">
                      <Image
                        src={dummySvg}
                        alt="Card Image"
                        width={40}
                        className=""
                      />
                    </div>
                    <h3 className="text-xl sm:text-3xl font-semibold">{card.title}</h3>
                  </div>
                  <p className="text-text-secondary text-sm sm:text-lg ">
                    {card.description}
                  </p>
                  <div className="space-y-3">
                    {card.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex gap-3 items-start"
                      >
                        <Image
                          src={bullet}
                          width={10}
                          alt="bullet"
                          className="mt-1"
                        />
                        <div className="text-text-secondary text-sm sm:text-lg ">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 lg:gap-8 flex-wrap">
                    {card.icons.map((icon, iconIndex) => (
                      <Image
                        src={icon}
                        alt="icon"
                        width={40}
                        className="inline-block "
                        key={iconIndex}
                      />
                    ))}
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPoweredRightSection;