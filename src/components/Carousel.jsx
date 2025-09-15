"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";


const slides = [
  {
    title: "Generative AI Development & Consulting",
    desc: "We build and fine-tune systems that create. From generating hyper-personalized user experiences to automating content creation.",
    link: "Explore Generative AI →",
  },
  {
    title: "AR/VR Software Development",
    desc: "We build software that masterfully blends the digital and physical worlds. From AR training sims to immersive VR showrooms.",
    link: "Step into Immersive Realities →",
  },
  {
    title: "Enterprise Digital Transformation",
    desc: "Scaling businesses with intelligent automation, leveraging AI for sustainable growth.",
    link: "Explore Enterprise AI →",
  },
];

export default function KeenCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  return (
    <div className="max-w-6xl mx-auto py-12">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((s, i) => (
          <div
            key={i}
            className="keen-slider__slide flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl shadow p-6 w-full h-60 flex flex-col justify-between">
              <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="mt-3 text-gray-600 text-sm">{s.desc}</p>
              <a
                href="#"
                className="mt-4 text-blue-600 font-medium hover:underline"
              >
                {s.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
