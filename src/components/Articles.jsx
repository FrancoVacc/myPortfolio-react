import React from "react";

const Articles = ({ texts }) => {
  return (
    <>
      <div className="mt-5 px-2">
        <img src="" alt="" />
        <div className=" mx-4">
          <h3 className=" text-lg font-semibold text-center">{texts.title}</h3>
          <p className=" text-base text-justify md:text-left">{texts.text}</p>
        </div>
      </div>
    </>
  );
};

export default Articles;
