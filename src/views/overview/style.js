import styled from "styled-components";
import { colors } from "../../theme";

export const OverviewStyle = styled.div`
  display: flex;
  position: relative;
`;

export const NavigationTabs = styled.ul`
  width: 18%;
  list-style-type: none;
  height: 30rem;
  position: sticky;
  top: 5rem;
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
      color: ${colors.green_primary};
    }
    &[data-active="true"] {
      background: ${colors.white};
      color: ${colors.green_primary};
    }
  }
`;

export const OverviewMain = styled.main`
  padding: 4rem;
  flex: 1;
`;
