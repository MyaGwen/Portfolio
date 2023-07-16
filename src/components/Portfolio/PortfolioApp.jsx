import React, { useState, useEffect } from "react";
import "./portfolio.css";
import Projects from "./RecentProjects/Projects";
import About from "./About/About";
import Skills from "../Portfolio/Skills/Skills";
import Header from "./Hero/Header";
import ContactForm from "./Form/ContactForm";
import NavFooter from "./NavFooter/NavFooter";
import { BsArrowUp } from "react-icons/bs";

export default function PortfolioApp() {
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
    <div className={`${darkMode ? "dark" : ""} appContainer`}>
      <NavFooter toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="wrapper">
            <Header />
            <About darkMode={darkMode} />
            {showButton && (
              <button
                onClick={scrollToTop}
                id="backToTopBtn"
                className="fixed bottom-0 right-0 backToTop p-2"
              >
                <BsArrowUp color="white" size={30}/>
              </button>
            )}
            <Skills />
            <Projects darkMode={darkMode} />
            <ContactForm />
          </div>
        </div>
      </NavFooter>
    </div>
  );
}
