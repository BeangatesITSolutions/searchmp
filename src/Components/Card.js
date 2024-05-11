import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
// import view1 from '@/assets/img/hospi.jpg'
// import view2 from '@/assets/img/4.jpg'

const view1 = require("@/assets/img/view2.jpg");
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { AddAPhoto, AddLocationAlt } from "@mui/icons-material";

export default function Card() {
  return (
    <>
      <section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5%",
            paddingTop: "3%",
            paddingBottom: "3%",

            // border: "1px solid red",
          }}
        >
          <Box sx={{ width: "50%",
              background: "rgba( 255, 255, 255, 0.25 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 14.5px )",
              
              webkitbackdropfilter: "blur( 14.5px )",
              borderradius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )", }}>
            <Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#F97217",paddingY:"10px", marginLeft:"15px" }}
              >
                Our Services
              </Typography>
              <span className="text-black text-justify font-semibold text-md ">
                Explore Our Diverse Range of Services: Tailored solutions
                designed to meet your needs, delivered with exceptional quality
                and care.
              </span>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                // border: "2px solid black",
                marginTop:'5%',
              }}
            >
              <Box className="flex flex-col justify-between items-center">
                <AddLocationAlt className="text-5xl text-orange-500"  />
                <span>Custom Destinations</span>
              </Box>
              <Box className="flex flex-col justify-between items-center">
                <AddAPhoto className="text-5xl text-orange-500" />
                <span>Add Moments</span>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                // border: "2px solid black",
                marginTop:'5%',
              }}
            >
              <Box className="flex flex-col justify-between items-center">
                <AddLocationAlt className="text-5xl text-orange-500" />
                <span>Custom Destinations</span>
              </Box>
              <Box className="flex flex-col justify-between items-center">
                <AddAPhoto className="text-5xl text-orange-500" />
                <span>Add Moments</span>
              </Box>

           
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                // border: "2px solid black",
                marginTop:'5%',
              }}
            >
              <Box className="flex flex-col justify-between items-center">
                <AddLocationAlt className="text-5xl text-orange-500" />
                <span>Custom Destinations</span>
              </Box>
              <Box className="flex flex-col justify-between items-center">
                <AddAPhoto className="text-5xl text-orange-500" />
                <span>Add Moments</span>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              height: "15%",
              width: "30%",
              borderRadius: "50px",
              overflow: "hidden",
              background: "rgba( 255, 255, 255, 0.25 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 14.5px )",
              
              webkitbackdropfilter: "blur( 14.5px )",
              // borderradius: "70px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            <Image src={view1} alt="no img" height={1000} width={10000} />
          </Box>
        </Box>
      </section>
    </>
  );
}
