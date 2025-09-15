import TailwindSlider from "@/components/Slider";
import BrandSection from "@/sections/BrandSection";
import AipoweredVelocity from "@/sections/HomePage/AipoweredVelocity";
import CaseStudySection from "@/sections/HomePage/CaseStudySection";
import HeroSection from "@/sections/HomePage/HeroSection";
import ServiceSection from "@/sections/HomePage/ServiceSection";
import { sectionRegistry } from "@/sections/sectionsRegistry";
import TestimonialSection from "@/sections/TestimonialSection";
import { getPageData } from "@/utils/pageApi";

export default async function Home() {
  const data = await getPageData("home");
  const pageBlocks = data?.data?.pageBy?.pageBuilder?.pageBuilder || [];

  return (
    <>
      {/* {pageBlocks.map((block, i) => {
        const key = Object.keys(block)[0];
        const Component = sectionRegistry[key];

        if (!Component) {
          return null;
        }

        return <Component key={i} {...block[key]} />;
      })} */}
      <HeroSection/>
      <BrandSection/>
      <ServiceSection/>
      <CaseStudySection/>
      <AipoweredVelocity/>
      <TestimonialSection/>
      {/* <TailwindSlider/> */}
      
    </>
  );
}
