import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const LinkNavbarComponent = ({ nameLink, to }) => {
  return (
    <NavLink className="links--navbar" to={`${to}`}>
      {nameLink}
    </NavLink>
  );
};

export default LinkNavbarComponent;
