import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

const renderRoutes = (routes) => (
  <Switch>
    {routes.map((route) =>
      route.childRoutes
        ? route.childRoutes.map((childRoute) => {
            return (
              React.createElement(childRoute.component),
              (
                <Route
                  path={childRoute.path}
                  component={childRoute.component}
                  exact={childRoute.exact}
                />
              )
            );
          })
        : (React.createElement(route.component),
          (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))
    )}
  </Switch>
);

export default renderRoutes;
