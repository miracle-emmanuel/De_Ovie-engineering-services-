import React from "react";
import Logo from "../assets/Img/logo.png";
import call from "../assets/Img/call.png";
import facebook from "../assets/Img/facebook.png";
import X from "../assets/Img/twitter.png";
import LinkedIN from "../assets/Img/linkedin-logo.png";
import map from "../assets/Img/location-pin.png";
import mail from "../assets/Img/mail.png";
import intagram from "../assets/Img/instagram.png";
import tiktok from "../assets/Img/tiktok.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-green-50 p-6 scroll-mt-20 my-auto justify-center dark:bg-black text-[8px]  sm:text-[1px] md:text-[8px] lg:text-[10px] font-Roboto">
      <center>
        <div className=" bg-white grid justify-around gap-24 p-10 mx-10 rounded-xl sm:flex max-md:gap-10  dark:bg-green-900 dark:text-black w-fit">
        <div>
          <img src={Logo} alt="" className="w-[10rem]" />
          <p className="mt-5">
            Transforming your energy world with smart innovative solutions{" "}
            <br /> superior support and a seamless solar experience
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://www.facebook.com/tega.ernest">
              {" "}
              <img
                src={facebook}
                alt=""
                className="w-[2rem] border solid-black p-2 rounded-xl hover:bg-green-500 dark:bg-[#faf2f7]"
              />
            </a>
            <a href="https://x.com/ErnestVieboro?t=wMApwlhrUm1z7UJZgQziJQ&s=09">
              {" "}
              <img
                src={X}
                alt=""
                className="w-[2rem] border solid-black p-2 rounded-xl hover:bg-green-500 dark:bg-[#faf2f7]"
              />
            </a>
            <a href="https://www.tiktok.com/@engr_ernest_vieboro?_r=1&_t=ZS-917cB4u0PrD">
              {" "}
              <img
                src={tiktok}
                alt=""
                className="w-[2rem] border solid-black p-2 rounded-xl hover:bg-green-500 dark:bg-[#faf2f7]"
              />
            </a>
            <a
              href="https://www.instagram.com/tegaernest?igsh=MXZpc2lnYXF3a2FiMQ==
"
            >
              {" "}
              <img
                src={intagram}
                alt=""
                className="w-[2rem] border solid-black p-2 rounded-xl hover:bg-green-500 dark:bg-[#faf2f7]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vieboro-ernest-71a8a038b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
            >
              {" "}
              <img
                src={LinkedIN}
                alt=""
                className="w-[2rem] border solid-black p-2 rounded-xl hover:bg-green-500 dark:bg-[#faf2f7]"
              />
            </a>
          </div>
        </div>
        <div className=" grid">
          <h1 className="text-1xl font-bold mb-3">Services</h1>
          <p className="">Solar Panel Installation</p>
          <p className="">Energy Efficiency Audits </p>
          <p className="">Custom Solar Solution</p>
          <p className="">System Maintaince Services</p>
          <p className="">Consulting and Education</p>
          
        </div>
        <div className="grid">
          <h1 className="text-1xl font-bold mb-3">Contact</h1>
          <div className="flex gap-3">
            <img src={call} alt="" className="w-[12px] h-[12px] " />

            <p>08078586792, 09168725142</p>
          </div>
          <div className="flex gap-3 mt-1">
            <img src={map} alt="" className="w-[12px] h-[12px] text-left" />
            <div>
              <p>No 24 River bank Estate Akute Odo Akute Ojodu Berger</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={mail} alt="" className="w-[12px] h-[12px]" />
            <div>
              <p>evieboro27@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      </center>
      
      <div className="m-3 grid sm:mx-40 sm:flex dark:text-white text-center">
        <div>
          <p>© 2025 De 0vie Engineering Services | All Right Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;


