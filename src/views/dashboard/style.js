import styled from "styled-components";
import { colors } from "../../theme";

export const NavigationTabs = styled.ul`
  list-style-type: none;
  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    margin: 1rem 0;
    padding: 1rem 2rem;
    transition: all 0.3s;
    border-radius: 0.5rem;
    color: #777;
    span {
      font-weight: 700;
      font-size: 1.6rem;
    }
    &:hover {
      background: ${colors.white};
      color: ${colors.green_secondary};
    }
    &[data-active="true"] {
      background: ${colors.white};
      color: ${colors.green_primary};
      border: 3px solid ${colors.green_tertiary};
    }
  }
`;
