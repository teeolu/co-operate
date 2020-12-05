import React from "react";

import { MainLayoutStyle } from "./styles";

export default function MainLayout({ renderLeftContent, renderRightContent }) {
  return (
    <MainLayoutStyle>
      <div className="left-layout">{renderLeftContent()}</div>
      <div className="right-layout">{renderRightContent()}</div>
    </MainLayoutStyle>
  );
}
