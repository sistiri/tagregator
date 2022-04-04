import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

type ProtectedRouteProps = {
  redirectPath?: string;
  children: any;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = '/login',
  children,
}) => {

    const { currentUser } = useAuth();

  if (!currentUser) {
      console.log(currentUser)
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
