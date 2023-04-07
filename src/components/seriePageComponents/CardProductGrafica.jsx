import React from "react";
import "./styles.css";

const CardProductGrafica = () => {
  return (
    <div className="wrapper--cardProductGrafica">
      <img
        src="https://images7.alphacoders.com/385/385737.jpg"
        alt="imagen producto"
        className="img--product"
      />
      <div className="container--titleYPrice">
        <h2 className="name--product">grafica gtx 1060 12gbRam 521cache zotac</h2>
        <span className="price--product">$123134</span>
      </div>
    </div>
  );
};

export default CardProductGrafica;
