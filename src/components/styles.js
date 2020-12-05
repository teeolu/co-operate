import styled from "styled-components";
import { colors, breakPoints } from "../theme";

const AuthenticationPageLayoutStyle = styled.div`
  width: 50rem;
  margin: 8rem auto;

  .authPageHeading {
    margin-bottom: 4rem;
  }

  .btn-group {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
  }

  .bottom-text {
    margin: 2rem auto;
    font-size: 1.2rem;
    text-align: center;
    color: ${colors.black};
  }

  @media screen and (max-width: ${breakPoints.smallScreens}) {
    width: 100%;
    margin: 8rem 0;
    .authPageHeading {
      margin-right: 2rem;
      margin-left: 2rem;
    }
    .bottom-text {
      margin: 2rem 4rem;
    }
    .authFormCard {
      padding: 2rem;
    }
  }
`;

const HeaderNav = styled.header`
  background: ${colors.white};
  position: relative;

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin: 2rem 0;
  }

  .menu-icon {
    margin-right: 2rem;
    font-size: 2.5rem;
    padding: 1rem;
    border-radius: 1rem;
    @media screen and (min-width: ${breakPoints.smallScreens}) {
      display: none;
    }
  }

  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.green_tertiary};
  }

  .user {
    display: flex;
    align-items: center;
    @media screen and (max-width: ${breakPoints.smallScreens}) {
      margin-left: 2rem;
    }
    h1 {
      margin-left: 2rem;
      font-size: 1.6rem;
      color: ${colors.green_primary};
      @media screen and (max-width: ${breakPoints.smallScreens}) {
        margin-left: 1rem;
        font-size: 2rem;
      }
    }
  }

  .links {
    a {
      color: ${colors.green_secondary};
      display: inline-block;
      padding: 2rem;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.3s;
      &:hover,
      &[data-isactive="true"] {
        background: ${colors.green_tertiary};
        color: ${colors.green_primary};
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
    @media screen and (max-width: ${breakPoints.smallScreens}) {
      display: none;
    }
  }
`;

const AddBVNDetailsStyle = styled.section`
  min-height: 5rem;
  position: relative;
  background: ${colors.green_tertiary};
  margin-bottom: 10rem;
  margin-top: 10rem;
  .grid {
    padding: 5rem 2rem;
    @media screen and (max-width: ${breakPoints.smallScreens}) {
      padding: 0;
    }
  }

  @media screen and (max-width: ${breakPoints.smallScreens}) {
    .bvn-details-grid {
      grid-template-columns: repeat(1, 1fr) !important;
      gap: 0 !important;
      padding: 4rem 2rem;
    }
  }

  .readmore-btn {
    margin-top: 2rem;
    color: ${colors.green_primary};
  }

  h4 {
    color: ${colors.green_secondary};
  }

  .bvn-form {
    height: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    background: ${colors.green_tertiary};
    @media screen and (max-width: ${breakPoints.smallScreens}) {
      padding: 2rem 0;
    }
  }
`;

const MainLayoutStyle = styled.div`
  display: flex;
  position: relative;
  .left-layout {
    width: 15%;
    list-style-type: none;
    height: 30rem;
    margin-top: 3rem;
    position: sticky;
    top: 5rem;
    @media screen and (max-width: ${breakPoints.smallScreens}) {
      display: none;
      visibility: hidden;
    }
  }
  .right-layout {
    padding: 2rem;
    flex: 1;
    @media screen and (max-width: ${breakPoints.smallScreens}) {
      padding: 0;
      width: 100%;
    }
  }
`;

const MobileNavStyle = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  background: red;
  animation-fill-mode: forwards !important;
  z-index: 100;

  &[data-isvisible="true"] {
    animation: navin 5s;
    display: block;
  }

  &[data-isvisible="false"] {
    animation: navout 5s;
  }

  .mobile-nav-content {
    display: block;
    float: left;
    height: 100%;
    .mobile-nav-links {
      width: 70%;
      height: 100%;
      background: ${colors.white};
    }
  }

  @keyframes navin {
    0% {
      height: 71px;
    }
    100% {
      height: 100vh;
    }
  }

  @keyframes navout {
    0% {
      height: 100vh;
    }
    95% {
      height: 71px;
    }
    100% {
      height: 0;
      display: none;
    }
  }
`;

export {
  HeaderNav,
  AuthenticationPageLayoutStyle,
  AddBVNDetailsStyle,
  MainLayoutStyle,
  MobileNavStyle
};
