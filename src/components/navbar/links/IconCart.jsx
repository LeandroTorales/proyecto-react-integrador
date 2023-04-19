import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./styles.css";

const IconCart = () => {
  return (
    <>
      <div className="icon linkOfNavbar">
        <button className="icon linkOfNavbar">
          <AiOutlineShoppingCart className="linkOfNavbar" />
        </button>
      </div>
    </>
  );
};

export default IconCart;
