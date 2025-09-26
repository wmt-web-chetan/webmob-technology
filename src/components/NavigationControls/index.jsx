"use client";
import CarouselControls from "../CarouselControls";

const NavigationControls = ({
  onPrevious,
  onNext,
  currentIndex,
  totalSlides,
  isAutoPlaying,
}) => {
  const canScrollPrev = totalSlides > 1;
  const canScrollNext = totalSlides > 1;

  return (
    <CarouselControls
      canScrollPrev={canScrollPrev}
      canScrollNext={canScrollNext}
      onPrevClick={onPrevious}
      onNextClick={onNext}
    />
  );
};

export default NavigationControls;