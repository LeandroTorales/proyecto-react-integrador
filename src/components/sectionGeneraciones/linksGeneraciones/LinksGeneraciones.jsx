import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const LinksGeneraciones = ({ children, toProp }) => {
  return (
    <Link to={`${toProp}`} className="button--generacion">
      {children}
    </Link>
  );
};

export default LinksGeneraciones;
