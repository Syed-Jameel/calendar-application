// src/routes/index.js
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";
import Loading from "../components/common/Loading";
import Dashboard from "../components/dashboard";
import FormComponent from "../components/form/index";
import PrivateRoute from "./PrivateRoute";
const DataTable = lazy(() => import("../components/dataTable"));
const Calendar = lazy(() => import("../components/calendar"));
const Login = lazy(() => import("../components/login"));
const Signup = lazy(() => import("../components/login/subComponents/Signup"));
const ForgotPassword = lazy(
  () => import("../components/login/subComponents/ForgotPassword")
);
const ResetPassword = lazy(
  () => import("../components/login/subComponents/ResetPassword")
);
const VerifyUser = lazy(
  () => import("../components/login/subComponents/VerifyUser")
);

const appRouter: RouteObject[] = [
  {
    path: "/",
    element:<PrivateRoute><App /></PrivateRoute>  ,
    children: [
      {
        path: "/",
        element: <FormComponent />,
      },

      {
        path: "/table",
        element: (
          <Suspense fallback={<Loading />}>
            <DataTable />
          </Suspense>
        ),
      },
      {
        path: "/calendar",
        element: (
          <Suspense fallback={<Loading />}>
           <Calendar />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loading />}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<Loading />}>
        <ForgotPassword />
      </Suspense>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<Loading />}>
        <ResetPassword />
      </Suspense>
    ),
  },
  {
    path: "/verify-user",
    element: (
      <Suspense fallback={<Loading />}>
        <VerifyUser />
      </Suspense>
    ),
  },
];

const router = createBrowserRouter(appRouter);

export default router;
