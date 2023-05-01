import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PurchaseCartButton = () => {
  const { isLogin } = useSelector((state) => state.registerSlice);
  const { productsInCartArr } = useSelector((state) => state.cartSlice);
  const navigate = useNavigate();

  const handleClickPurchaseCart = () => {
    if (!isLogin && productsInCartArr.length === 0) return;
    if (!isLogin) {
      navigate("/loginRegister");
      return alert(
        "Parece que no estas logueado, te redirigiremos a la pagina de inicio de sesión."
      );
    }
    return alert("No puedes comprar si no tienes productos en el carrito.");
  };

  return (
    <>
      {isLogin !== false && productsInCartArr.length !== 0 ? (
        <button className="button--purchaseCart">Comprar carrito</button>
      ) : (
        <button className="button--purchaseCart disabledButton" onClick={handleClickPurchaseCart}>
          Comprar carrito
        </button>
      )}
    </>
  );
};

export default PurchaseCartButton;
