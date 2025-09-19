"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import CarouselControls from "../CarouselControls";
import ServiceCard from "../ServiceCard";

const ServicesCarousel = ({ services }) => {
  // Initialize carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: true,
    skipSnaps: false,
    loop: true,
    slidesToScroll: 1,
    // breakpoints: {
    //   "(min-width: 640px)": { slidesToScroll: 1 },  
    //   "(min-width: 768px)": { slidesToScroll: 1 },
    //   "(min-width: 1025px)": { slidesToScroll: 1 },
    //   "(min-width: 1280px)": { slidesToScroll: 1 },
    //   "(min-width: 1536px)": { slidesToScroll: 1 },
    //   "(min-width: 1791px)": { slidesToScroll: 1 },
    // },
  });

  // State for enabling/disabling prev/next controls
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Track if component is mounted (needed for portal)
  const [mounted, setMounted] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Desktop controls container
  const desktopControlsContainer = mounted
    ? document.getElementById("desktop-carousel-controls")
    : null;

  return (
    <div className="relative">
      {/* Portal for desktop controls */}
      {desktopControlsContainer &&
        createPortal(
          <CarouselControls
            canScrollPrev={canScrollPrev}
            canScrollNext={canScrollNext}
            onPrevClick={scrollPrev}
            onNextClick={scrollNext}
          />,
          desktopControlsContainer
        )}

      {/* Embla carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" flex-none w-full sm:w-2/3  md:w-1/2  lg:w-2/5  xl:w-1/3 2xl:w-2/7 3xl:w-1/4 relative"
            >
              <ServiceCard index={index} {...service} />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 3xl:w-md bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 3xl:w-md bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      {/* Mobile controls */}
      <div className="flex justify-center mt-8 lg:hidden">
        <CarouselControls
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
          onPrevClick={scrollPrev}
          onNextClick={scrollNext}
        />
      </div>
    </div>
  );
};

export default ServicesCarousel;
