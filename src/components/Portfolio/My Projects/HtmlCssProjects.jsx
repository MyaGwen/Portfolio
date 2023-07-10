import React from "react";
import { htmlCss } from "./htmlCss";

const HtmlCssProjects = ({ darkMode }) => {
  // Receive darkMode as a prop
  const myHtmlCssProjects = htmlCss.map((item) => (
    <div
      className={
        darkMode
          ? "card bg-gray-800 pb-5 flex flex-col justify-center items-center rounded shadow text-white"
          : "card bg-gray-100 pb-5 flex flex-col justify-center items-center rounded shadow text-black"
      }
      key={item.id}
    >
      <img className="pb-3 rounded-t" src={item.image} alt={item.title} />
      <div className="title pt-2 pb-2">
        <span className="font-bold capitalize">title: </span>{" "}
        <span className="capitalize">{item.title}</span>
      </div>
      <div className="tech-stack pb-1">
        <span className="font-bold capitalize">tech stack: </span>{" "}
        <span className="uppercase">{item.stack}</span>
      </div>
      <div className="buttons">
        <button className="btn font-bold">
          {" "}
          <a href={item.preview} target="_blank" rel="noopener noreferrer">
            Live preview
          </a>
        </button>
        <button className="btn font-bold">
          {" "}
          <a href={item.code} target="_blank" rel="noopener noreferrer">
            View code
          </a>
        </button>
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-3xl uppercase">HTML and CSS Projects</h2>
      <div className="projectContainer pt-3 pb-6 px-6">{myHtmlCssProjects}</div>
    </div>
  );
};

export default HtmlCssProjects;
