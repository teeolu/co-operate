import React from "react";

import { Typography, Card } from "../atoms";
import { HorizontalLine } from "../commonStyle";
import { formatCurrency } from "../utils/currency";
import { colors } from "../theme";

export default function OptionCard({
  amount,
  description,
  name,
  className,
  renderProps
}) {
  return (
    <Card className={className}>
      <div>
        <Typography
          component="h3"
          style={{ color: colors.green_secondary }}
          variant="semi-title"
        >
          {formatCurrency(amount)}
        </Typography>
        <Typography className="option-description" color={colors.black}>
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit eligendi eveniet sed saepe temporibus labore consectetur
          veniam.
        </Typography>
      </div>
      <HorizontalLine />
      <Typography>{name}</Typography>
      {!!renderProps &&
        renderProps({
          amount,
          description,
          name
        })}
    </Card>
  );
}
