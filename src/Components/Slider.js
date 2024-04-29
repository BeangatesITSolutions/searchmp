"use client";

import React from "react";
// Import Swiper React components

import Image from "next/image";
import { EffectFade, Pagination } from "swiper/modules";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { Padding, Search } from "@mui/icons-material";
import { color } from "framer-motion";
import zIndex from "@mui/material/styles/zIndex";

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
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderHoverColor": "#4682c7",
            "& label.Mui-focused": {
              color: "#4682c7",
              responsiveFontSizes: "25px",
              zIndex: 1,
              padding: "10px 0 10px",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            border: "2px solid #D1D5DB",

            borderRadius: "20px",

            color: "#fff",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              border: "2px solid #4682c7",
              color: "red",
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


        <Box
          className="absolute top-[30%] left-[30%] z-50 flex justify-between items-center  w-[45%]  "
          sx={{
            overflow: "hidden",
            bgcolor: "rgba( 255, 255, 255, 0.6 )",
            backdropFilter: "blur(4.5px)",
            WebkitBackdropFilter: "blur(4.5px)",
            borderRadius: "20px",
          }}
        >
          <ThemeProvider theme={customTheme(outerTheme)}>
        {/* <Search className="bg-white text-black h-14 w-8  " /> */}

            <TextField className="relative w-full" label="Search" />
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
