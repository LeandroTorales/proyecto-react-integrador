import React, { useEffect } from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const PurchaseCartButton = () => {
  const { isLogin } = useSelector((state) => state.registerSlice);
  const { productsInCartArr } = useSelector((state) => state.cartSlice);
  console.log("productsInCartArr:", productsInCartArr);
  const f = useSelector((state) => state);
  console.log("states:", isLogin);
  console.log(isLogin !== false && productsInCartArr.length !== 0);
  return (
    <>
      {isLogin !== false && productsInCartArr.length !== 0 ? (
        <button className="button--purchaseCart">Comprar carrito</button>
      ) : (
        <button className="button--purchaseCart" disabled>
          Comprar carrito
        </button>
      )}
    </>
  );
};

export default PurchaseCartButton;
