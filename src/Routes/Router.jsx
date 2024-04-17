import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PurchaseHistory from "../pages/PurchaseHistory/PurchaseHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/estate-details/:id",
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>
      },
      {
        path: "/update-profile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: "/purchase-history",
        element: <PrivateRoute><PurchaseHistory /></PrivateRoute>
      }
    ],
  },
]);

export default router;