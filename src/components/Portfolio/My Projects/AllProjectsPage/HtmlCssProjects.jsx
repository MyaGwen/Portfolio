import React from "react";
import { htmlCss } from "../everyProject";
import AllProjectsData from "../AllProjectsData";

const HtmlCssProjects = ({ darkMode }) => {
  return (
    <AllProjectsData
      darkMode={darkMode}
      dataToMap={htmlCss}
      title="HTML and CSS"
    />
  );
};

export default HtmlCssProjects;
