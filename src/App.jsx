import React from "react";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MySkills from "./components/MySkills";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import ProfileImg from "./img/profile.png";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Objetives from "./components/Objetives";
import { Element } from "react-scroll";

const App = () => {
  const objetives = {
    title: "Some of my objetives ✨",
    text: `My objetives are for this year, learn more skills about web and mobile development, and work in a development group. Meet with other developers and exchange experiences and ideas. Start working in the web development world and make experience to become a better developer. 😌`,
  };
  const networks = [
    {
      name: "gmail",
      icon: <SiGmail />,
      link: "mailto:francovacc2.0@gmail.com?Subject=Hire%20from%20portfolio",
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
    {
      name: "life sheet",
      icon: <BsFillPersonFill />,
      link: "./src/assets/Curriculum.pdf",
    },
  ];
  const links = [
    {
      name: "About Me",
      patch: "information",
    },
    {
      name: "My Skills",
      patch: "skills",
    },
    {
      name: "Objetives",
      patch: "objetives",
    },
    {
      name: "Projects",
      patch: "projects",
    },
    {
      name: "Contact me",
      patch: "contact",
    },
  ];

  return (
    <div className="bg-[url('./img/fondo1.png')] bg-cover">
      <Navbar links={links} />
      <Element name="information">
        <Articles img={ProfileImg} />
      </Element>
      <Element name="skills">
        <MySkills />
      </Element>
      <Element name="objetives">
        <Objetives texts={objetives} />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact networks={networks} />
      </Element>
      <Element name="footer">
        <Footer networks={networks} />
      </Element>
    </div>
  );
};

export default App;
