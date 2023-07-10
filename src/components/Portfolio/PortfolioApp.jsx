import React, { useState } from "react";
import Navbar from "./Navbar";
import "./portfolio.css";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";
import Header from "./Header";
import NavFooter from "./NavFooter";

export default function PortfolioApp() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div  className={`${darkMode ? "dark" : ""} appContainer`}>
    <div className="max-w-screen-2xl mx-auto">
      <NavFooter  toggleDarkMode={toggleDarkMode}>
        <div className="wrapper">
          <Header />
          <About />
          <Skills />
          <Projects darkMode={darkMode} />
        </div>
      </NavFooter>
    </div>
    </div>
  );
}
