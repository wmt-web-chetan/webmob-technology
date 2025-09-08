import dynamic from "next/dynamic";

export const sectionRegistry = {
  ctaWithButtons: dynamic(() => import("./HomePage/HeroSection")),
 
};
