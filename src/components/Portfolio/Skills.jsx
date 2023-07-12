import React from "react";
import skills from "../../assets/images/mee.png";
import SectionDivider from "../SectionDivider";
import Title from "../Title";

const Skills = () => {
  return (
    <div className="py-12 section-padding" id="skills">
      <div className="flex flex-col gap-9 md:flex-row md:content-center justify-between">
        {/* <a href={cv} target="_blank" download>
      <button>download</button>
    </a> */}
        <div className="w-full flex justify-start">
          <img src={skills} alt="AboutMe" className="self-center h-3/4 max-w-xs md:max-w-full"/>
        </div>
        <div className="self-center flex flex-col gap-2 w-full">
        <Title title={'Skills'}/>
          <ul>
            <li>HTMl</li>
            <li>HTMl</li>
            <li>HTMl</li>
            <li>HTMl</li>
            <li>HTMl</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
