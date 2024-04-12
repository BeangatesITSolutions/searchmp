"use client";

import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";

export default function Slider() {
  const pic = [
    require("@/assets/img/khajuraoTemple.jpg"),
    require("@/assets/img/khana.jpg"),
    require("@/assets/img/omkareshwer.jpg"),
    require("@/assets/img/Bedaghat.jpg"),
  ];

  const [active, setfirst] = useState(0);

  const clicknext = () => {
    active === Image.length - 1 ? setfirst(0) : setfirst(active + 1);
  };

  const clickprev = () => {
    active === 0 ? setfirst(Image.length - 1) : setfirst(active - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clicknext();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  },);

  return (
    <div>
      <Box className="w-full flex justify-center items-center gap-3 transition-transform ease-in-out duration-200 rounded-2xl">
        {pic.map((pic, index) => (
          <div key={index} className="text-black">
            <Image
              src={pic}
              alt=""
              width={300}
              height={350}
              className="w-full h-full object-contain  "
            />
          </div>
        ))}
      </Box>
      <Box className="absolute  w-full flex justify-center items-center">
        <Box onClick={clickprev} className="">
          <ArrowBackIosNew sx={{ color: "red", cursor: "pointer" }} />
        </Box>
        <Box onClick={clicknext} className="">
          <ArrowForwardIos sx={{ color: "red", cursor: "pointer" }} />
        </Box>
      </Box>
    </div>
  );
}
