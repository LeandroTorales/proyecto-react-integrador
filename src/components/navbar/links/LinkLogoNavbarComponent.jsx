import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const LinkLogoNavbarComponent = ({ nameLink, to }) => {
  return (
    <NavLink className="logo--navbar linkOfNavbar" to={`${to}`}>
      {nameLink}
    </NavLink>
  );
};

export default LinkLogoNavbarComponent;
