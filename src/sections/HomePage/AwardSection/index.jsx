import React from "react"; 
import Image from "next/image";
import AwardCard from "@/components/AwardCard";
import VerticalAwardScroll from "@/components/VerticalAwardScroll";
import StarRating from "@/components/StarRating";
import clutchaward from "@/assets/svg/clutchaward.svg";
import cluthChampionsImg from "@/assets/svg/cluthChampions.svg";
import upCitybadgeImg from "@/assets/svg/upCitybadge.svg";
import topDevImg from "@/assets/svg/topDev.svg";
import tbWebDevImg from "@/assets/svg/tbWebDev.svg";



// Static data
const staticData = {
  title: "Excellence in Innovation Awards",
  description: "Our commitment to innovation and quality hasn't gone unnoticed. We are proud to be consistently recognized by leading industry bodies for our technical expertise, project success, and company culture. These accolades are a testament to the talent of our team and the trust of our partners.",
  mainRating: {
    logo: {
      node: {
        mediaItemUrl: clutchaward // Award/trophy icon
      }
    },
    value: "4.8",
    reviewCount: "44 reviews on Clutch"
  },
  awards: [
    {
      title: "Top Website Developer 2023",
      image: {
        node: {
          mediaItemUrl: upCitybadgeImg
        }
      }
    },
    {
      title: "Clutch Champion 2023", 
      image: {
        node: {
          mediaItemUrl:cluthChampionsImg
        }
      }
    },
    {
      title: "Top Web Development Company in 2022",
      image: {
        node: {
          mediaItemUrl: tbWebDevImg // Performance award
        }
      }
    },
    // {
    //   title: "Customer Choice Award 2024",
    //   image: {
    //     node: {
    //       mediaItemUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=200&fit=crop" // Customer award
    //     }
    //   }
    // },
    // {
    //   title: "Industry Leadership Award 2024",
    //   image: {
    //     node: {
    //       mediaItemUrl: "https://images.unsplash.com/photo-1624969862293-b749659ccc4e?w=200&h=200&fit=crop" // Leadership award
    //     }
    //   }
    // },
    // {
    //   title: "Premium Quality Award 2024",
    //   image: {
    //     node: {
    //       mediaItemUrl: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop" // Quality award
    //     }
    //   }
    // }
  ]
};

const AwardSection = () => {
  const formatTitle = (title) => {
    if (!title) return null;
    const words = title.split(" ");
    if (words.length < 2) return title;

    return words
      .map((word, index) => {
        if (index === 0) {
          return (
            <span key={index} className="text-gradient-secondry">
              {word}
            </span>
          );
        }
        return word;
      })
      .reduce((prev, curr, index) => {
        return index === 0 ? [curr] : [...prev, " ", curr];
      }, []);
  };

  return (
    <div className="bg-dark-bg flex flex-col xl:flex-row justify-between gap-8 xl:gap-0 py-12 xl:py-0 px-4 sm:px-24 md:px-30 xl:px-23 2xl:!px-48">
      <div className="w-full xl:max-w-3xl flex flex-col gap-y-8 xl:gap-y-16 justify-center">
        <div className="flex flex-col gap-y-4 xl:gap-y-6">
          <div className="text-white h2-heading leading-tight text-center xl:text-start">
          Validated by the <span className="font-bold">Industry's Best.</span>
            {/* {formatTitle(staticData.title)} */}
          </div>
          <p className="text-white text-base sm:text-lg lg:text-2xl font-normal leading-relaxed text-center xl:text-start">
            {staticData.description}
          </p>
        </div>
        <div className="flex flex-col gap-y-2 sm:gap-y-3 xl:gap-y-4 items-center xl:items-start">
          <div className="flex items-center gap-x-2 sm:gap-x-4 xl:gap-x-6 text-white text-lg sm:text-2xl lg:text-4xl font-bold">
            <div>
              {staticData.mainRating?.logo?.node?.mediaItemUrl && (
                <Image 
                  src={staticData.mainRating.logo.node.mediaItemUrl} 
                  alt="award logo" 
                  width={51} 
                  height={60} 
                />
              )}
            </div>
            <div className="text-5xl">{staticData.mainRating.value}</div>
            <div className="">
              <StarRating
                rating={Number(staticData.mainRating.value) ?? 0}
                aria-label={`Rating of ${staticData.mainRating.value} stars`}
              />
            </div>
          </div>
          <div className="text-base sm:text-lg lg:text-xl font-normal text-light-bg opacity-75 text-center sm:text-left">
            {staticData.mainRating.reviewCount}
          </div>
        </div>
      </div>

      {/* Award Cards - responsive layout */}
      <div className="w-full xl:w-auto xl:flex-shrink-0 xl:max-w-[600px]">
        {/* Mobile: Single horizontal scroll */}
        <div className="md:hidden">
          <VerticalAwardScroll>
            {staticData.awards.map((award, idx) => (
              <AwardCard key={idx} image={award?.image?.node?.mediaItemUrl} text={award?.title} />
            ))}
          </VerticalAwardScroll>
        </div>
        
        {/* Desktop: Two vertical columns */}
        <div className="hidden md:flex gap-x-6 sm:gap-x-8 xl:gap-x-14 justify-center xl:justify-end">
          <VerticalAwardScroll>
            {staticData.awards.map((award, idx) => (
              <AwardCard key={idx} image={award?.image?.node?.mediaItemUrl} text={award?.title} />
            ))}
          </VerticalAwardScroll>
          <VerticalAwardScroll reverse>
            {staticData.awards.map((award, idx) => (
              <AwardCard key={idx} image={award?.image?.node?.mediaItemUrl} text={award?.title} />
            ))}
          </VerticalAwardScroll>
        </div>
      </div>
    </div>
  );
};

export default AwardSection;