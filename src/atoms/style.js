import styled from "styled-components";
import { colors, shadows, borders } from "../theme";

const CardStyle = styled.section`
  background: ${colors.white};
  box-shadow: ${shadows.primary};
  padding: 3rem;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  input {
    padding: 1.5rem 2rem;
    font-size: 1.5rem;
    background: ${colors.light_grey_1};
    border: ${borders.line};
    border-radius: 0.5rem;

    &:focus {
      outline: none;
      border: 1px solid ${colors.blue_primary};
    }

    &:placeholder {
      color: ${colors.light_grey_1};
    }

    // &[data-state="unfocused"] {
    //   outline: 1px solid green;
    // }
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
`;

export { CardStyle, InputField, ButtonStyle };
