import React from "react";
import lakoProj from "../assets/lakoProj.png";
import lc from "../assets/ml-converter.png";
import bmi from "../assets/bmi.png";
import wc from "../assets/weight-con.png";
import cs from "../assets/project.png";
import todo from "../assets/todo.png";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-5 md:mb-80 flex flex-col">
      <div className=" md:mb-10">
        <h1 className="p-2 md:p-0 uppercase font-bold text-designColor tracking-wide text-2xl">
          my projects
        </h1>
      </div>
      <div className="p-2 md:p-0 grid md:grid-cols-3 h-screen md:gap-14 overflow-auto md:overflow-visible">
        {/* proj 1 */}
        <div className="w-full rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-[#0e1f1e] to-[#0e1f1e] group    hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%]">
            <img
              src={lakoProj}
              alt="lako pos"
              className="rounded-lg w-full h-60  p-5 group-hover:scale-105 duration-300 cursor-pointer"
            />
          </div>

          <div className="w-full py-1 px-5 flex justify-between items-center ">
            <div>
              <h3 className="text-[#89dee6]">Lako POS System</h3>
            </div>

            <div className="text-3xl cursor-pointer hover:scale-125 duration-300 text-designColor flex items-center gap-1">
              <FaArrowRight className="text-xl text-[#89dee6]" />
              <a href="https://lakofronttest.onrender.com/">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="w-full p-5 mb-2">
            <h4 className="uppercase text-[#89dee6]">tools used</h4>
            <p className="mb-2">MERN</p>

            <h4 className="uppercase text-[#89dee6]">project description</h4>
            <p>
              A project use for monitoring sales, inventory, profit and stocks.
            </p>
          </div>
        </div>
        {/* proj 2 */}

        <div className="w-full rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-[#0e1f1e] to-[#0e1f1e] group    hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%]">
            <img
              src={todo}
              alt="todo logo"
              className="rounded-lg w-full h-60  p-5 group-hover:scale-105 duration-300 cursor-pointer"
            />
          </div>

          <div className="w-full py-1 px-5 flex justify-between items-center">
            <div>
              <h3 className="text-[#89dee6]">To do List</h3>
            </div>

            <div className="text-3xl cursor-pointer hover:scale-125 duration-300 text-designColor flex items-center gap-1">
              <FaArrowRight className="text-xl text-[#89dee6]" />
              <a href="https://16harold.github.io/todo/">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="w-full p-5 mb-2">
            <h4 className="uppercase text-[#89dee6]">tools used</h4>
            <p className="mb-2">HTML , CSS , JS</p>

            <h4 className="uppercase text-[#89dee6]">project description</h4>
            <p>
              A project to make a to list,and familiarize local storage and
              javascript.
            </p>
          </div>
        </div>

        {/* proj 3 */}

        <div className="w-full rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-[#0e1f1e] to-[#0e1f1e] group    hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%]">
            <img
              src={lc}
              alt="length converter"
              className="rounded-lg w-full h-60  p-5 group-hover:scale-105 duration-300 cursor-pointer"
            />
          </div>

          <div className="w-full py-1 px-5 flex justify-between items-center ">
            <div>
              <h3 className="text-[#89dee6]">Multiple Length Converter</h3>
            </div>

            <div className="text-3xl cursor-pointer hover:scale-125 duration-300 text-designColor flex items-center gap-1">
              <FaArrowRight className="text-xl text-[#89dee6]" />
              <a href="https://16harold.github.io/Multiple-Lenght-Converter/">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="w-full p-5 mb-2">
            <h4 className="uppercase text-[#89dee6]">tools used</h4>
            <p className="mb-2">HTML , CSS , JS</p>

            <h4 className="uppercase text-[#89dee6]r">project description</h4>
            <p>A project use to convert lentgh in different measurements.</p>
          </div>
        </div>

        {/* proj 4 */}
        <div className="w-full  rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-[#0e1f1e] to-[#0e1f1e] group    hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%]">
            <img
              src={wc}
              alt="weight converter"
              className="rounded-lg w-full h-60  p-5 group-hover:scale-105 duration-300 cursor-pointer"
            />
          </div>

          <div className="w-full py-1 px-5 flex justify-between items-center ">
            <div>
              <h3 className="text-[#89dee6]">Weight Converter</h3>
            </div>

            <div className="text-3xl cursor-pointer hover:scale-125 duration-300 text-designColor flex items-center gap-1">
              <FaArrowRight className="text-xl text-[#89dee6]" />
              <a href="https://16harold.github.io/weight-calculator/">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="w-full p-5 mb-2">
            <h4 className="uppercase text-[#89dee6]">tools used</h4>
            <p className="mb-2">HTML , CSS , JS</p>

            <h4 className="uppercase text-[#89dee6]">project description</h4>
            <p>
              A project use to convert weight from kilograms to Milligrams,
              Grams, Pounds.
            </p>
          </div>
        </div>
        {/* proj 5 */}

        <div className="w-full  rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-[#0e1f1e] to-[#0e1f1e] group    hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%]">
            <img
              src={bmi}
              alt="body mass index"
              className="rounded-lg w-full h-60  p-5 group-hover:scale-105 duration-300 cursor-pointer"
            />
          </div>

          <div className="w-full py-1 px-5 flex justify-between items-center ">
            <div>
              <h3 className="text-[#89dee6]">Body Mass Index</h3>
            </div>

            <div className="text-3xl cursor-pointer hover:scale-125 duration-300 text-designColor flex items-center gap-1">
              <FaArrowRight className="text-xl text-[#89dee6]" />
              <a href="https://16harold.github.io/BMI-Calculator/">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="w-full p-5 mb-2">
            <h4 className="uppercase text-[#89dee6]">tools used</h4>
            <p className="mb-2">HTML , CSS , JS</p>

            <h4 className="uppercase text-[#89dee6]">project description</h4>
            <p>
              A project use to monitor body mass index and notify your bmi
              status.
            </p>
          </div>
        </div>

        {/* proj 6 */}
        <div className="w-full  rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-[#0e1f1e] to-[#0e1f1e] group    hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%]">
            <img
              src={cs}
              alt="coming soon"
              className="rounded-lg w-full h-60  p-5 group-hover:scale-105 duration-300 cursor-pointer"
            />
          </div>

          <div className="w-full py-1 px-5 flex justify-between items-center ">
            <div>
              <h3 className="text-[#89dee6]">Coming Soon....</h3>
            </div>

            <div className="text-3xl cursor-pointer hover:scale-125 duration-300 text-designColor flex items-center gap-1">
              <FaArrowRight className="text-xl text-[#89dee6]" />
              <FaGithub />
            </div>
          </div>
          <div className="w-full p-5 mb-2">
            <h4 className="uppercase text-[#89dee6]">tools to be used</h4>
            <p className="mb-2">MERN</p>

            <h4 className="uppercase text-[#89dee6]">project description</h4>
            <p>A project for practicing local storage and other REACT hooks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
