import React, { useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Navbar({ toggleDarkMode, projectPage, darkMode }) {
  const router = useRouter();

  //! Nav Items
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    // { name: "Blog", link: "#blog" },
    { name: "Contact", link: "#contact" },
  ];

  //! Hooks
  const navItemRefs = navItems.map(() => useRef(null));

  const [menu, setMenu] = useState(true);

  //! Fxns
  const handleClick = (index) => {
    setMenu(true);
    navItemRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  //! Map
  const navItem = navItems.map((item, index) => (
    <Link
      href={item.link}
      key={index}
      className="font-semibold text-xl relative group"
      onClick={() => handleClick(index)}
      ref={navItemRefs[index]}
    >
      {item.name}
      <span
        className={`h-[1.5px] block ${
          darkMode ? "bg-light" : "bg-dark"
        }  left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 
        ${router.pathname === item.link ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  ));

  function menuToggle() {
    setMenu(!menu);
  }

  return (
    <header className="w-full">
      <nav className="nav max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="nav--logo_text gradient-text text-4xl font-semibold mr-auto cursor-pointer"
        >
          M<span className="-ml-2">G</span>
        </Link>

        <div className="links-toggle">
          <ul className={menu || projectPage ? "mainlist mx-auto" : "display"}>
            {projectPage ? (
              <Link href="/" className="font-semibold text-lg project">
                Home
              </Link>
            ) : (
              navItem
            )}
          </ul>
          <div className="menuWrap">
            {!projectPage ? (
              <div className="md-sm">
                <button className="menubtn p-1" onClick={menuToggle}>
                  {menu ? (
                    <HiMenu size={25} className="menuIcon" />
                  ) : (
                    <CgClose size={25} className="menuIcon" />
                  )}
                </button>
                <ul className={!menu ? "menulist gap-12" : "display"}>
                  {navItem}
                </ul>
              </div>
            ) : (
              <ul className={"mx-auto md:hidden"}>
                <Link href="/" className="font-semibold text-lg project">
                  Home
                </Link>
              </ul>
            )}
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
