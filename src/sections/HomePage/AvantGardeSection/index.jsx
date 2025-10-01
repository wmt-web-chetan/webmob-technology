import Image from "next/image";
import topleftImg from "@/assets/svg/topleft.svg";
import toprightImg from "@/assets/svg/topright.svg";
import bottomleftImg from "@/assets/svg/bottomleft.svg";
import bottomrightImg from "@/assets/svg/bottomright.svg";
import chatgptImg from "@/assets/svg/chatgpt.svg";
import metaImg from "@/assets/svg/meta.svg";
import cursorImg from "@/assets/svg/cursor.svg";
import claudeImg from "@/assets/svg/claude.svg";
import perplexityImg from "@/assets/svg/perplexity.svg";
import copilotImg from "@/assets/svg/copilot.svg";
import azureImg from "@/assets/svg/azure.svg";
import geminiImg from "@/assets/svg/gemini.svg";
import vertexImg from "@/assets/svg/vertex.svg";
import awsbedrockImg from "@/assets/svg/awsbedrock.svg";
import qodoImg from "@/assets/svg/qodo.svg";
import tensorflowImg from "@/assets/svg/tensorflow.svg";

import styles from "./AvantGardeSection.module.css";

const AvantGardeSection = () => {
  const services = [
    {
      name: "OpenAI",
      description: "GPT-3, Codex, Embeddings, DALL-E, Whisper",
      icon: chatgptImg,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Meta",
      description: "LLaMA 2, Segment, BlenderBot, Detection, VoE ",
      icon: metaImg,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Cursor",
      description: "AI Code Completion, Workflow Automation",
      icon: cursorImg,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Claude",
      description: "Opus 2.1, Sonnet, Memory, RLHF, Safety",
      icon: claudeImg,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Perplexity",
      description: "Sonar, Embeddings, Search, Contextualization, Retrieval",
      icon: perplexityImg,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Co-pilot",
      description: "GitHub Copilot X, Chat, Labs, Voice for Business",
      icon: copilotImg,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Microsoft Azure",
      description: "Cognitive, Synapse, Databricks, OpenAI",
      icon: azureImg,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Gemini",
      description: "Gemini 2.5, Deep Think, Flash, Lite, Pipelines",
      icon: geminiImg,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Google Vertex AI",
      description: "Model Garden, Palm2, Flash-Lite Feature Store",
      icon: vertexImg,
      gradient: "from-green-500 to-teal-600",
    },
    {
      name: "AWS Bedrock",
      description: "Model APIs, LangOps, Fine-tuning, SageMaker",
      icon: awsbedrockImg,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Qodo",
      description: "Merge AI Builder, AutoML, Integration Hub",
      icon: qodoImg,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "TensorFlow",
      description: "Deep Learning Framework, AutoML, Model Deployment",
      icon: tensorflowImg,
      gradient: "from-blue-400 to-blue-600",
    },
  ];

  return (
    <div className="relative px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32 py-12 md:py-16 lg:py-20 bg-dark-bg overflow-hidden">
      {/* Corner SVGs */}
      <div className="absolute top-0 left-0 pointer-events-none z-0">
        <Image
          src={topleftImg || "/placeholder.svg"}
          alt=""
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-72 opacity-30"
        />
      </div>

      <div className="absolute top-0 right-0 pointer-events-none z-0">
        <Image
          src={toprightImg || "/placeholder.svg"}
          alt=""
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-72 opacity-30"
        />
      </div>

      <div className="absolute bottom-0 left-0 pointer-events-none z-0">
        <Image
          src={bottomleftImg || "/placeholder.svg"}
          alt=""
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-72 opacity-30"
        />
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none z-0">
        <Image
          src={bottomrightImg || "/placeholder.svg"}
          alt=""
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-72 opacity-30"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-wrapper ">
        {/* Header Section */}
        <div className="flex justify-center">
          <h2 className="h2-heading  text-center text-white">
            The Arsenal of the{" "}
            <span className="font-semibold text-white">
              Avant-Garde
            </span>
          </h2>
        </div>

        <div className="flex justify-center mt-4 md:mt-6 h2-description">
          <p className=" text-white text-center  leading-relaxed px-4">
            We are masters of the foundational technologies that power the
            intelligent future. Our expertise runs deep across the entire
            next-generation ecosystem.
          </p>
        </div>

        {/* Cards Grid - With Glow Effect */}
        <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-7xl sm:max-[72%] mx-auto px-2 md:px-4">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" style={{ backgroundColor: '#335FFF3D' }}></div>
              
              {/* Main Card */}
              <div
                className={`group ${styles.cardWithAnimatedBorder} relative rounded-xl md:rounded-2xl lg:rounded-[24px] pt-3 md:pt-4 lg:pt-6 pb-5 md:pb-6 lg:pb-7 px-3 md:px-4 lg:px-6 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-blue-500/40 z-20 bg-dark-bg/80 backdrop-blur-sm border border-white/55 hover:border-white/30 h-full`}
                style={{
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.3), inset -10px -10px 20px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={service.icon}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>

                  {/* Service Name */}
                  <h3 className="text-xs md:text-sm lg:text-2xl xl:text-2xl font-medium text-white mb-1 md:mb-2 lg:mb-3  transition-all duration-300 line-clamp-1">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[9px] md:text-xs lg:text-lg text-light-bg leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-2 md:line-clamp-3 flex-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvantGardeSection;