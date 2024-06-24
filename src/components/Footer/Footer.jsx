import React from "react";
import footerLogo from "../../assets/img/footerlogo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-16 max-w-full relative shadow-inner ">
        
      <div className="md:grid md:grid-cols-3 md:gap-6 grid grid-cols-1 gap-6 max-w-[1400px] mx-auto pb-24">
        <div className="">
          <img src={footerLogo} alt="" className="" />
        </div>

        <div className="md:flex md:justify-center md:items-center text-white">
          <ul className="leading-8">
            <li>Home</li>
            <li>About</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex flex-col text-white gap-4">
          <div>
            <h3 className="lg:text-3xl text-2xl font-bold">Contact Us</h3>
          </div>

          <ul className="leading-8">
            <li>hello@collabez.co.uk</li>
            <li>+1 845 631 78 49</li>
            <li>20-22, Wenlock Road, N1 7GU, London, UK</li>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex justify-center text-white w-full text-base">
          <p>Copyright © {currentYear} Collabez</p>
        </div>
        <div className="flex justify-center">
          <div className="w-[1150px] max-[1180px]:w-[1000px] max-[1024px]:w-[800px] max-[825px]:w-[600px] max-[625px]:w-[400px] max-[425px]:w-[260px] sm:h-[20px] h-[15px]  bg-heroColor rounded-t-full " />
        </div>
      </div>
    </div>
  );
}

export default Footer;
