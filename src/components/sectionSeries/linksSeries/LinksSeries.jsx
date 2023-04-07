import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const LinksSeries = ({ children, toProp }) => {
  return (
    <Link to={`${toProp}`} className="button--serie">
      {children}
    </Link>
  );
};

export default LinksSeries;
