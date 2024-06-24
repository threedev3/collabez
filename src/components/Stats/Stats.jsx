import React from "react";

function Stats() {
  const stats = [
    {
      title: "Project Done",
      count: "220+",
    },
    {
      title: "Our Team",
      count: "110+",
    },
    {
      title: "Reviewed",
      count: "135+",
    },
    {
      title: "Happy Client",
      count: "330+",
    },
  ];

  return (
    <div className="bg-wholeBg lg:py-12 lg:px-8 px-4 py-8 max-w-full border-t-2 border-t-borderColor border-b-2 border-b-borderColor">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-full lg:flex lg:flex-row lg:justify-between flex flex-row justify-center flex-wrap ">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-7 p-5 text-center min-w-[250px]">
              <h3 className="text-white lg:text-3xl text-3xl">{stat.title}</h3>
              <p className="text-heroColor lg:text-6xl text-6xl font-bold">{stat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
