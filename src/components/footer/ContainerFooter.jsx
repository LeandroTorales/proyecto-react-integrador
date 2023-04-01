import React from "react";
import "./styles.css";
import LineDivisoryFooter from "./subComponents/LineDivisoryFooter";
import TextBigFooter from "./subComponents/TextBigFooter";
import SmallTextFooter from "./subComponents/SmallTextFooter";

const ContainerFooter = () => {
  return (
    <div className="container--footer__main">
      <div className="container--redes__footer">
        <div className="container--texts__footer">
          <SmallTextFooter>Email</SmallTextFooter>
          <SmallTextFooter>Github</SmallTextFooter>
        </div>
        <div className="container--texts__footer">
          <TextBigFooter>Leandrotorales1234@gmail.com</TextBigFooter>
          <TextBigFooter>LeandroTorales</TextBigFooter>
        </div>
      </div>
      <LineDivisoryFooter />
      <div className="container--redes__footer">
        <TextBigFooter>©2023 All rights reserved.</TextBigFooter>
      </div>
    </div>
  );
};

export default ContainerFooter;
