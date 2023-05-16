import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const TotalPriceCart = () => {
  const { priceOfCart } = useSelector((state) => state.cartSlice);
  const { shippingCost } = useSelector((state) => state.cartSlice);

  return <p className="totalPrice--cart">Total: ${priceOfCart + shippingCost}</p>;
};

export default TotalPriceCart;
