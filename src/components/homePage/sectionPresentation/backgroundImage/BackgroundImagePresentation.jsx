import React from "react";
import "./styles.css";

const BackgroundImagePresentation = ({ children, height, width, image, borderRadius }) => {
  return (
    <div
      style={{
        height: height,
        width: width,
        backgroundImage: image,
        borderRadius: borderRadius,
      }}
      className="background--image__presentationPage"
    >
      {children}
    </div>
  );
};

export default BackgroundImagePresentation;
