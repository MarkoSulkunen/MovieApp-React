import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { useContext } from "react";

// Routes to login page if not logged in
const LoginRouter = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default LoginRouter;
