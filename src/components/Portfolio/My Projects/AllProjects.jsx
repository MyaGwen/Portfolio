import React, { useState } from "react";
// import Projects from "../Projects";
import HtmlCssProjects from "./HtmlCssProjects";
import Navbar from "../Navbar";
import NavFooter from "../NavFooter";

const AllProjects = () => {
  const projectPage = true;
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <NavFooter toggleDarkMode={toggleDarkMode}>
        <div className="wrapper  pt-3 pb-6 px-6 flex flex-col">
          <h1 className="capitalize text-center text-2xl mb-4 md:text-3xl lg:text-5xl">
            a breakdown of all my projects
          </h1>
          <HtmlCssProjects  darkMode={darkMode}/>
        </div>
      </NavFooter>
    </div>
  );
};

export default AllProjects;
