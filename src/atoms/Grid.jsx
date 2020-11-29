import React from "react";

export default function Grid({ variant, children, spacing, style, ...rest }) {
  let gridStyle = {};

  switch (variant) {
    case "container":
      gridStyle = {
        ...gridStyle,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: spacing || "1rem"
      };
      break;
    case "item":
    default:
      gridStyle = { ...gridStyle, height: "100%" };
      break;
  }
  return React.createElement(
    "div",
    {
      style: Object.assign({}, { ...gridStyle, ...style }),
      ...rest
    },
    children
  );
}
