import React from "react";

const Articles = ({ img }) => {
  const articleImg = "grid md:grid-cols-2 grid-cols-1 items-center";
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-4">
        I will tell you somthing about me
      </h2>
      <div className={`md:px-2 px-0 ${img && articleImg}`}>
        {img && (
          <div className=" md:w-[100%] w-auto flex justify-center">
            <img src={img} alt="my picture" />
          </div>
        )}
        <div className=" h-[100%] md:w-auto w-[100%] bg-black p-4">
          <h3 className=" text-3xl font-semibold text-center text-white">
            Hi, I'm Franco Vaccari,
            <span className="text-green-500 uppercase"> frontend</span> junior
            developer ✋🏼
          </h3>
          <p className=" text-base text-justify md:text-left text-white mt-2">
            About me... i'm from Argentina, i'm a biology teacher but now i'm
            looking for a change, i studied for a long time some programing
            languages. I also studied systems analyst on a institute meny years
            ago. I've dedicate to teach computer sience, programming and now
            biology. But i'm looking for an oportunity to work on developer
            world...
          </p>
        </div>
      </div>
    </>
  );
};

export default Articles;
