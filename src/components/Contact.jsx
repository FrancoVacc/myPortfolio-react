import React from "react";

const Contact = ({ networks }) => {
  return (
    <div className="bg-slate-900 py-4">
      <h3 className=" text-3xl font-semibold text-center text-white">
        Contact 📩
      </h3>
      <div className="flex flex-wrap justify-around my-2">
        <div className="w-[100%] md:w-auto">
          <p className=" text-xl font-semibold text-center text-white mb-4">
            Hire Me 😉
          </p>
        </div>
        <div className="flex flex-col">
          <p className="mb-4 text-xl font-semibold text-center text-white">
            My Networks
          </p>
          <ul className="grid grid-rows-4 gap-4">
            {networks.map((network) => (
              <li key={network.name}>
                <a
                  href={network.link}
                  target="_blank"
                  className="uppercase text-sm flex justify-center text-white hover:text-green-500"
                >
                  <span className={` text-xl mr-1`}>{network.icon}</span>
                  <span>{network.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className=" font-mono text-xs text-white italic text-right mr-5">
        Last update: 03/18/2023
      </p>
    </div>
  );
};

export default Contact;
