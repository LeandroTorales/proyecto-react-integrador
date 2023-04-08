import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const LinkNavbarComponent = ({ nameLink, to, children }) => {
  return (
    <NavLink className="links--navbar linkOfNavbar" to={`${to}`}>
      {nameLink}
      {children}
    </NavLink>
  );
};

export default LinkNavbarComponent;
