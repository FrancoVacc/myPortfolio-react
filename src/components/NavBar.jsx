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
    <nav className=" w-[100%] px-4 md:flex md:justify-between md:items-center">
      <div className="relative z-50 md:flex">
        <div className="flex justify-between bg-white">
          <h3>
            {" "}
            <span className=" text-yellow-500">Port</span>Folio
          </h3>
          <div className="md:hidden">
            {open === true ? (
              <button
                onClick={() => setOpen(false)}
                className="text-gray-800 hover:text-gray-400"
              >
                <RxCross1 />
              </button>
            ) : (
              <button
                onClick={() => setOpen(true)}
                className="text-gray-800 hover:text-gray-400"
              >
                <IoMenu />
              </button>
            )}
          </div>
        </div>
      </div>

      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open === true ? "top-5 " : "top-[-490px]"
        }`}
      >
        {links.map((link) => (
          <li key={link.name} className="md:text-sm md:mx-2 md:my-0 my-7">
            <a
              href={link.patch}
              className="text-gray-800 hover:text-gray-400 duration-100"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
