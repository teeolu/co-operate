import React from "react";
import PropTypes from "prop-types";

import { colors } from "../theme";
import { ButtonStyle } from "./style";

export default function Button({
  variant = "submit",
  className,
  style = {},
  children
}) {
  let typographyStyle = {};

  switch (variant) {
    case "title":
      typographyStyle = {
        ...typographyStyle,
        fontSize: "4rem",
        color: colors.blue_primary
      };
      break;
    default:
    case "regular":
      typographyStyle = { ...typographyStyle };
      break;
  }

  return (
    <ButtonStyle type={variant}>
      {children} <span>&#8594;</span>
    </ButtonStyle>
  );
}

Button.prototype = {
  component: PropTypes.element,
  variant: PropTypes.oneOf(["submit"]),
  children: PropTypes.element
};
