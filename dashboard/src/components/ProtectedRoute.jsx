import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/auth/AuthContext";
import Sidebar from "./sidebar/Sidebar";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <>
      <Sidebar />
      {children}
    </>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};

export default ProtectedRoute;
