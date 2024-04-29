"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import oneside from "@/assets/img/oneside.jpg";
import ujjen from "@/assets/img/ujjain.jpg";
import bgimg from "@/assets/img/bgimg.jpg";
import Gwalior from "@/assets/img/Gwalior.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const img = require("@/assets/img/Gwalior.jpg");
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Explore() {
  return (
    <>
      <Box
        // sx={{
        //   position: "absolute",
        //   top: "35%",
        //   left: "50%",
        //   transform: "translate(-50%, -50%)",
        //   width: "60vw",

        //   height: {
        //     lg: "70%",
        //     md: "210px",
        //     sm: "210px",
        //     xs: "69vh",
        //   },

        //   minHeight: 400,
        //   textAlign: "center",
        // }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: 8,
            fontFamily: "revert-layer",
          }}
        >
          Explore Top Tourist Destinations in Madhya Pradesh
        </Typography>
        <Grid
          container
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, md: 3, lg: 4, sm: 5 }}
        >
          <Grid xs={3} sm={2} md={3}>
            <Box
              sx={{
                height: {
                  lg: "70%",
                  md: "210px",
                  sm: "210px",
                  xs: "180px",
                },
                width: {
                  lg: "95%",
                  md: "260px",
                  sm: "280px",
                  xs: "280px",
                },

                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",

                backgroundImage: {},
                borderRadius: "8px",
                border: {
                  lg: "3px solid green",
                  md: "3px solid pink",
                  sm: "3px solid blue",
                  xs: "3px solid orange",
                },
                marginLeft: {
                  lg: "4px",
                  md: "-30px",
                  sm: "-60px",
                },

                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  content: `''`,
                  width: "8%",
                  height: "12%",
                  cursor: "pointer",
                  display: "flex",
                  alignitems: "center",
                  justifyContent: "center",
                  fontSize: "25px",
                  fontWeight: "bold",

                  background: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",

                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",

                  transition: "all 0.5s",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "24%",
                      md: "255px",
                      sm: "275px",
                      xs: "280px",
                    },

                    height: {
                      lg: "49%",
                      md: "204px",
                      sm: "207px",
                      xs: "178px",
                    },

                    content: `'Khushbu kannojiya'`,

                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.4s",
                  },
                },
              }}
            >
              <Image
                src={oneside}
                width={100}
                height={100}
                alt="jfbv"
                style={{
                  height: "100%",
                  border: "1px solid red",
                }}
              />

              <Box
                sx={{
                  position: "relative",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                ></span>
              </Box>
            </Box>
          </Grid>
          <Grid xs={3} sm={1} md={3}>
            <Box
              sx={{
                height: {
                  lg: "35vh",
                  md: "210px",
                  sm: "210px",
                  xs: "180px",
                },
                width: {
                  lg: "95%",
                  md: "260px",
                  sm: "280px",
                  xs: "280px",
                },

                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",

                borderRadius: "8px",
                border: {
                  lg: "3px solid green",
                  md: "3px solid pink",
                  sm: "3px solid blue",
                  xs: "3px solid orange",
                },
                marginLeft: {
                  lg: "1px",
                  md: "120px",
                  sm: "220px",
                },

                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  content: `''`,
                  width: "8%",
                  height: "12%",
                  cursor: "pointer",
                  display: "flex",
                  alignitems: "center",
                  justifyContent: "center",
                  fontSize: "25px",
                  fontWeight: "bold",

                  background: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",

                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",

                  transition: "all 0.5s",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "24%",
                      md: "255px",
                      sm: "272px",
                      xs: "280px",
                    },

                    height: {
                      lg: "49%",
                      md: "205px",
                      sm: "207px",
                      xs: "178px",
                    },
                    content: `'Khushbu kannojiya'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.4s",
                  },
                },
              }}
            >
              <Image
                src={Gwalior}
                style={{
                  height: "100%",
                  border: "1px solid red",
                }}
              />

              <Box
                sx={{
                  position: "relative",

                  bottom: "170px",

                  // },
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                ></span>
              </Box>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                height: {
                  lg: "50vh",
                  md: "210px",
                  sm: "210px",
                  xs: "180px",
                },
                width: {
                  lg: "95%",
                  md: "260px",
                  sm: "280px",
                  xs: "280px",
                },
                marginLeft: {
                  lg: "7px",
                  md: "260px",
                  sm: "-200px",
                },

                borderRadius: "8px",
                border: {
                  lg: "3px solid green",
                  md: "3px solid pink",
                  sm: "3px solid blue",
                  xs: "3px solid orange",
                },

                marginTop: {
                  lg: "1px",
                  md: "5px",
                  sm: "230px",
                  xs: "8px",
                },

                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  content: `''`,
                  width: "8%",
                  height: "12%",
                  cursor: "pointer",
                  display: "flex",
                  alignitems: "center",
                  justifyContent: "center",
                  fontSize: "25px",
                  fontWeight: "bold",

                  background: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",

                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",

                  transition: "all 0.5s",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "49%",
                      md: "253px",
                      sm: "272px",
                      xs: "280px",
                    },

                    height: {
                      lg: "70%",
                      md: "205px",
                      sm: "207px",
                      xs: "178px",
                    },
                    content: `'Khushbu kannojiya'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.4s",
                  },
                },
              }}
            >
              <Image
                src={ujjen}
                style={{
                  height: "100%",

                  border: "1px solid red",
                }}
              />

              <Box
                sx={{
                  position: "relative",

                  bottom: "170px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                ></span>
              </Box>
            </Box>
          </Grid>
          <Box height={20}></Box>
          <Grid xs={6} sm={1} md={6}>
            <Box
              sx={{
                height: {
                  lg: "50vh",
                  md: "210px",
                  sm: "210px",
                  xs: "180px",
                },
                width: {
                  lg: "95%",
                  md: "260px",
                  sm: "280px",
                  xs: "280px",
                },

                borderRadius: "8px",
                border: {
                  lg: "3px solid green",
                  md: "3px solid pink",
                  sm: "3px solid blue",
                  xs: "3px solid orange",
                },

                marginTop: {
                  lg: "-80px",
                  md: "18px",
                  sm: "230px",
                  xs: "1px",
                },

                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  content: `''`,
                  width: "8%",
                  height: "12%",
                  cursor: "pointer",
                  display: "flex",
                  alignitems: "center",
                  justifyContent: "center",
                  fontSize: "25px",
                  fontWeight: "bold",

                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",

                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",

                  transition: "all 0.5s",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "49%",
                      md: "253px",
                      sm: "272px",
                      xs: "280px",
                    },

                    height: {
                      lg: "70%",
                      md: "205px",
                      sm: "207px",
                      xs: "178px",
                    },
                    content: `'Khushbu kannojiya'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.4s",
                  },
                },
                marginLeft: {
                  lg: "4px",
                  md: "-30px",
                  sm: "-105px",
                },
              }}
            >
              <Image
                src={Gwalior}
                style={{
                  height: "100%",

                  border: "1px solid red",
                }}
              />

              <Box
                sx={{
                  position: "relative",

                  bottom: "170px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                ></span>
              </Box>
            </Box>
          </Grid>

          <Grid xs={3}>
            <Box
              sx={{
                height: {
                  lg: "35vh",
                  md: "210px",
                  sm: "210px",
                  xs: "180px",
                },
                width: {
                  lg: "95%",
                  md: "260px",
                  sm: "285px",
                  xs: "280px",
                },

                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",

                backgroundImage: {},
                borderRadius: "8px",
                border: {
                  lg: "3px solid green",
                  md: "3px solid pink",
                  sm: "3px solid blue",
                  xs: "3px solid orange",
                },

                marginTop: {
                  lg: "18px",
                  md: "20px",
                  sm: "10px",
                  xs: "10px",
                },
                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  content: `''`,
                  width: "8%",
                  height: "12%",
                  cursor: "pointer",
                  display: "flex",
                  alignitems: "center",
                  justifyContent: "center",
                  fontSize: "25px",
                  fontWeight: "bold",

                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",

                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",

                  transition: "all 0.5s",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "24%",
                      md: "255px",
                      sm: "272px",
                      xs: "280px",
                    },

                    height: {
                      lg: "49%",
                      md: "205px",
                      sm: "207px",
                      xs: "178px",
                    },
                    content: `'Khushbu kannojiya'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.4s",
                  },
                },
                marginLeft: {
                  lg: "5px",
                  md: "-50px",
                  sm: "-61px",
                },
              }}
            >
              <Image
                src={Gwalior}
                style={{
                  height: "100%",

                  border: "1px solid red",
                }}
              />

              <Box
                sx={{
                  position: "relative",

                  bottom: "170px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                ></span>
              </Box>
            </Box>
          </Grid>

          <Grid xs={3} sm={2} md={3}>
            <Box
              sx={{
                height: {
                  lg: "35vh",
                  md: "210px",
                  sm: "210px",
                  xs: "180px",
                },
                width: {
                  lg: "95%",
                  md: "260px",
                  sm: "280px",
                  xs: "280px",
                },

                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",

                backgroundImage: {},
                borderRadius: "8px",
                border: {
                  lg: "3px solid green",
                  md: "3px solid pink",
                  sm: "3px solid blue",
                  xs: "3px solid orange",
                },

                marginTop: {
                  lg: "18px",
                  md: "20px",
                  sm: "10px",
                  xs: "10px",
                },
                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  content: `''`,
                  width: "8%",
                  height: "12%",
                  cursor: "pointer",
                  display: "flex",
                  alignitems: "center",
                  justifyContent: "center",
                  fontSize: "25px",
                  fontWeight: "bold",

                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",

                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",

                  transition: "all 0.5s",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "24%",
                      md: "255px",
                      sm: "272px",
                      xs: "280px",
                    },

                    height: {
                      lg: "49%",
                      md: "205px",
                      sm: "207px",
                      xs: "178px",
                    },
                    content: `'Khushbu kannojiya'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.4s",
                  },
                },
                marginLeft: {
                  lg: "6px",
                  md: "75px",
                  sm: "180px",
                },
              }}
            >
              <Image
                src={Gwalior}
                style={{
                  height: "100%",

                  border: "1px solid red",
                }}
              />

              <Box
                sx={{
                  position: "relative",

                  bottom: "170px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                ></span>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
