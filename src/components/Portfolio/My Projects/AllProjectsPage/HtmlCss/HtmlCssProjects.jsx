import React from "react";
import { htmlCss } from "../../everyProject";
import AllProjectsData from "../../AllProjectsData";

const HtmlCssProjects = ({ darkMode }) => {
  return (
    <AllProjectsData
      darkMode={darkMode}
      dataToMap={htmlCss}
      title="HTML and CSS"
      color={darkMode ? 'bg-gray-900' : 'bg-gray-100' }
    />
  );
};

export default HtmlCssProjects;
