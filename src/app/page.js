
// import Card from "@/Components/Card";

import Navbar1 from "@/Components/Navbar/Navbar";
import Slider from "@/Components/Slider";
import AniCards from "@/Components/AniCards"
// import Category from "@/Components/Category";


// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-white ">
    

    <Navbar1/>
    <Slider/>
    <AniCards/>
    {/* <Category/> */}
   
    {/* <Card/> */}
    
    
    
    </main>
  );
}
