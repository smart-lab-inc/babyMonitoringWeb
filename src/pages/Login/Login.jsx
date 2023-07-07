import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Correo invalido").required("Requerido"),
    password: Yup.string().required("Requerido"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const onInputError = (error, touched) => {
    if (error && touched) {
      return "border-red-500";
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
          <p className="z-40 text-3xl font-semibold">Inicia sesión</p>

          <div className="w-full max-w-sm mt-6">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <TextField
                  label="Correo Electronico"
                  name="email"
                  type="email"
                  placeholder="Correo Electronico"
                  width="100%"
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
                  label="Contraseña"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  width="100%"
                  value={values.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={onInputError(errors.password, touched.password)}
                />
                {errors.password && touched.password && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <Button
                type="submit"
                label="Iniciar sesion"
                primary={true}
                size={"h-10"}
              />
            </form>

            <p className="text-sm mt-3 font-semibold text-stone-950">
              ¿No tienes una cuenta?{" "}
              <a href="#" className="text-primary-500 underline">
                Registrate aquí
              </a>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
