import React from "react";
import { CardStyle } from "./style";

export default function Card({
  children,
  style,
  align,
  noShadow,
  className,
  ...rest
}) {
  const cardStyle = { ...style };

  if (!!noShadow) cardStyle.boxShadow = "none";
  return (
    <CardStyle
      style={cardStyle}
      className={`${align === "center" && "center"} ${className}`}
      {...rest}
    >
      {children}
    </CardStyle>
  );
}
