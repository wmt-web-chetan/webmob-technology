"use client";
import React, { useState, useEffect, useRef } from "react";

export default function StatsAnimation({ statsData }) {
  // State to store current animated values
  const [animatedValues, setAnimatedValues] = useState(statsData.map(() => 0));

  // Ref to track if animation has started
  const hasAnimated = useRef(false);

  // Ref for the section to observe
  const sectionRef = useRef(null);

  // Function to parse number and suffix
  const parseNumber = (number) => {
    const symbol = number.includes("+") ? "+" : number.includes("%") ? "%" : "";
    const prefix = number.startsWith("$") ? "$" : "";
    const baseStr = number.replace(/[+%$]/g, "");
    const numericPart = parseFloat(baseStr.replace(/[^0-9.]/g, "")); // Extract numeric value (e.g., 24 from 24Mn)
    const suffix = baseStr.replace(/[0-9.]/g, ""); // Extract suffix (e.g., Mn, Bn)
    return { numericPart, prefix, suffix, symbol };
  };

  // Counting animation using setInterval
  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const interval = 1000 / 60; // Update every ~16.67ms (60fps)
    const totalFrames = Math.round(duration / interval);
    const increments = statsData.map((stat) => {
      const { numericPart } = parseNumber(stat.number);
      return numericPart / totalFrames; // Increment per frame
    });

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      console.log("Animation started"); // Debug log

      let frame = 0;
      const animationInterval = setInterval(() => {
        setAnimatedValues((prev) =>
          prev.map((value, index) => {
            const { numericPart } = parseNumber(statsData[index].number);
            const newValue = value + increments[index];
            return newValue >= numericPart ? numericPart : newValue;
          })
        );

        frame++;
        if (frame >= totalFrames) {
          clearInterval(animationInterval);
          console.log("Animation completed"); // Debug log
        }
      }, interval);
    };

    // IntersectionObserver to trigger animation on scroll view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          console.log("Section is visible, starting animation"); // Debug log
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      console.log("Observer attached to section"); // Debug log
    }

    return () => {
      observer.disconnect();
      console.log("Cleanup: Observer cleared"); // Debug log
    };
  }, [statsData]);

  // Format animated number for display
  const formatAnimatedNumber = (number, animatedValue) => {
    const { numericPart, prefix, suffix, symbol } = parseNumber(number);
    const base =
      animatedValue >= numericPart ? numericPart : Math.floor(animatedValue);
    return { base: `${prefix}${base}${suffix}`, symbol };
  };

  return (
    <div
      ref={sectionRef}
      className="2xl:max-w-6xl 3xl:max-w-7xl  mx-auto space-y-6  2xl:space-y-6 3xl:space-y-12 mt-10"
    >
      {/* Mobile Layout - Custom pattern: full, half-half, full, half-half */}
      <div className="lg:hidden space-y-4 px-wrapper">
        {/* Row 1: Single card (index 0) */}
        {statsData[0] && (
          <div className="grid grid-cols-1">
            <article className="bg-white rounded-2xl py-5 px-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu flex flex-col justify-center items-center">
              <div className="mb-3">
                <span
                  className="text-3xl sm:text-4xl font-medium text-text-primary"
                  aria-live="polite"
                >
                  {(() => {
                    const { base, symbol } = formatAnimatedNumber(
                      statsData[0].number,
                      animatedValues[0]
                    );
                    return (
                      <>
                        {base}
                        {symbol && (
                          <span className="text-gradient-primary">
                            {symbol}
                          </span>
                        )}
                      </>
                    );
                  })()}
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-medium">
                {statsData[0].description}
              </p>
            </article>
          </div>
        )}

        {/* Row 2: Two cards (index 1, 2) */}
        {statsData[1] && statsData[2] && (
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((index) => {
              const { base, symbol } = formatAnimatedNumber(
                statsData[index].number,
                animatedValues[index]
              );
              return (
                <article
                  key={index}
                  className="bg-white rounded-2xl py-4 px-3 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu flex flex-col justify-center items-center"
                >
                  <div className="mb-2">
                    <span
                      className="text-3xl sm:text-3xl font-medium text-text-primary"
                      aria-live="polite"
                    >
                      {base}
                      {symbol && (
                        <span className="text-gradient-primary">{symbol}</span>
                      )}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                    {statsData[index].description}
                  </p>
                </article>
              );
            })}
          </div>
        )}

        {/* Row 3: Single card (index 3) */}
        {statsData[3] && (
          <div className="grid grid-cols-1">
            <article className="bg-white rounded-2xl py-5 px-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu flex flex-col justify-center items-center">
              <div className="mb-3">
                <span
                  className="text-3xl sm:text-4xl font-medium text-text-primary"
                  aria-live="polite"
                >
                  {(() => {
                    const { base, symbol } = formatAnimatedNumber(
                      statsData[3].number,
                      animatedValues[3]
                    );
                    return (
                      <>
                        {base}
                        {symbol && (
                          <span className="text-gradient-primary">
                            {symbol}
                          </span>
                        )}
                      </>
                    );
                  })()}
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-medium">
                {statsData[3].description}
              </p>
            </article>
          </div>
        )}

        {/* Row 4: Two cards (index 4, 5) */}
        {statsData[4] && statsData[5] && (
          <div className="grid grid-cols-2 gap-4">
            {[4, 5].map((index) => {
              const { base, symbol } = formatAnimatedNumber(
                statsData[index].number,
                animatedValues[index]
              );
              return (
                <article
                  key={index}
                  className="bg-white rounded-2xl py-4 px-3 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu flex flex-col justify-center items-center"
                >
                  <div className="mb-2">
                    <span
                      className="text-3xl sm:text-3xl font-medium text-text-primary"
                      aria-live="polite"
                    >
                      {base}
                      {symbol && (
                        <span className="text-gradient-primary">{symbol}</span>
                      )}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                    {statsData[index].description}
                  </p>
                </article>
              );
            })}
          </div>
        )}
      </div>


      {/* Desktop Layout - First Row (3 cards with different widths) */}
      <div className="hidden lg:flex xl:flex gap-6 xl:gap-6 2xl:gap-6 3xl:gap-8 items-stretch">
        {statsData.slice(0, 3).map((stat, index) => {
          const { base, symbol } = formatAnimatedNumber(
            stat.number,
            animatedValues[index]
          );
          return (
            <div key={index} className={`${index === 1 ? "w-2/5" : "w-3/5"}`}>
              <article
                className={`bg-white rounded-2xl p-6 text-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu flex ${
                  index === 1 ? "flex-col" : "flex-row"
                } justify-center items-center h-full`}
              >
                <div className="">
                  <span
                    className="text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl 3xl:text-5xl font-medium text-black"
                    aria-live="polite"
                  >
                    {base}
                    {symbol && (
                      <span className="text-gradient-primary">{symbol}</span>
                    )}
                  </span>
                </div>
                <p className="text-base text-text-secondary  font-medium">
                  {stat.description}
                </p>
              </article>
            </div>
          );
        })}
      </div>

      {/* Desktop Layout - Second Row (3 equal cards) */}
      <div className="hidden lg:grid xl:grid 2xl:grid 3xl:grid grid-cols-3 gap-6 xl:gap-6 2xl:gap-6 3xl:gap-6 items-stretch">
        {statsData.slice(3).map((stat, index) => {
          const { base, symbol } = formatAnimatedNumber(
            stat.number,
            animatedValues[index + 3]
          );
          return (
            <article
              key={index + 3}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu flex flex-col justify-center items-center "
            >
              <div className="mb-4">
                <span
                  className="text-5xl font-medium text-black"
                  aria-live="polite"
                >
                  {base}
                  {symbol && (
                    <span className="text-gradient-primary">{symbol}</span>
                  )}
                </span>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed font-medium">
                {stat.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
