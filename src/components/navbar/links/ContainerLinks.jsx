import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const ContainerLinks = ({ children }) => {
  const { openMenu } = useSelector((state) => state.toggleMenuSlice);

  return <div className={`container--links__navbar ${openMenu ? "active" : ""}`}>{children}</div>;
};

export default ContainerLinks;
