import React, { useRef } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Intro from "../../components/Intro/Intro";
import Stats from "../../components/Stats/Stats";
import Portfolio from "../../components/Portfolio/Portfolio";
import Features from "../../components/Features/Features";
import TextSlide from "../../components/TextSlide/TextSlide";
import Contact from "../../components/Contact/Contact";

function Home() {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div ref={homeRef}>
      <HeroSection
        portfolioRef={portfolioRef}
        featuresRef={featuresRef}
        contactRef={contactRef}
      />
      {/* <Intro /> */}
      <Stats />
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={contactRef}>
        <TextSlide
          portfolioRef={portfolioRef}
          featuresRef={featuresRef}
          contactRef={contactRef}
          homeRef={homeRef}
        />
      </div>
      {/* <Contact /> */}
    </div>
  );
}

export default Home;
