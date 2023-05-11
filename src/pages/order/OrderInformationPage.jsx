import React from "react";
import "./styles.css";
import OrderProducts from "../../components/orderInformation/OrderProducts";

const OrderInformationPage = () => {
  return (
    <div className="wrapper--orderInformationPage">
      <OrderProducts />
    </div>
  );
};

export default OrderInformationPage;
