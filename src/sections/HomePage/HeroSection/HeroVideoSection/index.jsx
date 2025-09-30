import React from "react";


// Video Section - Responsive on desktop and tablet (50% of viewport height)
export function HeroVideoSection() {
  return (
    <section className="w-full h-[50vh] bg-[#1b1d36] -mt-1">
      <div className="w-full h-full flex items-center justify-center">
        <video
          className="max-w-full max-h-full object-contain"
          autoPlay
          muted
          loop
          playsInline   
          preload="none"
          poster="/videoPoster.webp"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
