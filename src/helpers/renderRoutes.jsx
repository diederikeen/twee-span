import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

const RenderRoutes = ({ routes }) => (
  <Switch>
    {routes.map((route, index) =>
      route.childRoutes ? (
        React.createElement(
          route.component,
          { key: index },
          <RenderRoutes routes={route.childRoutes} />
        )
      ) : (
        <Route key={index} {...route} />
      )
    )}
  </Switch>
);

export default RenderRoutes;
