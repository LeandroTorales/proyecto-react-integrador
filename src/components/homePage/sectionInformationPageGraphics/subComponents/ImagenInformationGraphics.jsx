import React from "react";
import "./styles.css";

const ImagenInformationGraphics = ({ imagen }) => {
  return (
    <>
      <img src={imagen} alt="Imagen Grafica Información" className="img--informationGraphics" />
    </>
  );
};

export default ImagenInformationGraphics;
