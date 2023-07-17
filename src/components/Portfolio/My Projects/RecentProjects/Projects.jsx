import React from "react";
import { recentProjects } from "../everyProject";
import { useNavigate } from "react-router-dom";
import Title from "../../Components/Title";
import { BsArrowRight } from "react-icons/bs";
import ProjectData from "../Projects";

export default function Projects({ darkMode, showBtn }) {
  const navigate = useNavigate();
  const recentProject = recentProjects.map((item) => (
    <ProjectData item={item} darkMode={darkMode} key={item.id} />
  ));

  return (
    <div
      className={`flex flex-col py-12 section-padding shadow ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
      id="projects"
    >
      <div className="title">
        <div className="allP flex justify-between content-center gap-3">
          <Title title={"Recent Projects"} />
          <a
            onClick={() => navigate("/allProjects")}
            className="hidden self-center capitalize md:flex justify-between content-center gap-3 hover:gap-5 hover:transition-all "
          >
            <span className="font-semibold text-2xl">all projects</span>
            <BsArrowRight className="self-center" size={30} />
          </a>
        </div>
      </div>
      <div className="projectContainer pt-3 pb-6">{recentProject}</div>
      <button
        onClick={() => navigate("/allProjects")}
        className="btn md:hidden self-center text-sm font-bold py-3 px-12 w-full md:w-fit"
      >
        {" "}
        All projects
      </button>
    </div>
  );
}
