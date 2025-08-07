import SelectedWork from "@/components/SelectedWork";
import UnderConstructionBanner from "@/components/UnderConstructionBanner";
import Hero from "../components/Hero";
import { Profiler } from "react";
import ProjectPage from "@/components/ProjectPage";
import GetToKnow from "@/components/GetToKnow";
import Contact from "@/components/Contact";
import MySkills from "@/components/MySkills";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
       <UnderConstructionBanner />
      <Hero />
      <Navbar/>
      <MySkills />
      <SelectedWork />
      <Contact />
    </>
  );
}
