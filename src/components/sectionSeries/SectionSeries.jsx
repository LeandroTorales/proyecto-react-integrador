import React, { useEffect } from "react";
import "./styles.css";
import LinksSeries from "./linksSeries/LinksSeries";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SectionSeries = () => {
  const { pathname } = useLocation();

  const ternarioLocation = () => {
    if (pathname != "/series") return false;
    return true;
  };

  const { series } = useSelector((state) => state.seriesSlice);

  return (
    <>
      <div
        className="sectionSeries--wrapper"
        style={{ marginTop: ternarioLocation() ? "60px" : "" }}
      >
        <h2 className="title--Series">Estas son nuestras series de tarjetas gráficas:</h2>
        <div className="wrapper--Series">
          {series.map(({ id, nameOfComponent, linkToProp }) => (
            <LinksSeries key={id} toProp={linkToProp}>
              {nameOfComponent}
            </LinksSeries>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionSeries;
