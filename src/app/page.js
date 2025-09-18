import BottomFooter from "@/components/BottomFooter";
import BrandSection from "@/sections/BrandSection";
import AipoweredVelocity from "@/sections/HomePage/AipoweredVelocity";
import AwardSection from "@/sections/HomePage/AwardSection";
import BlogsSection from "@/sections/HomePage/BlogsSection";
import TailwindSlider from "@/components/Slider";
// import BrandSection from "@/sections/BrandSection";
// import AipoweredVelocity from "@/sections/HomePage/AipoweredVelocity";
import CaseStudySection from "@/sections/HomePage/CaseStudySection";
import HeroSection from "@/sections/HomePage/HeroSection";
import ServiceSection from "@/sections/HomePage/ServiceSection";
import StatsSection from "@/sections/HomePage/StatsSection";
import IntelligenceReturn from "@/sections/PerformanceSection";
import { sectionRegistry } from "@/sections/sectionsRegistry";
import TestimonialSection from "@/sections/TestimonialSection";
import { getPageData } from "@/utils/pageApi";
import AvantGardeSection from "@/sections/HomePage/AvantGardeSection";
import FaqSection from "@/sections/HomePage/FaqSection";
import CubeCtaBanner from "@/sections/HomePage/CubeCtaBanner";
import SimpleCtaBanner from "@/sections/HomePage/SimpleCtaBanner";
import NewHeroSection from "@/sections/HomePage/NewHeroSection";
import IndustrySection from "@/sections/HomePage/IndustrySection";

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
      {/* <HeroSection/> */}
      <NewHeroSection></NewHeroSection>
      <BrandSection/>
      {/* <BrandSection/>
      <ServiceSection/>
      <CaseStudySection/>
      <AipoweredVelocity/>
      <StatsSection /> */}
      {/* <TestimonialSection/> */}
      <ServiceSection/>
      <CaseStudySection/>
      <AipoweredVelocity/>
      <StatsSection />
      <IndustrySection/>
      {/* <IntelligenceReturn />
      <BlogsSection />
      <AwardSection />
      <AvantGardeSection />
      <FaqSection />
      <CubeCtaBanner />
      <SimpleCtaBanner />
      <BottomFooter />
      <BottomFooter /> */}
    </>
  );
}
