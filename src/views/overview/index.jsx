import React, { lazy } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import HeaderNavigation from "../../components/Header";
import AddBVNDetails from "../../components/AddBVNDetails";
import { OverviewStyle, NavigationTabs, OverviewMain } from "./style";
import { Container } from "../../commonStyle";
import { Typography } from "../../atoms";

export default function Overview(props) {
  let {
    match: { path },
    location: { pathname }
  } = props;

  const navs = [
    {
      name: "Home",
      component: lazy(() => import("./home")),
      linkUrl: `${path}/home`
    },
    // {
    //   name: "Loans",
    //   component: lazy(() => import("./loans")),
    //   linkUrl: `${path}/loans`
    // },
    {
      name: "History",
      component: lazy(() => import("./history")),
      linkUrl: `${path}/history`
    },
    {
      name: "Transactions",
      component: lazy(() => import("./transactions")),
      linkUrl: `${path}/transactions`
    }
    // {
    //   name: "Guarantors",
    //   component: lazy(() => import("./guarantors")),
    //   linkUrl: `${path}/guarantors`
    // },
    // {
    //   name: "Settings",
    //   component: lazy(() => import("./settings")),
    //   linkUrl: `${path}/settings`
    // }
  ];

  return (
    <div>
      <HeaderNavigation />
      <AddBVNDetails />
      <Container>
        <OverviewStyle>
          <NavigationTabs>
            {navs.map((nav, i) => (
              <Link to={nav.linkUrl} key={i}>
                <li
                  data-active={pathname
                    .split("/")
                    .includes(nav.name.toLowerCase())}
                >
                  <Typography bold>{nav.name}</Typography>
                </li>
              </Link>
            ))}
          </NavigationTabs>
          <OverviewMain>
            <Switch>
              {navs.map(route => (
                <Route
                  key={route.name}
                  path={route.linkUrl}
                  exact={true}
                  component={route.component}
                />
              ))}
              <Redirect to={`${path}/home`} />
            </Switch>
          </OverviewMain>
        </OverviewStyle>
      </Container>
    </div>
  );
}
