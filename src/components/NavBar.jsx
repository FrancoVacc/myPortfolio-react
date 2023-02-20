import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

const NavBar = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" sticky top-0 mb-4 w-[100%] px-4 md:flex md:justify-between items-center bg-slate-900 ">
      <div className="relative z-50 md:flex">
        <div className="flex justify-between bg-slate-900 pt-2">
          <h3>
            <span className=" text-white">Franco Vaccari's </span>
            <span className="text-green-500">Portfolio</span>
          </h3>
          <div className="md:hidden">
            {open === true ? (
              <button
                onClick={() => setOpen(false)}
                className="text-white text-3xl"
              >
                <RxCross1 />
              </button>
            ) : (
              <button
                onClick={() => setOpen(true)}
                className="text-white text-3xl"
              >
                <IoMenu />
              </button>
            )}
          </div>
        </div>
      </div>

      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-900 md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open === true ? "top-5 " : "top-[-490px]"
        }`}
      >
        {links.map((link) => (
          <li key={link.name} className="md:text-sm md:mx-2 md:my-0 my-7">
            <Link
              to={link.patch}
              activeClass="text-green-500"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              delay={100}
              className="text-white hover:text-green-500 duration-100 cursor-pointer"
            >
              {link.name}
            </Link>
            <hr className="text-white text-xs md:hidden block w-[50%]" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
