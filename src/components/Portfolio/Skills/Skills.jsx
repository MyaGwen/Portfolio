import React from "react";
import skills from "../../../assets/images/mee.png";
import Title from "../Components/Title";
import { AiFillHtml5 } from "react-icons/ai";
import { DiVisualstudio, DiJavascript1 } from "react-icons/di";
import { BsFillBootstrapFill, BsGit, BsGithub } from "react-icons/bs";
import { SiReact, SiTailwindcss, SiJavascript } from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <div className="py-12 section-padding" id="skills">
      <Title title="Skills" />
      <div className="flex flex-col md:gap-12 md:flex-row md:content-center md:justify-center">
        <div className="md:mx-auto flex flex-col md:flex-row md:gap-32 gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-3">Tech Stack:</h2>
            <div className="w-full grid grid-cols-3 gap-9 items-center">
              <SkillIcon
                icon={<AiFillHtml5 size={100}  color="#e34c26" />}
                label="HTML"
              />
              <SkillIcon
                icon={<IoLogoCss3 size={100}  color="#2965f1" />}
                label="CSS"
              />
              <SkillIcon
                icon={<DiJavascript1 size={100} color="#f0db4f" />}
                label="Javascript"
              />
              <SkillIcon
                icon={<SiReact size={100} color="#61dafb" />}
                label="React"
              />
              <SkillIcon
                icon={<SiTailwindcss size={100} color="#06b6d4" />}
                label="Tailwind"
              />
              <SkillIcon
                icon={<BsFillBootstrapFill size={100} color="#7952b3" />}
                label="Bootstrap"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-3">Tools:</h2>
            <div className="w-full grid grid-cols-3 gap-9">
              <SkillIcon
                icon={<BsGit size={100} color="#f34f29" />}
                label="Git"
              />
              <SkillIcon
                icon={<BsGithub size={100} color="#4078c0" />}
                label="Github"
              />
              <SkillIcon
                icon={<DiVisualstudio size={100} color="#007acc" />}
                label="Visual Studio"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="mt-2 text-center text-sm justify-self-end md:text-lg">{label}</p>
    </div>
  );
};

export default Skills;
