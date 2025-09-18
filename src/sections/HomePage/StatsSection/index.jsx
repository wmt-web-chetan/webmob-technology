import StatsAnimation from "../StatsAnimation";

const defaultStats = [
  {
    number: "24Mn+",
    description: "App store downloads with 96%+ crash-free users",
  },
  { number: "99%", description: "Happy Clients and 60% Recurring Business" },
  { number: "$4Bn+", description: "Transaction values from Projects" },
  {
    number: "700+",
    description: "Projects delivered successfully using 50+ technologies",
  },
  {
    number: "120+",
    description: "In house Experts with average 4+ Years of experience",
  },
  { number: "20+", description: "Industries served across 25+ countries" },
];

export default function StatsSection({ stats = [] }) {
  const statsData = stats.length > 0 ? stats : defaultStats;

  return (
    <section
      className="mx-auto bg-light-bg px-wrapper section-padding-y"
      aria-labelledby="stats-heading"
    >
      {/* Header Section */}
      <div className="text-center ">
        <div id="stats-heading" className="h2-heading ">
          The Data Behind the{" "}
          <span className="text-gradient-primary font-bold">Dominance</span>
        </div>
        <div className="flex justify-center mt-3">
          <p className="h2-description  h2-description lg:max-w-3xl  xl:max-w-4xl  2xl:max-w-5xl 3xl:max-w-7xl text-center">
            For 15 years, WebMob Technologies has been obsessed with delivering
            tangible results. These numbers represent not just our past
            performance, but the foundation of trust upon which we build every
            new partnership.
          </p>
        </div>
      </div>

      {/* Pass statsData to client component for animation */}
      <StatsAnimation statsData={statsData} />
    </section>
  );
}
