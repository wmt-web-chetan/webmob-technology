"use client";
import React, { useState, useEffect } from "react";

export default function HeroVideo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint equivalent
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Only render on mobile since desktop video is handled in parent component
  if (!isMobile) {
    return null;
  }

  const mobileVideoStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '300px', // You can adjust this size
    // borderRadius: '12px',
    // boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
  };

  return (
    <video
      style={mobileVideoStyle}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/bgHero.webp"
    >
      <source src="/heroMobile.webm" type="video/webm" />
      <source src="/heroMobile.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
