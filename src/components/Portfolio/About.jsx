import React from "react";
import cv from "../../assets/cv.pdf";
import AboutMe from "../../assets/images/mee.png";
import SectionDivider from "../SectionDivider";
import Title from "../Title";

const About = ({ darkMode }) => {
  return (
    <div
      className={
        darkMode
          ? "section-padding py-12 shadow bg-gray-900"
          : "section-padding py-12 shadow bg-gray-100"
      }
      id="about"
    >
      <div className="flex flex-col-reverse gap-9 md:flex-row md:content-center">
        {/* <a href={cv} target="_blank" download>
        <button>download</button>
       </a> */}

        <div className="self-center flex flex-col gap-2 w-full">
          <Title title={"About Me"} />
          <p>
            I'm{" "}
            <span className="gradient-text font-semibold">
              Wendy Edem Ahadome
            </span>
            , a Frontend Developer from Accra, Ghana. Although I studied
            political science in college, I discovered my true passion for
            frontend development after completing my national service. Since
            then, I have been on a journey of continuous learning and gaining
            hands-on experience in various programming languages and frameworks.{" "}
            <br /> <br /> My primary focus is on building functional and
            visually appealing interfaces that have a positive impact on users
            and businesses. I am committed to transforming exceptional designs
            into intuitive and meaningful experiences that are both simple and
            user-friendly.
          </p>
        </div>
        <div className="w-full flex justify-center md:justify-end content-center">
          <img
            src={AboutMe}
            alt="AboutMe"
            className="self-center h-3/4 max-w-xs md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
