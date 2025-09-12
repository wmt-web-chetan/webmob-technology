import PrimaryButton from "@/components/PrimaryButton";
import styles from "./hero.module.css";
import Image from "next/image";

const HeroSection = (props) => {
  return (
    <>
      <div className={`${styles.heroBackground}   lg:h-screen `}>
        <div className="flex justify-center  items-center xl:pt-40">
          <h1 className="h1-heading text-white ">
            Where Vision Gets{" "}
            <span className="font-bold text-gradient-primary">Velocity</span>
          </h1>
        </div>
        <div className="flex justify-center mt-5">
          <p className="text-md 2xl:max-w-4xl 3xl:max-w-4xl text-white text-center">
            We don't just build software. We architect legacies. By fusing 15
            years of human craftsmanship with the transformative speed of AI, we
            turn ambitious ideas into market-defining digital realities
          </p>
          
        </div>
        <div className="flex justify-center mt-8 gap-3">
            <PrimaryButton text="Architect Your Future" className="text-white bg-primary-button text-sm"/>
            <PrimaryButton text=" Explore Our Realized Visions" className="border text-white border-white"/>
          </div>

      </div>
    </>
  );
};

export default HeroSection;
