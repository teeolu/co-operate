import React, { lazy, Suspense } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import { NavigationTabs } from "./style";
import { Container } from "../../commonStyle";
import { Typography, SuspenseFallback } from "../../atoms";
import MainLayout from "../../components/MainLayout";

export default function Overview(props) {
  let {
    match: { path },
    location: { pathname }
  } = props;

  const dashboardNavs = [
    {
      name: "Home",
      component: lazy(() => import("./home")),
      linkUrl: `/home`
    },
    {
      name: "History",
      component: lazy(() => import("./history")),
      linkUrl: `/history`
    },
    {
      name: "Transactions",
      component: lazy(() => import("./transactions")),
      linkUrl: `/transactions`
    }
  ];

  return (
    <div>
      <Container>
        <MainLayout
          renderLeftContent={() => (
            <NavigationTabs>
              {dashboardNavs.map((nav, i) => (
                <Link to={`${path}${nav.linkUrl}`} key={i}>
                  <li
                    data-active={pathname
                      .split("/")
                      .includes(nav.name.toLowerCase())}
                  >
                    <Typography variant="label">{nav.name}</Typography>
                  </li>
                </Link>
              ))}
            </NavigationTabs>
          )}
          renderRightContent={() => (
            <Suspense fallback={<SuspenseFallback />}>
              <Switch>
                {dashboardNavs.map(route => (
                  <Route
                    key={route.name}
                    path={`${path}${route.linkUrl}`}
                    exact={true}
                    component={route.component}
                  />
                ))}
                <Redirect to={`${path}/home`} />
              </Switch>
            </Suspense>
          )}
        />
      </Container>
    </div>
  );
}
