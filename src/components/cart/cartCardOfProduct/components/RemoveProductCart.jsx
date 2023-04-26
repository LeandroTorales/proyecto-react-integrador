import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./styles.css";

const RemoveProductCart = ({ prod }) => {
  return (
    <div className="wrapper--deleteProduct" onClick={() => console.log("ButtonDeleteProduct")}>
      <AiFillDelete />
    </div>
  );
};

export default RemoveProductCart;
