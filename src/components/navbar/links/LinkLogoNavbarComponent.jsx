import React from "react";
import "./styles.css";

const LinkLogoNavbarComponent = ({ nameLink, to }) => {
  return (
    <a className="logo--navbar" href={to}>
      {nameLink}
    </a>
  );
};

export default LinkLogoNavbarComponent;
