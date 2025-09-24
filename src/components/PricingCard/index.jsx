const PricingCard = ({ plan, isPopular = false }) => {
  return (
    <div
      className={`relative rounded-2xl sm:rounded-3xl transition-all duration-300 hover:scale-105 border border-text-disabled flex flex-col
      p-4 sm:p-5 md:p-6 lg:p-6  2xl:p-8 3xl:p-9
      min-h-80  md:h-112 xl:h-120 
      ${
        isPopular
          ? `md:h-[480px] lg:h-[500px] xl:h-[520px] 2xl:h-[540px] 3xl:h-[580px]
             md:p-7 lg:p-7 xl:p-8 2xl:p-9 3xl:p-10
             bg-light-bg md:bg-dark-bg text-text-primary md:text-white 
             shadow-md sm:shadow-lg md:shadow-2xl hover:shadow-xl`
          : `bg-light-bg text-text-primary shadow-md sm:shadow-lg hover:shadow-xl
             3xl:p-8`
      }`}
    >
      {/* Plan Header */}
      <div className="mb-3 sm:mb-4 md:mb-4 lg:mb-5">
        <h3
          className={`
            text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl 3xl:text-3xl
            ${isPopular ? 'md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl' : ''}
            font-medium mb-2
            ${isPopular ? "text-text-primary md:text-white" : "text-text-primary"}
          `}
        >
          {plan.name}
        </h3>
        <p
          className={`
            text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base 3xl:text-lg
            ${isPopular ? 'md:text-base lg:text-base xl:text-base 2xl:text-lg 3xl:text-xl' : ''}
            leading-relaxed
            ${isPopular ? "text-text-primary md:text-white" : "text-text-primary"}
          `}
        >
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-3 sm:mb-4 md:mb-4 lg:mb-5">
        <span
          className={`
            text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl 3xl:text-6xl
            ${isPopular ? 'md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl' : ''}
            font-semibold
            ${isPopular ? "text-text-primary md:text-white" : "text-text-primary"}
          `}
        >
          ${plan.price}
        </span>
      </div>

      {/* CTA Button */}
      <div className="mb-3 sm:mb-4 md:mb-4 lg:mb-5">
        <button
          className={`
            w-full rounded-full font-medium transition-all duration-200 hover:scale-105
            py-2 px-4 sm:py-2 sm:px-4 md:py-2.5 md:px-5 lg:py-2.5 lg:px-5 xl:py-3 xl:px-6 2xl:py-3 2xl:px-6 3xl:py-3.5 3xl:px-7
            ${isPopular ? 'md:py-3.5 md:px-7 lg:py-3.5 lg:px-7 xl:py-3.5 xl:px-7 2xl:py-3.5 2xl:px-7 3xl:py-4 3xl:px-8' : ''}
            text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base 3xl:text-lg
            ${isPopular ? 'md:text-base lg:text-base xl:text-base 2xl:text-lg 3xl:text-lg' : ''}
            text-white shadow-lg btn-style501
          `}
        >
          Buy Now
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px mb-3 bg-text-disabled"></div>

      {/* Features */}
      <div>
        <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-4 3xl:space-y-4">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <span
                className={`
                  text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm 3xl:text-base
                  ${isPopular ? 'md:text-sm lg:text-sm xl:text-sm 2xl:text-base 3xl:text-base' : ''}
                  leading-snug
                  ${isPopular ? "text-text-primary md:text-white" : "text-text-primary"}
                `}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;