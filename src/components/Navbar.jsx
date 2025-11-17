import React, { useState } from "react";
import Logo from "../assets/Img/logo2.svg";
// import Logo2 from "../assets/Img/logo2.svg";
import { Link } from "react-router-dom";
import arrow from "../assets/Img/right.png"

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className="sticky top-0 z-10 font-Roboto ">
      <section className="bg-white text-black flex flex-row justify-between md:px-36 items-center shadow-xl dark:text-white dark:bg-black p-3">
        <div>
          <Link to="/">
            {" "}
            <img src={Logo} alt="" className="w-[7rem] justify-center" />
           
          </Link>
        </div>
        <nav
          className="hidden md:flex text-[15px] sm:text-[12px] sm:mr-24 md:text-[12px] lg:text-[15px] gap-5 font-medium cursor-pointer p-1 relative left-[10rem] 
                "
          aria-label="main"
        >
          <div className="flex justify-between space-x-3">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Home
            </Link>
            <Link to="/about" spy={true} smooth={true} duration={500}>
              About Us
            </Link>
            <Link to="/services" spy={true} smooth={true} duration={500}>
              Services
            </Link>
            <Link to="/project" spy={true} smooth={true} duration={500}>
              Project
            </Link>
            <Link to="/product" spy={true} smooth={true} duration={500}>
              Product
            </Link>
          </div>
        </nav>
        <div>
          <div className=" flex md:hidden" onClick={handleChange}>
            <div
              id="humburger-button"
              class="text-3xl cursor-pointer mr-5"
            >
              &#9776;
            </div>
          </div>
        </div>
        <div className="hidden lg:flex bg-green-500 relative p-2  sm:text-[15px] text-1xl w-fit gap-4 font-light rounded-full">
          <Link to="/contact" spy={true} smooth={true} duration={500}>
            Contact us
          </Link>
          <img
            src={arrow}
            alt="Adventure"
            class="w-[20px] sm:w-[50px] md:w-[25px] lg:w-[1.5rem]  bg-white rounded-full p-1"
          />
        </div>
      </section>
      <div
        className={`${
          menu ? " translate-x-0" : "-translate-x-full"
        } md:hiden flex flex-col absolute bg-white left-0 top-15 font-medium text-[12px] text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300  dark:text-white dark:bg-black`}
      >
        <Link to="/" spy={true} smooth={true} duration={500}>
          Home
        </Link>
        <Link to="/about" spy={true} smooth={true} duration={500}>
          About Us
        </Link>
        <Link to="/services" spy={true} smooth={true} duration={500}>
          Services
        </Link>
        <Link to="/project" spy={true} smooth={true} duration={500}>
          Project
        </Link>
        <Link to="/product" spy={true} smooth={true} duration={500}>
          Product
        </Link>
        <Link to="/contact" spy={true} smooth={true} duration={500}>
          Contact us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
