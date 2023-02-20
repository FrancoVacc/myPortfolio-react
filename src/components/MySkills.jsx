import React from "react";

//icons
import { ImHtmlFive } from "react-icons/im";
import { IoLogoVue, IoLogoNodejs } from "react-icons/io5";
import { FaBootstrap, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiCss3,
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

import SkillShow from "./SkillShow";

const MySkills = () => {
  const actualSkill = [
    {
      name: "HTML",
      component: <ImHtmlFive />,
      color: "text-orange-600",
    },
    {
      name: "CSS",
      component: <SiCss3 />,
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      component: <SiJavascript />,
      color: "text-yellow-400",
    },
    {
      name: "Sass",
      component: <SiSass />,
      color: "text-pink-400",
    },
    {
      name: "Bootstrap",
      component: <FaBootstrap />,
      color: "text-violet-500",
    },
    {
      name: "Tailwind",
      component: <SiTailwindcss />,
      color: "text-cyan-400",
    },
    {
      name: "React",
      component: <FaReact />,
      color: "text-sky-400",
    },
    {
      name: "Firebase",
      component: <SiFirebase />,
      color: "text-amber-400",
    },
    {
      name: "Git",
      component: <FaGitAlt />,
      color: "text-orange-600",
    },
    {
      name: "GitHub",
      component: <FaGithub />,
      color: "text-black",
    },
  ];

  const nextSkills = [
    {
      name: "React-Native",
      component: <TbBrandReactNative />,
      color: "text-sky-400",
    },
    {
      name: "Vue",
      component: <IoLogoVue />,
      color: "text-emerald-700",
    },
    {
      name: "NodeJS",
      component: <IoLogoNodejs />,
      color: "text-green-500",
    },
    {
      name: "Postgres",
      component: <SiPostgresql />,
      color: "text-sky-800",
    },
    {
      name: "MongoDB",
      component: <SiMongodb />,
      color: "text-green-600",
    },
  ];

  return (
    <div className=" bg-slate-200 my-5 px-4">
      <h3 className=" text-lg font-semibold text-center">
        This ar some of my skills
      </h3>
      <p className="text-center my-2">I Actually know</p>
      <SkillShow skill={actualSkill} />
      <p className="text-center my-2">Learning</p>
      <SkillShow skill={nextSkills} />
    </div>
  );
};

export default MySkills;
