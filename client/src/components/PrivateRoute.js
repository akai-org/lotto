import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [location, setLocation] = useState({});

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(
    location => {
      setLocation(location);
    },
    err => {
      setLocation({ error: `ERROR(${err.code}): ${err.message}` });
    },
    options
  );

  if (location.error) {
    return <Redirect to="/" />;
  }

  if (!location.coords) {
    return <Route {...rest} render={props => <Loading {...props} />} />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PrivateRoute;
