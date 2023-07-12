import React from "react";
import SectionDivider from "./SectionDivider";

const Title = ({ title }) => {
  return (
    <div>
      <SectionDivider />
      <h2 className="text-3xl md:text-5xl font-semibold capitalize mb-3 whitespace-nowrap">{title}</h2>
    </div>
  );
};

export default Title;
