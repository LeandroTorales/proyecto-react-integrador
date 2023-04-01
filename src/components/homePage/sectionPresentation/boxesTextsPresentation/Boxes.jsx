import React from "react";
import "./styles.css";

const Boxes = ({ text, gridColumn, gridRow, colorFondo }) => {
  return (
    <div
      style={{ gridColumn: gridColumn, gridRow: gridRow, backgroundColor: colorFondo }}
      className="boxes--background__ofTexts"
    >
      {text}
    </div>
  );
};

export default Boxes;
