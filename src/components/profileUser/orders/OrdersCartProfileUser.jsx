import React from "react";
import "./styles.css";

const OrdersCartProfileUser = () => {
  return (
    <div className="container--orders">
      <h2 style={{ textDecoration: "underline" }}>Tus ordenes de compra</h2>
      <div className="wrapper--orders">
        <div className="orderInProfile"></div>
        <div className="orderInProfile"></div>
      </div>
    </div>
  );
};

export default OrdersCartProfileUser;
