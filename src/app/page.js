import AboutUsContent from "@/components/aboutUs/AboutUsContent";
import CoreValues from "@/components/coreValues/CoreValues";
import CurrentInitiatives from "@/components/currentInitiatives/CurrentInitiatives";
import GetInvolved from "@/components/getInvolved/GetInvolved";
import HeroSection from "@/components/hero/HeroSection";
import Testimonials from "@/components/testimonials/Testimonials";
import Image from "next/image";


export default function Home() {
  return (
    <>
    {/* <div style={{height:"50vh"}}>

      Fulkoka
    </div> */}
    <HeroSection />
    <AboutUsContent />
    <CoreValues />
    <CurrentInitiatives />
    <GetInvolved />
    <Testimonials />
    </>
  );
}
