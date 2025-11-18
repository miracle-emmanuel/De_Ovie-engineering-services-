import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import projectmain from "../assets/Img/projectMain.jpg";
import ogun from "../assets/Img/ogun.jpg";
import ogun1 from "../assets/Img/ogun2.jpg";
import county from "../assets/Img/county.jpg";
import county1 from "../assets/Img/county2.jpg";
import enugu from "../assets/Img/enugu.jpg";
import enugu1 from "../assets/Img/enugu4.jpg";
import ikota from "../assets/Img/ikota.jpg";
import ikota1 from "../assets/Img/ikota2.jpg";
import enugu2 from "../assets/Img/enugu2.jpg";
import enugu3 from "../assets/Img/enugu3.jpg";
import ogumbo from "../assets/Img/ogumbo.jpg";
import ogumbo2 from "../assets/Img/ogumbo2.jpg";
import paradise from "../assets/Img/Paradise.jpg";
import paradise2 from "../assets/Img/paradise2.mp4";
import orchid from "../assets/Img/orchid.jpg";
import orchid2 from "../assets/Img/orchid2.jpg";
orchid2


const Project = () => {
  return (
    <div className="dark:bg-black">
      <ScrollRestoration />
      <Navbar></Navbar>
      <center className="dark:text-white">
        <div className="bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center flex flex-col sm:flex-row md:flex lg:flex gap-10 ">
          <div className="text-left sm:text-[15px] text-1xl pl-5 sm:w-full md:w-1/2 lg:w-1/2">
            <h1 className="text-3xl sm:text-3xl md:text-2xl lg:text-7xl font-bold pb-5">
              {" "}
              Our Signature Project
            </h1>
            <p className="">
              Welcome to De ovie enginnering Services project page, where we
              showcase few of our major oustading services we have rendered.
              Our portfolio spans a diverse range of residential and commercial
              spaces, each crafted with meticulous attention to details and a
              passion for innovation.
            </p>
          </div>
          <div className="">
            <center>
              {" "}
              <img
                src={projectmain}
                alt=""
                className="w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[55rem] rounded-3xl"
              />
            </center>
          </div>
        </div>
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-7xl font-bold pt-5">
          {" "}
          Our Project
        </h1>
        <div>
          <div className="bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center flex flex-col sm:flex-row md:flex lg:flex gap-10 border-b ">
            <div className="text-left sm:text-[15px] text-1xl pl-5 sm:w-full md:w-1/2 lg:w-1/2">
              <h1 className="text-3xl sm:text-3xl md:text-2xl lg:text-7xl font-bold pb-5">
                {" "}
                Ogun State
              </h1>
              <p className="">
               3kw inverter and 5kwh battery with 5 unit of 400w panels installed at Ogun state Nigeria
              </p>
            </div>
            <div className="">
              <center>
                {" "}
                <img
                  src={ogun}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[55rem] rounded-3xl"
                />
              </center>
            </div>
            <div className="">
              <center>
                {" "}
                <img
                  src={ogun1}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[20rem] lg:w-[30rem] rounded-3xl"
                />
              </center>
            </div>
          </div>
          
          <div className="bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center flex flex-col sm:flex-row md:flex lg:flex gap-10 border-b ">
            <div className="">
              <center>
                {" "}
                <img
                  src={county}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[55rem] rounded-3xl"
                />
              </center>
            </div>
             <div className="">
              <center>
                {" "}
                <img
                  src={county1}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[20rem] lg:w-[30rem] rounded-3xl"
                />
              </center>
            </div>
            <div className="text-left sm:text-[15px] text-1xl pl-5 sm:w-full md:w-1/2 lg:w-1/2">
              <h1 className="text-3xl sm:text-3xl md:text-2xl lg:text-7xl font-bold pb-5">
                {" "}
                Lekki County, Lagos
              </h1>
              <p className="">
                12kw inverter with 30kwh lithium battries and 24 units of 550w panels installed at Lekki County to power 4 units of 1.5horse power AC and other household appliences
              </p>
            </div>
          </div>

          <div className="bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center flex flex-col sm:flex-row md:flex lg:flex gap-10 border-b ">
            <div className="text-left sm:text-[15px] text-1xl pl-5 sm:w-full md:w-1/2 lg:w-1/2">
              <h1 className="text-3xl sm:text-3xl md:text-2xl lg:text-7xl font-bold pb-5">
                {" "}
                Enugu
              </h1>
              <p className="">
                3 unit of 100L solar water heater with 6pieces of solar panels installed at Enugu, Nigeria
              </p>
            </div>
            <div className="">
              <center>
                {" "}
                <img
                  src={enugu}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[55rem] rounded-3xl"
                />
              </center>
            </div>
             <div className="">
              <center>
                {" "}
                <img
                  src={enugu1}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[8rem] lg:w-[12rem] rounded-3xl"
                />
              </center>
            </div>
          </div>
          
          <div className="bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center flex flex-col sm:flex-row md:flex lg:flex gap-10 border-b ">
            <div className="">
              <center>
                {" "}
                <img
                  src={enugu2}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[55rem] rounded-3xl"
                />
              </center>
            </div>
            <div className="">
              <center>
                {" "}
                <img
                  src={enugu3}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[55rem] rounded-3xl"
                />
              </center>
            </div>
            <div className="text-left sm:text-[15px] text-1xl pl-5 sm:w-full md:w-1/2 lg:w-1/2">
              <h1 className="text-3xl sm:text-3xl md:text-2xl lg:text-7xl font-bold pb-5">
                {" "}
                Enugu
              </h1>
              <p className="">
3 units of (16kw inverter with 30kwh lithium nattries and 24 units of solar panels to power 5 air conition and other household appliences)              
               
              </p>
            </div>
          </div>
          <div className="bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center flex flex-col sm:flex-row md:flex lg:flex gap-10 border-b ">
            <div className="text-left sm:text-[15px] text-1xl pl-5 sm:w-full md:w-1/2 lg:w-1/2">
              <h1 className="text-3xl sm:text-3xl md:text-2xl lg:text-7xl font-bold pb-5">
                {" "}
                Paradise Estate, Lekki
              </h1>
              <p className="">
              8kva inverter and 15kwh battery with 20pieces of 550w solar panels that is able to carry
               3 1.5 horse power of AC and other household appliences installed at Paradise Estate Lekki
              </p>
            </div>
            <div className="">
              <center>
                {" "}
                <video
                  src={paradise2}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[20rem] lg:w-[55rem] rounded-3xl"
                />
              </center>
            </div>
            <div className="">
              <center>
                {" "}
                <img
                  src={paradise}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[8rem] lg:w-[25rem] rounded-3xl"
                />
              </center>
            </div>
          </div>
          
          <div className="bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center flex flex-col sm:flex-row md:flex lg:flex gap-10 border-b ">
            <div className="">
              <center>
                {" "}
                <img
                  src={ikota}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[20rem] lg:w-[40rem] rounded-3xl"
                />
              </center>
            </div>
            <div className="">
              <center>
                {" "}
                <img
                  src={ikota1}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[20rem] lg:w-[40rem] rounded-3xl"
                />
              </center>
            </div>
            <div className="text-left sm:text-[15px] text-1xl pl-5 sm:w-full md:w-1/2 lg:w-1/2">
              <h1 className="text-3xl sm:text-3xl md:text-2xl lg:text-7xl font-bold pb-5">
                {" "}
                Ikota Complex, Lagos
              </h1>
              <p className="">
                2.5ka inverter system to power an office space and four units of 400w solar panels and 2 units of 220w solar panels installed at Ikota Complex
              </p>
            </div>
          </div>
          <div className="bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center flex flex-col sm:flex-row md:flex lg:flex gap-10 border-b ">
            <div className="text-left sm:text-[15px] text-1xl pl-5 sm:w-full md:w-1/2 lg:w-1/2">
              <h1 className="text-3xl sm:text-3xl md:text-2xl lg:text-7xl font-bold pb-5">
                {" "}
                Ogumbo, Lagos
              </h1>
              <p className="">
                6kva inverter with 10units of 550w solar panel (an on grid) system successfully installed at Ogumbe
              </p>
            </div>
            <div className="">
              <center>
                {" "}
                <img
                  src={ogumbo}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[20rem] lg:w-[35rem] rounded-3xl"
                />
              </center>
            </div>
            <div className="">
              <center>
                {" "}
                <img
                  src={ogumbo2}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[20rem] lg:w-[35rem] rounded-3xl"
                />
              </center>
            </div>
          </div>
          <div className="bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center flex flex-col sm:flex-row md:flex lg:flex gap-10 border-b ">
            <div className="text-left sm:text-[15px] text-1xl pl-5 sm:w-full md:w-1/2 lg:w-1/2">
              <h1 className="text-3xl sm:text-3xl md:text-2xl lg:text-7xl font-bold pb-5">
                {" "}
                Orchid Road, Lekki
              </h1>
              <p className="">
                8kva inverter and 15kwh battery with 10pieces of 550w solar panels installed at Orchid Road Lekki
              </p>
            </div>
            <div className="">
              <center>
                {" "}
                <img
                  src={orchid}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[20rem] lg:w-[15rem] rounded-3xl"
                />
              </center>
            </div>
            <div className="">
              <center>
                {" "}
                <img
                  src={orchid2}
                  alt=""
                  className="w-[20rem] sm:w-[25rem] md:w-[20rem] lg:w-[20rem] rounded-3xl"
                />
              </center>
            </div>
          </div>
        </div>
      </center>
      <Footer></Footer>
    </div>
  );
};

export default Project;

