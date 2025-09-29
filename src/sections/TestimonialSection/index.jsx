// sections/TestimonialSection/index.jsx (SSR Component)
import TestimonialSlider from "@/components/TestimonialSlider";
import demoImage from "../../assets/images/demo.png";
import mellySvg from "../../assets/svg/Melly.svg";
import clutch from "../../assets/svg/clutch.svg";

// Static testimonials data - can be moved to a separate data file
const testimonialsData = [
  {
    id: 1,
    image: demoImage,
    personImage: demoImage,
    text: "WebMob Technologies has delivered the app with the majority of the required features and expertly matched the frontend to the supplied UI design. The team has consistently provided high-quality work on time. They've also maintained clear, honest communication via online meetings. online meetings.honest communication via online meetings. ",
    name: "Andoni",
    position: "CEO & Founder at",
    company: mellySvg,
    rating: clutch,
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    image: demoImage,
    personImage: demoImage,
    text: "Outstanding service and exceptional quality. The development team exceeded our expectations with their technical expertise and attention to detail. Communication was seamless throughout the project. Outstanding service and exceptional quality.",
    name: "Sarah Johnson",
    position: "CTO at",
    company: mellySvg,
    rating: clutch,
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    image: demoImage,
    personImage: demoImage,
    text: "Professional, reliable, and innovative solutions. WebMob Technologies transformed our ideas into reality with cutting-edge technology and user-friendly design.",
    name: "Michael Chen",
    position: "Product Manager at",
    company: mellySvg,
    rating: clutch,
    videoId: "dQw4w9WgXcQ",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-light-bg">
      <div className="px-wrapper section-padding-y max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-center">
          <h2 className="h2-heading text-center text-text-primary">
            The{" "}
            <span className="font-semibold text-gradient-primary">
              Human Experience
            </span>{" "} 
            <span>

            Tech-Powered Partnership
            </span>
          </h2>
        </div>
        <div className="flex justify-center mt-4">
          <p className="h2-description text-center">
            Technology is our tool, but people are our purpose. Hear directly
            from the leaders and innovators we've had the privilege of
            partnering with.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="mt-2 md:mt-5 lg:mt-14">
          <TestimonialSlider testimonials={testimonialsData} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;