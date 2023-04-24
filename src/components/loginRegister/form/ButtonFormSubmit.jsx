import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const ButtonFormSubmit = () => {
  const { toggleForm } = useSelector((state) => state.toggleFormLoginRegisterSlice);

  return (
    <button type="submit" className="button--submit">
      {toggleForm ? "Iniciar sesión" : "Registrarse"}
    </button>
  );
};

export default ButtonFormSubmit;
