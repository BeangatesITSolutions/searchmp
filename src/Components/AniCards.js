"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

// const first = require("@/assets/img/hos.jpg");
const first = require('@/assets/img/hospi.jpg')
const sec = require("@/assets/img/Destin.jpg");
const third = require("@/assets/img/edu1.jpg");
import {
  HikingRounded,
  LocalHospitalRounded,
  SchoolRounded,
} from "@mui/icons-material";

export default function AniCards() {
  return (
    <Box
      sx={{
        backgroundImage:
          "radial-gradient(at 40% 18%, hsla(185,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(351,0%,100%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(189,100%,56%,1) 0px, transparent 50%)",
        backgroundColor: "hsla(0,14%,92%,1)",
        height: "80vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: "90vh",
          width: "80%",

          background: "rgba( 255, 255, 255, 0.55 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 20px )",
          WebkitBackdropFilterackdrop: "blur( 20px )",
          paddingX: "5%",

          borderRadius: "30px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          position: "absolute",
          top: "80%",
          left: "10%",
          zIndex: "999",
        }}
      >
        <Box className="pt-5"></Box>
        {/* First Box */}
        <Box className="flex flex-col items-start justify-around w-hull gap-6   mb-5 lg:flex flex-grow md:flex-row  py-5  ">
          <Box className="flex  items-center flex-col gap-4 rounded-2xl overflow-hidden ">
            <Box className="bg-[#4682c7] text-white w-28 p-2 px-5 rounded-2xl text-center font-bold text-base ">
              Tourism
            </Box>

            <Box
              className="flex flex-col rounded-2xl border-2 border-gray-300 relative   "
              sx={{
                BoxShadow:
                  "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
              }}
            >
              {/* MAin Box */}

              <Box className="w-80 h-96 overflow-hidden   rounded-t-2xl ">
                <Image src={sec} alt="no img" height={500} width={500} />
              </Box>

              {/* Content sec in Box */}

              <Box className="text-black absolute top-[46%] z-50 h-10 py-24  overflow-hidden">
                <Button
                  className=" text-left text-white w-80  bg-[rgba( 255, 255, 255 )] cursor-none text-[12px] "
                  sx={{
                    backdropFilter: "blur( 14.5px )",
                    WebkitBackdropFilter: "blur( 14.5px )",
                  }}
                >
                  Explore the world with Search Mp's Tourism feature. Start your
                  adventure today!
                </Button>
              </Box>

              {/* Explore section */}

              <Box className="  bg-white z-50   w-80  text-center font-bold text-lg p-5  flex justify-between items-center rounded-b-[5%] ">
                <Box className="">
                  <HikingRounded className="text-[#4682c7]  text-3xl" />
                </Box>
                <Box>
                  <a
                    href="#_"
                    class="relative inline-flex items-center justify-center  p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                  >
                    <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-orange-500 rounded-full blur-md ease"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                      <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-orange-500  rounded-full blur-md"></span>
                      <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-orange-500 rounded-full blur-md"></span>
                    </span>
                    <span class="relative text-white">Explore here</span>
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* -------------------------------------- */}

          {/* Second Box */}

          <Box className="flex  items-center flex-col gap-4 rounded-2xl overflow-hidden  mt-[5%] pb-6 relative ">
            <Box className="bg-[#4682c7] text-white w-28 p-2 px-5 rounded-2xl text-center font-bold text-base">
              Hospitals
            </Box>

            <Box
              className="flex flex-col rounded-2xl border-2 border-gray-300 overflow-hidden"
              sx={{
                BoxShadow:
                  "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
              }}
            >
              {/* MAin Box */}
              <Box className="w-80 h-96 overflow-hidden   rounded-t-2xl">
                <Image src={first} alt="no img" height={500} width={500} />
              </Box>
              {/* Content sec in Box */}
              <Box className="text-black absolute top-[67%]  z-50    overflow-hidden">
                <Button
                  className=" text-left text-white w-80  bg-[rgba( 255, 255, 255 )] cursor-none text-[12px] "
                  sx={{
                    backdropFilter: "blur( 14.5px )",
                    WebkitBackdropFilter: "blur( 14.5px )",
                  }}
                >
                  Find nearby hospitals quickly with Search Mp's Hospital
                  feature. Stay informed, stay safe
                </Button>
              </Box>
              {/* Explore section */}
              <Box className="bg-white z-50   w-80  text-center font-bold text-lg p-5  flex justify-between items-center rounded-b-[5%]  ">
                <Box className="">
                  <LocalHospitalRounded className="text-[#4682c7] text-3xl" />
                </Box>
                <Box className="">
                  <a
                    href="#_"
                    class="relative inline-flex items-center justify-center  p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                  >
                    <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-orange-500 rounded-full blur-md ease"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                      <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-orange-500  rounded-full blur-md"></span>
                      <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-orange-500 rounded-full blur-md"></span>
                    </span>
                    <span class="relative text-white">Explore here</span>
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* -------------------------------------------------------- */}

          {/* {Third Box } */}

          <Box className="flex  items-center flex-col gap-4 rounded-2xl overflow-hidden relative ">
            <Box className="bg-[#4682c7] text-white w-28 p-2 px-5 rounded-2xl text-center font-bold text-base">
              Education
            </Box>
            <Box
              className="flex flex-col rounded-2xl border-2 border-gray-300 relative   "
              sx={{
                BoxShadow:
                  "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
              }}
            >
              {/* MAin Box */}
              <Box className="w-80 h-96 overflow-hidden   rounded-t-2xl ">
                <Image src={third} alt="no img" height={500} width={500} />
              </Box>
              {/* Content sec in Box */}
              <Box className="text-black absolute top-[46%] z-50 h-10 py-24  overflow-hidden">
                <Button
                  className=" text-left text-white w-80  bg-[rgba( 255, 255, 255 )] cursor-none text-[12px] "
                  sx={{
                    backdropFilter: "blur( 14.5px )",
                    WebkitBackdropFilter: "blur( 14.5px )",
                  }}
                >
                  Find schools easily with Search Mp's Education feature.
                  Empower yourself today!
                </Button>
              </Box>
              {/* Explore section */}
              <Box className="  bg-white z-50   w-80  text-center font-bold text-lg p-5  flex justify-between items-center rounded-b-[5%] ">
                <Box className="">
                  <SchoolRounded className="text-[#4682c7]  text-3xl" />
                </Box>
                <Box>
                  <a
                    href="#_"
                    class="relative inline-flex items-center justify-center  p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                  >
                    <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-orange-500 rounded-full blur-md ease"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                      <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-orange-500  rounded-full blur-md"></span>
                      <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-orange-500 rounded-full blur-md"></span>
                    </span>
                    <span class="relative text-white">Explore here</span>
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
