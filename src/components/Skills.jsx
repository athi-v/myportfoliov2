import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Java from "../assets/javascript.png";
import Boot from "../assets/bootstrap.png";
import Tail from "../assets/tailwind.png";
import Reactjs from "../assets/react.png";
import Githubs from "../assets/githubs.png";
import Nodes from "../assets/node.png";
import Api from "../assets/api.png";
import Mysq from "../assets/mysql.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-[#f1f5f9] text-[#0f172a] py-10"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600">
            Technologies
          </p>
          <p className="py-4">Technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#cbd5e1] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#cbd5e1] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#cbd5e1] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} />
            <p className="my-4">Javascript</p>
          </div>

          <div className="shadow-md shadow-[#cbd5e1] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Boot} />
            <p className="my-4">Bootstrap</p>
          </div>

          <div className="shadow-md shadow-[#cbd5e1] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tail} />
            <p className="my-4">TailwindCSS</p>
          </div>

          <div className="shadow-md shadow-[#cbd5e1] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Reactjs} />
            <p className="my-4">ReactJS</p>
          </div>

          <div className="shadow-md shadow-[#cbd5e1] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Githubs} />
            <p className="my-4">Github</p>
          </div>

          <div className="shadow-md shadow-[#cbd5e1] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Nodes} />
            <p className="my-4">Nodejs</p>
          </div>

          <div className="shadow-md shadow-[#cbd5e1] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Api} />
            <p className="my-4">APIs</p>
          </div>

          <div className="shadow-md shadow-[#cbd5e1] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mysq} />
            <p className="my-4">MySQL</p>
          </div>

          <div className="shadow-md shadow-[#cbd5e1] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} />
            <p className="my-4">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
