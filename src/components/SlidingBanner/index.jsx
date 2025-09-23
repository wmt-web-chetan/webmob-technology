"use client"
import React from 'react';

export default function SlidingBanner() {
  const bannerItems = [
    "Innovating Ideas",
    "Building Impact", 
    "Delivering Excellence",
    "Innovating Ideas"
  ];

  return (
    <div className="w-full text-white py-4 overflow-hidden relative" style={{backgroundColor: '#1B1B35'}}>
      {/* Left shadow gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{background: 'linear-gradient(to right, #1B1B35, transparent)'}}></div>
      
      {/* Right shadow gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{background: 'linear-gradient(to left, #1B1B35, transparent)'}}></div>
      {/* Sliding content container */}
      <div className="flex animate-slide whitespace-nowrap">
        {/* First set of items */}
        <div className="flex items-center space-x-8 px-8">
          {bannerItems.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center space-x-8">
              <span className="text-lg font-semibold tracking-wide">
                {item}
              </span>
              {index < bannerItems.length - 1 && (
                <div className="w-3 h-3 bg-white transform rotate-45 opacity-70"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-8 px-8">
          {bannerItems.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center space-x-8">
              <span className="text-lg font-semibold tracking-wide">
                {item}
              </span>
              {index < bannerItems.length - 1 && (
                <div className="w-3 h-3 bg-white transform rotate-45 opacity-70"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Third set for extra smooth transition */}
        <div className="flex items-center space-x-8 px-8">
          {bannerItems.map((item, index) => (
            <div key={`third-${index}`} className="flex items-center space-x-8">
              <span className="text-lg font-semibold tracking-wide">
                {item}
              </span>
              {index < bannerItems.length - 1 && (
                <div className="w-3 h-3 bg-white transform rotate-45 opacity-70"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-slide {
          animation: slide 15s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}