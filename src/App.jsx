import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { lazy, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import useAuth from "./hooks/useAuth";
import { refreshUser } from "./redux/auth/operations";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/Home/Home"));
const LoginPage = lazy(() => import("./pages/Login/Login"));
const RegisterPage = lazy(() => import("./pages/Register/Register"));
const PhoneBookPage = lazy(() => import("./pages/PhoneBook/PhoneBook"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/phonebook"
                component={<RegisterPage />}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/phonebook"
                component={<LoginPage />}
              />
            }
          ></Route>
          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<PhoneBookPage />} />
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
