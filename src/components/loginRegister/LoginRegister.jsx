import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

import LoginForm from "./formLogin/LoginForm";
import RegisterForm from "./formRegister/RegisterForm";

const LoginRegister = () => {
  const { toggleForm } = useSelector((state) => state.toggleFormLoginRegisterSlice);

  return (
    <div className="wrapper--FormContainer">{toggleForm ? <LoginForm /> : <RegisterForm />}</div>
  );
};

export default LoginRegister;
