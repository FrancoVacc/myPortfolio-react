import React from "react";

const Footer = ({ networks }) => {
  return (
    <div className="bg-slate-900">
      <hr className=" border-white sm:mx-auto dark:border-gray-700" />
      <div className="flex items-center justify-between  p-4">
        <h4 className="text-sm text-white">
          Franco Vaccari's <span className="text-green-500">Portfolio</span>
        </h4>
        <div className="flex  w-[30%] md:w-[20%] justify-around">
          {networks.map((network) => (
            <a
              href={network.link}
              key={network.name}
              target="_blank"
              className="text-white hover:text-green-500"
            >
              {network.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
