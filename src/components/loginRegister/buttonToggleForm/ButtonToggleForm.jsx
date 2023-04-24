import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFormAction } from "../../../redux/slices/toggleFormLoginRegisterSlice";

const ButtonToggleForm = () => {
  const dispatch = useDispatch();
  const { toggleForm } = useSelector((state) => state.toggleFormLoginRegisterSlice);

  return (
    <div className="button--toggleForm" onClick={() => dispatch(toggleFormAction())}>
      {toggleForm
        ? "¿Quieres registrarte? has click aquí."
        : "¿Ya estás registrado? has click aquí para iniciar sesión."}
    </div>
  );
};

export default ButtonToggleForm;
