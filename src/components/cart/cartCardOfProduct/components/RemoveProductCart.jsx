import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./styles.css";
import { useDispatch } from "react-redux";
import { removeProductFromCartAction } from "../../../../redux/slices/cart/cartSlice";

const RemoveProductCart = ({ prod }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="wrapper--deleteProduct"
      onClick={() => dispatch(removeProductFromCartAction(prod))}
    >
      <AiFillDelete />
    </div>
  );
};

export default RemoveProductCart;
