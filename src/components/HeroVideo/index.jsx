"use client";
import React from "react";
import heroBackgroundImage from "../../assets/images/bgHero.webp"


export default function HeroVideo() {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={heroBackgroundImage}
      style={{
        minWidth: '100%',
        minHeight: '100%'
      }}
    >
      <source src="/hero.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
