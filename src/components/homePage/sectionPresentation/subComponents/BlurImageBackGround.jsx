import React from "react";
import "./styles.css";

const BlurImageBackGround = ({ children, backdropFilter, borderRadius, backgroundColor }) => {
  return (
    <div
      style={{
        backdropFilter: backdropFilter,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
      }}
      className="blur--image"
    >
      {children}
    </div>
  );
};

export default BlurImageBackGround;
