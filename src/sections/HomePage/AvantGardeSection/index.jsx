import Image from "next/image";
import topleftImg from "@/assets/svg/topleft.svg";
import toprightImg from "@/assets/svg/topright.svg";
import bottomleftImg from "@/assets/svg/bottomleft.svg";
import bottomrightImg from "@/assets/svg/bottomright.svg";
import chatgptImg from "@/assets/svg/chatgpt.svg";
import styles from "./AvantGardeSection.module.css";

const AvantGardeSection = () => {
  const services = [
    {
      name: "OpenAI",
      description: "GPT-3, Codex, Embeddings, DALL-E, Whisper",
      icon: chatgptImg,
      gradient: "from-green-400 to-emerald-500",
    },
    {
      name: "Meta",
      description: "LLaMA 2, Segment, BlenderBot, Detection, VoE ",
      icon: chatgptImg,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Cursor",
      description: "AI Code Completion, Workflow Automation",
      icon: chatgptImg,
      gradient: "from-purple-400 to-indigo-500",
    },
    {
      name: "Claude",
      description: "Opus 2.1, Sonnet, Memory, RLHF, Safety",
      icon: chatgptImg,
      gradient: "from-orange-400 to-red-500",
    },
    {
      name: "Perplexity",
      description: "Sonar, Embeddings, Search, Contextualization, Retrieval",
      icon: chatgptImg,
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      name: "Co-pilot",
      description: "GitHub Copilot X, Chat, Labs, Voice for Business",
      icon: chatgptImg,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Microsoft Azure",
      description: "Cognitive, Synapse, Databricks, OpenAI",
      icon: chatgptImg,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Gemini",
      description: "Gemini 2.5, Deep Think, Flash, Lite, Pipelines",
      icon: chatgptImg,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      name: "Google Vertex AI",
      description: "Model Garden, Palm2, Flash-Lite Feature Store",
      icon: chatgptImg,
      gradient: "from-green-500 to-teal-600",
    },
    {
      name: "AWS Bedrock",
      description: "Model APIs, LangOps, Fine-tuning, SageMaker",
      icon: chatgptImg,
      gradient: "from-orange-400 to-red-600",
    },
    {
      name: "Qodo",
      description: "Merge AI Builder, AutoML, Integration Hub",
      icon: chatgptImg,
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      name: "TensorFlow",
      description: "Deep Learning Framework, AutoML, Model Deployment",
      icon: chatgptImg,
      gradient: "from-amber-400 to-yellow-600",
    },
  ];

  return (
    <div className="relative px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32 py-16 bg-dark-bg overflow-hidden">
      {/* Corner SVGs */}
      <div className="absolute top-0 left-0 pointer-events-none z-0">
        <Image
          src={topleftImg || "/placeholder.svg"}
          alt=""
          className="w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[20rem] xl:h-[18rem] opacity-30"
        />
      </div>

      <div className="absolute top-0 right-0 pointer-events-none z-0">
        <Image
          src={toprightImg || "/placeholder.svg"}
          alt=""
          className="w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[20rem] xl:h-[18rem] opacity-30"
        />
      </div>

      <div className="absolute bottom-0 left-0 pointer-events-none z-0">
        <Image
          src={bottomleftImg || "/placeholder.svg"}
          alt=""
          className="w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[20rem] xl:h-[18rem] opacity-30"
        />
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none z-0">
        <Image
          src={bottomrightImg || "/placeholder.svg"}
          alt=""
          className="w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[20rem] xl:h-[18rem] opacity-30"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-center text-white max-w-6xl leading-tight">
            The Arsenal of the{" "}
            <span className="font-bold text-gradient-primary bg-clip-text text-transparent">
              Avant-Garde
            </span>
          </h2>
        </div>

        <div className="flex justify-center mt-6">
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl leading-relaxed">
            We are masters of the foundational technologies that power the
            intelligent future. Our expertise runs deep across the entire
            next-generation ecosystem.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${styles.cardWithAnimatedBorder} relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-purple-500/20 z-20 bg-dark-bg/80 backdrop-blur-sm border border-white/55 hover:border-white/30`}
              style={{
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.3), inset -10px -10px 20px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >

                  {/* Invisible corner squares behind the card content */}
              {/* <div className="absolute top-0 right-0 w-4 h-4 bg-dark-bg rounded-sm -z-10"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-dark-bg rounded-sm -z-10"></div> */}
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${service.gradient}`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center  text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt=""
                    className="w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[20rem] xl:h-[18rem] "
                  />
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvantGardeSection;