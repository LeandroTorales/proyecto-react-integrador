import React from "react";
import "./styles.css";

const InformationProductCartCard = ({ prod }) => {
  return (
    <div className="wrapper--detailProductCartCard">
      <p>{`${prod.fabricante} ${prod.modelo} ${prod.marca} serie ${prod.serie}`}</p>
      <p className="detail--product__cartCard">{`${prod.tamañoDeMemoria} ${
        prod.tipoDeMemoriaGrafica
      } ${prod.isTi ? "TI Edition" : ""}`}</p>
    </div>
  );
};

export default InformationProductCartCard;
