import React from "react";

const Header = () => {
  return (
    <div className="flex content-center hero">
      <div className="my-auto">
        <div className="hero-content flex flex-col gap-2">
          <div className="gradient h-1 w-20"></div>
          <h4 className="text-sm md:text-md lg:text-lg font-semibold">
            Hello,
          </h4>
          <div className="ml-3">
            <h1 className="text-2xl font-semibold md:text-5xl lg:text-6xl max-w-4xl">
              I'm{" "}
              <span className="gradient-text">
                Wendy Edem Ahadome, <br />{" "}
              </span>{" "}
              I build beautiful, functional and responsive websites.
            </h1>
            <button className="mt-6" type="button">
              <a
                href=""
                className="download text-md font-semibold py-2 px-6 rounded-full"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
