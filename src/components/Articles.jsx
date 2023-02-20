import React from "react";

const Articles = ({ texts, img }) => {
  const articleImg = "grid md:grid-cols-2 grid-cols-1 items-center";
  return (
    <>
      <div className={`md:px-2 px-0 ${img && articleImg}`}>
        {img && (
          <div className=" md:w-[100%] w-auto flex justify-center">
            <img src={img} alt="" />
          </div>
        )}
        <div className=" h-[100%] md:w-auto w-[100%] bg-black p-4">
          <h3 className=" text-3xl font-semibold text-center text-white">
            {texts.title}
          </h3>
          <p className=" text-base text-justify md:text-left text-white mt-2">
            {texts.text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Articles;
