import Image from "next/image";
import ArrowLeft from "../../assets/svg/ArrowLeft.svg";
import ArrowRight from "../../assets/svg/ArrowRight.svg";

const CarouselControls = ({
  canScrollPrev,
  canScrollNext,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="flex gap-3">
      {/* Prev button */}
      <button
        onClick={onPrevClick}
        disabled={!canScrollPrev}
        className={`
          w-12 h-12 rounded-full border  flex items-center justify-center
          transition-all duration-200 hover:scale-105
          ${
            canScrollPrev
              ? "text-primary border-primary hover:border-primary hover:bg-primary hover:text-white"
              : "text-text-disabled border-text-disabled cursor-not-allowed "
          }
        `}
      >
        <Image
          src={ArrowLeft}
          alt="Previous"
          width={20}
          height={20}
          className={`text-primary font-bold ${
            canScrollPrev ? "" : "opacity-50"
          }`}
        />
      </button>

      {/* Next button */}
      <button
        onClick={onNextClick}
        disabled={!canScrollNext}
        className={`
          w-12 h-12 rounded-full border  flex items-center justify-center
          transition-all duration-200 hover:scale-105
          ${
            canScrollNext
              ? "text-primary border-primary hover:border-primary hover:bg-primary hover:text-white"
              : "text-text-disabled  border-text-disabled cursor-not-allowed "
          }
        `}
      >
        <Image
          src={ArrowRight}
          alt="Next"
          width={20}
          height={20}
          className={`transition-colors duration-200 ${
            canScrollNext ? "" : "opacity-50"
          }`}
        />
      </button>
    </div>
  );
};

export default CarouselControls;
