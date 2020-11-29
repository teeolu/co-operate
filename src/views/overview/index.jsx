import React, { lazy } from "react";
import { Switch, Route, Link } from "react-router-dom";

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
      linkUrl: `${path}/home`
    },
    {
      name: "Loans",
      linkUrl: `${path}/loans`
    },
    {
      name: "History",
      linkUrl: `${path}/history`
    },
    {
      name: "Transactions",
      linkUrl: `${path}/transactions`
    },
    {
      name: "Guarantors",
      linkUrl: `${path}/guarantors`
    },
    {
      name: "Settings",
      linkUrl: `${path}/settings`
    }
  ];

  return (
    <div>
      <HeaderNavigation />
      <AddBVNDetails />
      <Container>
        <OverviewStyle>
          <NavigationTabs>
            {navs.map((nav, i) => (
              <li
                key={i}
                data-active={pathname
                  .split("/")
                  .includes(nav.name.toLowerCase())}
              >
                <Link to={nav.linkUrl}>
                  <Typography bold>{nav.name}</Typography>
                </Link>
              </li>
            ))}
          </NavigationTabs>
          <OverviewMain>
            <Switch>
              <Route
                path={`${path}/home`}
                exact={true}
                component={lazy(() => import("./home"))}
              />
              <Route
                path={`${path}/loans`}
                exact={true}
                component={lazy(() => import("./loans"))}
              />
              <Route
                path={`${path}/history`}
                exact={true}
                component={lazy(() => import("./history"))}
              />
              <Route
                path={`${path}/transactions`}
                exact={true}
                component={lazy(() => import("./transactions"))}
              />
              <Route
                path={`${path}/guarantors`}
                exact={true}
                component={lazy(() => import("./guarantors"))}
              />
              <Route
                path={`${path}/settings`}
                exact={true}
                component={lazy(() => import("./settings"))}
              />
            </Switch>
          </OverviewMain>
        </OverviewStyle>
      </Container>
    </div>
  );
}
