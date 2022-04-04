import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

type ProtectedRouteProps = {
  redirectPath?: string;
  children?: any;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = "/login",
  children,
}) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to={redirectPath} replace />;
  }
  //   return children;
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
