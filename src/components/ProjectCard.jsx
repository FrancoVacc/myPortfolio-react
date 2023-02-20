import React from "react";

import { SiFirebase } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ object }) => {
  const { name, img, gitHub, deploy, deployLink } = object;
  return (
    <div className=" w-52 rounded-lg overflow-hidden bg-slate-900  m-4 hover:shadow-md hover:shadow-green-200">
      <a href={deployLink} target="_blank">
        <img src={img} alt={name} className="w-full" />
      </a>
      <h4 className=" text-xl my-4 mx-auto text-center text-white">{name}</h4>
      <div className="flex justify-center mb-4">
        <a
          href={gitHub}
          target="_blank"
          title="repository"
          className=" text-white hover:text-gray-700 text-xl mr-2"
        >
          <FaGithub />
        </a>
        <a href={deployLink} target="_blank">
          {deploy === "netlify" ? (
            <span
              title="Live view"
              className="text-sky-500 hover:text-sky-400 text-xl "
            >
              <SiNetlify />
            </span>
          ) : (
            <span
              title="Live view"
              className="text-yellow-500 hover:text-yellow-400 text-xl "
            >
              <SiFirebase />
            </span>
          )}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
