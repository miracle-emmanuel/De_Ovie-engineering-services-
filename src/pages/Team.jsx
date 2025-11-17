import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import img from "../assets/Img/headerimg.jpg";
import { ScrollRestoration } from "react-router-dom";
import facebook from "../assets/Img/facebook.png";
import X from "../assets/Img/twitter.png";
import LinkedIN from "../assets/Img/linkedin-logo.png";
import intagram from "../assets/Img/instagram.png";
import ajala from "../assets/Img/team2.jpg";


const Team = () => {
  return (
    <div>
      <div>
        <ScrollRestoration />
        <Navbar></Navbar>
        <div className="max-w-[1640px] relative">
          <div className="absolute w-full h-full max-h-[500px] flex flex-col justify-center">
            <div className="w-fit ml-20 grid gap-5 text-left">
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  text-white">
                Team
              </h1>
              <h1 className="px-4 text-1xl sm:text-2xl md:text-2xl lg:text-2xl  text-white">
                Home <span className="text-[#720455]"> </span> Team
              </h1>
            </div>
          </div>
          <img src={img} alt="" className="max-h-[400px] w-full " />
        </div>
        <div className="bg-[#faf2f7] dark:bg-black py-10 ">
          <div className="text-center">
            {" "}
            <span
              class=" text-1xl
                  font-bold sm:text-2xl  text-[#720455]"
            >
              Our Team
            </span>
            <h1
              class=" text-3xl
                  font-bold sm:text-5xl text-black dark:text-white"
            >
              The People Who Make It Happen At <br /> Neroks Integrated Services
            </h1>
          </div>
          <div className=" mt-10">
            <ul className="flex flex-wrap gap-20   justify-center mx-10">
              {/* team1 */}
              
              {/* team 2 */}
              <li className="bg-white w-fit rounded-t-2xl shadow-lg">
                      <img
                        src={ajala}
                        alt=""
                        className="w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[20rem] rounded-t-2xl"
                      />
                <div className="grid m-8 ">
                  <h1 className="text-2xl font-bold">Oladimeji AJALA </h1>
                  <p>Brand Identity Designer</p>
                  {/* <p>Engineer</p> */}
                  <div className="mt-5 flex gap-5">
                    <a href="">
                      {" "}
                      <img
                        src={facebook}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="">
                      {" "}
                      <img
                        src={X}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="">
                      {" "}
                      <img
                        src={intagram}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/oladimeji-ajala-44288321a/">
                      {" "}
                      <img
                        src={LinkedIN}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                  </div>
                </div>
              </li>
              {/* team3 */}
              
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Team;
