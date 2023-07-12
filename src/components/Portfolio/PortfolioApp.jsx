import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./portfolio.css";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";
import Header from "./Header";
import ContactForm from "../Form/ContactForm";
import NavFooter from "./NavFooter";

export default function PortfolioApp() {
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
        <div className="max-w-screen-2xl mx-auto">
          <div className="wrapper">
            <Header />
            <About darkMode={darkMode}/>
            <Skills />
            <Projects darkMode={darkMode} />
            <ContactForm />
          </div>
        </div>
      </NavFooter>
    </div>
  );
}
