"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import viva from "../../assets/images/demo.png";
import mellySvg from "../../assets/svg/Melly.svg";
import clutch from "../../assets/svg/clutch.svg";
import left from "../../assets/svg/leftfull.svg";
import right from "../../assets/svg/rightfull.svg";
import qatation from "../../assets/svg/qtation.svg";
import playButton from "../../assets/svg/playButton.svg";

const testimonialsData = [
  {
    id: 1,
    image: viva,
    text: "WebMob Technologies has delivered the app with the majority of the required features and expertly matched the frontend to the supplied UI design. The team has consistently provided high-quality work on time.They've also maintained clear, honest communication via online meetings.",
    name: "Andoni",
    position: "CEO & Founder at",
    company: mellySvg,
    rating: clutch,
  },
  {
    id: 2,
    image: viva,
    text: "Outstanding service and exceptional quality. The development team exceeded our expectations with their technical expertise and attention to detail. Communication was seamless throughout the project.Outstanding service and exceptional quality.",
    name: "Sarah Johnson",
    position: "CTO at",
    company: mellySvg,
    rating: clutch,
  },
  {
    id: 3,
    image: viva,
    text: "Professional, reliable, and innovative solutions. WebMob Technologies transformed our ideas into reality with cutting-edge technology and user-friendly design.",
    name: "Michael Chen",
    position: "Product Manager at",
    company: mellySvg,
    rating: clutch,
  },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const currentTestimonial = testimonialsData[currentIndex];

  // Auto-play functionality with same animation as manual clicks
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        if (!isTransitioning) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentIndex((prevIndex) => 
              prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
            );
            setTimeout(() => {
              setIsTransitioning(false);
            }, 200);
          }, 400);
        }
      }, 4000); // Change slide every 4 seconds
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
  }, [isAutoPlaying, isTransitioning]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
      );
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 400);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 400);
  };

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row gap-10 h-full">
        <div className="flex-shrink-0">
          <Image
            width={300}
            height={600}
            priority
            src={currentTestimonial.image}
            alt="testimonial"
            className={`rounded-2xl object-cover transition-all duration-500 ease-out ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          />
        </div>
        <div className="relative flex flex-col justify-between h-full min-w-0 flex-1">
          <div>
            <Image src={qatation} className="absolute z-10" alt="quotation mark" />
          </div>
          <div className="mt-3 flex flex-col justify-between h-full">
            <p
              className={`mt-10 z-20 text-base text-text-secondary transition-all duration-500 ease-out flex-1 md:min-h-[130px]  flex items-start ${
                isTransitioning
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {currentTestimonial.text}
            </p>
            <div className="flex-shrink-0">
              <div
                className={`text-lg font-bold transition-all duration-500 ease-out ${
                  isTransitioning
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {currentTestimonial.name}
              </div>
              <div
                className={`text-text-secondary text-sm flex gap-5 items-center transition-all duration-500 ease-out ${
                  isTransitioning
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {currentTestimonial.position}{" "}
                <Image src={currentTestimonial.company} alt="company logo" />
              </div>
              <div className="flex justify-start items-end gap-4 mt-4">
                <Image
                  src={currentTestimonial.rating}
                  width={80}
                  alt="rating"
                  className={`transition-all duration-500 ease-out ${
                    isTransitioning
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Fixed position navigation buttons */}
        <div className="absolute bottom-0 right-6 flex gap-4 mt-4">
          <Image
            src={left}
            width={40}
            className="cursor-pointer hover:opacity-70 transition-opacity duration-200"
            onClick={handlePrevious}
            alt="previous"
          />
          <Image
            src={right}
            width={40}
            className="cursor-pointer hover:opacity-70 transition-opacity duration-200"
            onClick={handleNext}
            alt="next"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
