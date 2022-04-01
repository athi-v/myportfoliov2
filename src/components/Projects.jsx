import React from "react";
import Chain from "../assets/crypto.avif";
import Covid from "../assets/covid.jpg";
import Telect from "../assets/telect.jpg";
import Ricky from "../assets/ricky.jpg";
import Active from "../assets/active.jpg";
import Dog from "../assets/dog.avif";
import Weather from "../assets/weather.jpg";
import Movie from "../assets/movies.avif";
import APIs from "../assets/apis.jpg";


const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full bg-[#f1f5f9] text-[#0f172a] py-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600 ">
            Projects
          </p>
          <p className="py-4">Checkout my projects</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${Chain})` }}
            className="shadow-lg shadow-[#cbd5e1] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="text-center opacity-0 group-hover:opacity-100">
              <span className="text-[#fff] text-2xl font-bold tracking-wider">
                ChainPal
              </span>
              <div>
                <div className="pt-8">
                  <a href="https://chainpal-crypto.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                    View Website                    
                    </button>
                  </a>
                  <a href="https://github.com/athi-v/chainpal">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Covid})` }}
            className="shadow-lg shadow-[#cbd5e1] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="text-center opacity-0 group-hover:opacity-100">
              <span className="text-[#fff] text-2xl font-bold tracking-wider">
                Covid-19
              </span>
              <div>
                <div className="pt-8">
                  <a href="https://covidcorona2019.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                    View Website                    
                    </button>
                  </a>
                  <a href="https://github.com/athi-v/covid2019">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#cbd5e1] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="text-center opacity-0 group-hover:opacity-100">
              <span className="text-[#fff] text-2xl font-bold tracking-wider">
                Weather
              </span>
              <div>
                <div className="pt-8">
                  <a href="https://weather-app-athi.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                    View Website                    
                    </button>
                  </a>
                  <a href="https://github.com/athi-v/weatherapp">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Active})` }}
            className="shadow-lg shadow-[#cbd5e1] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="text-center opacity-0 group-hover:opacity-100">
              <span className="text-[#fff] text-2xl font-bold tracking-wider">
                ActiveData
              </span>
              <div>
                <div className="pt-8">
                  <a href="https://active-data.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                    View Website                    
                    </button>
                  </a>
                  <a href="https://github.com/athi-v/active-data">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Telect})` }}
            className="shadow-lg shadow-[#cbd5e1] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="text-center opacity-0 group-hover:opacity-100">
              <span className="text-[#fff] text-2xl font-bold tracking-wider">
                Telect
              </span>
              <div>
                <div className="pt-8">
                  <a href="https://telect.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                    View Website                    
                    </button>
                  </a>
                  <a href="https://github.com/athi-v/telectcompany">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div
            style={{ backgroundImage: `url(${Dog})` }}
            className="shadow-lg shadow-[#cbd5e1] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="text-center opacity-0 group-hover:opacity-100">
              <span className="text-[#fff] text-2xl font-bold tracking-wider">
             DogTinder
              </span>
              <div>
                <div className="pt-8">
                  <a href="https://dogtinder-2020.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                    View Website                    
                    </button>
                  </a>
                  <a href="https://github.com/athi-v/dogtinder2020">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Movie})` }}
            className="shadow-lg shadow-[#cbd5e1] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="text-center opacity-0 group-hover:opacity-100">
              <span className="text-[#fff] text-2xl font-bold tracking-wider">
             Movie+
              </span>
              <div>
                <div className="pt-8">
                  <a href="https://movieplus2022.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                    View Website                    
                    </button>
                  </a>
                  <a href="https://github.com/athi-v/movies">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Ricky})` }}
            className="shadow-lg shadow-[#cbd5e1] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="text-center opacity-0 group-hover:opacity-100">
              <span className="text-[#fff] text-2xl font-bold tracking-wider">
             Ricky & Morty
              </span>
              <div>
                <div className="pt-8">
                  <a href="https://rickandmorty-cast.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                    View Website                    
                    </button>
                  </a>
                  <a href="https://github.com/athi-v/rickmorty">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${APIs})` }}
            className="shadow-lg shadow-[#cbd5e1] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="text-center opacity-0 group-hover:opacity-100">
              <span className="text-[#fff] text-2xl font-bold tracking-wider">
             Dummy API
              </span>
              <div>
                <div className="pt-8">
                  <a href="https://athenkosiapi.herokuapp.com/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                    View Website                    
                    </button>
                  </a>
                  <a href="https://github.com/athi-v/ap1">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
