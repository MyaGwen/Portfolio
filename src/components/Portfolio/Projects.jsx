import React, { useState } from "react";
import { recentProjects } from "./recentProjects";
import { useNavigate } from "react-router-dom";
import SectionDivider from "../SectionDivider";
import Title from "../Title";
import { BsArrowRight } from "react-icons/bs";
export default function Projects({ darkMode, showBtn }) {
  const navigate = useNavigate();
  const recentProject = recentProjects.map((item) => (
    <div
      className={
        darkMode
          ? "card flex flex-col justify-center rounded shadow text-white"
          : "card flex flex-col justify-center rounded shadow text-black"
      }
      key={item.id}
    >
      <img className="rounded-t self-start" src={item.image} alt={item.title} />
      <div
        className={
          darkMode
            ? "card bg-gray-800 text-sm md:text-md rounded-b flex flex-col justify-center p-4"
            : "card bg-gray-100 text-sm md:text-md rounded-b flex flex-col justify-center p-4"
        }
      >
        <div className="title pt-2 pb-2 text-left">
          <span className="font-bold capitalize">title: </span>{" "}
          <span className="capitalize">{item.title}</span>
        </div>
        <div className="tech-stack pb-1">
          <span className="font-bold capitalize">stack: </span>{" "}
          <span className="uppercase">
            {item.stack}
            <span className="capitalize">
              {item.responsive === true ? ", Responsive" : ""}
            </span>{" "}
          </span>
        </div>
        <div className="title pt-2 pb-2 text-left">
          <span className="font-bold capitalize">description: </span>{" "}
          <span className="capitalize">{item.description}</span>
        </div>
        <div className="buttons self-center">
          <button className="btn text-md font-bold py-2 px-4">
            {" "}
            <a href={item.preview} target="_blank" rel="noopener noreferrer">
              Preview
            </a>
          </button>
          <button className="btn text-md font-bold py-2 px-4">
            {" "}
            <a href={item.code} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className={
        darkMode
          ? "flex flex-col section-padding py-12 shadow bg-gray-900"
          : "flex flex-col section-padding py-12 shadow bg-gray-100"
      }
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
            <BsArrowRight className="self-center" size={30}/>
          </a>
        </div>
      </div>
      <div className="projectContainer pt-3 pb-6">{recentProject}</div>
      <button onClick={() => navigate("/allProjects")} className="btn md:hidden self-center text-sm font-bold py-3 px-12 w-full md:w-fit">
        {" "}
        All projects
      </button>
    </div>
  );
}
