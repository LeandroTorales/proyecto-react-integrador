import React from "react";
import "./styles.css";

const FormBox = ({ children, onSubmit }) => {
  return (
    <form className="form--container" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormBox;
