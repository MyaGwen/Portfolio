import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NavFooter = ({ children, toggleDarkMode }) => {
 
  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} />
      {children}
      <Footer />
    </div>
  );
};

export default NavFooter;
