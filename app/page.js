import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
