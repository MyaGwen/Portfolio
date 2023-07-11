import React, { useState } from "react";
import { recentProjects } from "./recentProjects";
import { useNavigate } from "react-router-dom";

export default function Projects({ darkMode, showBtn }) {
  const navigate = useNavigate();
  const recentProject = recentProjects.map((item) => (
    <div
      className={
        darkMode
          ? "card bg-gray-800 flex flex-col justify-center rounded shadow text-white"
          : "card bg-gray-100 flex flex-col justify-center rounded shadow text-black"
      }
      key={item.id}
    >
      <img className="rounded-t self-start" src={item.image} alt={item.title} />
      <div className="flex flex-col justify-center p-4">
        <div className="title pt-2 pb-2 text-left">
          <span className="font-bold capitalize">title: </span>{" "}
          <span className="capitalize">{item.title}</span>
        </div>
        <div className="tech-stack pb-1">
          <span className="font-bold capitalize">tech stack: </span>{" "}
          <span className="uppercase">{item.stack}</span>
        </div>
        <div className="buttons self-center">
          <button className="btn text-md font-bold py-2 px-3">
            {" "}
            <a href={item.preview} target="_blank" rel="noopener noreferrer">
              Live preview
            </a>
          </button>
          <button className="btn text-md font-bold py-2 px-3">
            {" "}
            <a href={item.code} target="_blank" rel="noopener noreferrer">
              View code
            </a>
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col" id="projects">
      <div className="title">
        <div className="gradient h-1 w-20 mb-2"></div>
        <h2 className="text-4xl md:text-5xl font-semibold mb-3">
          Recent Projects
        </h2>
      </div>
      <div className="projectContainer pt-3 pb-6">{recentProject}</div>

      <button
        className={`${
          darkMode
            ? "capitalize text-center btn text-white bg-gray-800 w-full md:w-fit text-md font-bold py-2 px-3 self-center"
            : "capitalize text-center btn text-black bg-gray-200 w-full md:w-fit text-md font-bold py-2 px-3 self-center"
        }`}
        onClick={() => navigate("/allProjects")}
      >
        view all projects
      </button>
    </div>
  );
}
