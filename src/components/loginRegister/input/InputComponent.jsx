import React from "react";
import "./styles.css";

const InputComponent = ({
  type,
  name,
  onChange,
  onBlur,
  nameOfLabel,
  value,
  isError,
  errorMessage,
}) => {
  return (
    <div className="container--formField">
      <label htmlFor={name} className="label--formField">
        {nameOfLabel}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="true"
        className="input--formField"
        placeholder={nameOfLabel}
        value={value}
      />
      {isError ? <p className="error--message"> {errorMessage}</p> : null}
    </div>
  );
};

export default InputComponent;
