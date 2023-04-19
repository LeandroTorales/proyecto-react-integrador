import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";

const LinksSeries = ({ children, toProp, serie }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={`${pathname !== "/series" ? "/series/" : ""}${toProp}`}
      serie={serie}
      className="button--serie"
    >
      {children}
    </Link>
  );
};

export default LinksSeries;
