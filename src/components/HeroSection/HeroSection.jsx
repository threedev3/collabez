import { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/img/logo.png";
import starImg from "../../assets/img/star.png";
import circleImg from "../../assets/img/circleimg.png";
import ellipseImg from "../../assets/img/ellipse.png";
import arrowImg from "../../assets/img/arrow.png";
import { useGSAP } from "@gsap/react"; // Import useGSAP from @gsap/react
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const navigation = [
  { name: "Home", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Features", href: "#" },
  { name: "Contact", href: "#" },
];

export default function HeroSection({ portfolioRef, featuresRef, contactRef, homeRef }) {
  // const gsapInstance = useGSAP(gsap); // Initialize GSAP useGSAP hook with gsap instance
  const mainContainer = useRef(null);
  const menuToggle = useRef(null);
  const fullpageMenu = useRef(null);
  const navRef = useRef(null);
  const menuBg = useRef(null);
  const menuItems = useRef([]);
  const viewAnimate = useRef(null);
  const headingRef = useRef(null);
  const heroTextRef = useRef(null);
  const introHead = useRef(null);
  const introPara = useRef(null);
  const viewBtn = useRef(null);
  const headerRef = useRef(null);
  const circleRef = useRef(null);
  const roundRef1 = useRef(null);
  const roundRef2 = useRef(null);
  const viewText = useRef(null);

  const sections = {
    Home: mainContainer,
    Portfolio: portfolioRef,
    Features: featuresRef,
    Contact: contactRef,
  };

  console.log(menuItems.current);

  const { contextSafe } = useGSAP({ scope: mainContainer });

  let menuBar;
  let navTl;

  useEffect(() => {
    menuBar = gsap.timeline({ paused: true });

    menuBar
      .to(
        ".bar-1",

        {
          attr: { d: "M8,2 L2,8" },
          x: 1,
          ease: "power2.inOut",
          duration: 0.5,
        },
        "start"
      )
      .to(
        ".bar-2",

        {
          autoAlpha: 0,
          duration: 0.5,
        },
        "start"
      )
      .to(
        ".bar-3",

        {
          attr: { d: "M8,8 L2,2" },
          x: 1,
          ease: "power2.inOut",
          duration: 0.5,
        },
        "start"
      );

    navTl = gsap.timeline({ paused: true });

    navTl
      .to(
        fullpageMenu.current,
        {
          duration: 0,
          display: "block",
          ease: "expo.inOut",
        },
        "<"
      )
      .to(
        menuBg.current,
        {
          duration: 0,
          opacity: 1,
          ease: "expo.inOut",
        },
        "<"
      )
      .to(
        navRef.current,
        {
          duration: 1,
          opacity: 100,
          ease: "expo.inOut",
        },
        "<"
      );

    navTl.to(
      menuItems.current,
      {
        duration: 2,
        opacity: 100,

        rotateY: 30,
        stagger: 0.2,
        ease: "expo.inOut",
      },
      "-=0.5"
    );

    menuBar.reverse();
    navTl.reverse();

    const handleMenuToggle = () => {
      menuBar.reversed(!menuBar.reversed());
      navTl.reversed(!navTl.reversed());

      if (!navTl.reversed()) {
        document.body.style.overflow = "hidden"; // Prevent scrolling
      } else {
        document.body.style.overflow = ""; // Restore scrolling
      }
    };

    menuToggle.current.addEventListener("click", handleMenuToggle);

    return () => {
      menuToggle.current.removeEventListener("click", handleMenuToggle);
    };
  });

  //   var tl = gsap.timeline({
  //     onStart: () => {
  //       setMobileMenuOpen(true);
  //     },
  //   });

  //   tl.to(mainContainer.current, {
  //     duration: 0.3,
  //     opacity: 0.5,
  //     ease: "power1.in",
  //   })
  //     .fromTo(
  //       container.current,
  //       { x: "100%", duration: 0.5, ease: "power2.out" },
  //       {
  //         x: "0%",
  //         duration: 0.5,
  //         ease: "power2.out",
  //       }
  //     )
  //     .from(menuItems.current, {
  //       duration: 1,
  //       opacity: 0,
  //       y: 20,
  //       stagger: 0.1,
  //       ease: "expo.inOut",
  //     });
  // });

  // const closeMobileMenu = contextSafe(() => {
  //   const timeline = gsap.timeline({
  //     onComplete: () => {
  //       setMobileMenuOpen(false);
  //     },
  //   });

  //   timeline
  //     .to(container.current, {
  //       x: "100%",
  //       duration: 0.5,
  //       ease: "power2.in",
  //     })
  //     .to(mainContainer.current, {
  //       duration: 0.3,
  //       opacity: 1,
  //       ease: "power2.in",
  //     });
  // });

  useEffect(() => {
    const letters = headingRef.current.querySelectorAll("span");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.inOut",
      }
    );
  }, []);
  useGSAP(() => {
    gsap.from(heroTextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });
  useGSAP(() => {
    gsap.to(circleRef.current, {
      y: 33,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "back.out",
    });
  });

  const viewProjText = gsap.timeline({ paused: true });

  useGSAP(() => {
    viewProjText
      .from(introHead.current, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power1.out",
        scrollTrigger: {
          trigger: introHead.current,
          start: "top 70%",
          toggleActions: "play none none none",
          scrub: true,
        },
      })
      .from(introPara.current, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power1.out",
        scrollTrigger: {
          trigger: introPara.current,
          start: "top 80%",
          toggleActions: "play none none none",
          scrub: true,
        },
      })
      .from(viewBtn.current, {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: viewBtn.current,
          start: "top 80%",
          toggleActions: "play none none none",
          scrub: true,
        },
      });
  });
  // const headerAnimate = gsap.timeline({ paused: true });

  useGSAP(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power1.out",
      stagger: 0.5,
    });
  });

  const handleNavClick = (section) => {
    const targetRef = sections[section];

    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
    }

    // Close the menu
    navTl.reverse();
    menuBar.reverse();

    document.body.style.overflow = ""; // Restore scrolling
  };

  let animationRef = null;

  const animateViewEnter = contextSafe(() => {
    gsap.to(viewAnimate.current, {
      x: 50,
      duration: 1,
      color: "#ffffff"
    });

    animationRef = gsap
      .timeline()
      .to(roundRef2.current, {
        x: 20,
        duration: 0
      })
      .to(viewText.current, {
        color: "#ffffff",
        duration: 0.3,
      })
      .to([roundRef1.current, roundRef2.current], {
        rotationY: 360,
        duration: 1.3,
        ease: "linear",
        // repeat: -1,
        // yoyo: true,
        transformOrigin: "center center",
      })
      .to(
        [roundRef1.current, roundRef2.current],
        {
          background: "linear-gradient(55deg, #FFAE00 0%, #ffc549 50%, #ff9f00 100%)",
          duration: 0.5,
          ease: "power1.out",
        },
        0
      );
  });
  const animateViewLeave = contextSafe(() => {
    gsap.to(viewAnimate.current, {
      x: 0,
      duration: 1,
    });
    gsap.to(roundRef2.current, {
      x: 0,
      duration: 0.5
    });
    gsap.to(viewText.current, {
      color: "#D9D9D9",
      duration: 0.3,
    })

    if (animationRef) {
      animationRef.kill();
      gsap.to([roundRef1.current, roundRef2.current], {
        rotationY: 0,
        background: "transparent",
        duration: 1,
        ease: "power1.out",
      });
    }
  });

  const text = "Branding Creative Design Logo";
  const textArray = text.split("");

  const chars = headingRef.current;

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="char"
        style={{
          display: "inline-block",
          whiteSpace: char === " " ? "pre" : "normal",
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <>
      <div
        className="bg-wholeBg bg-[url('/src/assets/img/herobg2.png')] bg-no-repeat bg-cover bg-moveup max-w-full relative overflow-hidden"
        ref={mainContainer}
      >
        <div className="bg-[url('/src/assets/img/herolines.png')] bg-no-repeat bg-cover bg-center w-full h-full">
          <div className="max-w-full mx-auto flex justify-center">
            <div className="w-[1150px] max-[1180px]:w-[1000px] max-[1024px]:w-[800px] max-[825px]:w-[600px] max-[625px]:w-[400px] max-[425px]:w-[260px] sm:h-[20px] h-[15px] bg-heroColor rounded-b-full" />
          </div>

          <header className="absolute inset-x-0 top-0 max-w-[1400px] mx-auto pt-8 px-4">
            <nav
              className="flex items-center justify-between py-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1 cursor-pointer z-20" ref={headerRef}>
                <a href="#" className="-m-1.5 p-1.5 h-20 w-auto " onClick={() => handleNavClick("Home")}>
                  <img className="object-cover" src={Logo} alt="" />
                </a>
              </div>
              <div className="flex">
                <button
                  className="bg-transparent border-none cursor-pointer relative z-[1000] outline-none"
                  id="menuToggle"
                  ref={menuToggle}
                >
                  <svg
                    viewBox="0 0 12 10"
                    className="hamburger"
                    height="40px"
                    width="40px"
                  >
                    <path
                      d="M10,2 L2,2"
                      className="bar-1 fill-none"
                      stroke="#fff"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M2,5 L10,5"
                      className="bar-2 fill-none"
                      stroke="#fff"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M10,8 L2,8"
                      className="bar-3 fill-none"
                      stroke="#fff"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </nav>

            <div
              className="fixed left-0 top-0 w-full h-screen z-50 hidden "
              ref={fullpageMenu}
            >
              <div className="flex justify-center items-center h-full py-20 px-12">
                <div
                  className="h-full w-full absolute left-0 top-0 bg-black/50 backdrop-blur-lg z-40 opacity-0"
                  ref={menuBg}
                ></div>
                <nav
                  className="relative z-50 text-center opacity-0"
                  ref={navRef}
                >
                  <ul className="list-none flex flex-col justify-center items-center">
                    {navigation.map((item, index) => (
                      <li className="overflow-hidden mt-5 " key={index}>
                        <a
                          onClick={() => handleNavClick(item.name)}
                          className="inline-block lg:text-[12vh] sm:text-[10vh] text-[6vh] uppercase font-bold leading-none tracking-wide text-transparent stroke-2 stroke-white menu-item opacity-0 cursor-pointer"
                          ref={(el) => (menuItems.current[index] = el)}
                        >
                          <span
                            className="relative block "
                            data-clip={item.name}
                          >
                            {item.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <div className="relative isolate px-4 pt-14 py-16  lg:px-8 max-w-full ">
            <div className="max-w-[1400px] mx-auto px-3 pt-32 sm:pt-32 lg:pt-40 lg:flex lg:flex-row lg:justify-between">
              <div>
                <h1
                  className="text-4xl max-w-2xl font-bold tracking-tight text-white sm:text-6xl md:text-6xl xl:text-7xl"
                  ref={headingRef}
                >
                  {splitText("Let's Create ")}
                  <span className="inline-block">
                    {splitText("Extraordinary ")}
                  </span>
                  <span className="text-heroColor inline-block">
                    {splitText("Logo")}
                  </span>
                </h1>

                <p
                  className="mt-6 text-lg leading-6 text-white"
                  ref={heroTextRef}
                >
                  Transforming Ideas into Extraordinary Digital {""}
                  <span className="inline-block">Experiences</span>
                </p>
              </div>
              <div className="relative flex items-center justify-center md:pt-4">
                <img
                  src={starImg}
                  alt="Star"
                  className="w-[450px] h-[450px] animate-spin"
                />
                <div className="absolute h-60 w-60">
                  <div className="h-full w-full border-2 border-heroColor rounded-full p-8 flex justify-center items-center animate-spinSlow">
                    {textArray.map((char, index) => {
                      // const angle = (index / textArray.length) * 360;
                      return (
                        <span
                          key={index}
                          className="absolute text-sm text-white top-5 ml-2 inline-block "
                          style={{
                            transform: `rotate(${index * 12}deg)`,
                            transformOrigin: "0 100px",
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

            {/* <div className="relative w-full lg:flex lg:justify-center hidden">
              <div className="h-20 w-10 p-1 bg-switchBg rounded-full">
                <div className="border-2 border-borderColor h-full w-full rounded-full flex justify-center">
                  <div
                    className="w-5 h-5 rounded-full bg-heroColor mt-1 "
                    ref={circleRef}
                  ></div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="w-full h-[10px] bg-heroColor"></div>
        </div>
        <div className="max-w-full lg:py-20 px-4 lg:px-8 py-10">
          <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row lg:justify-between lg:items-start flex flex-col gap-6">
            <div className="flex flex-col gap-4 lg:max-w-3xl max-w-full lg:grow">
              <h2
                className="text-white sm:text-6xl text-4xl font-bold"
                ref={introHead}
              >
                Where Digital Dreams{" "}
                <span className="lg:block">Take Flight</span>
              </h2>
              <p className="text-introColor lg:text-base" ref={introPara}>
                We are your creative partner in the digital realm. We're not
                just a company, we're a team of dreamers, creators, and
                innovators dedicated to bringing your digital dreams to life.
              </p>
            </div>

            <div
              className="lg:w-[270px] w-full relative flex gap-12 items-center cursor-pointer"
              onClick={() => handleNavClick("Portfolio")}
              ref={viewBtn}
            >
              <div
                className="relative"
                onMouseEnter={animateViewEnter}
                onMouseLeave={animateViewLeave}
              >
                <div
                  className="w-20 h-20 border-2 border-borderColor rounded-full"
                  ref={roundRef1}
                />
                <div
                  className="w-20 h-20 border-2 border-borderColor rounded-full absolute top-0 left-0"
                  ref={roundRef2}
                />
              </div>
              <div
                className="absolute left-6 flex justify-start gap-6 w-full"
                ref={viewAnimate}
                onMouseEnter={animateViewEnter}
                onMouseLeave={animateViewLeave}
              >
                <p className="text-viewProj text-xs" ref={viewText}>View All Projects</p>
                <img src={arrowImg} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
