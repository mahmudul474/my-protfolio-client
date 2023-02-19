import React from "react";
import About from "../../Components/AboutMe/About";
import Contact from "../../Components/Contact/Contact";
import Media from "../../Components/Media/Media";
import Projexts from "../../Components/Projects/Projexts";
import Skill from "../../Components/Skils/Skill";
import Nav from "../../Navbar/Nav";
import Banner from "./HomeBanner/Banner";

const Home = () => {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <Banner></Banner>
      <About></About>
      <Projexts></Projexts>
      <Skill></Skill>
      <Contact></Contact>
      <Media></Media>
    </div>
  );
};

export default Home;
