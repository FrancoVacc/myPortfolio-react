import React from "react";

const Objetives = ({ texts }) => {
  return (
    <>
      <div className=" h-[100%] md:w-auto w-[100%] bg-black p-4">
        <h3 className=" text-3xl font-semibold text-center text-white">
          {texts.title}
        </h3>
        <p className=" text-base text-justify md:text-left text-white mt-2">
          {texts.text}
        </p>
      </div>
    </>
  );
};

export default Objetives;
