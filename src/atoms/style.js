import styled from "styled-components";

import { colors, shadows, borders } from "../theme";

const CardStyle = styled.section`
  background: ${colors.white};
  box-shadow: ${shadows.primary};
  padding: 3rem;
  height: 100%;
  position: relative;

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  > div {
    width: 100%;
    position: relative;
    span {
      position: absolute;
      display: flex;
      width: 5rem;
      cursor: pointer;
      justify-content: center;
      top: 0;
      right: 0;
      bottom: 0;
      font-weight: bold;
    }
  }

  input {
    padding: 1.5rem 2rem;
    font-size: 1.5rem;
    width: 100%;
    background: ${colors.light_grey_1};
    border: ${borders.line};
    border-radius: 0.5rem;
    &[type="password"] {
      padding-right: 5rem;
    }

    &:focus {
      outline: none;
      border: 1px solid ${colors.green_primary};
    }

    &:placeholder {
      color: ${colors.light_grey_1};
    }

    &[data-has-error="true"] {
      border-color: ${colors.red_primary};
    }
  }
  label[data-required="true"]:before {
    content: "*";
    color: ${colors.red_primary};
    font-size: 1.4rem;
  }
`;

const ButtonStyle = styled.button`
  border-radius: 0.5rem;
  display: inline-block;
  border-color: transparent;
  transition: all 0.3s;
  cursor: pointer;

  &:focus {
    transform: scale(1.1);
    outline: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1.1);
  }

  &[data-variant="primary"] {
    color: ${colors.white};
    background: ${colors.green_primary};
    padding: 1rem 2rem;
    fontsize: 1.6rem;
    &:disabled {
      background: ${colors.green_tertiary};
      color: ${colors.light_grey_5};
    }
  }

  &[data-variant="secondary"] {
    color: ${colors.green_primary};
    background: transparent;
    padding: 1rem 0;
    fontsize: 1.4rem;
  }

  &[data-variant="tertiary"] {
    color: ${colors.green_primary};
    background: transparent;
    border: 1px solid ${colors.green_primary};
    padding: 1rem 2rem;
    fontsize: 1.4rem;
    &:disabled {
      border: 1px solid ${colors.green_tertiary};
      color: ${colors.light_grey_5};
    }
  }
`;

const ModalStyle = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999993393939939393939;
  .card {
    width: 50rem;
    max-height: 80vh;
    padding: 0;
  }
`;

const LinearLoaderStyle = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.3rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background-color: ${colors.green_primary};

  div {
    position: relative;
    width: 100%;
    height: 100%;
    &:before {
      content: "";
      position: absolute;
      height: 100%;
      background-color: #03a9f4;
      animation: indeterminate_first 1.5s infinite ease-out;
    }

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      background-color: #4fc3f7;
      animation: indeterminate_second 1.5s infinite ease-in;
    }
  }

  @keyframes indeterminate_first {
    0% {
      left: -100%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 10%;
    }
  }

  @keyframes indeterminate_second {
    0% {
      left: -150%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 10%;
    }
  }
`;

export { CardStyle, ModalStyle, InputField, ButtonStyle, LinearLoaderStyle };
