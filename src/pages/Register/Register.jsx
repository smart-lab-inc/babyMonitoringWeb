import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { create } from "../../api/services/user";
import routes from "../../consts/routes";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().max(50, "Muy largo!").required("Requerido"),
    last_name: Yup.string().max(50, "Muy largo!").required("Requerido"),
    email: Yup.string().email("Correo invalido").required("Requerido"),
    phone: Yup.number()
      .typeError("Eso no es un número de teléfono")
      .positive("No puede iniciar con " - "")
      .integer("No puede incluir punto decimal")
      .required("Requerido"),
    password: Yup.string().required("Requerido"),
  });

  const handleSubmit = async (values) => {
    const response = await create(values.email, values.password, values.first_name, values.last_name, values.phone);

    if (response.statusCode == 201) {
      console.log('Usuario creado');
      navigate(routes.login);
    }

    console.error(response.data.message);
  }

  const onInputError = (error, touched) => {
    if (error && touched) {
      return "border-red-500";
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="flex font-primary flex-col items-center justify-center h-screen p-4">
          <p className="z-40 text-3xl font-semibold">Regístrate</p>

          <div className="w-full max-w-sm mt-6">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <TextField
                  label="Nombre"
                  name="first_name"
                  type="text"
                  placeholder="Nombre"
                  width="w-full"
                  value={values.first_name}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={onInputError(errors.first_name, touched.first_name)}
                />
                {errors.first_name && touched.first_name && (
                  <p className="text-red-500 text-sm">{errors.first_name}</p>
                )}
              </div>
              <div>
                <TextField
                  label="Apellido"
                  name="last_name"
                  type="text"
                  placeholder="Apellido"
                  width="w-full"
                  value={values.last_name}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={onInputError(errors.last_name, touched.last_name)}
                />
                {errors.last_name && touched.last_name && (
                  <p className="text-red-500 text-sm">{errors.last_name}</p>
                )}
              </div>
              <div>
                <TextField
                  label="Correo electrónico"
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  width="w-full"
                  value={values.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={onInputError(errors.email, touched.email)}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <TextField
                  label="Número de teléfono"
                  name="phone"
                  type="text"
                  placeholder="Número de teléfono"
                  width="w-full"
                  value={values.phone}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={onInputError(errors.phone, touched.phone)}
                />
                {errors.phone && touched.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div>
                <TextField
                  label="Contraseña"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  width="w-full"
                  value={values.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={onInputError(errors.password, touched.password)}
                />
                {errors.password && touched.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                label="Registrarme"
                primary={true}
                size={"h-10"}
              />
            </form>

            <p className="text-sm mt-3 font-semibold text-stone-950">
              ¿Ya tienes una cuenta?{" "}
              <Link to={routes.login} className="text-primary-500 underline">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
