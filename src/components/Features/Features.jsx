import React, { useState } from "react";
import personImg from "../../assets/img/person.png";
import logoIcon from "../../assets/img/logoIcon.png";
import appIcon from "../../assets/img/appIcon.png";
import webIcon from "../../assets/img/webIcon.png";
import marketingIcon from "../../assets/img/marketingIcon.png";
import FeatureCard from "../FeatureCard/FeatureCard";

function Features() {
  const features = [
    {
      title: "Logo Design & Branding",
      icon: logoIcon,
      description:
        "Your logo is more than just a symbol—it's the star that guides your brand's journey. And your branding?",
    },
    {
      title: "App Development",
      icon: appIcon,
      description:
        "In an increasingly mobile world, your brand needs to be where your customers are—right in the palm of their hands.",
    },
    {
      title: "Website Development",
      icon: webIcon,
      description:
        "In the realm of the internet, your website is your castle. It's where your brand's story unfolds and where your customers",
    },
    {
      title: "Digital Marketing",
      icon: marketingIcon,
      description:
        "In the digital age, having a great product or service isn't enough—you need to be heard above the noise. At CollabEz",
    },
  ];

  return (
    <div className="bg-wholeBg lg:py-16 lg:px-8 px-4 py-8 max-w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-5">
          <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
            <div className="flex flex-col gap-3">
              <h3 className="text-white lg:text-6xl text-4xl font-bold">
                Why CollabEz ?
              </h3>
              <p className="text-introColor text-xl">
                We never faill to deliver desired result with E4!!{" "}
              </p>
            </div>
            <div className="lg:block flex justify-end">
              <img src={personImg} alt="" />
            </div>
          </div>

          <div className="max-w-full mx-auto">
            <div className="lg:grid lg:grid-cols-4 lg:gap-6 md:grid md:grid-cols-2 md:gap-6 grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
