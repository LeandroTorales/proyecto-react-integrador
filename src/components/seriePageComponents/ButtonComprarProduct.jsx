import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { addToCartProductAction } from "../../redux/slices/cart/cartSlice";

const ButtonComprar = ({ ...props }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="button--comprarProducto"
      onClick={() => dispatch(addToCartProductAction(props))}
    >
      ButtonComprar
    </button>
  );
};

export default ButtonComprar;
