import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import bannerImg from "../assets/banner2.png";
import bannerGif from "../assets/logo.gif";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Fullstack Web Developer.", "UX/UI Designer.", "Graphic Artist."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 2000,
  });

  return (
    // main container
    <section
      id="home"
      className="w-full p-2 md:py-20  md:flex items-center  gap-4 "
    >
      {/* left container */}
      <div className="w-full md:w-1/2 flex flex-col md:gap-20">
        <div className="w-full md:flex flex-col gap-10">
          <h4 className="text-md md:text-lg font-normal text-[#c9cacc] mb-3 md:mb-0">
            WELCOME TO MY WORLD
          </h4>
          <h1 className="text-[24px] md:text-6xl font-bold text-[#89dee6] ">
            Hi, I'm{""}
            <span className="text-designColor capitalize"> Harold Lopez</span>
          </h1>
          <h2 className="text-md md:text-3xl font-bold text-[#c9cacc] mb-3 md:mb-0 ">
            A {""}
            <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-sm  md:text-base text-[#c9cacc] leading-6 tracking-wide mb-3 md:mb-0">
            I'm a fullstack web developer specializing in building (and
            occasionally designing) digital experiences. Currently I'm enrolled
            in a UX / UI bootcamp, and i'm focused on building responsive
            full-stack web application.
          </p>
        </div>
        <div>
          <h2 className="uppercase mb-4 md:mb-0 text-designColor">
            Find me in
          </h2>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.facebook.com/hgharold.lopez"
              className="bannerIcon"
            >
              <FaFacebookF className="animate-bounce text-bodyColor " />
            </a>
            <a
              href="https://www.linkedin.com/in/harold-lopez-0a4473252/"
              className="bannerIcon"
            >
              <FaLinkedinIn className="animate-bounce text-bodyColor" />
            </a>
            <a href="https://github.com/16Harold" className="bannerIcon">
              <FaGithub className="animate-bounce text-bodyColor" />
            </a>
          </div>
        </div>
      </div>
      {/* left container end*/}

      {/* right contaier */}
      <div className="md:w-1/2 md:flex flex-col items-center  relative">
        {/* <div className="hidden md:flex absolute bottom-0 w-[520px] h-[520px] bg-gradient-to-r   from-[#5b6d6d] to-[#0e1f1e] shadow-shadowOne justify-center items-center rounded-[50%]"></div> */}
        <img
          src={bannerImg}
          alt="banner logo"
          className="opacity-80 hover:scale-110 duration-1000 "
        />
        <img
          src={bannerGif}
          alt="banner gif"
          className=" w-[150px] md:w-[200px] absolute md:top-52 md:left-[510px] left-0 top-28 opacity-80"
        />
      </div>
      {/* right container */}
    </section>
    // main container end
  );
};

export default Banner;
