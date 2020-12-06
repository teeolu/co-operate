import React from "react";

import { SuspenseFallbackStyle } from "./style";
import LinearLoader from "./LinearLoader";
import Typography from "./Typography";
import { colors } from "../theme";

export default function SuspenseFallback() {
  return (
    <SuspenseFallbackStyle>
      <Typography style={{ color: colors.green_secondary }} variant="sub-title">
        Loading...
      </Typography>
      <div className="linear-loader">
        <LinearLoader isLoading={true} />
      </div>
    </SuspenseFallbackStyle>
  );
}
