import React from "react";
import { CardStyle } from "./style";

export default function Card({ children, ...rest }) {
  return <CardStyle {...rest}>{children}</CardStyle>;
}
