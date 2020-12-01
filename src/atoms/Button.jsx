import React from "react";
import PropTypes from "prop-types";

import { ButtonStyle } from "./style";

export default function Button({
  variant = "primary",
  className,
  style = {},
  children,
  curved,
  hideArrow,
  isLoading,
  ...rest
}) {
  let btnStyle = { ...style };

  if (curved) btnStyle.borderRadius = "10rem";

  return (
    <ButtonStyle
      data-variant={variant}
      className={className}
      style={btnStyle}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? "Loading..." : children}
      {!hideArrow && <span>&#8594;</span>}
    </ButtonStyle>
  );
}

Button.prototype = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  children: PropTypes.element
};
