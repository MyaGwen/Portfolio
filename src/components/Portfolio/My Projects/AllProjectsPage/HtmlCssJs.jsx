import React from "react";
import { htmlCssJs } from "../everyProject";
import AllProjectsData from "../AllProjectsData";

const HtmlCssJs = ({ darkMode }) => {
  return (
    <AllProjectsData
      darkMode={darkMode}
      dataToMap={htmlCssJs}
      title="HTML, CSS and JS"
    />
  );
};

export default HtmlCssJs;
