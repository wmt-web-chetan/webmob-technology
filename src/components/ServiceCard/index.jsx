import Button from "@/ui/Button";
import Icon from "@/ui/icon";
import ArrowRight from "../../assets/svg/ArrowRight.svg";
import arrowBlack from "../../assets/svg/arrowBlack.svg";
import Grid from "../../assets/svg/Grid.svg";
import Image from "next/image";

const ServiceCard = ({
  index,
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  className = "",
  isLast = false,
}) => {
  return (
    <div
      className={` group rounded-4xl p-4 mb-2 lg:p-6 border border-text-disabled shadow-sm hover:shadow-lg  hover:border-primary transition-all duration-300 h-full flex flex-col ${className} ${
        index == 0 ? "ml-5 " : ""
      } ${
        isLast
          ? "bg-primary border-2 border-text-disabled hover:border-text-disabled  text-text-primary relative"
          : ""
      }`}
    >
      {/* SVG Background or Icon */}
      <div className=" ">
        {isLast ? (
          <div
            className="absolute inset-0 w-full h-[100px] bg-no-repeat bg-contain " // Adjust height (e.g., 100px) to match title position
            style={{
              backgroundImage: `url(${Grid.src})`, // Use the SVG as a background
              backgroundSize: "cover", // Stretch to cover the area
              zIndex: 1, // Ensure SVG is above the bg-primary
            }}
          />
        ) : (
          ""
        )}
      </div>

      {/* Icon */}
      <div className="mb-6">
        <Icon type={icon} className={`w-10 h-10 lg:w-14 lg:h-14 `} />
      </div>

      {/* Content */}
      <div className="flex-1 ">
        <h3
          className={`text-xl lg:text-2xl font-medium text-text-primary mb-4 ${
            isLast ? "text-white" : ""
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-text-secondary text-sm lg:text-base leading-6 mb-6 ${
            isLast ? "text-white" : ""
          }`}
        >
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        {isLast ? (
          <a
            href={buttonHref}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-medium !bg-white text-text-primary  group-hover:scale-100 group-hover:translate-x-1 transition-all duration-200"
          >
            {buttonText}
            <Image
              src={arrowBlack}
              alt="Next"
              width={20}
              height={20}
              className="transition-transform duration-300 group-hover:-rotate-45"
            />
          </a>
        ) : (
          <Button
            href={buttonHref}
            variant="text"
            className="text-primary font-medium !p-0 group-hover:scale-100 group-hover:translate-x-1"
          >
            {buttonText}
            <Image
              src={ArrowRight}
              alt="Next"
              width={20}
              height={20}
              className="transition-transform duration-300 group-hover:-rotate-45"
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
