import React, { useState } from "react";
import review2 from "../assets/Img/review2.jpg";
import review3 from "../assets/Img/review3.jpg";
import left from "../assets/Img/left.png";
import right from "../assets/Img/right.png";
import { ScrollRestoration } from "react-router-dom";

const Testimonals = () => {
  const Testimonial_data = [
    {
      img: review2,
      content_text:
        "`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi libero, debitis officia id numquam saepe veniam explicabo! Impedit recusandae voluptates similique iste eveniet ipsum molestiae? Nemo laudantium vel iure illum!`",
      testimonial_name: "Musk dean",
      text_block: "project manager microsoft",
    },
    {
      img: review2,
      content_text:
        "`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi libero, debitis officia id numquam saepe veniam explicabo! Impedit recusandae voluptates similique iste eveniet ipsum molestiae? Nemo laudantium vel iure illum!`",
      testimonial_name: "musk dean",
      text_block: "project manager microsoft",
    },
    {
      img: review3,
      content_text:
        "`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi libero, debitis officia id numquam saepe veniam explicabo! Impedit recusandae voluptates similique iste eveniet ipsum molestiae? Nemo laudantium vel iure illum!`",
      testimonial_name: "musk dean",
      text_block: "project manager microsoft",
    },
    {
      img: review3,
      content_text:
        "`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi libero, debitis officia id numquam saepe veniam explicabo! Impedit recusandae voluptates similique iste eveniet ipsum molestiae? Nemo laudantium vel iure illum!`",
      testimonial_name: "musk dean",
      text_block: "project manager microsoft",
    },
  ];

  const [current, setCurrent] = useState(0);

  const length = Testimonial_data.length;

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <div className="m-5 font-Roboto">
      <div className="flex justify-around">
        {" "}
        <h1
          class=" text-3xl
                      font-light sm:text-5xl md:text-3xl text-black dark:text-white my-5"
        >
          What our Happy Customer Say
        </h1>
        <div className="flex gap-10 justify-center items-end mb-5">
          <img
            src={left}
            alt=""
            className="w-[2rem] sm:w-[3rem] bg-green-500 dark:bg-green-900 rounded-xl  p-3"
            onClick={previous}
          />
          <img
            src={right}
            alt=""
            className="w-[2rem] sm:w-[3rem] bg-green-500 dark:bg-green-900 rounded-xl p-3"
            onClick={next}
          />
        </div>
      </div>
      <center>
        <div className="  bg-green-50 dark:bg-green-900 rounded-xl dark:text-black w-3/4 p-2">
          {Testimonial_data.map(
            (item, index) =>
              index === current && (
                <div key={index}>
                  <div className="pb-5 flex items-start gap-5 text-1xl">
                    {/* <img src={quote} alt="" className="w-[1rem] sm:w-[10px] md:w-[1rem] lg:w-[2rem]" /> */}
                    <p className="text-black text-[15px] sm:text-[10px] md:text-[15px] lg:text-[20px] font-sans">
                      {item.content_text}
                    </p>
                  </div>
                  <div className="grid gap-4 justify-center text-[13px]  font-semibold">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[10rem] rounded-full"
                    />
                    <div className="text-center">
                      <h6>{item.testimonial_name}</h6>
                      <span>{item.text_block}</span>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </center>
    </div>
  );
};

export default Testimonals;
