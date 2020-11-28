import React, { lazy, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./browserHistory";

export const PUBLIC_PATHS = {
  SIGNUP: "/signup"
};

const PUBLIC_ROUTES = [
  {
    component: lazy(() => import(`../views/signup`)),
    path: PUBLIC_PATHS.SIGNUP,
    exact: true
  }
];

export default function Routes() {
  return (
    <Suspense fallback={() => <>I am still loading, Please wait</>}>
      <Router history={history}>
        <Switch>
          {PUBLIC_ROUTES.map(route => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}
