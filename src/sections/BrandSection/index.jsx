import { Fragment } from "react"
import styles from "./BrandSection.module.css"
import Image from "next/image"

export default function BrandSection() {
  const logos = [
    { name: "Logo 2", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/07/logo2-1.png" },
    { name: "Merkel Science", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Merkel_science_logo-.webp" },
    // { name: "Merkel Science", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Vibez-Logo.webp" },
    { name: "Merkel Science", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Vibez-Logo.webp" },
    { name: "Houzquest", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Houzquest_logo.webp" },
    { name: "Primally Nourished", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Primally_nourished_logo.webp" },
    { name: "Honeywell", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Honeywell_logo.webp" },
    { name: "Logo 2", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/07/logo2-1.png" },
    { name: "Merkel Science", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Merkel_science_logo-.webp" },
    { name: "Houzquest", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Houzquest_logo.webp" },
    { name: "Primally Nourished", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Primally_nourished_logo.webp" },
    { name: "Honeywell", src: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Honeywell_logo.webp" },
  ]

  return (
    <Fragment>

      <section className="px-wrapper section-padding-y">
        <div className="container mx-auto ">
          {/* Header Section */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16 2xl:mb-16 3xl:mb-16">
            <div className="h2-heading mb-6">
              The Engine Behind Ambitious <span className="text-gradient-primary font-bold">Innovators</span>
            </div>
            <p className="h2-description max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl xl:max-w-8xl mx-auto text-pretty font-normal">
              From trailblazing startups to Fortune 500 giants, we are the trusted architectural partner for leaders
              <br className="hidden md:block" />
              who refuse to settle for second best.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24">
            {/* Trusted By Text - Left aligned */}
            <div className="mb-6 lg:mb-0 lg:shrink-0 text-center lg:text-left">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-medium ">
                Trusted by <span className="font-bold text-gradient-primary">3500+</span>
                <span className="xl:block"> Brand worldwide</span>
              </p>
            </div>

            {/* Logo Marquee - Takes remaining space */}
            <div className="flex-1 relative overflow-hidden">
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-20 ${styles.blueLineAccent}`}></div>
              <div className={`absolute left-1 top-1/2 -translate-y-1/2 w-48 h-20 pointer-events-none ${styles.blueGradient}`}></div>
              <div className={`absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-10 ${styles.whiteGradient}`}></div>
              <div className={styles.marqueeContainer}>
                <div className={`${styles.logoSet} gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 3xl:gap-14`}>
                  {logos.concat(logos).map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        priority
                        src={logo.src || "/placeholder.svg"}
                        alt={`${logo.name} logo`}
                        width={192}
                        height={96}
                        className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-22 3xl:h-24 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-40 2xl:w-44 3xl:w-48 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
