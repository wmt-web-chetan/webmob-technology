import ServicesCarousel from "@/components/ServicesCarousel";

const EngineeringHorizonSection = () => {
  const services = [
    {
      icon: 'code',
      title: 'Generative AI Development & Consulting',
      description: 'We build and fine-tune systems that create. From generating hyper-personalized user experiences to automating content creation, we help you leverage generative AI to build a sustainable competitive moat.',
      buttonText: 'Explore Generative AI',
      buttonHref: '/services/generative-ai'
    },
    {
      icon: 'vr', 
      title: 'AR/VR Software Development',
      description: 'We build software that masterfully blends the digital and physical worlds. From augmented reality training simulations to immersive virtual reality showrooms, we create experiences that are truly unforgettable.',
      buttonText: 'Step Into Immersive Realities',
      buttonHref: '/services/ar-vr'
    },
    {
      icon: 'digital',
      title: 'Enterprise Digital Transformation',
      description: 'We build and fine-tune systems that create. From generating hyper-personalized user experiences to automating content creation, we help you leverage generative AI to build a sustainable competitive moat.',
      buttonText: 'Explore Generative AI',
      buttonHref: '/services/digital-transformation'
    },
    {
      icon: 'data',
      title: 'Data Analytics & Insights',
      description: 'Transform your raw data into actionable insights that drive strategic decision-making. Our advanced analytics solutions help you understand patterns, predict trends, and optimize operations for maximum efficiency.',
      buttonText: 'Unlock Data Potential',
      buttonHref: '/services/data-analytics'
    }
  ];

  return (
    <section className="section-padding-y bg-white">
      <div className=" px-wrapper  mx-auto">
        {/* Header */}
        <div className="flex flex-col max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto lg:flex-row lg:items-center lg:justify-between gap-8 mb-12 lg:mb-16 ">
          <div className="flex-1 max-w-4xl">
            <h2 className="h2-heading  text-text-primary mb-6">
              Engineering the <span className="text-gradient-primary font-semibold">Horizon</span>
            </h2>
            <p className="h2-description items-center">
              The tools that will define the next decade of digital leadership are already here. We are not just 
              adopters of these groundbreaking technologies; we are masters of them, integrating them into 
              practical, powerful solutions that create an almost unfair advantage.
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