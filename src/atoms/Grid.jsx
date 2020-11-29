import React from "react";

export default function Grid({
  repeat = 2,
  variant,
  children,
  spacing,
  style,
  ...rest
}) {
  let gridStyle = {};

  switch (variant) {
    case "container":
      gridStyle = {
        ...gridStyle,
        display: "grid",
        gridTemplateColumns: `repeat(${repeat}, 1fr)`,
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
