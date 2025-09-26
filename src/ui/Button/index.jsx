import Link from "next/link";

const Button = ({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105";

  const variants = {
    primary: "bg-primary-button text-white shadow-lg hover:shadow-xl",
    text: "text-primary ",
    "gradient-pulse":
      "bg-gradient-to-r from-[#2a9fff] to-[#2c23e8] text-white ", // New variant
  };

  const Component = href ? Link : "button";
  const componentProps = href ? { href } : props;

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...componentProps}
    >
      {children}
    </Component>
  );
};

export default Button;
