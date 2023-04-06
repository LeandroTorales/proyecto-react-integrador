import React from "react";
import "./styles.css";
import LinksGeneraciones from "./linksGeneraciones/LinksGeneraciones";
import { useLocation, useParams } from "react-router-dom";

const SectionGeneraciones = () => {
  const { pathname } = useLocation();

  const ternarioLocation = () => {
    if (pathname != "/generaciones") return false;
    return true;
  };

  return (
    <>
      <div
        className="sectionGeneraciones--wrapper"
        style={{ marginTop: ternarioLocation() ? "60px" : "" }}
      >
        <h2 className="title--generaciones">
          Estas son nuestras generaciones de tarjetas gráficas:
        </h2>
        <div className="wrapper--generaciones">
          <LinksGeneraciones toProp={"/generacion2000"}>Generación 2000</LinksGeneraciones>
          <LinksGeneraciones toProp={"/generacion3000"}>Generación 3000</LinksGeneraciones>
          <LinksGeneraciones toProp={"/generacion4000"}>Generación 4000</LinksGeneraciones>
        </div>
      </div>
    </>
  );
};

export default SectionGeneraciones;
