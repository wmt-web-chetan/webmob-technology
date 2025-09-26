"use client";
import { useState } from "react";
import Image from "next/image";
import VideoModal from "../VideoModal";
import qtation from "../../assets/svg/qtation.svg";
import playButton from "../../assets/svg/playButton.svg";

const TestimonialCard = ({ testimonial, isTransitioning }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const transitionClass = isTransitioning
    ? "opacity-0 translate-x-4"
    : "opacity-100 translate-x-0";

  return (
    <>
      {/* Mobile Layout - Fixed Height */}
      <div className="lg:hidden h-[400px] sm:h-[295px] flex flex-col">
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Quote icon at top */}
          <div
            className={`transition-all duration-500 ease-in-out delay-100 ${transitionClass}`}
          >
            <Image
              src={qtation}
              className={`absolute z-10 w-30 h-29 transition-all duration-500 ease-in-out delay-100 ${
                isTransitioning
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
              alt="quotation mark"
            />
          </div>

          {/* Testimonial Text - Fixed height with scrollable content */}
          <div className="flex-1 flex flex-col mt-16 ">
            <div className="flex-1">
              <blockquote
                className={`text-base text-text-primary leading-relaxed transition-all duration-500 ease-in-out delay-200 ${transitionClass}`}
              >
                "{testimonial.text}"
              </blockquote>
            </div>
          </div>

          {/* Profile Section - Fixed height */}
          <div className="flex-shrink-0 flex items-center gap-4  h-[80px]">
            <div className="relative flex-shrink-0 group items-stretch">
              <Image
                width={63}
                height={63}
                src={testimonial.personImage}
                alt={testimonial.name}
                className={`object-fill rounded-lg transition-all duration-500 ease-in-out ${transitionClass}`}
              />
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition"
              >
                <Image
                  src={playButton}
                  width={16}
                  height={16}
                  alt="play icon"
                />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div
                className={`text-lg font-bold text-text-primary leading-snug transition-all duration-500 ease-in-out delay-300 ${transitionClass}`}
              >
                {testimonial.name}
              </div>
              <div
                className={`text-sm text-text-secondary flex items-center gap-2 transition-all duration-500 ease-in-out delay-400 ${transitionClass}`}
              >
                <span>{testimonial.position}</span>
                <Image
                  src={testimonial.company}
                  alt="company logo"
                  height={18}
                  className="h-5 w-auto"
                />
              </div>
              <div
                className={`transition-all duration-500 ease-in-out delay-500 ${transitionClass}`}
              >
                <Image
                  src={testimonial.rating}
                  width={65}
                  alt="rating"
                  className="mt-1 h-4 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Fixed Height */}
      <div className="hidden lg:flex lg:gap-8 xl:gap-12 2xl:gap-16 3xl:gap-20 items-stretch h-[400px]">
        {/* Right  */}
        <div className="relative">
          <div className="relative  h-full rounded-2xl group">
            <Image
              height={200}
              width={200}
              src={testimonial.image}
              alt={`${testimonial.name} testimonial`}
              className={`object-cover min-w-2xs h-full rounded-2xl transition-all duration-500 ease-in-out ${
                isTransitioning
                  ? "opacity-0 -translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            />

            <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent" />

            <div className="absolute rounded- inset-0 flex items-end justify-center mb-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className={`flex items-center gap-3 px-6 py-3 rounded-[4rem] border border-white bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/30 transition-all duration-500 ease-in-out ${
                  isTransitioning
                    ? "opacity-0 -translate-x-8"
                    : "opacity-100 translate-x-0"
                }`}
                aria-label="Play video testimonial"
              >
                <Image
                  src={playButton}
                  width={24}
                  height={24}
                  alt="play icon"
                  className={`transition-all duration-500 ease-in-out ${
                    isTransitioning
                      ? "opacity-0 -translate-x-8"
                      : "opacity-100 translate-x-0"
                  }`}
                />
                <span className="text-sm lg:text-base font-medium">
                  Play Video
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-between flex-1 ">
          {/* Quote icon */}
          <div
            className={`absolute top-0 left-0 mb-4 flex-shrink-0 transition-all duration-500 ease-in-out delay-100 ${transitionClass}`}
          >
            <Image
              src={qtation}
              className={`transition-all duration-500 ease-in-out delay-100 ${
                isTransitioning
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
              alt="quotation mark"
            />
          </div>

          {/* Main content area - Takes up remaining space */}
          <div className="flex flex-col justify-between pt-18 h-full">
            {/* Testimonial text - Scrollable area */}
            <div className="">
              <blockquote
                className={`text-lg lg:text-xl xl:text-xl  3xl:text-2xl leading-relaxed text-text-primary transition-all duration-500 ease-in-out delay-200 ${transitionClass}`}
              >
                "{testimonial.text}"
              </blockquote>
            </div>

            {/* Profile section - Fixed at bottom */}
            <div className="flex-shrink-0 flex-end pt-3 pb-2">
              {/* Name */}
              <div
                className={`mb-2 transition-all duration-500 ease-in-out delay-200 ${transitionClass}`}
              >
                <h3 className="text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-text-primary">
                  {testimonial.name}
                </h3>
              </div>

              {/* Position + Company */}
              <div
                className={`mb-4 transition-all duration-500 ease-in-out delay-200 ${transitionClass}`}
              >
                <div className="text-base lg:text-lg xl:text-lg 2xl:text-xl text-text-secondary flex items-center gap-3">
                  <span>{testimonial.position}</span>
                  <Image
                    src={testimonial.company}
                    alt="company logo"
                    width={80}
                    height={24}
                    className="h-6 w-auto lg:h-7 xl:h-8"
                  />
                </div>
              </div>

              {/* Rating */}
              <div
                className={`flex justify-between items-center transition-all duration-500 ease-in-out delay-200 ${transitionClass}`}
              >
                <Image src={testimonial.rating} width={80} alt="rating" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={testimonial.videoId}
      />
    </>
  );
};

export default TestimonialCard;
