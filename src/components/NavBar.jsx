import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const links = [
    {
      name: "Home",
      patch: "/",
    },
    {
      name: "About Me",
      patch: "/",
    },
    {
      name: "My Skills",
      patch: "/",
    },
    {
      name: "Objetives",
      patch: "/",
    },
    {
      name: "Proyects",
      patch: "/",
    },
    {
      name: "Contact me",
      patch: "/",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className=" w-[100%] px-4 md:flex md:justify-between md:items-center bg-black">
      <div className="relative z-50 md:flex">
        <div className="flex justify-between bg-black">
          <h3>
            <span className=" text-white">Franco Vaccari's </span>
            <span className="text-yellow-500">Portfolio</span>
          </h3>
          <div className="md:hidden">
            {open === true ? (
              <button onClick={() => setOpen(false)} className="text-white">
                <RxCross1 />
              </button>
            ) : (
              <button onClick={() => setOpen(true)} className="text-white">
                <IoMenu />
              </button>
            )}
          </div>
        </div>
      </div>

      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open === true ? "top-5 " : "top-[-490px]"
        }`}
      >
        {links.map((link) => (
          <li key={link.name} className="md:text-sm md:mx-2 md:my-0 my-7">
            <a
              href={link.patch}
              className="text-white hover:text-yellow-500 duration-100"
            >
              {link.name}
            </a>
            <hr className="text-white text-xs md:hidden block w-[50%]" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
