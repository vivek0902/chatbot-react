import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ allowed }) => {
  const { userRole } = useContext(AuthContext);
  return userRole === allowed ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
