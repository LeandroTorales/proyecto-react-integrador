import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./styles.css";

const IconCart = () => {
  return (
    <>
      <div className="icon">
        <button className="icon" /* onClick={dispatch(openMenu())} */>
          <AiOutlineShoppingCart />
        </button>
      </div>
    </>
  );
};

export default IconCart;
