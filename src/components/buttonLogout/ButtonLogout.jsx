import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { isLoginToggleAction, logoutAction } from "../../redux/slices/registerSlice";

const ButtonLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(isLoginToggleAction());
    dispatch(logoutAction());
    alert("Has cerrado sesión.");
  };

  return (
    <button className="button--logout" onClick={() => handleLogout()}>
      Cerrar sesión
    </button>
  );
};

export default ButtonLogout;
