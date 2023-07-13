import React from "react";
import skills from "../../assets/images/mee.png";
import Title from "../Title";
import { AiFillHtml5 } from "react-icons/ai";
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
        <div className="self-center flex flex-col content-end gap-2 w-full">
          <Title title={"Skills"} />
          <ul className="gap-3 flex flex-col ml-5">
            <div className="languages">
              <p className="font-semibold text-2xl">Languages</p>
              <li className="uppercase flex gap-1 ml-2">
                <div className="flex content-center gap-1">
                  <AiFillHtml5
                    size={22}
                    className="self-center"
                    color="#ae67fa"
                  />{" "}
                  <span className="self-center">html</span>
                </div>
                <div className="flex content-center gap-1">
                  <IoLogoCss3
                    size={19}
                    className="self-center"
                    color="#9659d8"
                  />{" "}
                  <span className="self-center">css</span>
                </div>
                <div className="flex content-center gap-1">
                  <IoLogoJavascript
                    size={19}
                    className="self-center"
                    color="#9659d8"
                  />{" "}
                  <span className="self-center capitalize">javascript</span>
                </div>
              </li>
            </div>
            <div className="languages">
              <p className="font-semibold text-2xl">Frameworks/Libraries</p>
              <li className="capitalize flex gap-1 ml-2">
                <div className="flex content-center gap-1">
                  <AiFillHtml5
                    size={22}
                    className="self-center"
                    color="#9659d8"
                  />{" "}
                  <span className="self-center">react</span>
                </div>
                <div className="flex content-center gap-1">
                  <IoLogoCss3
                    size={19}
                    className="self-center"
                    color="#9659d8"
                  />{" "}
                  <span className="self-center">Tailwind</span>
                </div>
                <div className="flex content-center gap-1">
                  <IoLogoJavascript
                    size={19}
                    className="self-center"
                    color="#9659d8"
                  />{" "}
                  <span className="self-center capitalize">Bootsrap</span>
                </div>
              </li>
            </div>
            <div className="languages">
              <p className="font-semibold text-2xl">Tools</p>
              <li className="capitalize flex gap-1 ml-2">
                <div className="flex content-center gap-1">
                  <AiFillHtml5
                    size={22}
                    className="self-center"
                    color="#9659d8"
                  />{" "}
                  <span className="self-center">Git</span>
                </div>
                <div className="flex content-center gap-1">
                  <IoLogoCss3
                    size={19}
                    className="self-center"
                    color="#9659d8"
                  />{" "}
                  <span className="self-center">Github</span>
                </div>
                <div className="flex content-center gap-1">
                  <IoLogoJavascript
                    size={19}
                    className="self-center"
                    color="#9659d8"
                  />{" "}
                  <span className="self-center capitalize">Visual Studio</span>
                </div>
              </li>
            </div>
            <div className="languages">
              <p className="font-semibold text-2xl">Soft Skills</p>
              <li className="capitalize flex gap-2 ml-2">
                <li>attention to detail</li>
                <li>creativity</li>
                <li>problem solving</li>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
