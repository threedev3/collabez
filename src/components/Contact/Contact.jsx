import React from "react";
import Footer from "../Footer/Footer";
import personTable from '../../assets/img/tablePerson.png'

function Contact() {
  return (
    <div className="bg-wholeBg bg-[url('/src/assets/img/contactbg.png')] bg-no-repeat bg-cover xl:bg-moveupfooter bg-moveup max-w-full relative  overflow-hidden lg:pt-16 lg:px-8 px-4 pt-8">

      
        


      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px]">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(circle at bottom left, #fce077, transparent 60%)",
              opacity: '0.7'
            }}
          />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto relative z-50">
        <div className="flex flex-col gap-3 max-w-2xl ">
          <h3 className="lg:text-6xl md:text-5xl text-4xl text-white font-bold">
            Contact <span className="text-heroColor">CollabEz</span>
          </h3>
          <p className="text-white md:text-xl text-base">
            We always try to implement our creative ideas at the highest level.
            Tell us about your project and we will make it work.
          </p>
        </div>

        <form className="lg:flex lg:flex-col lg:gap-10 flex flex-col gap-6 mt-10 max-w-full">
          <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4 flex flex-col gap-4 max-w-full">
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="" className="text-white">
                First Name
              </label>
              <input
                required
                type="text"
                className="p-3 rounded-lg bg-transparent border-2 border-heroColor"
                placeholder="Your First Name"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="" className="text-white">
                Last Name
              </label>
              <input
                required
                type="text"
                className="p-3 rounded-lg bg-transparent border-2 border-heroColor"
                placeholder="Your Last Name"
              />
            </div>
          </div>
          <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4 flex flex-col gap-4 max-w-full">
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="" className="text-white">
                Phone
              </label>
              <input
                required
                type="text"
                className="p-3 rounded-lg bg-transparent border-2 border-heroColor"
                placeholder="+11 8282 xxx"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="" className="text-white">
                Email
              </label>
              <input
                required
                type="text"
                className="p-3 rounded-lg bg-transparent border-2 border-heroColor"
                placeholder="email@domain.com"
              />
            </div>
          </div>
          <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4 max-w-full">
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="" className="text-white">
                Message
              </label>
              <textarea
                required
                rows={10}
                type="text"
                className="p-3 rounded-lg bg-transparent border-2 border-heroColor"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>

          <div className="">
            <button
              className="py-3 px-10 bg-heroColor rounded-full text-white text-sm"
              type="submit"
            >
              Send Message{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 21"
                fill="none"
                className="inline ml-2"
              >
                <path
                  d="M19.4354 1.08198C18.9352 0.568598 18.1949 0.377337 17.5046 0.578664L1.408 5.25952C0.679698 5.46186 0.163487 6.04269 0.0244302 6.78055C-0.117628 7.5315 0.378575 8.48479 1.02684 8.88342L6.0599 11.9768C6.57611 12.2939 7.24238 12.2144 7.66956 11.7835L13.4329 5.9843C13.723 5.68231 14.2032 5.68231 14.4934 5.9843C14.7835 6.27623 14.7835 6.74935 14.4934 7.05134L8.71999 12.8516C8.29181 13.2814 8.21178 13.9508 8.52691 14.4702L11.6022 19.5538C11.9623 20.1577 12.5826 20.5 13.2628 20.5C13.3429 20.5 13.4329 20.5 13.513 20.4899C14.2933 20.3893 14.9135 19.8558 15.1436 19.1008L19.9156 3.02479C20.1257 2.34028 19.9356 1.59537 19.4354 1.08198Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
