import React from "react";
import "./styles.css";
import LinksSeries from "./linksSeries/LinksSeries";
import { useLocation, useParams } from "react-router-dom";

const SectionSeries = () => {
  const { pathname } = useLocation();

  const ternarioLocation = () => {
    if (pathname != "/series") return false;
    return true;
  };

  return (
    <>
      <div
        className="sectionSeries--wrapper"
        style={{ marginTop: ternarioLocation() ? "60px" : "" }}
      >
        <h2 className="title--Series">Estas son nuestras series de tarjetas gráficas:</h2>
        <div className="wrapper--Series">
          <LinksSeries toProp={"/serie20"}>Geforce RTX 20 series</LinksSeries>
          <LinksSeries toProp={"/serie30"}>Geforce RTX 30 series</LinksSeries>
          <LinksSeries toProp={"/serie40"}>Geforce RTX 40 series</LinksSeries>
        </div>
      </div>
    </>
  );
};

export default SectionSeries;
