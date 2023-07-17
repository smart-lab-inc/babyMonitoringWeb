import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/services/auth";
import routes from "../../consts/routes";
import LoginSVG from "../../assets/svg/loginIcon.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const { setAccessToken, authState } = useAuth();

  useEffect(() => {
    if (authState.accessToken) {
      navigate(routes.home);
    }
  }, []);

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Correo invalido").required("Requerido"),
    password: Yup.string().required("Requerido"),
  });

  const handleSubmit = async (values) => {
    const response = await login(values.email, values.password);

    if (response.status === 201) {
      setAccessToken(response.data.data.accessToken);
      navigate(routes.home);
    } else {
      displayError("Credenciales invalidas");
    }
  };

  const displayError = (message) => {
    const errorsDiv = document.getElementById("errors");
    errorsDiv.textContent = message;
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
          <p className="z-40 text-3xl font-semibold">Hola!</p>
          <img src={LoginSVG} alt="Login" className="w-1/2 lg:w-1/6" />
          <p className="text-center text-gray-500">
            Bienvenido a Baby Watcher App, inicia sesión para continuar y
            empezar a monitorear a tu bebé.
          </p>

          <div className="w-full max-w-sm mt-6">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <TextField
                  label="Correo Electronico"
                  name="email"
                  type="email"
                  placeholder="Correo Electronico"
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
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div id="errors" className="text-red-500 text-sm"></div>

              <Button
                type="submit"
                label="Iniciar sesion"
                primary={true}
                size={"h-10"}
              />
            </form>

            <p className="text-sm mt-3 font-semibold text-stone-950">
              ¿No tienes una cuenta?{" "}
              <Link to="/register" className="text-primary-500 underline">
                Registrate aquí
              </Link>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
