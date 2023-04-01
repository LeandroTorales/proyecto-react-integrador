import React from "react";
import "./styles.css";

const LinkNavbarComponent = ({ nameLink, to }) => {
  return (
    <a className="links--navbar" href={to}>
      {nameLink}
    </a>
  );
};

export default LinkNavbarComponent;
