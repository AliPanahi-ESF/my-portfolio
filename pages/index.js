import SelectedWork from "@/components/SelectedWork";
import UnderConstructionBanner from "@/components/UnderConstructionBanner";
import Hero from "../components/Hero";
import MyApproach from "../components/MyApproach";
import { Profiler } from "react";
import ProjectPage from "@/components/ProjectPage";
import GetToKnow from "@/components/GetToKnow";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
       <UnderConstructionBanner />
      <Hero />
      <MyApproach />
      <SelectedWork />
      <GetToKnow />
      <Contact />
    </>
  );
}
