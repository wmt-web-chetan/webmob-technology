'use client';
import React, { useState, useEffect, useRef } from 'react';

const AIPoweredVelocitySection = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      id: 1,
      icon: '💡',
      title: 'AI-Powered Code Augmentation',
      description: 'Our developers don\'t start from a blank page. They leverage intelligent assistants that can generate entire code blocks, suggest optimal algorithms, and translate natural language into functional code, turning hours of work into minutes.',
      points: [
        'Accelerates boilerplate and complex function creation.',
        'Ensures adherence to best practices and coding standards.',
        'Reduces cognitive load, freeing developers for strategic problem-solving.'
      ],
      tools: ['github', 'copilot', 'angular', 'codium']
    },
    {
      id: 2,
      icon: '🚀',
      title: 'Automated Testing & QA',
      description: 'Quality assurance happens continuously with AI-driven testing frameworks that catch bugs before they reach production.',
      points: [
        'Automated unit and integration testing.',
        'Real-time code quality monitoring.',
        'Predictive bug detection and prevention.'
      ],
      tools: ['jest', 'cypress', 'sonar', 'selenium']
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Intelligent DevOps Pipeline',
      description: 'Streamlined deployment processes with smart CI/CD pipelines that adapt and optimize based on project requirements.',
      points: [
        'Zero-downtime deployments.',
        'Automated scaling and monitoring.',
        'Smart rollback and recovery systems.'
      ],
      tools: ['docker', 'kubernetes', 'jenkins', 'aws']
    },
    {
      id: 4,
      icon: '🔧',
      title: 'Smart Architecture Design',
      description: 'AI-assisted architecture planning that ensures scalable, maintainable, and efficient system design from day one.',
      points: [
        'Optimal technology stack selection.',
        'Scalability and performance optimization.',
        'Future-proof architecture decisions.'
      ],
      tools: ['figma', 'miro', 'aws', 'terraform']
    }
  ];

  const benefits = [
    '70% Faster Time-to-Market',
    '60% Cost Savings on Development',
    'Smarter AI Assistance = Higher Productivity, Lower Errors',
    'Built-in Compliance & Enterprise Security',
    'Unified Experience: Cloud, On-Premise, Hybrid'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Symbiosis: How We Achieve <span className="text-blue-600">5X Velocity</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Benefits */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              This isn't about developers just working harder. It's about them working smarter, 
              amplified by a suite of proprietary and best-in-class AI tools. This fusion of human 
              expertise and machine intelligence is our secret to delivering higher quality software, 
              faster than you thought possible. Explore the five core accelerators of our development engine.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Overlapping Cards */}
          <div ref={containerRef} className="relative h-[700px] w-full">
            {cards.map((card, index) => {
              const cardOffset = scrollY * 60 * index;
              const translateY = Math.max(0, cardOffset - (index * 40));
              const scale = Math.max(0.85, 1 - (index * 0.05));
              const opacity = Math.max(0.6, 1 - (index * 0.15));

              return (
                <div
                  key={card.id}
                  className="absolute inset-x-0 bg-white rounded-2xl border border-gray-200 shadow-xl p-6 transition-all duration-500 ease-out hover:shadow-2xl"
                  style={{
                    transform: `translateY(${index * 60 - translateY}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: cards.length - index,
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      {card.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {card.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {card.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2">
                    {card.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="w-10 h-10 bg-gray-100 rounded-lg border flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <span className="text-xs font-medium text-gray-600">
                          {tool.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPoweredVelocitySection;