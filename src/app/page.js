"use client";




import Navbar1 from "@/Components/Navbar/Navbar";
import Slider from "@/Components/Slider";
import AniCards from "@/Components/AniCards"
import Explore from "@/Components/Explor/Explor";

export default function page() {
  return (
    <main className="flex flex-col h-full    "  >
    

    <Navbar1/>
    <Slider/> 
    <AniCards/>
    <Explore/>

    
    
    </main>

        
      
    
  );
}
