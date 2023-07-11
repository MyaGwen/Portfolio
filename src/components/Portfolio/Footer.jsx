import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={
        darkMode
          ? "text-white bg-gray-800 py-3 px-16 flex content-center justify-center"
          : "text-black bg-gray-200 py-3 px-16 flex content-center justify-center"
      }
    >
      <div className="footer max-w-screen-2xl mx-auto">
        <p>Made with ❤️ by Mya</p>
      </div>
    </footer>
  );
};

export default Footer;
