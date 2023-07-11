import React from "react";
import { htmlCss } from "./htmlCss";

const HtmlCssProjects = ({ darkMode }) => {
  // Receive darkMode as a prop
  const myHtmlCssProjects = htmlCss.map((item) => (
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
    <div className="flex flex-col">
      <div className="title">
        <div className="gradient h-1 w-20 mb-2"></div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          HTML and CSS
        </h2>
      </div>
      <div className="projectContainer py-2 px-3">{myHtmlCssProjects}</div>
    </div>
  );
};

export default HtmlCssProjects;
