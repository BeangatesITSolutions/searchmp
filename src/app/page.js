"use client";
// import Navbar1 from "@/Components/Navbar/Navbar";
// import Slider from "@/Components/SecondSection/Slider";

// import Card from "@/Components/Card";

import Navbar1 from "@/Components/Navbar/Navbar";
import Slider from "@/Components/Slider";
import AniCards from "@/Components/AniCards"
// import Category from "@/Components/Category";


// import Image from "next/image";




// import React from "react";
//  import Login from "./Login/page";
   import Explor from "../Components/Explor/Explor"

//  import * as React from "react";
    
export default function page() {
  return (
    <main className="flex min-h-screen flex-col  bg-white ">
    
{/* 
    <Navbar1/>
    <Slider/> */}
    <Explor/>
   {/* <Login/> */}
    <Slider/>
    <AniCards/>
    {/* <Category/> */}
   
    {/* <Card/> */}
    
    
    
    </main>

        
      
    
  );
}
