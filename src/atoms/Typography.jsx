import React from "react";
import PropTypes from "prop-types";

import { colors } from "../theme";

export default function Typography({
  component = "span",
  variant = "regular",
  className,
  style = {},
  children,
  ...rest
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
    case "description":
      typographyStyle = {
        ...typographyStyle,
        fontSize: "1.6rem",
        color: colors.black
      };
      break;
    case "label":
      typographyStyle = {
        ...typographyStyle,
        fontWeight: "bold",
        fontSize: "1.2rem",
        marginBottom: "1rem"
      };
    default:
    case "regular":
      typographyStyle = { ...typographyStyle };
      break;
  }

  return React.createElement(
    component,
    {
      className,
      style: Object.assign({}, { ...typographyStyle, ...style }),
      ...rest
    },
    children
  );
}

Typography.prototype = {
  component: PropTypes.element,
  variant: PropTypes.oneOf(["title", "regular", "description", "label"]),
  children: PropTypes.element
};
