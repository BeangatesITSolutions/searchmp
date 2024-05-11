"use client";




import Navbar1 from "@/Components/Navbar/Navbar";
import Slider from "@/Components/Slider";
import AniCards from "@/Components/AniCards"
import Explore from "@/Components/Explor/Explor";
<<<<<<< HEAD
import Education from "@/Components/Education/Education";

=======
import Card from "@/Components/Card";
import Stories from "@/Components/Stories";
>>>>>>> 5ed6b26f9cc948bc53db966a917626525f10abca

export default function page() {
  return (
    <main className="flex flex-col h-full    "  >
    
    
     <Navbar1/>
    <Slider/> 
    <AniCards/>
<<<<<<< HEAD
    <Explore/> 
    <Education/>
=======
    {/* <Explore/> */}
    <Stories/>
    <Card/>

>>>>>>> 5ed6b26f9cc948bc53db966a917626525f10abca
    
    
    </main>

        
      
    
  );
}
