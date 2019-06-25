import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, adminOnly, employee, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (employee) {
          if (employee.is_admin) {
            return <Component {...props} />;
          }
          if (!adminOnly) {
            return <Component {...props} />;
          }

          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
        }

        return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
      }}
    />
  );
};

export default PrivateRoute;
