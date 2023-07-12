import React, { useState, useEffect } from "react";
// import Projects from "../Projects";
import HtmlCssProjects from "./HtmlCss/HtmlCssProjects";
import Navbar from "../Navbar";
import NavFooter from "../NavFooter";

const AllProjects = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedColorMode = localStorage.getItem("colorMode");
    if (savedColorMode) {
      setDarkMode(savedColorMode === "dark");
    }
  }, []);

  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("colorMode", newDarkMode ? "dark" : "light");
  }

  return (
    <NavFooter toggleDarkMode={toggleDarkMode}>
      <div className={`${darkMode ? "dark" : ""} py-6`}>
        <div className="wrapper  pt-3 pb-6 px-6 flex flex-col">
          <h1 className="capitalize text-center text-4xl md:text-5xl font-semibold mb-8 md:text-3xl lg:text-5xl">
            my projects
          </h1>
          <HtmlCssProjects darkMode={darkMode} />
        </div>
      </div>
    </NavFooter>
  );
};

export default AllProjects;
