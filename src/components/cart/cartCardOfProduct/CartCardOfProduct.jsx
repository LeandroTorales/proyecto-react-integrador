import React from "react";
import "./styles.css";
import ContainerImgProduct from "./components/ContainerImgProduct";
import InformationProductCartCard from "./components/InformationProductCartCard";
import QuantityHandlerCardCart from "./components/QuantityHandlerCardCart";
import PriceProductCartCard from "./components/PriceProductCartCard";
import RemoveProductCart from "./components/RemoveProductCart";

const CartCardOfProduct = ({ ...prod }) => {
  return (
    <div className="wrapper--cartCardProduct">
      <div className="wrapper--detailProduct">
        <ContainerImgProduct img={prod.imgProduct} />
        <InformationProductCartCard prod={prod} />
      </div>
      <QuantityHandlerCardCart prod={prod} />
      <PriceProductCartCard prod={prod} />
      <RemoveProductCart prod={prod} />
    </div>
  );
};

export default CartCardOfProduct;
