'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const OverlappingCards = ({ activeTab }) => {
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
    handleScroll(); // Initial call
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

  return (
    <div ref={containerRef} className="relative h-[600px] w-full max-w-md mx-auto">
      {cards.map((card, index) => {
        const cardOffset = scrollY * 100 * (index + 1);
        const translateY = Math.min(cardOffset, index * 20);
        const scale = Math.max(0.9, 1 - (index * 0.02) - (scrollY * 0.1));
        const opacity = Math.max(0.7, 1 - (scrollY * 0.3));

        return (
          <div
            key={card.id}
            className="absolute inset-x-0 bg-white rounded-2xl border border-gray-200 shadow-lg p-6 transition-all duration-300 ease-out"
            style={{
              transform: `translateY(-${translateY}px) scale(${scale})`,
              opacity: opacity,
              zIndex: cards.length - index,
              top: `${index * 80}px`,
            }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                {card.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              {card.tools.map((tool, toolIndex) => (
                <div
                  key={toolIndex}
                  className="w-8 h-8 bg-gray-100 rounded border flex items-center justify-center"
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
  );
};

export default OverlappingCards;