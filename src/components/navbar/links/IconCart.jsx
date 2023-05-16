import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./styles.css";
import { useSelector } from "react-redux";

const IconCart = () => {
  const { productsInCartArr } = useSelector((state) => state.cartSlice);

  const getTotalProductsInCart = () => {
    return productsInCartArr.reduce((acc, cur) => acc + cur.quantity, 0);
  };

  return (
    <>
      <div className="icon linkOfNavbar">
        <div className="container--bubbleCount">
          {productsInCartArr.length !== 0 ? (
            <div className="bubble--count__cartIcon">{getTotalProductsInCart()}</div>
          ) : (
            ""
          )}
        </div>
        <button className="icon linkOfNavbar">
          <AiOutlineShoppingCart className="linkOfNavbar" />
        </button>
      </div>
    </>
  );
};

export default IconCart;
