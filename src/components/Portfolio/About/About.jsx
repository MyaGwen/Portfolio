import React from "react";
import AboutMe from "../../../../public/assets/images/mee.png";
import Title from "../Components/Title";
import Image from "next/image";

const About = ({ darkMode }) => {
  return (
    <div
      className={` shadow ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
      id="about"
    >
      <div className="flex section-padding_margin flex-col-reverse gap-9 md:flex-row md:content-center">
        <div className="self-center flex flex-col gap-2 w-full">
          <Title title="About Me" />
          <p>
            I'm
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
          <Image
            src={AboutMe}
            alt="AboutMe"
            className="self-center h-3/4 w-auto max-w-xs md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
