import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import defaultUserImage from "../assets/no_image.png";
import { Container } from "../commonStyle";
import { HeaderNav, MobileNavStyle, MobileNavLink } from "./styles";
import { Typography, Button } from "../atoms";
import { PRIVATE_PATHS } from "../routes";

const links = [
  {
    url: PRIVATE_PATHS.DASHBOARD,
    title: "dashboard",
    id: "dashboard",
    subLinks: [
      {
        title: "History",
        url: `/history`,
        id: "history"
      },
      {
        title: "Transactions",
        url: `/transactions`,
        id: "transactions"
      }
    ]
  },
  {
    url: PRIVATE_PATHS.LOAN,
    title: "Request loan",
    id: "loan"
  },
  {
    url: PRIVATE_PATHS.MARKET_PLACE,
    title: "Market place",
    id: "market"
  }
];

function HeaderNavigation(props) {
  let {
    location: { pathname }
  } = props;
  const navRef = useRef(null);
  const [isMobileNavVisible, setisMobileNavVisible] = useState(null);

  useEffect(() => {
    document.addEventListener("click", drawerClickEventHandler);
    return () => {
      document.removeEventListener("click", drawerClickEventHandler);
    };
    // eslint-disable-next-line
  }, []);

  function drawerClickEventHandler(event) {
    if (isMobileNavVisible) {
      setisMobileNavVisible(false);
    }
  }

  function toggleMobileNavBarVisibilty(event) {
    event.preventDefault();
    setisMobileNavVisible(state => !state);
  }

  function renderNavBar(name) {
    return (
      <HeaderNav ref={navRef} data-isvisible={isMobileNavVisible}>
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
                data-isactive={pathname.split("/").includes(link.id)}
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

  function renderMobileNav() {
    return (
      <MobileNavStyle data-isvisible={isMobileNavVisible}>
        <MobileNavLink id="modal-card">
          {links.map(link => (
            <React.Fragment key={link.id}>
              <Link
                data-isactive={pathname.split("/").includes(link.id)}
                key={link.id}
                to={link.url}
              >
                <Typography variant="label">{link.title}</Typography>
              </Link>
              {Array.isArray(link.subLinks) && (
                <MobileNavLink className="sublink">
                  {link.subLinks.map(subLink => (
                    <Link
                      data-isactive={pathname.split("/").includes(subLink.id)}
                      key={subLink.id}
                      to={link.url + subLink.url}
                    >
                      <Typography variant="label">{subLink.title}</Typography>
                    </Link>
                  ))}
                </MobileNavLink>
              )}
            </React.Fragment>
          ))}
        </MobileNavLink>
      </MobileNavStyle>
    );
  }

  return (
    <div>
      {renderNavBar()}
      {renderMobileNav()}
    </div>
  );
}

export default HeaderNavigation;
