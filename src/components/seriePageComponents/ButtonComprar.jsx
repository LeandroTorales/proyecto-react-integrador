import React from "react";
import "./styles.css";

const ButtonComprar = () => {
  return (
    <button className="button--comprarProducto" onClick={() => console.log("hola soy un button de comprar")}>ButtonComprar</button>
  );
};

export default ButtonComprar;
