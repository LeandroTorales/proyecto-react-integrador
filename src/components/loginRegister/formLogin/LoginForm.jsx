import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { isLoginToggleAction, setDataUserOnLogin } from "../../../redux/slices/registerSlice";
import FormBox from "../form/FormBox";
import ContainerFormFields from "../form/ContainerFormFields";
import InputComponent from "../input/InputComponent";
import ButtonFormSubmit from "../form/ButtonFormSubmit";
import LineDivisoryForm from "../form/LineDivisoryForm";
import WrapperLoginFormToggle from "../wrapperLoginFormToggle/WrapperLoginFormToggle";
import ButtonToggleForm from "../buttonToggleForm/ButtonToggleForm";
import { loginInitialValues } from "../../../redux/slices/formik/initialValues";
import { loginValidationShema } from "../../../redux/slices/formik/validationsSchemas";
import { loginUser } from "../../../axios/userAxios";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationShema,
    onSubmit: async (values, actions) => {
      const { email, password } = values;
      const userLogin = await loginUser(email, password);

      if (userLogin) {
        dispatch(setDataUserOnLogin({ ...userLogin }));
        dispatch(isLoginToggleAction());
        alert(`Has iniciado sesión correctamente, bienvenido devuelta, ${userLogin.nombre} :).`);
        actions.resetForm();
        return setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    },
  });

  return (
    <FormBox onSubmit={formik.handleSubmit}>
      <div className="container--Title">
        <h2> Formulario de inicio de sesión</h2>
      </div>
      <ContainerFormFields>
        <InputComponent
          type="email"
          name="email"
          nameOfLabel="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          isError={formik.touched.email && formik.errors.email}
          errorMessage={formik.errors.email}
        />

        <InputComponent
          type="password"
          name="password"
          nameOfLabel="Contraseña"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          isError={formik.touched.password && formik.errors.password}
          errorMessage={formik.errors.password}
        />

        <ButtonFormSubmit />
      </ContainerFormFields>
      <LineDivisoryForm />
      <WrapperLoginFormToggle>
        <ButtonToggleForm />
      </WrapperLoginFormToggle>
    </FormBox>
  );
};

export default LoginForm;
