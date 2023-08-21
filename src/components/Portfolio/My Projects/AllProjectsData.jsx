import React from "react";
import SectionDivider from "../Components/SectionDivider";
import ProjectData from "./Projects";

const AllProjectsData = ({ darkMode, title, dataToMap, color }) => {
  const projectData = dataToMap.map((item) => (
    <ProjectData item={item} darkMode={darkMode} key={item.id} />
  ));
  return (
    <div className={`flex flex-col section-padding_margin shadow ${color && color}`}>
      <div className="title">
        <SectionDivider />
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h2>
      </div>
      <div className="projectContainer py-2 px-3">{projectData}</div>
    </div>
  );
};

export default AllProjectsData;
