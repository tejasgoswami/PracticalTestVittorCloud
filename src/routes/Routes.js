import { lazy } from "react";

const Dashboard = lazy(() => import("../components/Dashboard"));
const PatientDetails = lazy(() => import("../components/PatientDetails"));
const PatientList = lazy(() => import("../components/PatientList"));
const AddPatient = lazy(() => import("../components/AddPatient"));
const Login = lazy(() => import("../components/Login"));
const Signup = lazy(() => import("../components/Signup"));

const routes = [
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
    private: false,
  },
  {
    path: "/patient-details",
    exact: true,
    name: "Patient Details",
    component: PatientDetails,
    private: true,
  },
  {
    path: "/patient-list",
    exact: true,
    name: "Patient List",
    component: PatientList,
    private: false,
  },
  {
    path: "/add-patient",
    exact: true,
    name: "Add Patient",
    component: AddPatient,
    private: false,
  },
  {
    path: "/login",
    exact: true,
    name: "Login",
    component: Login,
    private: true,
  },
  {
    path: "/signup",
    exact: true,
    name: "SignUp",
    component: Signup,
    private: true,
  },
];

export default routes;
