import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { isLoginToggleAction, logoutAction } from "../../../redux/slices/registerSlice";
import { useNavigate } from "react-router-dom";
import { clearOrders } from "../../../redux/slices/orders/ordersSlice";

const ButtonLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(isLoginToggleAction());
    dispatch(logoutAction());
    dispatch(clearOrders());
    alert("Has cerrado sesión.");
    navigate("/");
  };

  return (
    <div className="container--butonLogout">
      <button className="button--logout" onClick={() => handleLogout()}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default ButtonLogout;
