import React from "react";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MySkills from "./components/MySkills";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import ProfileImg from "./img/profile.png";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

const App = () => {
  const description = {
    title: "Hi, I'm Franco Vaccari, frontend junior developer ✋🏼",
    text: `About me... i'm from Argentina, i'm a biology teacher but now i'm
    looking for a change, i studied for a long time some programing
    languages. I also studied systems analyst on a institute meny years
    ago. I've dedicate to teach computer sience, programming and now
    biology. But now i'm looking for an oportunity to work on developer
    world...`,
  };
  const objetives = {
    title: "Some of my objetives ✨",
    text: `My objetives are for this year, learn more skills about web and mobile development, and work in a development group. Meet with other developers and exchange experiences and ideas. Start working in the web development world and make experience to become a better developer. 😌`,
  };
  const networks = [
    {
      name: "gmail",
      icon: <SiGmail />,
      link: "#",
    },
    {
      name: "linkedin",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/franco-vaccari-b4123a246/",
    },
    {
      name: "github",
      icon: <SiGithub />,
      link: "https://github.com/FrancoVacc",
    },
    {
      name: "instagram",
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com/francovacc2.0/",
    },
  ];

  return (
    <div className="bg-[url('./img/fondo.png')]">
      <Navbar />
      <Articles texts={description} img={ProfileImg} />
      <MySkills />
      <Articles texts={objetives} />
      <Projects />
      <Contact networks={networks} />
      <Footer networks={networks} />
    </div>
  );
};

export default App;
