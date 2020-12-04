import React from "react";

import { Card, Typography } from "../atoms";
import { AuthenticationPageLayoutStyle } from "./styles";
import Button from "../atoms/Button";
import { FormField } from "../commonStyle";
import LinearLoader from "../atoms/LinearLoader";

const AuthenticationPageLayout = ({
  children,
  title = "Sign up...",
  btnText = "Sign up",
  alternateLink,
  bottomText,
  onSubmit,
  isLoading,
  description = "Everything great starts with a set up. Let's set this up with you"
}) => {
  return (
    <AuthenticationPageLayoutStyle>
      <div className="authPageHeading">
        <Typography variant="title" component="h1">
          {title}
        </Typography>
        <Typography variant="description" component="p">
          {description}
        </Typography>
      </div>
      <Card className="authFormCard">
        <LinearLoader isLoading={isLoading} />
        <FormField onSubmit={onSubmit}>
          {children}
          <div className="btn-group">
            <Button type="submit" isLoading={isLoading}>
              {btnText}
            </Button>
            {!!alternateLink && alternateLink}
          </div>
        </FormField>
      </Card>
      {!!bottomText && <p className="bottom-text">{bottomText}</p>}
    </AuthenticationPageLayoutStyle>
  );
};

export default AuthenticationPageLayout;
