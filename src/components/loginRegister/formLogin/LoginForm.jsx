import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { isLoginToggleAction, setDataUserOnLogin } from "../../../redux/slices/registerSlice";
import FormBox from "../form/FormBox";
import ContainerFormFields from "../form/ContainerFormFields";
import InputComponent from "../input/InputComponent";
import ButtonFormSubmit from "../form/ButtonFormSubmit";
import LineDivisoryForm from "../form/LineDivisoryForm";
import WrapperLoginFormToggle from "../wrapperLoginFormToggle/WrapperLoginFormToggle";
import ButtonToggleForm from "../buttonToggleForm/ButtonToggleForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { dataAllUsersArr } = useSelector((state) => state.registerSlice);

  const validationSchema = Yup.object({
    email: Yup.string().email("Email incorrecto.").required("Email requerido."),
    password: Yup.string().required("Contraseña requerida."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values:", values);
      const findUserInArr = () => {
        return dataAllUsersArr.find(
          (user) => user.email === values.email && user.password === values.password
        );
      };
      if (findUserInArr === undefined) {
        return alert("No se ha encontrado un usuario. Vuelve a intentarlo.");
      } else {
        dispatch(setDataUserOnLogin(findUserInArr()));
        dispatch(isLoginToggleAction());
        alert(
          `Has iniciado sesión correctamente, bienvenido devuelta, ${findUserInArr().name} :).`
        );
        setTimeout(() => {
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
