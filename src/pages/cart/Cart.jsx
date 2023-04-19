import React from "react";
import "./styles.css";
import CartContainer from "../../components/cart/CartContainer";
import CartInfoContainer from "../../components/cart/CartInfoContainer";
import CartItemsIn from "../../components/cart/CartItemsIn";
import CartResumeContainer from "../../components/cart/CartResumeContainer";

const Cart = () => {
  return (
    <>
      <CartContainer>
        <CartInfoContainer>
          <CartItemsIn></CartItemsIn>
          <CartResumeContainer></CartResumeContainer>
        </CartInfoContainer>
      </CartContainer>
    </>
  );
};

export default Cart;
