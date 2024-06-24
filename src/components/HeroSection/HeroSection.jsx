import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/img/logo.png";
import starImg from "../../assets/img/star.png";
import circleImg from "../../assets/img/circleimg.png";
import ellipseImg from "../../assets/img/ellipse.png";
import arrowImg from "../../assets/img/arrow.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const text = "Branding Creative Design Logo ";
  const textArray = text.split("");

  return (
    <>
      <div className="bg-wholeBg bg-[url('/src/assets/img/herobg2.png')] bg-no-repeat bg-cover bg-moveup max-w-full relative  overflow-hidden ">
        <div className=" bg-[url('/src/assets/img/herolines.png')] bg-no-repeat bg-cover bg-center w-full h-full">
          <div className="max-w-full mx-auto flex justify-center">
            <div className="w-[1150px] max-[1180px]:w-[1000px] max-[1024px]:w-[800px] max-[825px]:w-[600px] max-[625px]:w-[400px] max-[425px]:w-[260px] sm:h-[20px] h-[15px]  bg-heroColor rounded-b-full " />
          </div>

          <header className="absolute inset-x-0 top-0 max-w-[1400px] mx-auto pt-8 px-4">
            <nav
              className="flex items-center justify-between  py-8 "
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <img className="h-12 w-auto" src={Logo} alt="" />
                </a>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-menuIcon cursor-pointer z-20"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>
            </nav>
            <Dialog
              className=""
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-50" />
              <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </header>

          <div className="relative isolate px-4 pt-14 lg:px-8 max-w-full">
            <div className="max-w-[1400px] mx-auto py-16 px-3 sm:pt-32 lg:pt-40 lg:flex lg:flex-row lg:justify-between ">
              <div className="">
                <h1 className="text-4xl max-w-2xl font-bold tracking-tight text-white md:text-7xl relative z-50">
                  Let's Create Extraordinary
                  <span className="text-heroColor"> Logo</span>
                </h1>
                <p className="mt-6 text-lg leading-6 text-white">
                  Transforming Ideas into Extraordinary Digital
                  <span className="block">Experiences</span>
                </p>
              </div>
              <div className="relative flex items-center justify-center pt-16">
                <img
                  src={starImg}
                  alt="Star"
                  className="w-[450px] h-[450px] animate-spin"
                />
                <div className="absolute">
                  <div className="h-60 w-60 border-2 border-heroColor rounded-full p-8 flex justify-center items-center">
                    {textArray.map((char, index) => {
                      const angle = (index / textArray.length) * 360;
                      return (
                        <span
                          key={index}
                          className="absolute text-sm text-white"
                          style={{
                            transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg)`,
                            transformOrigin: "0 0",
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                    <div className="h-32 w-32 border-2 border-borderColor rounded-full flex justify-center items-center p-8">
                      <div className="h-8 w-8 border-2 border-white rounded-full bg-heroColor"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[10px] bg-heroColor"></div>
        </div>
        <div className="max-w-full lg:py-20 px-4 lg:px-8 py-10">
          <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row lg:justify-between lg:items-start flex flex-col gap-6">
            <div className="flex flex-col gap-4 lg:max-w-3xl max-w-full lg:grow">
              <h2 className="text-white lg:text-6xl text-5xl font-bold">
                Where Digital Dreams{" "}
                <span className="lg:block">Take Flight</span>
              </h2>
              <p className="text-introColor lg:text-base">
                We are your creative partner in the digital realm. We're not
                just a company, we're a team of dreamers, creators, and
                innovators dedicated to bringing your digital dreams to life.
              </p>
            </div>

            <div className="lg:w-[270px] w-full relative flex gap-12 items-center cursor-pointer ">
              <img src={ellipseImg} alt="" />
              <div className="absolute left-3 flex justify-start gap-6 w-full">
                <p className="text-viewProj text-xs">View All Projects</p>
              </div>
              <img src={arrowImg} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
