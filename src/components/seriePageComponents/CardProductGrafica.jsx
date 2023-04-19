import React from "react";
import "./styles.css";
import ButtonComprar from "./ButtonComprar";

const CardProductGrafica = ({
  id,
  serie,
  modelo,
  fabricante,
  marca,
  isTi,
  stock,
  price,
  tamañoDeMemoria,
  tipoDeMemoriaGrafica,
  imgProduct,
}) => {
  return (
    <div className="wrapper--cardProductGrafica">
      <img src={imgProduct} alt="imagen producto" className="img--product" />
      <div className="container--titleYPrice">
        <h2 className="name--product">
          {`GeForce RTX ${serie} Series ${modelo}${
            isTi ? "TI" : ""
          } ${marca} ${tamañoDeMemoria} ${tipoDeMemoriaGrafica}`}
        </h2>
        <span className="price--product">${price}</span>
      </div>
      <ButtonComprar />
    </div>
  );
};

export default CardProductGrafica;
