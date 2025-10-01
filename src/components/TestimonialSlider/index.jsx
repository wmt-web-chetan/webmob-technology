"use client";
import { useState, useEffect, useRef } from "react";
import TestimonialCard from "../TestimonialCard";
import NavigationControls from "../NavigationControls";

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false); // New hover state
  const intervalRef = useRef(null);

  const currentTestimonial = testimonials[currentIndex];

  useEffect(() => {
    // Pause autoplay when hovered
    if (isAutoPlaying && !isHovered && testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        if (!isTransitioning) {
          handleNext(true);
        }
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isHovered, isTransitioning, testimonials.length]); // Added isHovered to dependencies

  const triggerTransition = (newIndex, isAuto = false) => {
    if (isTransitioning) return;

    if (!isAuto) {
      setIsAutoPlaying(false);
    }

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 200);
  };

  const handlePrevious = () => {
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    triggerTransition(newIndex);
  };

  const handleNext = (isAuto = false) => {
    const newIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    triggerTransition(newIndex, isAuto);
  };

  useEffect(() => {
    if (!isAutoPlaying) {
      const resumeTimer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);

      return () => clearTimeout(resumeTimer);
    }
  }, [isAutoPlaying]);

  return (
    <div 
      className="relative px-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Testimonial Card */}
      <div className="flex px-wrapper" >
        <TestimonialCard
          testimonial={currentTestimonial}
          isTransitioning={isTransitioning}
        />
      </div>

      {/* Navigation Controls - Outside the card */}
      <div className="flex justify-center lg:justify-end mt-6 ">
        <NavigationControls
          onPrevious={handlePrevious}
          onNext={handleNext}
          currentIndex={currentIndex}
          totalSlides={testimonials.length}
          isAutoPlaying={isAutoPlaying}
        />
      </div>
    </div>
  );
};

export default TestimonialSlider;