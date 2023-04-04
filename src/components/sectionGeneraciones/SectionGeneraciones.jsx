import React from "react";
import "./styles.css";
import LinksGeneraciones from "./linksGeneraciones/LinksGeneraciones";

const SectionGeneraciones = () => {
  return (
    <div className="sectionGeneraciones--wrapper">
      <LinksGeneraciones>Generación 2000</LinksGeneraciones>
      <LinksGeneraciones>Generación 3000</LinksGeneraciones>
      <LinksGeneraciones>Generación 4000</LinksGeneraciones>
    </div>
  );
};

export default SectionGeneraciones;
