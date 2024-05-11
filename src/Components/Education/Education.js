import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Card, CardContent, Modal, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
export default function Education() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "",

    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box
        // sx={{
        //   backgroundImage:
        //     "   linear-gradient(140deg, rgba(3, 94, 139, 0.93), rgba(0, 203, 169, 0.73), rgba(0, 225, 80, 0.04)), linear-gradient(72deg, transparent, rgba(0, 225, 117, 0.64))",
        //   // background-image:;
        //   height: {
        //     lg: "100vh",

        //     border: "2px solid green",
        //   },
        // }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "revert-layer",
            textAlign: "center",
            marginTop: "2%",
            color: "black",
            fontSize: "30px",

            position: "relative",

            // backgroundColor:"red",
            "::after": {
              content: `''`,
              display: "block",
              width: 0,
              height: "5px",
              backgroundColor: "goldenrod",
              position: "absolute",
              bottom: "-2px",
              left: "312px",
              transition: "width 0.3s ease",
              fontWeight: "bold",
            },
            ":hover": {
              "::after": {
                // width:"44%"
                width: {
                  lg: "55%",
                  md: "0",
                },
              },
            },
          }}
        >
          Explore Top Tourist Destinations in Madhya Pradesh
        </Typography>

        <Grid container   direction={{
            xs: "row",
            sm: "row",
            alignItems: "center",
            justify: "center",
          }}>
          <Grid xs={12} sm={4} lg={6} >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                component="main"
                sx={{
                  display: "grid",
                  gridAutoFlow: "column",
                  height: "auto",
                  padding: "2rem",
                  
                }}
              >
                <Box
                  component="article"
                  className="card georgia"
                  sx={{
                    display: "flex",
                    border: {
                      lg: "3px solid green",
                      md: "3px solid pink",
                      sm: "3px solid blue",
                      xs: "3px solid orange",
                    },
                    flexDirection: "column-reverse",
                    width: "35vw",
                    // maxWidth: "35rem",
                    height: "40vh",
                    borderRadius: "1rem",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    boxShadow: "0.4rem 0.4rem 0.8rem rgba(0, 0, 0, 0.25)",
                    transform: "scale(1)",
                    transition: "transform 500ms ease-out",
                    transformOrigin: "left",
                    backgroundImage: `url("https://cache.careers360.mobi/media/colleges/reviews/2023/4/28/198211/IMG_20200228_175511_9.jpg")`,
                    "&:hover, &:focus-within": {
                      transform: "scale(1.05)",
                      transition: "transform 500ms ease-in",
                      transformOrigin: "left",
                    },
                    "& + .card": {
                      transform: "translateX(2rem)",
                      transition: "transform 500ms ease-in",
                    },
                    
                  }}
                >
                  <Box
                    className="card__content"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "55%",
                      padding: "12% 2rem 3rem",
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 10%, #000000 100%)",
                      transform: "translateY(62%)",
                      transition: "transform 500ms ease-out",
                      transitionDelay: "500ms",
                      "&:hover, &:focus-within": {
                        transform: "translateY(0)",
                        transition: "transform 500ms ease-in",
                      },
                    }}
                  >
                    <Box
                      className="card__content--container"
                      sx={{ marginTop: "var(--flow-space, 1.5rem)" }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          position: "relative",
                          width: "fit-content",
                          color: "#fff",
                        }}
                      >
                        Georgia
                        <Box
                          component="span"
                          sx={{
                            fontSize: "22px",
                            content: '""',
                            position: "absolute",
                            height: "0.5rem",
                            // width: "calc(100% + 2rem)",
                            bottom: "calc((2rem - 0.5rem) * -1)",
                            left: "-5rem",
                            backgroundColor: "var(--brand-color)",
                            transform: "scaleX(0)",
                            transformOrigin: "right",
                            transition:
                              "opacity 500ms ease-in, transform 500ms ease-out",
                            transitionDelay: "500ms",
                            "&:hover, &:focus-within": {
                              opacity: 1,
                              transform: "scaleX(1)",
                              transformOrigin: "left",
                              transition:
                                "opacity 500ms ease-in, transform 500ms ease-out",
                              transitionDelay: "500ms",
                            },
                          }}
                        />
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#fff",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rerum in labore laudantium deserunt fugiat
                        numquam.
                      </Typography>
                    </Box>

                    <Button
                      variant="outlined"
                      color="success"
                      size="small"
                      endIcon={<SendIcon />}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
                {/* Repeat for other cards */}
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={4} lg={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                component="main"
                sx={{
                  display: "grid",
                  gridAutoFlow: "column",
                  height: "auto",
                  padding: "2rem",
                }}
              >
                <Box
                  component="article"
                  className="card georgia"
                  sx={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    width: "37vw",
                    // maxWidth: "35rem",
                    height: "40vh",
                    borderRadius: "1rem",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    boxShadow: "0.4rem 0.4rem 0.8rem rgba(0, 0, 0, 0.25)",
                    transform: "scale(1)",
                    transition: "transform 500ms ease-out",
                    transformOrigin: "left",
                    backgroundImage: `url("https://cache.careers360.mobi/media/colleges/reviews/2023/4/28/198211/IMG_20200228_175511_9.jpg")`,
                    "&:hover, &:focus-within": {
                      transform: "scale(1.05)",
                      transition: "transform 500ms ease-in",
                      transformOrigin: "left",
                    },
                    "& + .card": {
                      transform: "translateX(2rem)",
                      transition: "transform 500ms ease-in",
                    },
                  }}
                >
                  <Box
                    className="card__content"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "55%",
                      padding: "12% 2rem 3rem",
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 10%, #000000 100%)",
                      transform: "translateY(62%)",
                      transition: "transform 500ms ease-out",
                      transitionDelay: "500ms",
                      "&:hover, &:focus-within": {
                        transform: "translateY(0)",
                        transition: "transform 500ms ease-in",
                      },
                    }}
                  >
                    <Box
                      className="card__content--container"
                      sx={{ marginTop: "var(--flow-space, 1.5rem)" }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          position: "relative",
                          width: "fit-content",
                          color: "#fff",
                        }}
                      >
                        Georgia
                        <Box
                          component="span"
                          sx={{
                            fontSize: "22px",
                            content: '""',
                            position: "absolute",
                            height: "0.5rem",
                            // width: "calc(100% + 2rem)",
                            bottom: "calc((2rem - 0.5rem) * -1)",
                            left: "-5rem",
                            backgroundColor: "var(--brand-color)",
                            transform: "scaleX(0)",
                            transformOrigin: "right",
                            transition:
                              "opacity 500ms ease-in, transform 500ms ease-out",
                            transitionDelay: "500ms",
                            "&:hover, &:focus-within": {
                              opacity: 1,
                              transform: "scaleX(1)",
                              transformOrigin: "left",
                              transition:
                                "opacity 500ms ease-in, transform 500ms ease-out",
                              transitionDelay: "500ms",
                            },
                          }}
                        />
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#fff",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rerum in labore laudantium deserunt fugiat
                        numquam.
                      </Typography>
                    </Box>

                    <Button
                      variant="outlined"
                      color="success"
                      size="small"
                      endIcon={<SendIcon />}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
                {/* Repeat for other cards */}
              </Box>
            </Box>
          </Grid>
          
        </Grid>
      </Box>
    </>
  );
}
