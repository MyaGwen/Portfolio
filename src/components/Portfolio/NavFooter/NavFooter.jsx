import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NavFooter = ({ children, toggleDarkMode, darkMode, projectPage }) => {
  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} projectPage={projectPage && projectPage}/>
      {children}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default NavFooter;
