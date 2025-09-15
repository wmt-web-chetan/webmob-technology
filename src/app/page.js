import BottomFooter from "@/components/BottomFooter";
import BrandSection from "@/sections/BrandSection";
import AipoweredVelocity from "@/sections/HomePage/AipoweredVelocity";
import AwardSection from "@/sections/HomePage/AwardSection";
import BlogsSection from "@/sections/HomePage/BlogsSection";
import ServiceSection from "@/sections/HomePage/ServiceSection";
import StatsSection from "@/sections/HomePage/StatsSection";
import IntelligenceReturn from "@/sections/PerformanceSection";
import { sectionRegistry } from "@/sections/sectionsRegistry";
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
      <BrandSection/>
      <ServiceSection/>
      <AipoweredVelocity/>
      <StatsSection />
      <IntelligenceReturn />
      <BlogsSection />
      <AwardSection />
      <BottomFooter />
    </>
  );
}
