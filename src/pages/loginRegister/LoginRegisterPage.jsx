import React from "react";
import LoginRegister from "../../components/loginRegister/LoginRegister";
import WrapperFormContainer from "./wrapperFormContainer/WrapperFormContainer";

const LoginRegisterPage = () => {
  return (
    <WrapperFormContainer>
      <LoginRegister />
    </WrapperFormContainer>
  );
};

export default LoginRegisterPage;
