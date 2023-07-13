import React, { useState, useEffect } from "react";
import HtmlCssProjects from "./HtmlCss/HtmlCssProjects";
import NavFooter from "../NavFooter/NavFooter";

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
    <div className={`${darkMode ? "dark" : ""} appContainer`}>
      <NavFooter toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
        <div className="wrapper pt-3 pb-6 flex flex-col">
          <h1 className="capitalize text-center text-4xl md:text-5xl font-semibold mb-8 lg:text-5xl">
            my projects
          </h1>
          <HtmlCssProjects darkMode={darkMode} />
        </div>
      </NavFooter>
    </div>
  );
};

export default AllProjects;
