import PricingSectionClient from "@/components/PricingSectionClient";

const PricingSection = () => {
  // Static pricing data - server-side rendered
  const pricingData = {
    monthly: [
      {
        id: "basic-monthly",
        name: "Basic Plan",
        description:
          "Perfect for individuals just getting started. Affordable and simple.",
        price: "999",
        period: "month",
        isPopular: false,
        features: [
          "Access to core features",
          "Single user support",
          "5GB cloud storage",
          "Community forum access",
        ],
      },
      {
        id: "premium-monthly",
        name: "Pro Plan",
        description:
          "Ideal for professionals and small teams who need more power.",
        price: "2499",
        period: "month",
        isPopular: true,
        features: [
          "Everything in Basic",
          "Multi-user support (up to 5)",
          "50GB cloud storage",
          "Priority email support",
        ],
      },
      {
        id: "enterprise-monthly",
        name: "Enterprise Plan",
        description:
          "For businesses that require scalability, advanced features, and dedicated support.",
        price: "4999",
        period: "month",
        isPopular: false,
        features: [
          "Everything in Pro",
          "Unlimited users",
          "1TB cloud storage",
          "24/7 dedicated support",
        ],
      },
    ],
    annually: [
      {
        id: "basic-annual",
        name: "Basic Plan",
        description:
          "Save more with the annual plan. Best for individuals with long-term needs.",
        price: "9999",
        period: "year",
        isPopular: false,
        features: [
          "Access to core features",
          "Single user support",
          "5GB cloud storage",
          "Community forum access",
        ],
      },
      {
        id: "premium-annual",
        name: "Pro Plan",
        description:
          "Best value for small teams who want advanced tools at a lower cost.",
        price: "24999",
        period: "year",
        isPopular: true,
        features: [
          "Everything in Basic",
          "Multi-user support (up to 5)",
          "50GB cloud storage",
          "Priority email support",
        ],
      },
      {
        id: "enterprise-annual",
        name: "Enterprise Plan",
        description:
          "Comprehensive solution with enterprise-level security and support.",
        price: "49999",
        period: "year",
        isPopular: false,
        features: [
          "Everything in Pro",
          "Unlimited users",   
          "1TB cloud storage",
          "24/7 dedicated support",
        ],
      },
    ],
  };

  return (
    <section className="px-wrapper section-padding-y-v2 bg-white">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-18 2xl:mb-20 3xl:mb-24">
        <div className="h2-heading text-text-primary font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-6 2xl:mb-6 3xl:mb-8">
          <h2>Price & Plans</h2>
        </div>
        <div className="flex justify-center w-full">
          <p className="h2-description text-text-secondary max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl text-center !leading-normal px-4 sm:px-6 md:px-0">
            For over a decade, WebMob Technologies has focused on providing
            exceptional value. Our pricing reflects our commitment to quality
            and results, ensuring that every partnership is built on a solid
            foundation of trust and success.
          </p>
        </div>
      </div>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto">
        {/* Client-side Interactive Components */}
        <PricingSectionClient pricingData={pricingData} />
      </div>
    </section>
  );
};

export default PricingSection;
