import React from "react";
import "./styles.css";

const ContainerImgProduct = ({ img }) => {
  return (
    <div className="container--imgProduct">
      <img src={img} alt="imagen Product" className="imgProduct" />
    </div>
  );
};

export default ContainerImgProduct;
