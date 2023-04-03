import React from "react";
import "./styles.css";
import SectionPresentation from "./sectionPresentation/SectionPresentation";
import SectionInformationGraphics from "./sectionInformationPageGraphics/SectionInformationGraphics";

const HomePage = () => {
  return (
    <>
      <SectionPresentation />
      <SectionInformationGraphics />
    </>
  );
};

export default HomePage;
