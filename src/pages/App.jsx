import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "../context/AuthContext/AuthProvider";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Statistics from "./Statistics/Statistics";
import VideoMonitor from "./VideoMonitor/VideoMonitor";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import routes from "../consts/routes";
import AddMonitor from "./AddMonitor/AddMonitor";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.statistics} element={<Statistics />} />
            <Route path={routes.videoMonitor} element={<VideoMonitor />} />
            <Route path={routes.addMonitor} element={<AddMonitor />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;