import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Statistics from "./pages/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="font-primary">
        <p className="font-semibold">Attention needed</p>
        <p>Lorem Ipsum</p>
      </div>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/statistics",
    element: <Statistics />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
