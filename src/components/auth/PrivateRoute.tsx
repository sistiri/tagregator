import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

interface PrivateRouteProps extends RouteProps {
  component?: any;
  children?:  any;
}
const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { component: Component, children, ...rest } = props;
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      {...(props: RouteProps) => {
        return currentUser ? (
          Component ? (
            <Component {...props} />
          ) : (
            children
          )
        ) : (
          <Navigate replace to="/login" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
