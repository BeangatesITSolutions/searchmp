"use client";

import React from "react";
// Import Swiper React components

import Image from "next/image";
import { EffectFade, Pagination } from "swiper/modules";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { Search } from "@mui/icons-material";
import { InputAdornment, InputLabel } from "@mui/material";
// import { Search } from "@mui/icons-material";

let img = [
  require("@/assets/img/khana.jpg"),
  require("@/assets/img/Bedaghat.jpg"),
  require("@/assets/img/khajuraoTemple.jpg"),
  require("@/assets/img/2.jpg"),
];

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "white",
            background: "white",
            color: "black",
            width: "80ch",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#004346",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#004346",
            },
          },
        },
      },
    },
  });


export default function Slider() {
  const outerTheme = useTheme();

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        effect={"fade"}
        navigation={false}
        pagination={{ clickable: false }}
        modules={[
          FreeMode,
          Navigation,
          Thumbs,
          EffectFade,
          Pagination,
          Autoplay,
        ]}
        className="mySwiper2 h-full w-full flex justify-center items-center"
      >
        {/* Search BOX */}

        <Box className="absolute top-[30%] left-[25%] z-50 flex justify-between items-center  ">
          <Search className="bg-[#004346] h-14 w-8  " />
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField  label="search"  />
          </ThemeProvider>
        </Box>

        {img.map((img, iindex) => (
          <SwiperSlide key={iindex} className="h-full w-full">
            <Image
              width={10000}
              height={10000}
              className=" object-cover max-h-full h-[100vh] max-w-full overflow-hidden aspect-video bg-center relative"
              alt="d"
              src={img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
