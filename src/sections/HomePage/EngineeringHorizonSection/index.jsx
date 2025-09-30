import ServicesCarousel from "@/components/ServicesCarousel";

const EngineeringHorizonSection = () => {
  const services = [
    {
      icon: "web3",
      title: "Web3 & Decentralized Finance (DeFi)",
      description:
        "We build the next generation of financial applications on the blockchain. Our expertise in smart contracts and decentralized protocols allows us to create secure, transparent, and efficient DeFi platforms.",
      buttonText: "Explore Generative AI",
      buttonHref: "/services/web3",
    },
    {
      icon: "autonomious",
      title: "Autonomous AI Agent Development",
      description:
        "We design and deploy intelligent, autonomous AI agents that act as a digital workforce for your business, handling complex tasks like customer support, market analysis, and workflow management 24/7",
      buttonText: "Discover AI Agent",
      buttonHref: "/services/autonomious",
    },
    {
      icon: "code",
      title: "Generative AI Development & Consulting",
      description:
        "We build and fine-tune systems that create. From generating hyper-personalized user experiences to automating content creation, we help you leverage generative AI to build a sustainable competitive moat.",
      buttonText: "Explore Generative AI",
      buttonHref: "/services/generative-ai",
    },
    {
      icon: "vr",
      title: "AR/VR Software Development",
      description:
        "We build software that masterfully blends the digital and physical worlds. From augmented reality training simulations to immersive virtual reality showrooms, we create experiences that are truly unforgettable.",
      buttonText: "Step Into Immersive Realities",
      buttonHref: "/services/ar-vr",
    },
    {
      icon: "digital",
      title: "Enterprise Digital Transformation",
      description:
        "We build and fine-tune systems that create. From generating hyper-personalized user experiences to automating content creation, we help you leverage generative AI to build a sustainable competitive moat.",
      buttonText: "Explore Generative AI",
      buttonHref: "/services/digital-transformation",
    },
    {
      icon: "twin",
      title: "Digital Twin & Simulation Technology",
      description:
        "We create hyper-realistic, virtual replicas of your physical assets, processes, or entire systems. These digital twins allow you to run complex simulations, predict failures before they happen, and optimize performance in a risk-free virtual environment",
      buttonText: "Model the Future",
      buttonHref: "/services/digital-twin",
    },
    {
      icon: "",
      title: "The Uncharted Territory",
      description:
        "Beyond these established domains, our innovation labs operate at the edge of possibility, engineering the next wave of digital solutions before they even have a name.",
      buttonText: "Model the Future",
      buttonHref: "/services/digital-twin",
    },
  ];

  return (
    <section className="section-padding-y bg-white">
      <div className=" px-wrapper  mx-auto">
        {/* Header */}
        <div className="flex flex-col max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto lg:flex-row lg:items-center lg:justify-between gap-8 mb-12 lg:mb-16 ">
          <div className="flex-1 max-w-4xl">
            <h2 className="h2-heading  text-text-primary mb-6">
              Engineering the{" "}
              <span className="text-gradient-custom font-semibold">
                Horizon
              </span>
            </h2>
            <p className="h2-description items-center">
              The tools that will define the next decade of digital leadership
              are already here. We are not just adopters of these groundbreaking
              technologies; we are masters of them, integrating them into
              practical, powerful solutions that create an almost unfair
              advantage.
            </p>
          </div>

          {/* Desktop controls - will be populated via React portal */}
          <div className="hidden lg:block  ">
            <div id="desktop-carousel-controls">
              {/* Controls will be rendered here via portal from ServicesCarousel */}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <ServicesCarousel className="" services={services} />
      </div>
    </section>
  );
};

export default EngineeringHorizonSection;
