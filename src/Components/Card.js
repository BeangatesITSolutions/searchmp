"use client";

import { Button, Typography } from "@mui/material";
import Image from "next/image";

const first = require("@/assets/img/hos.jpg");
const sec = require("@/assets/img/Desti.jpg");
const third = require("@/assets/img/edu.jpg");
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function AniCards() {
  return (
    <>
      <div className="py-4">
        <Typography
          variant="h4"
          sx={{ color: "#004346", fontWeight: "bold", textAlign: "center" }}
        >
          Explore here
        </Typography>
      </div>
      <div className="flex flex-col items-center mt-5 mb-5 space-y-8 md:flex-row md:space-x-8">
        <div className="flex flex-col rounded-2xl overflow-hidden">
          <div className="bg-[#004346] text-white w-full p-2 px-5 rounded-t-2xl text-center font-bold text-base">
            Tourism
          </div>
          <div className="border-2 border-gray-300 overflow-hidden rounded-b-2xl">
            <div className="w-full overflow-hidden relative rounded-t-2xl">
              <Image src={sec} alt="no img" layout="responsive" width={500} height={500} />
            </div>
            <div className="text-black p-4">
              <Button
                className="text-left text-white w-full bg-[rgba( 255, 255, 255 )] cursor-none text-sm"
                sx={{
                  backdropFilter: "blur( 14.5px )",
                  WebkitBackdropFilter: "blur( 14.5px )",
                }}
              >
                Explore the world with Search Mp's Tourism feature. Start your
                adventure today!
              </Button>
            </div>
            <div className="bg-white text-center font-bold text-lg p-2">
              <div className="flex justify-between items-center px-4 py-2">
                <FavoriteIcon className="text-[#004346]" />
                <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden text-indigo-600 rounded-lg shadow-2xl group">
                  <span className="absolute top-0 left-0 w-10 h-10 -mt-3 -ml-3 transition-all duration-700 bg-blue-300 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-10 h-10 -ml-3 bg-blue-400 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-10 h-10 -mr-3 bg-blue-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Explore here</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second div */}
        {/* (similar adjustments for the second and third card) */}

      </div>
    </>
  );
}

