import React from 'react';
import Image from 'next/image';
import Star from "@/assets/svg/star.svg";
import styles from './SlidingBanner.module.css';

export default function SlidingBanner({ 
  items = ["Innovating Ideas", "Building Impact", "Delivering Excellence"],
  icon = Star, // Default to Star icon
  speed = 15,
  backgroundColor = '#1B1B35',
  textClassName = "text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide",
  spacing = "w-6 sm:w-8 lg:w-10",
  iconSize = { sm: 30, md: 40, lg: 50 }
}) {
  // Calculate number of duplicates needed for seamless loop
  // Minimum 2 sets for basic loop, 3+ for smoother experience
  const numberOfSets = Math.max(3, Math.ceil(12 / items.length));
  const translatePercentage = -100 / numberOfSets;

  const renderItemSet = (setIndex) => (
    <div key={setIndex} className="flex items-center">
      {items.map((item, index) => (
        <React.Fragment key={`set-${setIndex}-${index}`}>
          <span className={textClassName}>
            {item}
          </span>
          <div className={spacing}></div>
          {icon && (
            <>
              {typeof icon === 'string' || (typeof icon === 'object' && icon.src) ? (
                <>
                  <Image 
                    src={icon} 
                    width={iconSize.sm} 
                    height={iconSize.sm} 
                    alt="separator" 
                    className="sm:hidden"
                  />
                  <Image 
                    src={icon} 
                    width={iconSize.md} 
                    height={iconSize.md} 
                    alt="separator" 
                    className="hidden sm:block lg:hidden"
                  />
                  <Image 
                    src={icon} 
                    width={iconSize.lg} 
                    height={iconSize.lg} 
                    alt="separator" 
                    className="hidden lg:block"
                  />
                </>
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                  {icon}
                </div>
              )}
              <div className={spacing}></div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full text-white py-2 sm:py-3 lg:py-4 overflow-hidden relative" style={{backgroundColor}}>
      {/* Left shadow gradient */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 lg:w-20 z-10 pointer-events-none" 
        style={{background: `linear-gradient(to right, ${backgroundColor}, transparent)`}}
      ></div>
      
      {/* Right shadow gradient */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 lg:w-20 z-10 pointer-events-none" 
        style={{background: `linear-gradient(to left, ${backgroundColor}, transparent)`}}
      ></div>
      
      {/* Sliding content container */}
      <div 
        className={`flex whitespace-nowrap ${styles.animateSlide}`}
        style={{
          animationDuration: `${speed}s`,
          '--translate-x': `${translatePercentage}%`
        }}
      >
        {Array.from({ length: numberOfSets }, (_, index) => renderItemSet(index))}
      </div>
    </div>
  );
}