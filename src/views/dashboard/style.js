import styled from "styled-components";
import { colors } from "../../theme";

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .sidenav-user {
    display: flex;
    align-items: center;
    > div {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
    }
    img {
      height: 35px;
      width: 35px;
      border-radius: 50%;
    }
  }
`;

const NavigationTabs = styled.ul`
  list-style-type: none;
  a {
    color: inherit;
    text-decoration: none;
  }
  .dashboard-links {
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

  .logout {
    margin-top: auto;
  }
`;

export { SideNav, NavigationTabs };
