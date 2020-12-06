import React, { lazy, Suspense } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import history from "./browserHistory";

export const PUBLIC_PATHS = {
  SIGNUP: "/signup",
  SIGNIN: "/signin",
  FORGOT_PASSWORD: "/forgot-password"
};

export const PRIVATE_PATHS = {
  LOAN: "/loan",
  MARKET_PLACE: "/market",
  DASHBOARD: "/dashboard"
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
  }
];

const PRIVATE_ROUTES = [
  {
    component: lazy(() => import(`../views/dashboard`)),
    path: PRIVATE_PATHS.DASHBOARD,
    exact: true
  },
  {
    component: lazy(() => import(`../views/loan`)),
    path: PRIVATE_PATHS.LOAN,
    exact: true
  },
  {
    component: lazy(() => import(`../views/marketPlace`)),
    path: PRIVATE_PATHS.MARKET_PLACE,
    exact: true
  }
];

export default function Routes() {
  return (
    <Suspense fallback={<>I am still loading, Please wait</>}>
      <Router history={history}>
        <Route
          path="/"
          component={lazy(() => import(`../components/Header`))}
        />
        <Switch>
          {PUBLIC_ROUTES.map(route => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
          {PRIVATE_ROUTES.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={false}
              component={route.component}
            />
          ))}
          <Redirect to={PRIVATE_PATHS.DASHBOARD} />
        </Switch>
      </Router>
    </Suspense>
  );
}
