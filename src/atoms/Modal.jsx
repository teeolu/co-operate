import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { ModalStyle } from "./style";
import Card from "./Card";
import { colors, borders } from "../theme";
import Button from "./Button";
import Typography from "./Typography";
import LinearLoader from "./LinearLoader";

const modalRoot = document.getElementById("modal");

export default function Modal({
  children,
  title,
  yesText,
  noText,
  yesAction,
  noAction,
  isLoading = false,
  onClose
}) {
  const element = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.addEventListener("click", modalClickEvent);
    return () => {
      document.removeEventListener("click", modalClickEvent);
    };
    // eslint-disable-next-line
  }, []);

  function modalClickEvent(event) {
    if (event.target.closest("#modal-card")) return;
    onClose();
  }

  function renderModal() {
    return (
      <ModalStyle id="modal-overlay">
        <Card
          className="card"
          id="modal-card"
          style={{ height: "max-content" }}
        >
          {!!title && (
            <Card
              noShadow
              style={{
                background: colors.green_tertiary,
                height: "max-content",
                padding: "2rem 3rem"
              }}
            >
              <Typography
                style={{ marginBottom: 0 }}
                component="h3"
                variant="sub-title"
              >
                {title}
              </Typography>
            </Card>
          )}
          <Card style={{ height: "max-content" }} noShadow>
            {children}
          </Card>
          <LinearLoader isLoading={isLoading} />
          {(!!noText || !!yesText) && (
            <Card
              noShadow
              style={{
                height: "max-content",
                borderTop: borders.line,
                padding: "2rem 3rem"
              }}
            >
              <Button
                variant="primary"
                style={{ marginRight: "1rem" }}
                onClick={yesAction}
                curved
                hideArrow
                isLoading={isLoading}
              >
                {yesText}
              </Button>
              <Button variant="tertiary" curved hideArrow onClick={noAction}>
                {noText}
              </Button>
            </Card>
          )}
        </Card>
      </ModalStyle>
    );
  }

  return createPortal(renderModal(), element);
}
