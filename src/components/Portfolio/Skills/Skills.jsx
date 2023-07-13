import React from "react";
import skills from "../../../assets/images/mee.png";
import Title from "../Components/Title";
import { AiFillHtml5 } from "react-icons/ai";
import { DiVisualstudio } from "react-icons/di";
import { BsFillBootstrapFill, BsGit, BsGithub } from "react-icons/bs";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <div className="py-12 section-padding" id="skills">
      <div className="flex flex-col gap-9 md:flex-row md:content-center justify-between">
        <div className="w-full flex justify-center md:justify-start">
          <img
            src={skills}
            alt="AboutMe"
            className="self-center flex h-3/4 max-w-xs md:max-w-full"
          />
        </div>
        <div className="self-center w-full md:w-1/2">
          <Title title="Skills" />
          <div className="grid grid-cols-3 gap-4 mt-6">
            <SkillIcon
              icon={<AiFillHtml5 size={38} color="#ae67fa" />}
              label="HTML"
            />
            <SkillIcon
              icon={<IoLogoCss3 size={38} color="#9659d8" />}
              label="CSS"
            />
            <SkillIcon
              icon={<IoLogoJavascript size={38} color="#9659d8" />}
              label="Javascript"
            />
            <SkillIcon
              icon={<SiReact size={38} color="#9659d8" />}
              label="React"
            />
            <SkillIcon
              icon={<SiTailwindcss size={38} color="#9659d8" />}
              label="Tailwind"
            />
            <SkillIcon
              icon={<BsFillBootstrapFill size={38} color="#9659d8" />}
              label="Bootstrap"
            />
            <SkillIcon icon={<BsGit size={38} color="#9659d8" />} label="Git" />
            <SkillIcon
              icon={<BsGithub size={38} color="#9659d8" />}
              label="Github"
            />
            <SkillIcon
              icon={<DiVisualstudio size={38} color="#9659d8" />}
              label="Visual Studio"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-gray-200 p-2 md:p-4 max-w-12">{icon}</div>
      <p className="mt-2 text-center text-sm md:text-lg">{label}</p>
    </div>
  );
};

export default Skills;
