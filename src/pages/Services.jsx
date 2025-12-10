import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import arrow from "../assets/Img/right.png"
import panel from "../assets/Img/panel.svg"
import efficency from "../assets/Img/efficiency.svg"
import wind from "../assets/Img/wind.svg"
import  education from "../assets/Img/education.svg"
import maintaince from "../assets/Img/maintaince.svg"
import  reducing from "../assets/Img/reducing.svg"


const Services = () => {
  return (
    <div className="font-Roboto">
      <div>
        <ScrollRestoration />
        <Navbar></Navbar>

        {/* ---------------------------------------------- */}
        <div className=" bg-cover dark:bg-black">
          <div className="mx- p-20 justify-center items-center">
            <h1
              class=" text-4xl
                 font-semibold sm:text-[50px]  text-slate-900 dark:text-white my-10 text-center"
            >
              Our Services{" "}
            </h1>
            <ul className="flex flex-wrap flex-col-reverse sm:flex-row md:flex-wrap lg:flex-row justify-center gap-5">
              <li className="  rounded-3xl p-5 w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[20rem] shadow-md bg-gradient-to-br from-white to-green-100 dark:bg-gradient-to-br dark:from-green-100 dark:to-green-900 pt-20 space-y-2">
                <img
                  src={panel}
                  alt=""
                  srcset=""
                  className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] p-3 rounded-xl shadow-sm bg-white"
                />
                <h1 className="text-2xl font-thin">Solar Panel Installation</h1>
                <p>
                  We install high-efficiency monocrystalline and polycrystalline
                  solar panel from the top global brands.
                </p>

                <a href="https://wa.me/2348078586792">
                  <div className=" bg-green-300 rounded-full relative top-3 p-2  sm:text-[15px] text-1xl w-fit font-light flex gap-4">
                      <h1>Get Started</h1>
                      <img
                        src={arrow}
                        alt="Adventure"
                        class="w-[20px] sm:w-[50px] md:w-[25px] lg:w-[1.5rem]  bg-green-500 rounded-full p-1"
                      />
                  </div>
                </a>
              </li>
              <li className="  rounded-3xl p-5 w-[14rem] sm:w-[8rem] md:w-[13rem] lg:w-[20rem] shadow-md bg-gradient-to-bl  from-green-100 to-white dark:bg-gradient-to-br dark:from-green-900 dark:to-green-100 pb-20 space-y-2">
                <img
                  src={efficency}
                  alt=""
                  srcset=""
                  className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] p-3 rounded-xl shadow-sm  bg-white"
                />
                <h1 className="text-2xl font-thin">Energy Efficiency Audit</h1>
                <p>
                  Not sure what you need? Our solar engineers will assess your
                  power need and deliver efficient tailored system design.
                </p>
                <a href="https://wa.me/2348078586792">
                  <div className=" bg-green-300 rounded-full relative top-3 p-2  sm:text-[15px] text-1xl w-fit font-light flex gap-4">
                      <h1>Get Started</h1>
                      <img
                        src={arrow}
                        alt="Adventure"
                        class="w-[20px] sm:w-[50px] md:w-[25px] lg:w-[1.5rem]  bg-green-500 rounded-full p-1"
                      />
                  </div>
                </a>
              </li>
              <li className="  rounded-3xl p-5 w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[20rem] shadow-md bg-gradient-to-br from-white to-green-100 dark:bg-gradient-to-br dark:from-green-100 dark:to-green-900 pt-20 space-y-2">
                <img
                  src={reducing}
                  alt=""
                  srcset=""
                  className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] p-3 rounded-xl shadow-sm  bg-white"
                />
                <h1 className="text-2xl font-thin">Custom solar Solution</h1>
                <p>
                  Provide customized solar and inverter solution for homes,
                  bussiness, and industries, with a focus on high quality
                  panels.{" "}
                </p>
                <a href="https://wa.me/2348078586792">
                  <div className=" bg-green-300 rounded-full relative top-3 p-2  sm:text-[15px] text-1xl w-fit font-light flex gap-4">
                      <h1>Get Started</h1>
                      <img
                        src={arrow}
                        alt="Adventure"
                        class="w-[20px] sm:w-[50px] md:w-[25px] lg:w-[1.5rem]  bg-green-500 rounded-full p-1"
                      />
                  </div>
                </a>
              </li>
              <li className="  rounded-3xl p-5 w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[20rem] shadow-md bg-gradient-to-br from-white to-green-100 dark:bg-gradient-to-br dark:from-green-100 dark:to-green-900 pt-20 space-y-2">
                <img
                  src={maintaince}
                  alt=""
                  srcset=""
                  className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] p-3 rounded-xl shadow-sm  bg-white"
                />
                <h1 className="text-2xl font-thin">
                  System Maintance Services
                </h1>
                <p>
                  Get expert maintaince from certified technicians and onging
                  support to ensure peak performance from your safty year round.{" "}
                </p>
                <a href="https://wa.me/2348078586792">
                  <div className=" bg-green-300 rounded-full relative top-3 p-2  sm:text-[15px] text-1xl w-fit font-light flex gap-4">
                      <h1>Get Started</h1>
                      <img
                        src={arrow}
                        alt="Adventure"
                        class="w-[20px] sm:w-[50px] md:w-[25px] lg:w-[1.5rem]  bg-green-500 rounded-full p-1"
                      />
                  </div>
                </a>
              </li>
              <li className="  rounded-3xl p-5 w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[20rem] shadow-md bg-gradient-to-bl from-green-100 to-white dark:bg-gradient-to-br dark:from-green-900 dark:to-green-100 pb-20 space-y-2">
                <img
                  src={education}
                  alt=""
                  srcset=""
                  className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] p-3 rounded-xl shadow-sm  bg-white"
                />
                <h1 className="text-2xl font-thin">Consulting and Education</h1>
                <p>
                  Workshops, audits, and stratagy session for individuals,
                  business and schools.
                </p>
                <a href="https://wa.me/2348078586792">
                  <div className=" bg-green-300 rounded-full relative top-3 p-2  sm:text-[15px] text-1xl w-fit font-light flex gap-4">
                      <h1>Get Started</h1>
                      <img
                        src={arrow}
                        alt="Adventure"
                        class="w-[20px] sm:w-[50px] md:w-[25px] lg:w-[1.5rem]  bg-green-500 rounded-full p-1"
                      />
                  </div>
                </a>
              </li>
              <li className="  rounded-3xl p-5 w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[20rem] shadow-md bg-gradient-to-br from-white to-green-100 dark:bg-gradient-to-br dark:from-green-100 dark:to-green-900 pt-20 space-y-2">
                <img
                  src={wind}
                  alt=""
                  srcset=""
                  className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] p-3 rounded-xl shadow-sm  bg-white"
                />
                <h1 className="text-2xl font-thin">Wind Power Solution</h1>
                <p>
                  Community scale wind turbines with smart grid integration, Transistioning to renewable energy solution to achieve a sustainable energy.
                </p>
                <a href="https://wa.me/2348078586792">
                  <div className=" bg-green-300 rounded-full relative top-3 p-2  sm:text-[15px] text-1xl w-fit font-light flex gap-4">
                      <h1>Get Started</h1>
                      <img
                        src={arrow}
                        alt="Adventure"
                        class="w-[20px] sm:w-[50px] md:w-[25px] lg:w-[1.5rem]  bg-green-500 rounded-full p-1"
                      />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Services;

