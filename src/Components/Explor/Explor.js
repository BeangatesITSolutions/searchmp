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

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
// | import { EffectFade, Pagination } from "swiper/modules";

const img = require("@/assets/img/Gwalior.jpg");
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Ex() {
  return (
    <>
      <Box sx={{paddingBottom:'80px', paddingTop:'30px', border:'2px solid red'}}>
        <Typography
          variant="h5"
          sx={{
            marginBottom: 8,
            // fontFamily: "revert-layer",
            textAlign: "center",
            marginTop: "2%",
            fontWeight:'bold',
        
          }}
        >
          Explore Top Tourist Destinations in Madhya Pradesh
        </Typography>
        <Grid
          container
          direction={{
            xs: "row",
            sm: "row",
            alignItems: "center",
            justify: "center",
          }}
          spacing={{ xs: 8, md: 3, lg: 4, sm: 3 }}
          sx={{
            height: "70vh",
            width: "200vw",
          }}
        >
          <Grid xs={7} sm={6} md={4} lg={2}>
            <Box
              sx={{
                height: {
                  lg: "65%",

                  xs: "180px",
                },
                width: {
                  lg: "117%",

                  xs: "280px",
                },
                alignItems: "center",
                justifyContent: "center",
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
                  lg: "61%",
                },
                marginBottom: {
                  lg: "0",
                  md: "0",
                  sm: "0",
                  xs: "3%",
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
                  color: "#fff",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "20vw",

                      xs: "280px",
                    },

                    height: {
                      lg: "32vh",

                      xs: "178px",
                    },
                    content: `'Khushbu kannojiya'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.5s",
                  },
                },
              }}
            >
              <Image
                src={oneside}
                alt="oneside"
                style={{
                  height: "100%",
                }}
              />

              <Box sx={{}}>
                <span
                  style={{
                    color: "#fff",
                  }}
                ></span>
              </Box>
            </Box>
          </Grid>
          <Grid xs={7} sm={6} md={4} lg={2}>
            <Box
              sx={{
                height: {
                  lg: "65%",

                  xs: "180px",
                },
                width: {
                  lg: "108%",

                  xs: "280px",
                },
                justifyContent: "center",
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
                  lg: "200px",
                },
                marginBottom: {
                  lg: "0",
                  md: "0",
                  sm: "0",
                  xs: "1%",
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
                  color: "#fff",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",

                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",

                  transition: "all 0.5s",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "18%",
                      md: "257px",
                      sm: "30vw",
                      xs: "280px",
                    },

                    height: {
                      lg: "32%",
                      md: "205px",
                      sm: "207px",
                      xs: "178px",
                    },

                    content: `'Khushbu kannojiya'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.5s",
                  },
                },
              }}
            >
              <Image
                src={Gwalior}
                alt="Gwalior"
                style={{
                  height: "100%",
                }}
              />

              <Box
                sx={{
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
          <Grid xs={7} sm={6} md={4} lg={6}>
            <Box
              sx={{
                height: {
                  lg: "50vh",

                  xs: "180px",
                },
                width: {
                  lg: "40vw",

                  xs: "280px",
                },
                alignItems: "center",
                justifyContent: "center",
                marginLeft: {
                  lg: "250px",
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
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",
                  transition: "all 0.8s",
                  color: "#fff",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "40%",
                      md: "250px",
                      sm: "272px",
                      xs: "280px",
                    },

                    height: {
                      lg: "50%",
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
                height={10000}
                width={10000}
                alt="no img"
                style={{
                  height: "100%",
                }}
              />

              <Box
                sx={{
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
          <Grid xs={7} sm={6} md={4} lg={6}>
            <Box
              sx={{
                height: {
                  lg: "50vh",

                  xs: "180px",
                },
                width: {
                  lg: "40vw",

                  xs: "280px",
                },
                alignItems: "center",
                borderRadius: "8px",
                border: {
                  lg: "3px solid green",
                  md: "3px solid pink",
                  sm: "3px solid blue",
                  xs: "3px solid orange",
                },

                marginTop: {
                  lg: "-90px",

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
                  color: "#fff",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "40%",
                      md: "253px",
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
                  lg: "136px",
                },
              }}
            >
              <Image
                src={Gwalior}
                alt="Gwalior"
                style={{
                  height: "100%",

                  border: "1px solid red",
                }}
              />

              <Box
                sx={{
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

          <Grid xs={7} sm={6} md={4} lg={2}>
            <Box
              sx={{
                height: {
                  lg: "33vh",

                  xs: "180px",
                },
                width: {
                  lg: "119%",

                  // sm: "325px",
                  xs: "280px",
                },
                alignItems: "center",
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

                  xs: "20px",
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
                  color: "#fff",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "20vw",

                      xs: "280px",
                    },

                    height: {
                      lg: "32vh",

                      xs: "178px",
                    },
                    content: `'Khushbu kannojiya'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.5s",
                  },
                },
                marginLeft: {
                  lg: "20px",
                },
              }}
            >
              <Image
                src={Gwalior}
                height={10000}
                width={10000}
                alt="no img"
                style={{
                  height: "100%",
                }}
              />

              <Box
                sx={{
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

          <Grid xs={7} sm={6} md={4} lg={2}>
            <Box
              sx={{
                height: {
                  lg: "33vh",

                  // sm: "210px",
                  xs: "180px",
                },
                width: {
                  lg: "20vw",

                  xs: "280px",
                },
                alignItems: "center",
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
                  color: "#fff",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "20vw",
                      md: "255px",
                      sm: "272px",
                      xs: "280px",
                    },

                    height: {
                      lg: "32vh",
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
                  lg: "71px",
                },
              }}
            >
              <Image
                src={Gwalior}
                height={10000}
                width={10000}
                alt="no img"
                style={{
                  height: "100%",
                }}
              />

              <Box
                sx={{
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
