import React from "react";
import "./styles.css";

const ContainerNavbar = ({ children }) => {
  return (
    <>
      <div className="main--container__navbar">{children}</div>
    </>
  );
};

export default ContainerNavbar;
