import React from "react";
import Contact from "../Contact/Contact";
import personTable from '../../assets/img/tablePerson.png'


function TextSlide() {
  return (
    <div className="bg-wholeBg lg:pt-16 pt-8 max-w-full shadow-xl relative">
      <div className="max-w-[1400px] mx-auto relative z-40">
        <div className="flex flex-col">
          <div className="text-marqueeText lg:text-[110px] text-7xl leading-tight">
            <marquee behavior="scroll" direction="left" scrollamount="20">
              Let's get your <span className="text-heroColor">business</span>
            </marquee>
          </div>
          <div className="text-marqueeText lg:text-[110px] text-7xl leading-tight">
            <marquee behavior="scroll" direction="right" scrollamount="20">
              where <span className="text-heroColor">you</span> want it to be
            </marquee>
          </div>
        </div>
      </div>

      <div className="absolute top-[350px] right-0 w-80 h-80 z-30 opacity-60">
          <img src={personTable} alt="" className="w-full h-full" />
        </div>

      <Contact />
    </div>
  );
}

export default TextSlide;
