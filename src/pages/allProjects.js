import React, { useState, useEffect } from "react";
import HtmlCssProjects from "../components/Portfolio/My Projects/AllProjectsPage/HtmlCssProjects";
import HtmlCssJs from "../components/Portfolio/My Projects/AllProjectsPage/HtmlCssJs";
import ReactJs from "../components/Portfolio/My Projects/AllProjectsPage/ReactJs";
import NavFooter from "../components/Portfolio/NavFooter/NavFooter";
import { BsArrowUp } from "react-icons/bs";
import Head from "next/head";

const AllProjects = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const savedColorMode = localStorage.getItem("colorMode");
    if (savedColorMode) {
      setDarkMode(savedColorMode === "dark");
    }

    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("colorMode", newDarkMode ? "dark" : "light");
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>
          Frontend Development Projects - Wendy Edem Ahadome&apos;s Portfolio
        </title>
        <meta
          name="description"
          content="Browse through a collection of frontend development projects by Wendy Edem Ahadome. From responsive designs to intuitive user interfaces, discover the range and creativity behind my work as a frontend developer."
        />
      </Head>
      <div className={`${darkMode ? "dark" : ""} appContainer`}>
        <NavFooter
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          projectPage={true}
        >
          <div className="max-w-screen-2xl mx-auto">
            <div className="wrapper">
              <ReactJs darkMode={darkMode} />
              <HtmlCssJs darkMode={darkMode} />
              <HtmlCssProjects darkMode={darkMode} />
              {showButton && (
                <button
                  onClick={scrollToTop}
                  id="backToTopBtn"
                  className="fixed bottom-0 right-0 backToTop p-2"
                >
                  <BsArrowUp color="white" size={30} />
                </button>
              )}
            </div>
          </div>
        </NavFooter>
      </div>
    </>
  );
};

export default AllProjects;
