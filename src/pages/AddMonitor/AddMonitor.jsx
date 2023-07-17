import MonitorSVG from "../../assets/svg/monitor.svg";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../components/TextField/TextField";
import { update } from "../../api/services/user";
import { useNavigate } from "react-router-dom";
import routes from "../../consts/routes";

const AddMonitor = () => {
  const navigate = useNavigate();

  const initialValues = {
    monitorSerialNumber: "",
  };

  const validationSchema = Yup.object({
    monitorSerialNumber: Yup.string().required("Requerido"),
  });

  const handleSubmit = async (values) => {
    const response = await update(values.monitorSerialNumber);

    if (response.status === 200) {
      navigate(routes.monitors);
    } else if (response.status === 400) {
      displayError(
        "El código ingresado no es válido o el monitor ya se encuentra registrado"
      );
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
        <>
          <NavBar />
          <div className="flex flex-col items-center justify-center flex-grow mt-24 p-4">
            <div className="flex flex-col items-center justify-center">
              <img src={MonitorSVG} alt="Monitor" className="w-1/3" />
              <p className="z-40 text-3xl font-semibold">Agregar monitor</p>
              <p className="text-center text-gray-500">
                Ingresa el código de tu monitor, este se encuentra en la parte
                trasera del mismo.
              </p>
              <div className="w-full max-w-sm mt-2">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div>
                    <TextField
                      label="Código"
                      name="monitorSerialNumber"
                      type="text"
                      placeholder="Código"
                      width="w-full"
                      maxLength="38"
                      value={values.monitorSerialNumber}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={onInputError(
                        errors.monitorSerialNumber,
                        touched.monitorSerialNumber
                      )}
                    />
                    {errors.monitorSerialNumber &&
                      touched.monitorSerialNumber && (
                        <p className="text-red-500 text-sm">
                          {errors.monitorSerialNumber}
                        </p>
                      )}
                  </div>
                  <div id="errors" className="text-red-500 text-sm"></div>
                  <div>
                    <Button
                      primary
                      type="submit"
                      label="Agregar"
                      size="w-full"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default AddMonitor;
