import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const ContainerLinks = ({ children }) => {
  const state = useSelector((state) => state.openMenu);

  return <div className={`container--links__navbar ${state ? "active" : ""}`}>{children}</div>;
};

export default ContainerLinks;
