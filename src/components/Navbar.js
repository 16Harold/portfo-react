import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import closeImg from "../assets/close.png";
import { navLinksdata } from "../constants";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full md:h-24 mx-auto sticky z-30 top-0 bg-bodyColor flex justify-between items-center border-b-[4px] border-b-[#0e1f1e]">
      <div>
        <img src={logo} alt="logo" className="w-[40px] md:w-[80px] p-2" />
      </div>
      {/* menu */}

      <ul className="hidden md:flex items-center gap-10">
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            className="text-base font-normal text-[#89dee6] tracking-wide cursor-pointer hover:text-gray-600 duration-300"
            key={_id}
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* menu end */}

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? (
          <img src={menu} alt="menu" className="w-[40px] md:w-[80px] p-2 " />
        ) : (
          <img
            src={closeImg}
            alt="close button"
            className="w-[40px] md:w-[80px] p-2 "
          />
        )}
      </div>
      {/* hamburger end*/}
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 h-screen w-full bg-bodyColor flex flex-col justify-center items-center"
        }
      >
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            className="py-6 text-xl font-normal text-[#89dee6] tracking-wide cursor-pointer hover:text-gray-600 duration-300"
            key={_id}
          >
            <Link
              onClick={handleClick}
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* mobile menu end*/}
    </div>
  );
};

export default Navbar;
