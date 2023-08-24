import React, { useState, useEffect } from "react";
import Header from "../components/Portfolio/Hero/Header";
import About from "../components/Portfolio/About/About";
import Skills from "../components/Portfolio/Skills/Skills";
import RecentProjects from "../components/Portfolio/My Projects/RecentProjects/Projects";
import ContactForm from "../components/Portfolio/Form/ContactForm";
import { BsArrowUp } from "react-icons/bs";
import Head from "next/head";
import NavFooter from "../components/Portfolio/NavFooter/NavFooter";

export default function Home() {
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
        <title>Wendy Edem Ahadome - Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Wendy Edem Ahadome, a frontend developer passionate about creating exceptional web experiences. Explore a showcase of my frontend development projects, where design meets functionality."
        />
      </Head>
      <div className={`${darkMode ? "dark" : ""} appContainer scroll-smooth`}>
        <NavFooter toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
          <div className="max-w-screen-2xl mx-auto">
            <div className="wrapper">
              <Header />
              <About darkMode={darkMode} />
              {showButton && (
                <button
                  onClick={scrollToTop}
                  id="backToTopBtn"
                  className="fixed bottom-0 right-0 backToTop p-2 "
                >
                  <BsArrowUp color="white" size={30} />
                </button>
              )}
              <Skills />
              <RecentProjects darkMode={darkMode} />
              <ContactForm />
            </div>
          </div>
        </NavFooter>
      </div>
    </>
  );
}
