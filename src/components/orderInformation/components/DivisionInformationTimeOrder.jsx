import React from "react";
import "./styles.css";

const DivisionInformationTotalPriceOrder = ({
  totalPrice,
  quantityProductsTotal,
  name,
  location,
  cellphone,
  address,
}) => {
  return (
    <div className="information--order__division flexFix">
      <div>
        <p>
          Total de la compra:
          <span> ${totalPrice}</span>
        </p>
        <p>
          Cantidad de productos:<span> {quantityProductsTotal}</span>
        </p>
      </div>
      <div>
        <p>
          A nombre de:
          <span> {name} </span>
        </p>
        <p>
          Numero de contacto:
          <span> {cellphone} </span>
        </p>
        <p>
          Ciudad de destinatario:
          <span> {location} </span>
        </p>
        <p>
          Direccion del destinatario:
          <span> {address} </span>
        </p>
      </div>
    </div>
  );
};

export default DivisionInformationTotalPriceOrder;
