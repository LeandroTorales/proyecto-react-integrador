import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { resetDataLogout } from "../../redux/slices/registerSlice";

const ButtonLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    alert("Has cerrado sesión.");
    dispatch(resetDataLogout());
  };

  return (
    <button className="button--logout" onClick={() => handleLogout()}>
      Cerrar sesión
    </button>
  );
};

export default ButtonLogout;
