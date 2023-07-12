import React from "react";
import SectionDivider from "../SectionDivider";

const Header = () => {
  return (
    <div className="flex content-center hero section-padding" id="home">
      <div className="my-auto">
        <div className="hero-content flex flex-col gap-2">
          <SectionDivider />
          {/* <h4 className="text-sm md:text-md lg:text-lg font-semibold">
            Hello,
          </h4> */}
          <div className="ml-3">
            <h1 className="font-semibold  max-w-4xl">
              <span className="gradient-text capitalize text-3xl md:text-6xl lg:text-7xl">
                Frontend Developer. <br />
              </span>{" "}
              <span className="text-2xl md:text-5xl lg:text-6xl">
                I build beautiful, functional and responsive websites.
              </span>
            </h1>
            <button className="mt-9" type="button">
              <a
                href=""
                className="download text-lg font-semibold py-2 px-6 gradient-bar"
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
