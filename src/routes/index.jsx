import React, { lazy, Suspense } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import history from "./browserHistory";
import { SuspenseFallback } from "../atoms";

export const PUBLIC_PATHS = {
  HOME_PAGE: "/",
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
    component: lazy(() => import(`../views/homePage`)),
    path: PUBLIC_PATHS.HOME_PAGE
  },
  {
    component: lazy(() => import(`../views/signup`)),
    path: PUBLIC_PATHS.SIGNUP
  },
  {
    component: lazy(() => import(`../views/signin`)),
    path: PUBLIC_PATHS.SIGNIN
  },
  {
    component: lazy(() => import(`../views/forgotPassword`)),
    path: PUBLIC_PATHS.FORGOT_PASSWORD
  }
];

const PRIVATE_ROUTES = [
  {
    component: lazy(() => import(`../views/dashboard`)),
    path: PRIVATE_PATHS.DASHBOARD
  },
  {
    component: lazy(() => import(`../views/loan`)),
    path: PRIVATE_PATHS.LOAN
  },
  {
    component: lazy(() => import(`../views/marketPlace`)),
    path: PRIVATE_PATHS.MARKET_PLACE
  }
];

export default function Routes() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Router history={history}>
        <Switch>
          {PUBLIC_ROUTES.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={true}
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
