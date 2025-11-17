import React from "react";
import solarman from "../assets/Img/solarman.jpg";
import solarman1 from "../assets/Img/solarman1.jpg";
import solarman2 from "../assets/Img/solarman2.jpg";
import { ScrollRestoration } from "react-router-dom";
// import intergrity from "../assets/Img/quality.png";
import Testimonals from "../pages/Testimonals";
import hero from "../assets/Img/hero.jpg";
import { Link } from "react-router-dom";
import panel from "../assets/Img/panel.svg"
import efficency from "../assets/Img/efficiency.svg"
import wind from "../assets/Img/wind.svg"
import  education from "../assets/Img/education.svg"
import maintaince from "../assets/Img/maintaince.svg"
import  reducing from "../assets/Img/reducing.svg"
import  natural from "../assets/Img/natural.svg"
import  empowering from "../assets/Img/empowering.svg"
import  customer from "../assets/Img/CustomerFocus.svg"
import arrow from "../assets/Img/right.png"

const Home = () => {
  return (
    <div className="dark:bg-black pb-10 sm:text-[10px] md:text-[15px] lg:text-[24px] font-Roboto transition-all duration-500 ease-in-out">
      <div className="relative mx-5 py-5">
        <div className="absolute w-full h-full max-h-[500px] flex flex-col justify-center">
          <div className="w-fit grid gap-5 text-left">
            <h1 className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-semi-bold  text-white text-center ">
              Green Future Today Powering a Sustainable Tomorrow
            </h1>
            <center>
              <h1 className="px-4 text-[12px] sm:text-2xl md:text-2xl lg:text-2xl  text-white text-center w-3/4 justify-center">
                Climate change isn't coming- it's here. Transistioning to
                sustainable energy isn't just a choice; it's a neccesity. We
                believe in;
              </h1>
              <a href="https://wa.me/2348078586792">
                <div className=" bg-white rounded-full relative top-3 p-2  sm:text-[15px] text-1xl w-fit font-light flex gap-4">
                  <h1>Get Started</h1>
                  <img
                    src={arrow}
                    alt="Adventure"
                    class="w-[20px] sm:w-[50px] md:w-[25px] lg:w-[1.5rem]  bg-green-300 rounded-full p-1"
                  />
                </div>
              </a>
            </center>
          </div>
        </div>
        <img
          src={hero}
          alt=""
          className="h-[70vh] sm:h[90vh] md:h-[90vh] w-full rounded-3xl  "
        />
      </div>
      {/* statements */}
      <section className="bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center dark:bg-black">
        <div className="text-center my-1">
          {" "}
          <span class=" text-3xl text-black font-medium dark:text-green-500">
            Why sustainability matters
          </span>
          <p
            class="
            font-slim  text-black dark:text-white my-5 mx-20 sm:mx-15 sm:text-[15px] text-1xl"
          >
            climate change isn't coming- its's here. Transitioning to
            sustainable energy isn't just a choice; it's a necessity. We believe
            in:
          </p>
        </div>
        <div>
          <ul class="list-none flex flex-wrap flex-col-reverse sm:flex-row md:flex-wrap lg:flex-row my-12 justify-center dark:text-black">
            <li
              class="items-left text-center text-black justify-center
            gap-20 w-fit sm:w-[13rem] md:w-[15rem] lg:w-[20rem]  grid p-5 rounded-s-lg bg-green-50 dark:bg-green-300 
             "
            >
              <center>
                {" "}
                <img
                  src={reducing }
                  alt=""
                  srcset=""
                  className=" w-[70px] sm:w-[50px] md:w-[50px] lg:w-[4rem] bg-green-500 rounded-full p-3 "
                />
              </center>
              <div class="text-left">
                <h3 class="text-2xl sm:text-1xl  font-medium mb-3 w-[15rem]">
                  Reducing Carbon Emission
                </h3>
                <p class="sm:text-[15px] text-1xl ">
                  Preserving Bioderversity for Future Generation Through
                  Conservation.
                </p>
              </div>
            </li>
            <li
              class="items-left text-center text-black justify-center
            gap-20 w-fit sm:w-[10rem] md:w-[15rem] lg:w-[20rem]  grid p-5 bg-green-100 dark:bg-green-600 
             "
            >
              <div class="text-left">
                <h3 class="text-2xl sm:text-1xl  font-medium mb-3 w-[15rem]">
                  Protecting Natural Ecosystem
                </h3>
                <p class="sm:text-[15px] text-1xl ">
                  Transitioning to Renewable Energy Solutions to Achieve a
                  Sustainable Energy
                </p>
              </div>
              <center>
                {" "}
                <img
                  src={natural}
                  alt=""
                  srcset=""
                  className=" w-[70px] sm:w-[50px] md:w-[50px] lg:w-[4rem] bg-green-500 rounded-full p-3 "
                />
              </center>
            </li>
            <li
              class="items-left text-center text-black justify-center
            gap-20 w-fit sm:w-[10rem] md:w-[15rem] lg:w-[20rem]  grid p-5 rounded-e-lg  bg-green-50 dark:bg-green-300 
             "
            >
              <center>
                {" "}
                <img
                  src={empowering}
                  alt=""
                  srcset=""
                  className=" w-[70px] sm:w-[50px] md:w-[50px] lg:w-[4rem] bg-green-500 rounded-full p-3 object-left-top"
                />
              </center>
              <div class="text-left">
                <h3 class="text-2xl sm:text-1xl  font-medium mb-3 w-[15rem]">
                  Empowering Communities
                </h3>
                <p class="sm:text-[15px] text-1xl ">
                  Fostering Local Sustainablity Initiative for Grassroot
                  Engagement.
                </p>
              </div>
            </li>
          </ul>{" "}
        </div>

        {/* debug from here */}
        <div className= "bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center  dark:text-white flex flex-col sm:flex-row md:grid lg:flex gap-10 ">
          <div className="">
            <center>
              {" "}
              <img
                src={solarman}
                alt=""
                className="w-[15rem] sm:w-[22rem] md:w-[25rem] lg:w-[58rem]"
              />
            </center>
          </div>
          <div className="text-left sm:text-[15px] text-1xl">
            <h1 className="text-3xl font-bold"> Our Solutions</h1>
            <p className="">
              Climate change isn't coming- it's here. Transistioning to
              sustainable energy isn't just a choice; it's a neccesity. We
              believe in;
            </p>
            <div>
              <ul className="flex flex-wrap flex-col-reverse sm:flex-row md:flex-wrap lg:flex-row sm:p-2 md:p-0 lg:p-6 sm:gap-2 md:gap-0 lg:gap-6 gap-3">
                <li class="items-left text-black justify-center w-fit sm:w-[8rem] md:w-[10rem] lg:w-[20rem] grid p-5 dark:bg-green-900 bg-green-500  rounded-xl">
                  <img
                    src={panel}
                    alt="Adventure"
                    class="w-[70px] sm:w-[50px] md:w-[40px] lg:w-[4rem]  bg-green-50 rounded-full p-2"
                  />
                  <h1 class="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl dark:text-green-500 font-semibold">
                    Solar Panel Installation
                  </h1>
                  <p className="dark:text-white">
                    {" "}
                    We install high-efficiency monocrystalline and
                    polycrystalline solar panel from the top global brands.
                  </p>
                </li>
                <li class="items-left text-black justify-center w-fit sm:w-[8rem] md:w-[10rem] lg:w-[20rem]  dark:bg-green-900 bg-green-500 rounded-xl grid p-5">
                  <img
                    src={customer}
                    alt="Adventure"
                    class="w-[70px] sm:w-[50px] md:w-[40px] lg:w-[4rem]  bg-green-50 rounded-full p-2"
                  />
                  <h1 class="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl dark:text-green-500 font-semibold">
                    Custom Solar Solution
                  </h1>
                  <p className="dark:text-white">
                    Provide customized solar and inverter olution for homes,
                    bussiness, and industries, with a focus on high quality
                    panels.{" "}
                  </p>
                </li>
                <li class="items-left text-black justify-center w-fit sm:w-[8rem] md:w-[10rem] lg:w-[20rem] grid  dark:bg-green-900 bg-green-500 rounded-xl p-5">
                  <img
                    src={efficency}
                    alt="Adventure"
                    class="w-[70px] sm:w-[50px] md:w-[40px] lg:w-[4rem]  bg-green-50 rounded-full p-2"
                  />
                  <h1 class="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl dark:text-green-500 font-semibold">
                    Energy Storage & Efficiency
                  </h1>
                  <p className="dark:text-white">
                    Not sure what you need? Our solar enginners will assess your
                    power need and deliver efficient tailored system design.{" "}
                  </p>
                </li>
                <li class="items-left text-black justify-center w-fit sm:w-[8rem] md:w-[10rem] lg:w-[20rem]  dark:bg-green-900 bg-green-500 rounded-xl grid p-5 ">
                  <img
                    src={maintaince}
                    alt="Adventure"
                    class="w-[70px] sm:w-[50px] md:w-[40px] lg:w-[4rem]  bg-green-50 rounded-full p-2"
                  />
                  <h1 class="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl  dark:text-green-500 font-semibold">
                    System Maintaince Services
                  </h1>
                 <p className="dark:text-white">
                    Get expert maintaince from certified technicians and onging
                    suppoet to ensure peak performance from your safty year
                    round.{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ghdjkhdsvjhdfkjbkjlgs */}
        <div className=" bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center sm:text-[15px] text-1xl dark:text-white">
          <h1 className="text-3xl font-medium text-center ">
            {" "}
            Our Proven Process for <br /> Success
          </h1>
          <div className=" flex justify-center gap-20 flex-wrap  ">
            <ul>
              <li class="items-left text-black justify-center w-[20rem]  grid p-5 gap-6 ">
                <h1 class=" text-[20px] sm:text-[10px] md:text-[15px] lg:text-3xl w-fit text-center bg-green-500 rounded-full p-4 text-white">
                  {" "}
                  01
                </h1>
                <div>
                  <h1 class="text-2xl sm:text-1xl dark:text-white font-medium">
                    Start Tour Solar Journey
                  </h1>
                  <p className="text-[12px] sm:text-[10px] md:text-[15px] lg:text-1xl dark:text-white">
                    We kick off with a personalized consultation to understand
                    your energy needs and goals
                  </p>
                </div>
              </li>

              <li class="text-left justify-end text-black w-[20rem]  grid p-5 gap-6 ">
                <h1 class=" text-[20px] sm:text-[10px] md:text-[15px] lg:text-3xl w-fit bg-green-500 rounded-full p-4 text-white relative">
                  {" "}
                  02
                </h1>
                <div>
                  <h1 class="text-2xl sm:text-1xl dark:text-white font-medium">
                    Site Evaluation
                  </h1>
                  <p className="text-[12px] sm:text-[10px] md:text-[15px] lg:text-1xl dark:text-white">
                    Our team conducts a detailed assessment of your property to
                    determine its solar potential and ideal system
                  </p>
                </div>
              </li>
            </ul>
            <img
              src={solarman1}
              alt=""
              className="w-[15rem] sm:w-[22rem] md:w-[22rem] lg:w-[20rem] rounded-full"
            />
            <ul>
              <li class="items-right text-black justify-center w-[20rem]  grid p-5 gap-6 ">
                <h1 class="text-[20px] sm:text-[10px] md:text-[15px] lg:text-3xl w-fit text-center bg-green-500 rounded-full p-4 text-white relative left-52">
                  {" "}
                  03
                </h1>
                <div>
                  <h1 class="text-2xl sm:text-1xl dark:text-white font-medium">
                    Custom System Design
                  </h1>
                  <p className="text-[12px] sm:text-[10px] md:text-[15px] lg:text-1xl dark:text-white">
                    We develop a tailored solar solution providing you with a
                    comprehensive proposal that outline technical
                  </p>
                </div>
              </li>
              <li class=" text-right text-black justify-center w-[20rem]  grid p-5 gap-6 ">
                <h1 class=" text-[20px] sm:text-[10px] md:text-[15px] lg:text-3xl  w-fit text-center bg-green-500 rounded-full p-4 text-white relative left-52">
                  {" "}
                  04
                </h1>
                <div>
                  <h1 class="text-2xl sm:text-1xl dark:text-white font-medium">
                    Quick & Easy Installation
                  </h1>
                  <p className="text-[12px] sm:text-[10px] md:text-[15px] lg:text-1xl dark:text-white">
                    Once approved, our experinced team ensures a seamless
                    installation process getting your solar system up
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* yfhfgbuisdhvuohaojvn */}
        <div className="bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center dark:bg-black flex flex-col sm:flex-row md:grid lg:flex dark:text-white ">
          <center>
            <img
              src={solarman2}
              alt=""
              className="w-[15rem] sm:w-[22rem] md:w-[22rem] lg:w-[40rem]"
            />
          </center>
          <div className="items-center justify-center gap-20 flex flex-col sm:flex-row md:grid lg:flex">
            <div className=" text-left ">
              <h1 className=" text-2xl sm:text-[10px] md:text-[30px] lg:text-5xl font-normal text-center">
                {" "}
                Our Impact in the Last Year
              </h1>
              <ul className="flex flex-wrap flex-col sm:flex-row md:flex-wrap lg:flex-row sm:p-2 md:p-0 lg:p-6 sm:gap-2 md:gap-0 lg:gap-4 relative ml-[50px] justify-center">
                <li class=" justify-end text-black w-[20rem]  p-5 gap-5 ">
                  <h1 class=" text-[20px] sm:text-[15px] md:text-[20px] lg:text-3xl font-semibold dark:text-green-500">
                    {" "}
                    1,250+
                  </h1>
                  <div>
                    <h1 class="text-[20px] sm:text-[10px] md:text-[20px] lg:text-2xl dark:text-white font-medium">
                      Solar Systm Installed
                    </h1>
                    <p className="text-[12px] sm:text-[10px] md:text-[15px] lg:text-1xl dark:text-white">
                      Helping Families and companies switch to renewable energy
                      seamlessly.
                    </p>
                  </div>
                </li>
                <li class=" text-black justify-center w-[20rem]  grid p-5 ">
                  <h1 class=" text-[20px] sm:text-[15px] md:text-[20px] lg:text-3xl font-semibold dark:text-green-500">
                    {" "}
                    $3.5M+
                  </h1>
                  <div>
                    <h1 class="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl dark:text-white font-medium">
                      In energy saving
                    </h1>
                    <p className="text-[12px] sm:text-[10px] md:text-[15px] lg:text-1xl dark:text-white">
                      Our clients reduces electricity costs significantly with
                      solar solutions.
                    </p>
                  </div>
                </li>
                <li class="justify-end text-black w-[20rem] p-5 gap-5 ">
                  <h1 class=" text-[20px] sm:text-[15px] md:text-[20px] lg:text-3xl font-semibold dark:text-green-500">
                    {" "}
                    8,500+
                  </h1>
                  <div>
                    <h1 class="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl dark:text-white font-medium">
                      Tons of Co2 reduced
                    </h1>
                    <p className="text-[12px] sm:text-[10px] md:text-[15px] lg:text-1xl dark:text-white">
                      Making a possitive impact on enviroment by lowering carbom
                      emmission.
                    </p>
                  </div>
                </li>
                <li class=" text-black justify-center w-[20rem] p-5 ">
                  <h1 class=" text-[20px] sm:text-[15px] md:text-[20px] lg:text-3xl font-semibold dark:text-green-500">
                    {" "}
                    94%
                  </h1>
                  <div>
                    <h1 class="text-[20px] sm:text-[15px] md:text-[20px] lg:text-2xl dark:text-white font-medium">
                      Customer Satisfaction
                    </h1>
                    <p className="text-[12px] sm:text-[10px] md:text-[15px] lg:text-1xl dark:text-white">
                      We proudly maitain High Rating thanks to reliable services
                      and support.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonals></Testimonals> */}
    </div>
  );
};

export default Home;
