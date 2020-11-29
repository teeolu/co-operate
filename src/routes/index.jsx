import React, { lazy, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./browserHistory";

export const PUBLIC_PATHS = {
  SIGNUP: "/signup",
  SIGNIN: "/signin",
  FORGOT_PASSWORD: "/forgot-password",
  OVERVIEW: "/dashboard"
};

const PUBLIC_ROUTES = [
  {
    component: lazy(() => import(`../views/signup`)),
    path: PUBLIC_PATHS.SIGNUP,
    exact: true
  },
  {
    component: lazy(() => import(`../views/signin`)),
    path: PUBLIC_PATHS.SIGNIN,
    exact: true
  },
  {
    component: lazy(() => import(`../views/forgotPassword`)),
    path: PUBLIC_PATHS.FORGOT_PASSWORD,
    exact: true
  },
  {
    component: lazy(() => import(`../views/overview`)),
    path: PUBLIC_PATHS.OVERVIEW,
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
