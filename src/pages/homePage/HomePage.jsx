import React from "react";
import "./styles.css";
import SectionPresentation from "../../components/sectionPresentation/SectionPresentation";
import SectionInformationGraphics from "../../components/sectionInformationPageGraphics/SectionInformationGraphics";
import SectionGeneraciones from "../../components/sectionGeneraciones/SectionGeneraciones";

const HomePage = () => {
  return (
    <>
      <div className="homePage--wrapper">
        <SectionPresentation />
        <SectionInformationGraphics />
        <SectionGeneraciones />
      </div>
    </>
  );
};

export default HomePage;
