"use client";
import Link from "next/link";
import Image from "next/image";
import img from "@/assets/img/search.jpg";
import Gwalior from "@/assets/img/Gwalior.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockSharpIcon from "@mui/icons-material/LockSharp";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
// import { useState, forwardRef } from "react";
// import snackbar from "@mui/material/Snackbar";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { RememberMe, RouterRounded } from "@mui/icons-material";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// icon center//
const center = {
  position: "relative",
  top: "50%",
  left: "37%",
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Page() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Image
        src={img}
        style={{ height: "100vh" }}
        className="w-full h-auto w-screen"
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "69%",
          height: "70%",
          bgcolor: "background.paper",
          boxShadow: 24,

          margin: "20px auto",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} lg={8}>
            <Box
              sx={{
                backgroundSize: "cover",
                height: "70vh",

                display: { sm: "none", xs: "none", md: "block" }, ///ye  screen ke liy h
              }}
            >
              <Image
                src={Gwalior}
                style={{
                  height: "100%",

                  //   border: "1px solid red",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <Box
              sx={{
                background: "cover",
                minHeight: "500",
                height: "70vh",
                width: "100%",
                backgroundColor: "#1E3D86",
              }}
            >
              <ThemeProvider theme={darkTheme}>
                <Container>
                  <Box height={35} />
                  <Box sx={center}>
                    <Avatar
                      sx={{
                        backgroundColor: "#F47F24",

                        ml: "35px",
                        mb: "4px",

                        // alignItems:'center'
                      }}
                    >
                      <LockSharpIcon />
                    </Avatar>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",

                        ml: "-48px",
                        mb: "4px",
                        width: "10",
                      }}
                    >
                      Forgot password
                    </Typography>
                  </Box>
                  <Box height={35} />
                  {/* <TextField
                    id="outlined-basic"
                    label="Enter Your Phone Number"
                    variant="outlined"
                    type="email"
                    autoComplete="email"
                    required
                    fullWidth
                  /> */}
                  <Box height={20} />
                  <Box>
                    <TextField
                      id="outlined-basic"
                      label="Enter Your Email"
                      variant="outlined"
                      type="email"
                      autoComplete=" password"
                      required
                      fullWidth
                    />
                  </Box>
                  {/* 
                  aab remember of forgot */}
                  <Box height={20} />
                  <Grid item xs={12} className="flex flex-row"></Grid>
                  {/* now am adding button */}

                  <Grid item xs={12}>
                    <Box sx={{ width: "100%" }}>
                      <Stack spacing={2}>
                        <Box>
                          {" "}
                          <Button
                            className=" lex items-center top-4 w-full cffc  "
                            type="submit"
                            variant="component"
                            // fullWidth="true"

                            sx={{
                              mt: "10px",
                              mr: "20px",
                              borderRadius: 28,
                              color: "black",

                              minWidth: "170px",
                              backgroundColor: "#F47F24",
                              alignContent: "center",
                              // border: "1px soloid red",
                              margin: "auto",
                              ":hover": {
                                //yha pe hover hua h
                                backgroundColor: "#F47F24",
                              },
                            }}
                          >
                            <Link href="/NewOtp">Send OTP</Link>
                          </Button>
                        </Box>
                        <Box></Box>
                      </Stack>
                    </Box>
                  </Grid>
                </Container>
              </ThemeProvider>
              <Box></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
