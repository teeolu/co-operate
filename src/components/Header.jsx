import React, { useRef, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import defaultUserImage from "../assets/no_image.png";
import { Container } from "../commonStyle";
import { HeaderNav, MobileNavStyle } from "./styles";
import { Typography, Button } from "../atoms";
import { PRIVATE_PATHS } from "../routes";

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

function HeaderNavigation(props) {
  let {
    match: { path }
  } = props;
  const navRef = useRef(null);
  const [isMobileNavVisible, setisMobileNavVisible] = useState(null);

  function toggleMobileNavBarVisibilty(event) {
    event.preventDefault();
    setisMobileNavVisible(state => !state);
  }

  function renderNavBar(name) {
    return (
      <HeaderNav ref={navRef}>
        <Container className="nav-bar">
          <div className="user">
            <img src={defaultUserImage} alt="User" />
            <Typography component="h1">{name || "30BGroup"}</Typography>
          </div>
          <Button
            onClick={toggleMobileNavBarVisibilty}
            variant="secondary"
            className="menu-icon"
            hideArrow
          >
            {isMobileNavVisible ? <CloseOutlined /> : <MenuOutlined />}
          </Button>
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
  return (
    <div>
      {renderNavBar()}
      <MobileNavStyle data-isvisible={isMobileNavVisible}>
        {renderNavBar()}
        <div className="mobile-nav-content">
          <div className="mobile-nav-links">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quasi hic modi! Ducimus distinctio quae fugit consequuntur
            dignissimos harum eum quam sapiente voluptas itaque, asperiores non.
            Eveniet esse facere at.
          </div>
        </div>
      </MobileNavStyle>
    </div>
  );
}

export default withRouter(HeaderNavigation);
