import React from "react";
import bs from "../assets/bs.png";
import css from "../assets/css.png";
import ht from "../assets/html.png";
import js from "../assets/js.png";
import tcss from "../assets/tailwind.png";
import rt from "../assets/react.png";
import ps from "../assets/ps.png";
import njs from "../assets/node.png";
import figma from "../assets/figma.png";
import soon from "../assets/soon.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full h-auto md:h-[300px] py-10 md:py-20 md:mb-80 flex flex-col"
    >
      {/* main container */}
      <div className=" md:mb-10">
        {/* heading */}
        <div>
          <h1 className="p-2 md:p-0 uppercase font-bold text-designColor tracking-wide text-2xl">
            my skills
          </h1>
        </div>
        {/*heading end*/}

        {/* skills container */}
        <div className="grid grid-cols-2 p-2  md:grid-cols-5 group md:mt-10 gap-4 md:gap-10">
          {/* skill 1 */}
          <div className="bg-[#0e1f1e] flex justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
            <img
              src={ht}
              alt="html logo"
              className="w-[100px] hover:scale-125 duration-300"
            />
          </div>
          {/* skill 1 end*/}
          {/* skill 2 */}
          <div className="bg-[#0e1f1e] flex justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
            <img
              src={css}
              alt="css logo"
              className="w-[100px] hover:scale-125 duration-300"
            />
          </div>
          {/* skill 2 end*/}
          {/* skill 3 */}
          <div className="bg-[#0e1f1e] flex justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
            <img
              src={js}
              alt="js logo"
              className="w-[100px] hover:scale-125 duration-300"
            />
          </div>
          {/* skill 3 end*/}
          {/* skill 4 */}
          <div className="bg-[#0e1f1e] flex justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
            <img
              src={bs}
              alt="bs logo"
              className="w-[100px] hover:scale-125 duration-300"
            />
          </div>
          {/* skill 4 end*/}
          {/* skill 5 */}
          <div className="bg-[#0e1f1e] flex justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
            <img
              src={tcss}
              alt="tailwind logo"
              className="w-[100px] hover:scale-125 duration-300"
            />
          </div>
          {/* skill 5 end*/}
          {/* skill 6 */}
          <div className="bg-[#0e1f1e] flex justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
            <img
              src={rt}
              alt="react logo"
              className="w-[100px] hover:scale-125 duration-300"
            />
          </div>
          {/* skill 6 end*/}
          {/* skill 7 */}
          <div className="bg-[#0e1f1e] flex justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
            <img
              src={njs}
              alt="nodeJs logo"
              className="w-[100px] hover:scale-125 duration-300"
            />
          </div>
          {/* skill 7 end*/}
          {/* skill 8 */}
          <div className="bg-[#0e1f1e] flex justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
            <img
              src={ps}
              alt="ps logo"
              className="w-[100px] hover:scale-125 duration-300"
            />
          </div>
          {/* skill 8 end*/}
          {/* skill 9 */}
          <div className="bg-[#0e1f1e] flex justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
            <img
              src={figma}
              alt="figma logo"
              className="w-[100px] hover:scale-125 duration-300"
            />
          </div>
          {/* skill 1 end*/}
          {/* skill 10 */}
          <div className="bg-[#0e1f1e] flex justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
            <img
              src={soon}
              alt="coming soon logo"
              className="w-[100px] hover:scale-125 duration-300"
            />
          </div>
          {/* skill 10 end*/}
        </div>
        {/* skills container end*/}
      </div>
    </section>
  );
};

export default Skills;
