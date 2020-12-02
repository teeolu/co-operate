import React from "react";
import { Link, withRouter } from "react-router-dom";

import defaultUserImage from "../assets/no_image.png";
import { Container } from "../commonStyle";
import { HeaderNav } from "./styles";
import { Typography } from "../atoms";
import { PRIVATE_PATHS } from "../routes";

function HeaderNavigation(props) {
  let {
    match: { path }
  } = props;

  const links = [
    {
      url: PRIVATE_PATHS.LOAN,
      title: "Request loan",
      id: "loan"
    },
    {
      url: PRIVATE_PATHS.MARKET_PLACE,
      title: "Market place",
      id: "market"
    },
    {
      url: PRIVATE_PATHS.DASHBOARD,
      title: "dashboard",
      id: "dashboard"
    }
  ];

  return (
    <HeaderNav>
      <Container className="nav-bar">
        <div className="user">
          <img src={defaultUserImage} alt="User" />
          <Typography component="h1">Olusola Oyinloye</Typography>
        </div>
        <div className="links">
          {links.map(link => (
            <Link
              data-isactive={path.split("/").includes(link.id)}
              key={link.id}
              to={link.url}
            >
              <Typography variant="label">{link.title}</Typography>
            </Link>
          ))}
        </div>
      </Container>
    </HeaderNav>
  );
}

export default withRouter(HeaderNavigation);
