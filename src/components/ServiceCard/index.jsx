import Button from "@/ui/Button";
import Icon from "@/ui/icon";
import ArrowRight from "../../assets/svg/ArrowRight.svg";
import Image from "next/image";

const ServiceCard = ({
  index,
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  className = "",
}) => 
  {
  return (
    <div
      className={` group rounded-4xl p-7 mb-2 lg:p-6 border border-text-disabled shadow-sm hover:shadow-lg  hover:border-primary transition-all duration-300 h-full flex flex-col ${className} ${index == 0 ? "ml-5" : ""}`}
    >
      {/* Icon */}
      <div className="mb-6">
        <Icon type={icon} className="w-10 h-10 lg:w-14 lg:h-14" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl lg:text-2xl font-medium text-text-primary mb-4 ">
          {title}
        </h3>

        <p className="text-text-secondary text-sm lg:text-base leading-6 mb-6">
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <Button
          href={buttonHref}
          variant="text"
          className=" text-primary font-medium !p-0 group-hover:scale-100 group-hover:translate-x-1"
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
      </div>
    </div>
  );
};

export default ServiceCard;
