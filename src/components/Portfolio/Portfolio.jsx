import React, { useState } from "react";
import projectImg from "../../assets/img/project.png";

function Portfolio() {

  const projects = [
    {
      title: "Project 1",
      img: projectImg
    },
    {
      title: "Project 2",
      img: projectImg
    },
    {
      title: "Project 3",
      img: projectImg
    },
  ]

  // Initialize an array with false values for each project
  const [hovered, setHovered] = useState([false, false, false]);

  // Handler to set hover state for a specific index
  const handleMouseEnter = (index) => {
    const newHovered = [false, false, false]; // Reset all to false
    newHovered[index] = true; // Set only the hovered index to true
    setHovered(newHovered);
  };

  // Handler to reset hover state for a specific index
  const handleMouseLeave = () => {
    setHovered([false, false, false]); // Reset all to false
  };

  return (
    <div className="bg-wholeBg lg:py-12 lg:px-8 py-8 px-4 max-w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h3 className="lg:text-6xl text-white text-5xl font-bold">Our Portfolio</h3>
            <p className="text-introColor text-xl ">
              Don't just take our word for it see for yourself. Our portfolio is
              a testament to our creativity, innovation, and dedication. It's a
              gallery of digital masterpieces, each one a success story of a
              brand that dared to dream big with CollabEz.
            </p>
          </div>

          <div className="grid grid-cols-1 border-2 border-portBorder box-content">
            {projects.map((project, index) => (
              <div
                key={index}
                className="lg:py-16 lg:px-24 py-8 px-16 border-l-transparent transition-all duration-300 ease-in-out hover:border-l-[12px] hover:bg-heroColor/5 hover:border-l-heroColor relative flex flex-row justify-between items-center"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <h3 className="lg:text-6xl text-4xl text-white">{project.title}</h3>
                <img
                  src={project.img} // Replace with your image source
                  alt={`Project`}
                  className={`absolute right-20 transition-transform duration-300 ease-in-out ${
                    hovered[index] ? "scale-100" : "scale-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
