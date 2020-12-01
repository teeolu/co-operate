import React from "react";

import { LinearLoaderStyle } from "./style";

export default function LinearLoader({ isLoading }) {
  if (!isLoading) return null;
  return (
    <LinearLoaderStyle>
      <div class="indeterminate"></div>
    </LinearLoaderStyle>
  );
}
