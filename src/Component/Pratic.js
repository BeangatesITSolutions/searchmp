"use client";
import Link from "next/link";
import Image from "next/image";
import oneside from "@/assets/img/oneside.jpg";
import ujjen from "@/assets/img/ujjain.jpg";
import bgimg from "@/assets/img/bgimg.jpg";
import Gwalior from "@/assets/img/Gwalior.jpg";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "35%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60vw",
        height:"70vh",
        minHeight: 400,
        textAlign: "center",
      }}
    >
             <Typography
          variant="h5"
          sx={{
            marginBottom: 8,
            // border:3,
          }}
        >
          Explore Top Tourist Destinations in Madhya Pradesh
        </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        
        <Grid item xs={2} sm={4} md={3}>
          <Image
            src={oneside}
            style={{
              height: "50vh",

              border: "5px solid red",
            }}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Image
            src={oneside}
            style={{
              height: "100%",

              border: "1px solid red",
            }}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <Image
            src={oneside}
            style={{
              height: "100%",

              border: "1px solid red",
            }}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <Image
            src={oneside}
            style={{
              height: "100%",

              border: "1px solid red",
            }}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Image
            src={oneside}
            style={{
              height: "100%",

              border: "1px solid red",
            }}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Image
            src={oneside}
            style={{
              height: "100%",

              border: "1px solid red",
            }}
          />
        </Grid>
       
      </Grid>
      
    </Box>
  );
}
