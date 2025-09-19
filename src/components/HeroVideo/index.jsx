"use client";
import React, { useState, useEffect } from "react";

export default function HeroVideo() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint equivalent
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);
  
  // Only render on desktop since mobile only shows webp background
  if (!isDesktop) {
    return null;
  }
  
  return (
    <div className="w-full flex justify-center">
      <video
        className="w-full max-w-6xl h-auto object-cover rounded-xl shadow-2xl"
        style={{
          aspectRatio: '16/9', // Adjust this based on your video's aspect ratio
          maxHeight: '500px'   // Prevent video from getting too tall
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/bgHero.webp"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}