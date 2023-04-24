import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import LineDivisoryForm from "../form/LineDivisoryForm";
import ButtonToggleForm from "../buttonToggleForm/ButtonToggleForm";
import InputComponent from "../input/InputComponent";
import ContainerFormFields from "../form/ContainerFormFields";
import { useFormik } from "formik";
import FormBox from "../form/FormBox";
import {
  isLoginToggleAction,
  setDataAllUsersAction,
  setDataUserRegisterFormAction,
} from "../../../redux/slices/registerSlice";
import ButtonFormSubmit from "../form/ButtonFormSubmit";
import WrapperLoginFormToggle from "../wrapperLoginFormToggle/WrapperLoginFormToggle";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Nombre muy corto.")
      .max(50, "Nombre muy largo.")
      .required("Nombre requerido."),
    surname: Yup.string()
      .min(2, "Nombre muy corto.")
      .max(50, "Nombre muy largo.")
      .required("Apellido requerido."),
    email: Yup.string().email("Email incorrecto.").required("Email requerido."),
    cellphone: Yup.number("Tiene que ser numeros.")
      .integer("Solo se aceptan numeros enteros.")
      .required("El numero de telefono es obligatorio."),
    password: Yup.string().required("Contraseña requerida."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      cellphone: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setDataUserRegisterFormAction(values));
      dispatch(setDataAllUsersAction(values));
      dispatch(isLoginToggleAction());
      alert("Te has registrado correctamente, muchas gracias.");
      setTimeout(() => {
        navigate("/");
      }, 3000);
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
