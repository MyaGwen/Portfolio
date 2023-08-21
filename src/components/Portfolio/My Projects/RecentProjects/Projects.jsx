import React from "react";
import { recentProjects } from "../everyProject";
import Link from "next/link";
import Title from "../../Components/Title";
import { BsArrowRight } from "react-icons/bs";
import ProjectData from "../Projects";

export default function Projects({ darkMode, showBtn }) {
  const recentProject = recentProjects.map((item) => (
    <ProjectData item={item} darkMode={darkMode} key={item.id} />
  ));

  return (
    <div
      className={`flex flex-col section-padding_margin shadow ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
      id="projects"
    >
      <div className="title">
        <div className="allP flex justify-between content-center gap-3">
          <Title title={"Recent Projects"} />
          <Link
            href="/allProjects"
            className="hidden self-center capitalize md:flex justify-between content-center gap-3 group hover:gap-5 hover:transition-gap"
          >
            <span className="font-semibold text-2xl">all projects</span>
            <BsArrowRight
              className="self-center group:group-hover:ml-2"
              size={30}
            />
          </Link>
        </div>
      </div>
      <div className="projectContainer pt-3 pb-6">{recentProject}</div>
      <Link
        href="/allProjects"
        className="btn md:hidden self-center text-sm text-center font-bold py-3 px-12 w-full md:w-fit"
      >
        All projects
      </Link>
    </div>
  );
}
