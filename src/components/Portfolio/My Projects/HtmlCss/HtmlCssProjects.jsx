import React from "react";
import { htmlCss } from "./htmlCss";
import SectionDivider from "../../Components/SectionDivider";

const HtmlCssProjects = ({ darkMode }) => {
  const myHtmlCssProjects = htmlCss.map((item) => (
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
    <div className="flex flex-col  section-padding">
      <div className="title">
        <SectionDivider />
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          HTML and CSS
        </h2>
      </div>
      <div className="projectContainer py-2 px-3">{myHtmlCssProjects}</div>
    </div>
  );
};

export default HtmlCssProjects;
