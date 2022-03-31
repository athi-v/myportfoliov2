import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-teal-500 ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#f7f5f5]">
          Athenkosi Vinqi
        </h1>
        <h2 className="text-3xl text-[#8a8787] sm:text-5xl font-bold py-4 max-w-[700px]">
          I am Freelance Web Developer.
        </h2>
        <p className="text-[#8a8787] py-2">Welcome to my personal portfolio</p>

        <div>
          <button className="text-white group border-2 px-6 py-3 rounded flex items-center hover:bg-teal-600 hover:border-teal-600">
            See Projects
            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
