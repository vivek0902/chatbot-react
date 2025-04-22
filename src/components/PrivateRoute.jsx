import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);
  return isAuth && role === "user" ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
