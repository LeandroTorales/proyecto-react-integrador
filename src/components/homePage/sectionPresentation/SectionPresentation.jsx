import React from "react";
import BackgroundImagePresentation from "./backgroundImage/BackgroundImagePresentation";
import GridBoxesContainer from "./boxesTextsPresentation/GridBoxexContainer";
import "./styles.css";
import Boxes from "./boxesTextsPresentation/Boxes";

const SectionPresentation = () => {
  return (
    <>
      <div className="container--section__presentation">
        <BackgroundImagePresentation />
        <GridBoxesContainer>
          <Boxes gridColumn={"2/ 10"} gridRow={"2/5"} colorFondo={"#6a9e0a"} />
          <Boxes gridColumn={"7/ 14"} gridRow={"4/8"} colorFondo={"#6a9e0a"} />
          <Boxes gridColumn={"4/ 9"} gridRow={"7/10"} colorFondo={"#6a9e0a"} />
          <Boxes gridColumn={"6/ 15"} gridRow={"9/13"} colorFondo={"#6a9e0a"} />
          <Boxes gridColumn={"8/ 2"} gridRow={"12/15"} colorFondo={"#6a9e0a"} />
          <Boxes gridColumn={"7/ 10"} gridRow={"3/6"} colorFondo={"#ffffff"} />
          <Boxes gridColumn={"3/ 6"} gridRow={"6/9"} colorFondo={"#ffffff"} />
          <Boxes gridColumn={"10/ 14"} gridRow={"12/14"} colorFondo={"#ffffff"} />
        </GridBoxesContainer>
      </div>
    </>
  );
};

export default SectionPresentation;
