import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleDarkMode, projectPage }) {
  //! useStates
  const [menu, setMenu] = useState(true);

  //! useNavigate
  const navigate = useNavigate();

  //! Nav Items
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    // { name: "Blog", link: "#blog" },
    { name: "Contact", link: "#contact" },
  ];

  //! Fxns

  //! Map
  const navItem = navItems.map((item, index) => (
    <li key={index} onClick={() => {}} className="font-semibold text-lg">
      <a href={item.link}>{item.name}</a>
    </li>
  ));

  function menuToggle() {
    setMenu(!menu);
  }

  return (
    <header className="w-full">
      <nav className="nav max-w-screen-2xl mx-auto">
        <h3
          className="nav--logo_text gradient-text text-4xl font-semibold mr-auto cursor-pointer"
          onClick={() => navigate("/")}
        >
          M<span className="-ml-2">G</span>
        </h3>

        <div className="links-toggle">
          <ul className={menu ? "mainlist mx-auto" : "display"}>
            {projectPage ? (
              <li onClick={() => navigate("/")}>Home</li>
            ) : (
              navItem
            )}
          </ul>
          <div className="md-sm">
            <button className="menubtn p-1" onClick={menuToggle}>
              {menu ? (
                <HiMenu size={25} className="menuIcon" />
              ) : (
                <CgClose size={25} className="menuIcon" />
              )}
            </button>
            <ul className={!menu ? "menulist" : "display"}>
              {projectPage ? (
                <li onClick={() => navigate("/")}>Home</li>
              ) : (
                navItem
              )}
            </ul>
          </div>
          <div className="toggler">
            <div className="toggler--slider" onClick={toggleDarkMode}>
              <div className="toggler--slider--circle"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
