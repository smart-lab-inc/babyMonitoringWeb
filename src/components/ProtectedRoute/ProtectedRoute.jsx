import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import routes from "../../consts/routes";

const ProtectedRoute = () => {
  const { authState } = useAuth();

  if (!authState.accessToken) {
    return <Navigate to={routes.login} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;