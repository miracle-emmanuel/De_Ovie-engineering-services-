import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import Logo from "../assets/Img/logo2.svg";
import intergrity from "../assets/Img/Intergrity.svg";
import Innovation from "../assets/Img/Innovation.svg";
import Excellence from "../assets/Img/Excellence.svg";
import Sustability from "../assets/Img/Sustability.svg";
import TeamWork from "../assets/Img/TeamWork.svg";
import CustomerFocus from "../assets/Img/Intergrity.svg";
import Asuzu from "../assets/Img/Asuzu.jpg";
import Sunday from "../assets/Img/Sunday.jpg";
import Olatunde from "../assets/Img/Olatunde.jpg";
import Enerst from "../assets/Img/Enerst.jpg";

const About = () => {
  return (
    <div className="scroll-mt-20 font-Roboto">
      <ScrollRestoration />
      <Navbar></Navbar>
      <div className="dark:bg-black pb-10">
        <div className="">
          <section class="flex flex-col-reverse justify-center sm:flex-row items-center scroll-mt-20 ">
            <article class=" text-center sm:text-left gap-7">
              <h1
                class=" text-4xl
                 font-semibold sm:text-[50px]  text-slate-900 dark:text-white my-10 text-center"
              >
                About Us{" "}
              </h1>
              <div class="flex flex-col-reverse justify-center sm:flex-row items-center scroll-mt-20 dark:text-white gap-10 mx-10">
                <div className=" sm:w-1/2 space-y-8">
                  <p>
                    <span
                      class=" text-4xl
                 font-semibold sm:text-[30px]  text-slate-900 dark:text-green-500 my-10 text-center"
                    >
                      {" "}
                      Mission Statement
                    </span>{" "}
                    <br />
                    At De Ovie Engineering Services, our mission is to deliver
                    world-class solar energy solutions through innovation,
                    integrity, and technical excellence. We are dedicated to
                    empowering businesses, communities, and individuals with
                    reliable, efficient, and sustainable power systems that
                    drive economic growth while promoting environmental
                    stewardship. Through our commitment to quality and customer
                    satisfaction, we strive to be a trusted leader in the
                    renewable energy sector
                  </p>
                  <p>
                    <span
                      class=" text-4xl
                 font-semibold sm:text-[30px]  text-slate-900 dark:text-green-500 my-10 text-center"
                    >
                      {" "}
                      Vision Statement
                    </span>{" "}
                    <br />
                    To become a leading force in Africa’s renewable energy
                    transformation by providing innovative solar solutions that
                    power progress, inspire sustainability, and create a
                    cleaner, brighter future for generations to come.
                  </p>
                </div>
                <img src={Logo} alt="" class=" w-2/4" />
              </div>
              <div className="bg-green-50 dark:bg-black mt-5 p-5">
                <h1 class="text-[25px] sm:text-[25px] md:text-[30px] lg:text-3xl dark:text-white font-semibold text-center">
                Our Core Value
              </h1>
              <ul className= "flex flex-wrap flex-col-reverse sm:flex-row md:flex-wrap lg:flex-row justify-center space-x-3 gap-5">
                <li className="bg-white dark:bg-green-900 dark:border-none rounded-3xl p-5 w-fit sm:w-[8rem] md:w-[13rem] lg:w-[20rem] border 1px solid shadow-md space-y-3 text-center">
                  <center>
                    <img
                      src={intergrity}
                      alt=""
                      className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] rounded-t-2xl align-center bg-green-200 rounded-full p-1"
                    />
                  </center>
                  <p className="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl font-semibold">
                    Integrity
                  </p>
                  <p>
                    We conduct our business with honesty, transparency, and
                    accountability — ensuring trust and reliability in every
                    project we deliver.
                  </p>
                </li>
                <li className="bg-white dark:bg-green-900 dark:border-none rounded-3xl p-5 w-fit sm:w-[8rem] md:w-[13rem] lg:w-[20rem] border 1px solid shadow-md space-y-3 text-center">
                  <center>
                    <img
                      src={Innovation}
                      alt=""
                      className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] rounded-t-2xl align-center bg-green-200 rounded-full p-1"
                    />
                  </center>
                  <p className="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl font-semibold">
                    Innovation
                  </p>
                  <p>
                    We embrace creativity and forward-thinking engineering to
                    design efficient, sustainable, and cutting-edge solar
                    solutions.
                  </p>
                </li>
                <li className="bg-white dark:bg-green-900 dark:border-none rounded-3xl p-5 w-fit sm:w-[8rem] md:w-[13rem] lg:w-[20rem] border 1px solid shadow-md space-y-3 text-center">
                  <center>
                    <img
                      src={Excellence}
                      alt=""
                      className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] rounded-t-2xl align-center bg-green-200 rounded-full p-1"
                    />
                  </center>
                  <p className="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl font-semibold">
                    Sustainability
                  </p>
                  <p>
                    We conduct our business with honesty, transparency, and
                    accountability — ensuring trust and reliability in every
                    project we deliver.
                  </p>
                </li>
                <li className="bg-white dark:bg-green-900 dark:border-none rounded-3xl p-5 w-fit sm:w-[8rem] md:w-[13rem] lg:w-[20rem] border 1px solid shadow-md space-y-3 text-center">
                  <center>
                    <img
                      src={TeamWork}
                      alt=""
                      className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] rounded-t-2xl align-center bg-green-200 rounded-full p-1"
                    />
                  </center>
                  <p className="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl font-semibold">
                    Excellence
                  </p>
                  <p>
                    We pursue the highest standards in quality, safety, and
                    performance, ensuring every installation meets and exceeds
                    client expectations.
                  </p>
                </li>
                <li className="bg-white dark:bg-green-900 dark:border-none rounded-3xl p-5 w-fit sm:w-[8rem] md:w-[13rem] lg:w-[20rem] border 1px solid shadow-md space-y-3 text-center">
                  <center>
                    <img
                      src={CustomerFocus}
                      alt=""
                      className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] rounded-t-2xl align-center bg-green-200 rounded-full p-1"
                    />
                  </center>
                  <p className="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl font-semibold">
                    Customer Focus
                  </p>
                  <p>
                    Our clients are at the heart of everything we do. We build
                    long-term relationships by understanding their needs and
                    delivering tailored energy solutions that create lasting
                    value
                  </p>
                </li>
                <li className="bg-white dark:bg-green-900 dark:border-none rounded-3xl p-5 w-fit sm:w-[8rem] md:w-[13rem] lg:w-[20rem] border 1px solid shadow-md space-y-3 text-center">
                  <center>
                    <img
                      src={Sustability}
                      alt=""
                      className="w-[3rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] rounded-t-2xl align-center bg-green-200 rounded-full p-1"
                    />
                  </center>
                  <p className="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl font-semibold">
                    Team Work
                  </p>
                  <p>
                    We believe in collaboration — harnessing the collective
                    expertise of our engineers, partners, and clients to achieve
                    shared success.
                  </p>
                </li>
              </ul>
              </div>
            </article>
          </section>
         <div className="text-center">
           <h1 className="dark:text-white text-[25px] sm:text-[25px] md:text-[30px] lg:text-3xl font-semibold">Our team</h1>
          <p className="dark:text-white text-[10px] sm:text-[10px] md:text-[20px] lg:text-1xl">Great minds that make it happen</p>
         </div>
          <ul className="flex flex-wrap gap-20   justify-center mx-10 pt-10">

            <li className="bg-white dark:bg-green-900 dark:border-none w-fit rounded-t-2xl shadow-lg">
              <img
                src={Enerst}
                alt=""
                className="w-[15rem] sm:w-[15rem] md:w-[15rem] lg:w-[15rem] rounded-t-2xl"
              />
              <div className="grid m-8 ">
                <h1 className="text-1xl font-bold">Vieboro Ernest</h1>
                <p className="text-green-500">MD/CEO</p>
              </div>
            </li>
            <li className="bg-white dark:bg-green-900 dark:border-none w-fit rounded-t-2xl shadow-lg">
              <img
                src={Sunday}
                alt=""
                className="w-[15rem] sm:w-[15rem] md:w-[15rem] lg:w-[15rem] rounded-t-2xl"
              />
              <div className="grid m-8 ">
                <h1 className="text-1xl font-bold">Sunday Eneje</h1>
                <p className="text-green-500">Engineer</p>
              </div>
            </li>
            <li className="bg-white dark:bg-green-900 dark:border-none w-fit rounded-t-2xl shadow-lg">
              <img
                src={Olatunde}
                alt=""
                className="w-[15rem] sm:w-[15rem] md:w-[15rem] lg:w-[15rem] rounded-t-2xl"
              />
              <div className="grid m-8 ">
                <h1 className="text-1xl font-bold">Olatunde Agboola</h1>

                <p className="text-green-500">Engineer</p>
              </div>
            </li>
            <li className="bg-white dark:bg-green-900 dark:border-none w-fit rounded-t-2xl shadow-lg">
              <img
                src={Asuzu}
                alt=""
                className="w-[15rem] sm:w-[15rem] md:w-[15rem] lg:w-[15rem] rounded-t-2xl"
              />
              <div className="grid m-8 ">
                <h1 className="text-1xl font-bold">Asuzu Daniel </h1>
                <p className="text-green-500">Engineer</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default About;

