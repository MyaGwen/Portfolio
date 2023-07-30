import React from "react";
import { reactJs } from "../everyProject";
import AllProjectsData from "../AllProjectsData";

const ReactJs = ({ darkMode }) => {
  return (
    <AllProjectsData
      darkMode={darkMode}
      dataToMap={reactJs}
      title="React JS"
    />
  );
};

export default ReactJs;
