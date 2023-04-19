import React from "react";
import "./styles.css";
import SectionPresentation from "../../components/sectionPresentation/SectionPresentation";
import SectionInformationGraphics from "../../components/sectionInformationPageGraphics/SectionInformationGraphics";
import SectionSeries from "../../components/sectionSeries/SectionSeries";

const HomePage = () => {
  return (
    <>
      <div className="homePage--wrapper">
        <SectionPresentation />
        <SectionInformationGraphics />
        <SectionSeries />
      </div>
    </>
  );
};

export default HomePage;
