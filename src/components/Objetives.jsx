import React from "react";

const Objetives = ({ texts }) => {
  return (
    <>
      <div className=" h-[100%] md:w-auto w-[100%] bg-slate-900 py-4 md:px-20 px-4">
        <h3 className=" text-3xl font-semibold text-center text-white my-2 px-4">
          {texts.title}
        </h3>
        <p className=" text-base text-justify md:text-left text-white">
          {texts.text}
        </p>
      </div>
    </>
  );
};

export default Objetives;
