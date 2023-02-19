import React from "react";
import conImg from "../assets/conImg.png";
import mail from "../assets/mail.png";
import callImg from "../assets/call.png";
import { FaArrowDown } from "react-icons/fa";

const Contacts = () => {
  return (
    // main container
    <section
      id="contacts"
      className="w-full h-[650px] md:h-[500px] flex flex-col "
    >
      {/* heading */}
      <div className=" mb-5">
        <h1 className="uppercase font-bold text-designColor tracking-wide text-2xl md:text-2xl p-2  md:p-0">
          contacts
        </h1>
      </div>
      {/* heading end*/}
      {/* main contact container */}
      <div className="grid md:grid-cols-2 gap-2 md:gap-10">
        {/* left container */}
        <div className="bg-[#0e1f1e] flex flex-col justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
          <div className="flex md:animate-bounce justify-center items-center">
            <img src={callImg} alt="call img" className=" w-10 h-10" />
            <p className="px-5 p-2 uppercase test-xs md:text-xl font-bold text-gray-400  flex ">
              give me a call
            </p>
            <FaArrowDown className="text-designColor" />
          </div>
          <img src={conImg} alt="con img" className="md-[60%]  m-auto" />
        </div>
        {/* left container end*/}
        {/* right container */}
        <div className="bg-[#0e1f1e] flex flex-col justify-center shadow-shadowOne hover:bg-opacity-30 duration-2000 md:py-4 rounded-lg">
          <div className="flex md:animate-bounce justify-center items-center">
            <img src={mail} alt="mail img" className=" w-10 h-10 " />
            <p className="px-5 p-2 uppercase test-xs md:text-xl font-bold text-gray-400 ">
              message me
            </p>
            <FaArrowDown className="text-designColor" />
          </div>

          <form
            method="POST"
            action="https://getform.io/f/eb1deb89-1785-45ae-b874-e8a29b255e71"
            className="flex flex-col  w-[90%] justify-center items-center ml-4 md:ml-0"
          >
            <div className="">
              <p className="text-gray-400 w-full flex justify-center ">
                Submit the form below or shoot me an email at -
                hgkennelhar@gmail.com
              </p>
            </div>
            <input
              className="my-1 p-1 w-full flex md:ml-[12%] rounded-sm "
              name="name"
              type="text"
              placeholder="Name"
            />
            <input
              className="my-1 p-1 w-full flex md:ml-[12%]"
              name="email"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="my-5 p-1 w-full flex md:ml-[12%] text-black"
              name="message"
              rows="5"
              placeholder="Message"
            />
            <button className="text-[#89dee6] font-bold   w-full border-2 border-[#18b8c1] hover:bg-designColor hover:border-[#ccd6f6] px-3 py-2 md:ml-[72px]">
              Let's Collaborate
            </button>
          </form>
        </div>
        {/* right container end */}
      </div>
    </section>
    // main container
  );
};

export default Contacts;
