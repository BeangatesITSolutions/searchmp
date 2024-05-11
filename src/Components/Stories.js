

"use client";

import Image from "next/image";
import React, { useState } from "react";

const backImg = require("@/assets/img/view1.jpg");

const images = [
  {
    id: "c1",
    numbes: "1",

    // src: require('@/assets/img/view1.jpg'),
    title: "Winter",
    description: "Winter has so uch to offer - creative activities",
  },
  {
    id: "c2",
    numbes: "2",
    // src: require('@/assets/img/view1.jpg'),
    title: "Digital Technology",
    description: "Gets better every day - stay tuned",
  },
  {
    id: "c3",
    numbes: "3",
    // src: require('@/assets/img/view1.jpg'),
    title: "Globalization",
    description: "Help people all over the world",
  },
  {
    id: "c4",
    numbes: "4",
    // src: require('@/assets/img/view1.jpg'),
    title: "New technologies",
    description: "Space engineering becomes more and more advanced",
  },
  {
    id: "c5",
    numbes: "5",
    // src: require('@/assets/img/view1.jpg'),
    title: "New technologies",
    description: "Space engineering becomes more and more advanced",
  },
  {
    id: "c6",
    numbes: "6",
    // src: require('@/assets/img/view1.jpg'),
    title: "New technologies",
    description: "Space engineering becomes more and more advanced",
  },
];

export default function Stories() {
  const [firstinput, setfirst] = useState("c1");

  const handleMouseEnter = (inputId) => {
    if (firstinput !== inputId) {
      setfirst(inputId);
    }
  };

  return (
    <>
      <section className="w-full h-screen  ">
        {/* <div className="h-screen w-full  opacity-85 relative overflow-hidden ">
          <Image src={backImg} alt="no img" height={1000} width={100000} />
        </div> */}
       
          <div
            className="main_wrap_box    w-full absolute top-[180%] z-50 py-5"
            // style={{
            //   background: "rgba( 255, 255, 255, 0.65 )",
            //   boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            //   backdropFilter: "blur( 10.5px )",
            //   WebkitBackdropFilter: "blur(10.5px)",
            //   borderRadius: "10px",
            //   border: "2px solid black",
            //   zIndex: "999",
            //   border:'1px solid gray',
            // }}
          >
            <div className="py-7 ">
              <h1 className="font-bold text-4xl text-orange-500">
                Top Stories
              </h1>
            </div>
            <div className="section_container">
              {images.map((image) => (
                <div key={image.id}>
                  <input
                    type="radio"
                    name="slide"
                    id={image.id}
                    checked={firstinput === image.id}
                    onChange={(e)=>console.log(e.target.value)}
                  />
                  <label
                    htmlFor={image.id}
                    className={`all_card_contain ${
                      firstinput === image.id ? "w-96" : "w-56"
                    }`}
                    onMouseEnter={() => handleMouseEnter(image.id)}
                  >
                    <div className="row_overview">
                      <div className="icon_numbers">{image.numbes}</div>
                      <div
                        className={`des_about_card ${
                          firstinput === image.id
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                      >
                        <h4 className="text-white">{image.title}</h4>
                        <p>{image.description}</p>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
       
      </section>
    </>
  );
}
