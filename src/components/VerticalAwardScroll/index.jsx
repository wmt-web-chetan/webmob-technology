"use client"
import React, { useEffect, useRef, useState, useCallback } from "react";
import "./index.css";

const VerticalAwardScroll = ({ children, reverse = false }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Convert children to array
  const childArray = React.Children.toArray(children);

  // Duplicate enough times for smooth infinite scroll
  const extendedChildren = [...childArray, ...childArray, ...childArray];

  const animate = useCallback(() => {
    if (!containerRef.current) return;

    setScrollPosition((prev) => {
      const speed = 0.8; // scroll speed
      let newPosition = reverse ? prev - speed : prev + speed;

      if (isMobile) {
        // Horizontal scrolling logic
        const scrollWidth = containerRef.current.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;
        const maxScroll = scrollWidth - containerWidth;

        if (!reverse && newPosition >= maxScroll / 2) {
          newPosition = 0;
        }
        if (reverse && newPosition <= 0) {
          newPosition = maxScroll / 2;
        }
      } else {
        // Vertical scrolling logic
        const scrollHeight = containerRef.current.scrollHeight;
        const containerHeight = containerRef.current.clientHeight;
        const maxScroll = scrollHeight - containerHeight;

        if (!reverse && newPosition >= maxScroll / 2) {
          newPosition = 0;
        }
        if (reverse && newPosition <= 0) {
          newPosition = maxScroll / 2;
        }
      }

      return newPosition;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [reverse, isMobile]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => animationRef.current && cancelAnimationFrame(animationRef.current);
  }, [animate]);

  useEffect(() => {
    if (containerRef.current) {
      if (isMobile) {
        containerRef.current.scrollLeft = scrollPosition;
      } else {
        containerRef.current.scrollTop = scrollPosition;
      }
    }
  }, [scrollPosition, isMobile]);

  if (isMobile) {
    return (
      <div className="relative w-full max-w-[calc(100vw-2rem)]">
        {/* Gradient overlays for horizontal */}
        <div className="absolute top-0 left-0 bottom-0 w-8 wrapper-gradient-left z-10"></div>
        <div className="absolute top-0 right-0 bottom-0 w-8 wrapper-gradient-right z-10"></div>

        {/* Horizontal scrolling container */}
        <div 
          ref={containerRef} 
          className="overflow-hidden px-4"
        >
          <div className="grid grid-flow-col auto-cols-max gap-4 w-max">
            {extendedChildren.map((child, index) => (
              <div key={index} className="transition-all duration-300 h-full">
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-h-[400px] sm:max-h-[500px] lg:max-h-[650px]">
      {/* Gradient overlays for vertical */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 lg:h-20 wrapper-gradient-top z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 lg:h-20 wrapper-gradient-bottom z-10"></div>

      {/* Vertical scrolling container */}
      <div ref={containerRef} className="h-full overflow-hidden py-6 sm:py-7 lg:py-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
          {extendedChildren.map((child, index) => (
            <div key={index} className="transition-all duration-300 h-full">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalAwardScroll;