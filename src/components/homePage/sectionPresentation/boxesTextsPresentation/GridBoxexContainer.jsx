import React from "react";
import "./styles.css";

const GridBoxesContainer = ({ children }) => {
  return (
    <div className="container--text__boxes">
      {children}
      <div className="blur--boxes">Bienvenido a nuestra tienda de tarjetas de video. </div>
    </div>
  );
};

export default GridBoxesContainer;
