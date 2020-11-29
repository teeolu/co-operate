import React from "react";

import defaultUserImage from "../assets/no_image.png";
import { Container } from "../commonStyle";
import { HeaderNav } from "./styles";
import { Typography } from "../atoms";

export default function HeaderNavigation() {
  return (
    <HeaderNav>
      <Container className="user">
        <img src={defaultUserImage} alt="User" />
        <Typography component="h1">Olusola Oyinloye</Typography>
      </Container>
    </HeaderNav>
  );
}
