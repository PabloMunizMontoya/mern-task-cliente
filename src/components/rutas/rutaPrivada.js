/* import React, { useContext } from "react";
import { Route, Navigate } from 'react-router-dom';
import AuthContext from "../../context/autenticacion/authContext";

const RutaPrivada = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { autenticado } = authContext;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        autenticado ? (
          <Component {...routeProps} />
        ) : (
          <Navigate to="/" replace />
        )
      }
    />
  );
};

export default RutaPrivada; */