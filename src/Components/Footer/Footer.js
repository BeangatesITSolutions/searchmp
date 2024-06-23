import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import logo from "@/assets/img/logo.png";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import CallIcon from '@mui/icons-material/Call';
export default function Desing() {
  return (
    <>
      <section>
        <footer
          style={{
            // border:"5px solid green",
            padding: "10px",
            backgroundImage:
              "radial-gradient(at 40% 18%, hsla(185,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(351,0%,100%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(189,100%,56%,1) 0px, transparent 50%)",
            backgroundColor: "hsla(0,14%,92%,1)",
            backdropFilter: "blur( 14.5px )",

            webkitbackdropfilter: "blur( 14.5px )",
          }}
        >
          <Box className="new_footer_top">
            <Container
              sx={{
                // border:"3px solid red",
                padding: "10px",
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    className="f_widget company_widget wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <Image
                      src={logo}
                      alt="logo"
                      style={{
                        border: 5,
                        height: "70px",
                        width: "70px",
                        marginLeft: "100px",
                        marginTop: "-7px",
                      }}
                    ></Image>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "15px",

                        marginLeft: "30px",
                        // border:"1px solid red",
                        textAlign: "justify",
                        marginTop: "5px",
                        color: "#1976D2",
                      }}
                    >
                      Madhya Pradesh Share This The Sidhi district of Madhya
                      Pradesh is a repository of natural, historical and
                      cultural history and is known for luxuriant natural
                      resources with rivers.{" "}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={
                      {
                        //  border:"3px  solid red",
                        //  justifyContent:"center",
                      }
                    }
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "20px",
                        // border:"3px  solid red",
                        textAlign: "center",
                        // color:"#fff"
                        cursor: "pointer",
                      }}
                    >
                      Quick Link
                    </Typography>
                    <ul
                      style={{
                        marginLeft: "56px",
                        padding: 20,
                      }}
                    >
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          EXPLORE MP
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          EXPLORE MP
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          DESTINATION
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          BLOGS
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          DESTINATION
                        </Link>
                      </li>
                      <li>
                        <Link
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          BLOGS
                        </Link>
                      </li>
                    </ul>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={
                      {
                        // textAlign:"center"
                      }
                    }
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        // color:"#fff"
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      variant="body1"
                    >
                      Quick link
                    </Typography>
                    <ul
                      style={{
                        padding: "20px",
                        marginLeft: "70px",
                      }}
                    >
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          Explore MP
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          Reporting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          Support Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          <KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>
                          Privacy
                        </Link>
                      </li>
                    </ul>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={
                      {
                        //  border:"3px  solid red",
                        //  justifyContent:"center",
                      }
                    }
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "20px",
                        // border:"3px  solid red",
                        textAlign: "center",
                        // color:"#fff"/
                        cursor: "pointer",
                      }}
                    >
                      Address
                    </Typography>
                    <ul
                      style={{
                        marginLeft: "56px",
                        padding: 20,
                      }}
                    >
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                            fontSize:"14px"
                          }}
                        >
                        
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the  
                        </Link>
                      </li>
                   
                      <li>
                        <Link
                          href="#"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                       
                        </Link>
                      </li>
                    </ul>
                    {
                      <Box
                        className="f_social_icon"
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <Link
                          href="#"
                          className="fab fa-facebook"
                          sx={{
                            textDecoration: "none",
                            color: "fff",
                          }}
                        >
                          <InstagramIcon></InstagramIcon>
                        </Link>
                        <Link
                          href="#"
                          className="fab fa-twitter"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          <FacebookIcon></FacebookIcon>
                        </Link>
                        <Link
                          href="#"
                          className="fab fa-linkedin"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          <TwitterIcon></TwitterIcon>
                        </Link>
                        <Link
                          href="#"
                          className="fab fa-linkedin"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          <GoogleIcon></GoogleIcon>
                        </Link>
                      </Box>
                    }
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box className="footer_bottom">
            <Container>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xs={12} sm={12}>
                  <Typography
                    variant="body1"
                    className="mb-0 f_400"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    © cakecounter Inc.. 2024All Starkano123.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </footer>
      </section>
    </>
  );
}
