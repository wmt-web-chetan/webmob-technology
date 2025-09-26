"use client"
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import patternglow from "@/assets/svg/svgpatternforHero.svg";
import { HeroContentSection } from "./HeroContentSection";
import { HeroVideoSection } from "./HeroVideoSection";



// Main component that combines both sections with conditional rendering
export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkIfMobile();

    // Check on resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      <HeroContentSection isMobile={isMobile} />
      {!isMobile && <HeroVideoSection />}
    </>
  );
}