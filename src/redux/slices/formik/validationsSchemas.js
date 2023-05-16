import * as Yup from "yup";

export const registerValidationShema = Yup.object({
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

export const loginValidationShema = Yup.object({
  email: Yup.string().email("Email incorrecto.").required("Email requerido."),
  password: Yup.string().required("Contraseña requerida."),
});
