"use client";
import React from "react";

export default function HeroVideo() {
  return (
    <>
      {/* Background image for mobile & tablet */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center lg:hidden"
           style={{ backgroundImage: "url('/bgHero.webp')" }}>
      </div>

      {/* Background video only for md+ (desktop) */}
      <video
        className="hidden lg:block absolute inset-0 w-full h-full object-cover "
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
    </>
  );
}
