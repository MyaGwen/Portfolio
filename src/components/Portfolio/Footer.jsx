import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={
        darkMode
          ? "py-3 px-16 flex content-center justify-center"
          : "py-3 px-16 flex content-center justify-center"
      }
    >
      <div className="footer max-w-screen-2xl mx-auto">
        <p>Made with ❤️ by Mya</p>
      </div>
    </footer>
  );
};

export default Footer;
