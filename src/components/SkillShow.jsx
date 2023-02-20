import React from "react";

const SkillShow = ({ skill }) => {
  return (
    <div className=" flex flex-grow flex-wrap gap-10 mx-auto justify-center">
      {skill.map((skill) => (
        <div
          key={skill.name}
          className={`${skill.color} text-center text-4xl my-2 md:text-6xl`}
          title={skill.name}
        >
          {skill.component}
        </div>
      ))}
    </div>
  );
};

export default SkillShow;
