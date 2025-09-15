import KeenCarousel from "@/components/Carousel";
import ServiceCarousel from "@/components/Carousel";
import AipoweredVelocity from "@/sections/HomePage/AipoweredVelocity";
import DominanceSection from "@/sections/HomePage/DominanceSection";
import HeroSection from "@/sections/HomePage/HeroSection";
import ServiceSection from "@/sections/HomePage/ServiceSection";
import { sectionRegistry } from "@/sections/sectionsRegistry";
// import { getPageData } from "@/utils/pageApi";

export default async function Home() {
  // const data = await getPageData("home");
  // const pageBlocks = data?.data?.pageBy?.pageBuilder?.pageBuilder || [];

  return (
    <>
      {pageBlocks.map((block, i) => {
        const key = Object.keys(block)[0];
        const Component = sectionRegistry[key];

        if (!Component) {
          return null;
        }

        return <Component key={i} {...block[key]} />;
      })} 
      <HeroSection/>
      <ServiceSection/>
      <AipoweredVelocity/>
      <DominanceSection/>
     
      
    </>
  );
}
