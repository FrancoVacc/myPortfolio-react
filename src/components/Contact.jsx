import React from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  const networks = [
    {
      name: "gmail",
      icon: <SiGmail />,
      link: "#",
      color: "text-red-500",
    },
    {
      name: "linkedin",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/franco-vaccari-b4123a246/",
      color: "text-blue-500",
    },
    {
      name: "github",
      icon: <SiGithub />,
      link: "https://github.com/FrancoVacc",
      color: "text-slate-800",
    },
    {
      name: "instagram",
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com/francovacc2.0/",
      color: "text-purple-500",
    },
  ];
  return (
    <div>
      <h3 className=" text-lg font-semibold text-center">Contact 📩</h3>
      <div className="flex flex-wrap justify-around my-28">
        <div>
          <p>Hire Me 😉</p>
        </div>
        <div>
          <p className="mb-4">My Networks</p>
          <ul className="grid grid-rows-4 gap-4">
            {networks.map((network) => (
              <li key={network.name}>
                <a
                  href={network.link}
                  target="_blank"
                  className="uppercase text-sm"
                >
                  <span className={`${network.color} text-xl`}>
                    {network.icon}
                  </span>
                  {network.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
