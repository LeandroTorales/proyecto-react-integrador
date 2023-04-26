import React from "react";
import "./styles.css";

const PriceProductCartCard = ({ prod }) => {

  const price = prod.price * prod.quantity;

  return (
    <div className="wrapper--priceCartCard">
      <span>${price.toFixed(2)}</span>
      <span>${prod.price.toFixed(2)} c/u</span>
    </div>
  );
};

export default PriceProductCartCard;
