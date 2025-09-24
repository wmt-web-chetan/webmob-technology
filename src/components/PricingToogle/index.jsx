'use client';

import { useState } from 'react';

const PricingToggle = ({ onToggle }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = (monthly) => {
    setIsMonthly(monthly);
    onToggle(monthly);
  };

  return (
    <div className="flex items-center justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-12 2xl:mb-14 3xl:mb-16">
      <div className="
        bg-light-bg border border-text-disabled/20 rounded-full flex
        p-0.5 sm:p-0.5 md:p-1 lg:p-1 xl:p-1 2xl:p-1 3xl:p-1.5
        shadow-sm hover:shadow-md transition-shadow duration-200
      ">
        <button
          onClick={() => handleToggle(true)}
          className={`
            rounded-full transition-all duration-200 hover:scale-105
            px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2 xl:px-6 xl:py-2 2xl:px-7 2xl:py-2.5 3xl:px-8 3xl:py-3
            text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base 3xl:text-lg
            font-medium
            ${
              isMonthly
                ? 'btn-style501 text-white shadow-sm transform scale-105'
                : 'text-text-secondary hover:text-primary '
            }
          `}
        >
          Monthly
        </button>
        <button
          onClick={() => handleToggle(false)}
          className={`
            rounded-full transition-all duration-200 hover:scale-105
            px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2 xl:px-6 xl:py-2 2xl:px-7 2xl:py-2.5 3xl:px-8 3xl:py-3
            text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base 3xl:text-lg
            font-medium
            ${
              !isMonthly
                ? 'btn-style501 text-white shadow-sm transform scale-105'
                : 'text-text-secondary hover:text-primary '
            }
          `}
        >
          Annually
        </button>
      </div>
    </div>
  );
};

export default PricingToggle;