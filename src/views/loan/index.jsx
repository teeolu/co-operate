import React, { lazy } from "react";
import { Route } from "react-router-dom";

import { Container } from "../../commonStyle";

export default function Loan(props) {
  return (
    <div>
      <Route
        path="/"
        component={lazy(() => import(`../../components/Header`))}
      />
      <Container></Container>
    </div>
  );
}
