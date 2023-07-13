import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NavFooter = ({ children, toggleDarkMode, darkMode }) => {
  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} />
      {children}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default NavFooter;
