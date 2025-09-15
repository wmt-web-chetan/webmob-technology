import React from "react";

const DominanceSection = () => {
  return (
    <div className="px-wrapper section-padding-y bg-light-bg">
      <div className="flex justify-center ">
        <h2 className="h2-heading text-center">
          The Data Behind the{" "}
          <span className="font-bold text-gradient-primary">Dominance</span>{" "}
        </h2>
      </div>
      <div className="flex justify-center mt-4">
        <p className="h2-description 2xl:max-w-4xl text-center">
          For 15 years, WebMob Technologies has been obsessed with delivering
          tangible results. These numbers represent not just our past
          performance, but the foundation of trust upon which we build every new
          partnership.
        </p>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-1 gap-5 max-w-5xl">
          <div className="flex-3 bg-white rounded-2xl">div1</div>
          <div className="flex-2 bg-white rounded-2xl">div1</div>
          <div className="flex-2 bg-white rounded-2xl">div1</div>
        </div>
      </div>
    </div>
  );
};

export default DominanceSection;
