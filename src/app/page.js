"use client";




import Navbar1 from "@/Components/Navbar/Navbar";
import Slider from "@/Components/Slider";
import AniCards from "@/Components/AniCards"

import Card from "@/Components/Card";
// import Stories from "@/Components/Stories";s 
import Explore from "@/Components/Explor/Explor";
// import Events from "@/Components/Event/Events";
// import New from "@/Components/New/New";  
import Footer from "@/Components/Footer/Footer"


export default function page() {
  return (
    <main className="flex flex-col h-full    "  >
    
    
     <Navbar1/>
    <Slider/> 
    <AniCards/>
  
    {/* <Stories/> */}
    <Card/>

    <Explore/> 
    {/* <Events/> */}
    {/* <New/> */}
    <Footer/>

    
    
    
    </main>

        
      
    
  );
}
