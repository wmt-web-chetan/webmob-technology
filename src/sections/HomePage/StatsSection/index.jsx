import StatsAnimation from "../StatsAnimation";

const defaultStats = [
  { number: '24Mn+', description: 'App store downloads with 96%+ crash-free users' },
  { number: '99%', description: 'Happy Clients and 60% Recurring Business' },
  { number: '$4Bn+', description: 'Transaction values from Projects' },
  { number: '700+', description: 'Projects delivered successfully using 50+ technologies' },
  { number: '120+', description: 'In house Experts with average 4+ Years of experience' },
  { number: '20+', description: 'Industries served across 25+ countries' },
];

export default function StatsSection({ stats = [] }) {
  const statsData = stats.length > 0 ? stats : defaultStats;

  return (
    <section
      className="mx-auto bg-[#F0F4FF] px-wrapper section-padding-y"
      aria-labelledby="stats-heading"
    >
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-18 3xl:mb-20">
        <div
          id="stats-heading"
          className="h2-heading mb-3 sm:mb-4 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-5 3xl:mb-5"
        >
          The Data Behind the <span className="text-gradient-primary font-bold">Dominance</span>
        </div>
        <p className="h2-description max-w-7xl mx-auto leading-relaxed">
          For 15 years, WebMob Technologies has been obsessed with delivering tangible results. These numbers represent not just our
          past performance, but the foundation of trust upon which we build every new partnership.
        </p>
      </div>

      {/* Pass statsData to client component for animation */}
      <StatsAnimation statsData={statsData} />
    </section>
  );
}