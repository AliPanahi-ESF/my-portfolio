import SelectedWork from "@/components/SelectedWork";
import Hero from "../components/Hero";
import MyApproach from "../components/MyApproach";
import { Profiler } from "react";
import ProjectPage from "@/components/ProjectPage";
import GetToKnow from "@/components/GetToKnow";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <Hero />
      <MyApproach />
      <SelectedWork />
      <GetToKnow />
      <Contact />
    </>
  );
}
