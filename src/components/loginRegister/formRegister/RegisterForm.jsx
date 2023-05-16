import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LineDivisoryForm from "../form/LineDivisoryForm";
import ButtonToggleForm from "../buttonToggleForm/ButtonToggleForm";
import InputComponent from "../input/InputComponent";
import ContainerFormFields from "../form/ContainerFormFields";
import { useFormik } from "formik";
import FormBox from "../form/FormBox";
import {
  isLoginToggleAction,
  setDataUserRegisterFormAction,
} from "../../../redux/slices/registerSlice";
import ButtonFormSubmit from "../form/ButtonFormSubmit";
import WrapperLoginFormToggle from "../wrapperLoginFormToggle/WrapperLoginFormToggle";
import { registerInitialValues } from "../../../redux/slices/formik/initialValues";
import { registerValidationShema } from "../../../redux/slices/formik/validationsSchemas";
import { createUser } from "../../../axios/userAxios";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerValidationShema,
    onSubmit: async (values, actions) => {
      const { name, email, password } = values;
      const user = await createUser(name, email, password);
      if (user) {
        dispatch(setDataUserRegisterFormAction({ ...user.usuario, token: user.token }));
        dispatch(isLoginToggleAction());
        alert("Te has registrado correctamente, muchas gracias.");
        actions.resetForm();
        return setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    },
  });

  return (
    <FormBox onSubmit={formik.handleSubmit}>
      <div className="container--Title">
        <h2> Formulario de registro</h2>
      </div>
      <ContainerFormFields>
        <div className="wrapper--formField">
          <InputComponent
            type="text"
            name="name"
            nameOfLabel="Nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            isError={formik.touched.name && formik.errors.name}
            errorMessage={formik.errors.name}
          />
          <InputComponent
            type="text"
            name="surname"
            nameOfLabel="Apellido"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surname}
            isError={formik.touched.surname && formik.errors.surname}
            errorMessage={formik.errors.surname}
          />
        </div>

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
          type="cellphone"
          name="cellphone"
          nameOfLabel="Telefono"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cellphone}
          isError={formik.touched.cellphone && formik.errors.cellphone}
          errorMessage={formik.errors.cellphone}
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

export default RegisterForm;
