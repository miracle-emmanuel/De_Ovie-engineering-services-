import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import img from "../assets/Img/headerimg.jpg";
import { ScrollRestoration } from "react-router-dom";
import Map from "../components/Map";
import ContactUsform from "../components/ContactUsform";

const Contact = () => {
  return (
    <div className="font-Roboto">
      <div>
        <ScrollRestoration />
        <Navbar></Navbar>
        

        <ContactUsform></ContactUsform>
        <Map></Map>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
