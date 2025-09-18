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
import VideoModal from "../VideoModal";

const testimonialsData = [
  {
    id: 1,
    image: viva,
    personImage: viva, // Add actual person image here
    text: "WebMob Technologies has delivered the app with the majority of the required features and expertly matched the frontend to the supplied UI design. The team has consistently provided high-quality work on time.They've also maintained clear, honest communication via online meetings.",
    name: "Andoni",
    position: "CEO & Founder at",
    company: mellySvg,
    rating: clutch,
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: 2,
    image: viva,
    personImage: viva, // Add actual person image here
    text: "Outstanding service and exceptional quality. The development team exceeded our expectations with their technical expertise and attention to detail. Communication was seamless throughout the project.Outstanding service and exceptional quality.",
    name: "Sarah Johnson",
    position: "CTO at",
    company: mellySvg,
    rating: clutch,
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: 3,
    image: viva,
    personImage: viva, // Add actual person image here
    text: "Professional, reliable, and innovative solutions. WebMob Technologies transformed our ideas into reality with cutting-edge technology and user-friendly design.",
    name: "Michael Chen",
    position: "Product Manager at",
    company: mellySvg,
    rating: clutch,
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            }, 800);
          }, 300);
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
      }, 800);
    }, 300);
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
      }, 800);
    }, 300);
  };

  return (
    <div className="relative">
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image
              width={60}
              height={60}
              src={currentTestimonial.personImage}
              alt={currentTestimonial.name}
              className={`rounded-full object-cover transition-all duration-500 ease-in-out ${
                isTransitioning
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            />
            {/* Play button overlay */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full hover:bg-black/40 transition"
            >
              <Image src={playButton} width={16} height={16} alt="play icon" />
            </button>
          </div>
          <div className="flex-1">
            <h3
              className={`text-lg font-bold text-text-primary transition-all duration-500 ease-in-out delay-100 ${
                isTransitioning
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {currentTestimonial.name}
            </h3>
            <div
              className={`text-sm text-text-secondary flex items-center gap-2 transition-all duration-500 ease-in-out delay-200 ${
                isTransitioning
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <span>{currentTestimonial.position}</span>
              <Image src={currentTestimonial.company} alt="company logo" height={20} />
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <p
          className={`text-base text-text-secondary leading-relaxed mb-6 transition-all duration-500 ease-in-out delay-300 ${
            isTransitioning
              ? "opacity-0 translate-x-4"
              : "opacity-100 translate-x-0"
          }`}
        >
          {currentTestimonial.text}
        </p>

        {/* Rating */}
        <div className="flex justify-start">
          <Image
            src={currentTestimonial.rating}
            width={80}
            alt="rating"
            className={`transition-all duration-500 ease-in-out delay-400 ${
              isTransitioning
                ? "opacity-0 translate-x-4"
                : "opacity-100 translate-x-0"
            }`}
          />
        </div>

        {/* Navigation buttons for mobile */}
        <div className="flex justify-center gap-4 mt-8">
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

      {/* Desktop Layout */}
      <div className="hidden md:flex md:gap-6 xl:gap-10 2xl:gap-14 xl:min-h-[250px]">
        <div className="relative flex-shrink-0">
          {/* Testimonial Image */}
          <Image
            width={340}
            height={600}
            priority
            src={currentTestimonial.image}
            alt="testimonial"
            className={`rounded-2xl h-full object-cover transition-all duration-500 ease-in-out z-10 ${
              isTransitioning
                ? "opacity-0 -translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          />

          {/* Overlay with Play Button + Text */}
          <div className="absolute inset-0 flex items-end justify-center gap-3 z-20 pb-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/50 
                     bg-white/20 backdrop-blur-md text-white font-medium 
                     hover:bg-white/30 transition"
            >
              <Image src={playButton} width={20} height={20} alt="play icon" />
              <span>Play Video</span>
            </button>
          </div>
        </div>
        <div className="relative flex flex-col justify-between h-full min-w-0 flex-1">
          <div>
            <Image
              src={qatation}
              className={`absolute z-10 transition-all duration-500 ease-in-out delay-100 ${
                isTransitioning
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
              alt="quotation mark"
            />
          </div>
          <div className="mt-3 flex flex-col justify-between h-full">
            <p
              className={`mt-3 lg:mt-10 z-20 text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-xl xl:max-w-2xl 2xl:max-w-5xl text-text-secondary transition-all duration-500 ease-in-out delay-200 flex-1 md:min-h-[160px] lg:min-h-[130px]  flex items-start ${
                isTransitioning
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {currentTestimonial.text}
            </p>
            <div className="flex-shrink-0">
              <div
                className={`text-lg mt-4 lg:mt-0 font-bold transition-all duration-500 ease-in-out delay-300 ${
                  isTransitioning
                    ? "opacity-0 translate-x-4"
                    : "opacity-100 translate-x-0"
                }`}
              >
                {currentTestimonial.name}
              </div>
              <div
                className={`text-text-secondary text-sm flex gap-5 items-center transition-all duration-500 ease-in-out delay-400 ${
                  isTransitioning
                    ? "opacity-0 translate-x-4"
                    : "opacity-100 translate-x-0"
                }`}
              >
                {currentTestimonial.position}{" "}
                <Image src={currentTestimonial.company} alt="company logo" />
              </div>
              <div className="flex justify-start items-end gap-4 mt-4 lg:mt-7">
                <Image
                  src={currentTestimonial.rating}
                  width={80}
                  alt="rating"
                  className={`transition-all duration-500 ease-in-out delay-500 ${
                    isTransitioning
                      ? "opacity-0 translate-x-4"
                      : "opacity-100 translate-x-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Fixed position navigation buttons */}
        <div className="absolute bottom-0 right-0 lg:right-30 flex gap-4 mt-4">
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

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={currentTestimonial.videoId}
      />
    </div>
  );
};

export default TestimonialCard;
