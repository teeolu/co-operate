import React from "react";
import PropTypes from "prop-types";

import { colors } from "../theme";
import { ButtonStyle } from "./style";

export default function Button({
  type = "submit",
  variant = "primary",
  className,
  style = {},
  children,
  curved,
  hideArrow
}) {
  let btnStyle = {};

  switch (variant) {
    case "primary":
      btnStyle = {
        ...btnStyle,
        color: colors.white,
        background: colors.green_primary,
        padding: "1rem 2rem",
        fontSize: "1.6rem"
      };
      break;
    case "secondary":
      btnStyle = {
        ...btnStyle,
        color: colors.green_primary,
        background: "transparent",
        padding: "1rem 0",
        fontSize: "1.4rem"
      };
      break;
    case "tertiary":
      btnStyle = {
        ...btnStyle,
        color: colors.green_primary,
        background: "transparent",
        border: `1px solid ${colors.green_primary}`,
        padding: "1rem 2rem",
        fontSize: "1.4rem"
      };
      break;
    default:
  }

  if (curved) btnStyle.borderRadius = "10rem";

  return (
    <ButtonStyle
      type={type}
      className={className}
      style={{ ...btnStyle, ...style }}
    >
      {children} {!hideArrow && <span>&#8594;</span>}
    </ButtonStyle>
  );
}

Button.prototype = {
  component: PropTypes.element,
  variant: PropTypes.oneOf(["submit"]),
  children: PropTypes.element
};
