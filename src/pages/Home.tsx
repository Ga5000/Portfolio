import React from "react";
import HeroSection from "../elements/HeroSection";
import Skills from "../elements/Skills";
import TimeLine from "../elements/TimeLine";
import Projects from "../elements/Projects";
import Certificates from "../elements/Certificates";
import Footer from "../elements/Elements";

const Home: React.FC = () => {

  return (
    <>
      <HeroSection />
      <Skills/>
      <TimeLine />
      <Projects />
      <Certificates />
      <Footer />
    </>
  );
};

export default Home;