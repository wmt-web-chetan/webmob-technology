'use client';

import { useState } from 'react';
import PricingToggle from '../PricingToogle';
import PricingCard from '../PricingCard';

const PricingSectionClient = ({ pricingData }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePeriodToggle = (monthly) => {
    setIsMonthly(monthly);
  };

  const currentPlans = isMonthly ? pricingData.monthly : pricingData.annually;

  return (
    <div>
      {/* Pricing Toggle */}
      <PricingToggle onToggle={handlePeriodToggle} />

      {/* Pricing Cards Grid */}
      <div className="
        grid grid-cols-1 
        sm:grid-cols-1 
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-3
        2xl:grid-cols-3
        3xl:grid-cols-3
        gap-4 sm:gap-5 md:gap-4 lg:gap-8 xl:gap-8 2xl:gap-10 3xl:gap-12
        max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-7xl 3xl:max-w-8xl 
        mx-auto 
        items-stretch 
        md:items-end
        justify-items-center
      ">
        {currentPlans.map((plan, index) => (
          <div 
            key={plan.id}
            className="w-full max-w-sm sm:max-w-md md:max-w-none"
          >
            <PricingCard 
              plan={plan}
              isPopular={plan.isPopular}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSectionClient;