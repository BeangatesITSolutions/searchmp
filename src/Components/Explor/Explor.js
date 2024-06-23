import Link from "next/link";
import Image from "next/image";
import temple from "@/assets/img/temple.jpg";
import narmada from "@/assets/img/narmada.jpg";
import bgimg from "@/assets/img/bgimg.jpg";
import Khajuro from "@/assets/img/khajuraoTemple.jpg";
import Gwlior from "@/assets/img/Gwalior.jpg";
import bhopal from "@/assets/img/bhopal.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Amarkanatak from "@/assets/img/Amarkantak.jpg";
import mhakal from "@/assets/img/mhakal.jpg";
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
      <Box
        sx={{
          paddingBottom: "80px",
          //  border:"2px solid red"
          border: {
            // lg: "3px solid green",
            // md: "3px solid pink",
            // sm: "5px solid blue",
            // xs: "3px solid orange",
          },
          height:{
            lg:"700px",
            md:"700px",
            sm:"860px",
            xs:"1800px"
          }
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: 8,
            // fontFamily: "revert-layer",
            textAlign: "center",
            marginTop: "2%",
            fontWeight: "bold",
            cursor:"pointer"
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
            height: "87vh",
            width: "100vw",
            // border:5
          }}
        >
          <Grid xs={12} sm={8} md={2} lg={2}>
            <Box
              sx={{
                height: {
                  lg: "32vh",
                  md: "36vh",
                  sm: "40vh",
                  xs: "45vh",
                },
                width: {
                  lg: "19vw",
                  md: "19vw",
                  sm: "34vw",
                  xs: "65vw",
                },
                alignItems: "center",
                justifyContent: "center",
                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",
                "&:hover, &:focus-within": {
                  transform: "scale(1.03)",
                  transition: "transform 500ms ease-in",
                },

                borderRadius: "8px",
                border: {
                  // lg: "3px solid green",
                  // md: "3px solid pink",
                  // sm: "3px solid blue",
                  // xs: "3px solid orange",
                },
                marginLeft: {
                  lg: "88%",
                  md: "68%",
                  sm: "12%",
                  xs: "25%",
                },
                marginBottom: {
                  lg: "0",
                  md: "0",
                  sm: "0%",
                  xs: "6%",
                },
                marginBottom: {
                  lg: "0",
                  xs: "3%",
                },
                borderRadius: "11%",
                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  // borderTopRightRadius:"40px",
                  borderTopLeftRadius:"19px",
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
                      lg: "19vw",
                      md: "19%",
                      sm: "54%",
                      xs: "65vw",
                    },

                    height: {
                      lg: "32vh",
                      md: "33%",
                      sm: "39%",
                      xs: "45vh",
                    },
                    content: `'Bhopal City'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.4s",
                  },
                },
              }}
            >
              <Image
                src={bhopal}
                alt="oneside"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "19px",
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
          {/* First box complit */}
          <Grid xs={12} sm={4} md={2} lg={2}>
            <Box
              sx={{
                height: {
                  lg: "32vh",

                  md: "36vh",
                  sm: "40vh",
                  xs: "45vh",
                },
                width: {
                  lg: "19vw",
                  md: "19vw",
                  sm: "55vw",
                  xs: "65vw",
                },
                justifyContent: "center",
                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",

                borderRadius: "11%",
                border: {
                  // lg: "3px solid green",
                  // md: "3px solid pink",
                  // sm: "5px solid blue",
                  // xs: "3px solid orange",
                },
                marginLeft: {
                  lg: "250px",
                  sm: "-73%",
                  md: "84%",
                  xs: "25%",
                },
                marginBottom: {
                  lg: "0",
                  md: "0",
                  sm: "-0%",
                  xs: "-1%",
                },
                cursor: "pointer",
                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  borderTopLeftRadius:"19px",
                  content: `''`,
                  width: "8%",
                  height: "12%",
                  cursor: "pointer",
                  display: "flex",
                  alignitems: "center",
                  justifyContent: "center",
                  fontSize: "19px",
                  fontWeight: "bold",
                  color: "#fff",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",
                  transition: "all 0.5s",
                  color: "#fff",
                },

                ":hover": {
                  ":before": {
                    width: {
                      lg: "19vw",
                      md: "19%",
                      sm: "54%",
                      xs: "65vw",
                    },

                    height: {
                      lg: "32vh",
                      md: "33%",
                      sm: "39%",
                      xs: "45vh",
                    },

                    content: `'Mansingh Palace, Gwalior'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.4s",
                  },
                },
              }}
            >
              <Image
                src={temple}
                alt="Gwalior"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "19px",
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
          {/* second box complite */}
          <Grid xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                height: {
                  lg: "53vh",
                  md: "43vh",
                  sm: "40vh",
                  xs: "45vh",
                },
                width: {
                  lg: "35vw",
                  md: "41vw",
                  sm: "55vw",
                  xs: "65vw",
                },
                alignItems: "center",
                justifyContent: "center",
                marginLeft: {
                  lg: "42%",
                  sm: "15%",
                  md: "34%",
                  xs: "25%",
                },

                borderRadius: "11%",
                border: {
                  // lg: "5px solid green",
                  // md: "3px solid pink",
                  // sm: "3px solid blue",
                  // xs: "3px solid orange",
                },

                marginTop: {
                  lg: "1px",
                  md: "-0%",
                  sm: "-1%",
                  xs: "2%",
                },

                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  content: `''`,
                  width: "8%",
                  height: "12%",
                  cursor: "pointer",
                  borderTopLeftRadius:"19px",
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
                      lg: "35vw",
                      md: "19%",
                      sm: "54%",
                      xs: "65vw",
                    },

                    height: {
                      lg: "53vh",
                      md: "33%",
                      sm: "39%",
                      xs: "45vh",
                    },
                    content: `'Narmada River,Hoshangabad'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.4s",
                  },
                },
              }}
            >
              <Image
                src={narmada}
                height={10000}
                width={10000}
                alt="no img"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "19px",
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
          {/* third box complite */}
          <Box height={20}></Box>
          <Grid xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                height: {
                  lg: "50vh",
                  md: "42vh",
                  sm: "40vh",
                  xs: "45vh",
                },
                width: {
                  lg: "39vw",
                  md: "39vw",
                  sm: "35vw",
                  xs: "65vw",
                },
                alignItems: "center",
                borderRadius: "8px",
                border: {
                  // lg: "3px solid green",
                  // md: "3px solid pink",
                  // sm: "3px solid blue",
                  // xs: "3px solid orange",
                },

                marginTop: {
                  lg: "-135px",
                  md: "-14%",
                  sm: "-1%",
                  xs: "2%",
                },

                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  content: `''`,
                  width: "8%",
                  height: "12%",
                  borderTopLeftRadius:"19px",
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
                      lg: "86vh",
                      md: "38%",
                      sm: "305px",
                      xs: "65vw",
                    },

                    height: {
                      lg: "50%",
                      md: "40%",
                      sm: "39%",
                      xs: "45vh",
                    },
                    content: `'Khajuro'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.4s",
                  },
                },
                marginLeft: {
                  lg: "205px",
                  sm: "24%",
                  md: "23%",
                  xs: "25%",
                },
              }}
            >
              <Image
                src={Amarkanatak}
                alt="Gwalior"
                style={{
                  height: "100%",
                  width: "100%",

                  borderRadius: "19px",
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
          {/* forth box complite */}

          <Grid xs={12} sm={6} md={2} lg={2}>
            <Box
              sx={{
                height: {
                  lg: "29vh",
                  md: "35vh",
                  sm: "40vh",
                  xs: "45vh",
                },
                width: {
                  lg: "17vw",
                  md: "20vw",
                  sm: "35vw",
                  xs: "65vw",
                },
                alignItems: "center",
                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",

                borderRadius: "11%",
                border: {
                  // lg: "3px solid green",
                  // md: "3px solid pink",
                  // sm: "5px solid blue",
                  // xs: "3px solid orange",
                },

                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  content: `''`,
                  width: "8%",
                  borderTopLeftRadius:"19px",
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
                      lg: "17vw",
                      md: "20%",
                      sm: "50vh",
                      xs: "155px",
                    },

                    height: {
                      lg: "29vh",
                      md: "33%",
                      sm: "39%",
                      xs: "45vh",
                    },
                    content: `'Amarkanatak'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.5s",
                  },
                },
                marginLeft: {
                  lg: "26%",
                  sm: "15%",
                  md: "2%",
                  xs: "25%",
                },
                marginTop: {
                  lg: "-1%",
                  md: "-21%",
                  sm: "2%",
                  xs: "1%",
                },
              }}
            >
              <Image
                src={Gwlior}
                height={10000}
                width={10000}
                alt="no img"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "19px",
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
          {/* fifth box complite */}
          <Grid xs={12} sm={2} md={2} lg={2}>
            <Box
              sx={{
                height: {
                  lg: "29vh",
                  md: "35vh",
                  sm: "40vh",
                  xs: "45vh",
                },
                width: {
                  lg: "17vw",
                  md: "20vw",
                  sm: "55vw",
                  xs: "65vw",
                },
                alignItems: "center",
                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",

                borderRadius: "10%",
                border: {
                  // lg: "3px solid green",
                  // md: "3px solid pink",
                  // sm: "3px solid blue",
                  // xs: "3px solid orange",
                },

                ":before": {
                  position: "absolute",
                  borderBottomRightRadius: "80px",
                  content: `''`,
                  width: "8%",
                  height: "12%",
                  borderTopLeftRadius:"19px",
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
                      lg: "17vw",
                      md: "19%",
                      sm: "54%",
                      xs: "65vw",
                    },

                    height: {
                      lg: "29vh",
                      md: "33%",
                      sm: "39%",
                      xs: "45vh",
                    },
                    content: `'Ujjain'`,
                    borderBottomRightRadius: "20px",
                    borderEndEndRadius: "20px",
                    transition: " all 0.4s",
                  },
                },
                marginLeft: {
                  lg: "33%",
                  md: "27%",
                  sm: "-43%",
                  xs: "25%",
                },
                marginTop: {
                  lg: "-1%",
                  sm: "5%",
                  md: "-20%",
                  xs: "1%",
                },
              }}
            >
              <Image
                src={mhakal}
                height={10000}
                width={10000}
                alt="no img"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "19px",
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
          {/* sixth box complite */}
        </Grid>
      </Box>
    </>
  );
}
