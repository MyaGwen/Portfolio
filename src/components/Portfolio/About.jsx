import React from "react";
import cv from "../../assets/cv.pdf";
import AboutMe from "../../assets/images/aboutMe.png";

const About = () => {
  return (
    <div className="" id="about">
      <div className="flex flex-col gap-9 md:flex-row md:content-center">
        {/* <a href={cv} target="_blank" download>
        <button>download</button>
       </a> */}
        <div className="justify-self-start w-full">
          <img src={AboutMe} alt="AboutMe" />
        </div>
        <div className="self-center flex flex-col gap-2 w-full">
          <div className="gradient h-1 w-20"></div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-3">About Me</h2>
          <p>
            I'm Wendy Edem Ahadome, a Frontend Developer from Accra, Ghana.
            Although I studied political science in college, I discovered my
            true passion for frontend development after completing my national
            service. Since then, I have been on a journey of continuous learning
            and gaining hands-on experience in various programming languages and
            frameworks. <br /> <br /> As a lifelong learner, I thrive on expanding my
            knowledge and skills in the field. Working in collaborative teams
            has provided me with valuable experience and honed my ability to
            work effectively with others. <br /> My primary focus is on building
            functional and visually appealing interfaces that have a positive
            impact on users and businesses. I am committed to transforming
            exceptional designs into intuitive and meaningful experiences that
            are both simple and user-friendly. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
