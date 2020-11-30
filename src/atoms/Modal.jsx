import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { ModalStyle } from "./style";
import Card from "./Card";
import { colors, borders } from "../theme";

const modalRoot = document.getElementById("modal");

export default function Modal({ children, title, footer, onClose }) {
  const element = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  }, []);

  function renderModal() {
    return (
      <ModalStyle>
        <Card className="card">
          {!!title && (
            <Card
              noShadow
              style={{
                background: colors.green_tertiary,
                height: "max-content"
              }}
            >
              {title}
            </Card>
          )}
          <Card style={{ height: "max-content" }} noShadow>
            {children}
          </Card>
          {!!footer && (
            <Card
              noShadow
              style={{
                height: "max-content",
                borderTop: borders.line
              }}
            >
              {footer}
            </Card>
          )}
        </Card>
      </ModalStyle>
    );
  }

  return createPortal(renderModal(), element);
}
