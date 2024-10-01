import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LoginRegisterPage from "./components/LoginRegisterPage";
import UserPage from "./components/UserPage/UserPage.jsx";
import ErrorPage from "./ErrorPage";
import "./index.css";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginRegisterPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
