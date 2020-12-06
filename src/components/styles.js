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
  position: relative;
  background: ${colors.white};
  @media screen and (max-width: ${breakPoints.smallScreens}) {
    z-index: 60;
    width: 100vw;
    background: ${colors.green_tertiary};
    &[data-isvisible="true"] {
      position: fixed;
    }
    &[data-isvisible="false"] {
      position: relative;
    }
  }

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
  }

  .moblie-nav {
    top: 0;
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
    input {
      background: ${colors.white};
    }
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
  top: 60px;
  height: 100vh;
  width: 70vw;
  z-index: 50;
  padding: 2rem;
  background: ${colors.white};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  left: -70vw;

  &[data-isvisible="true"] {
    animation-name: slide-in;
  }

  &[data-isvisible="false"] {
    animation-name: slide-out;
  }

  @keyframes slide-in {
    100% {
      left: 0;
    }
  }

  @keyframes slide-out {
    0% {
      left: 0;
    }
    100% {
      left: -70vw;
    }
  }
`;

const MobileNavLink = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1.6rem;
    color: ${colors.green_secondary};
    display: inline-block;
    margin: 0.5rem 0;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid ${colors.green_tertiary};
  }

  .sublink {
    a {
      color: ${colors.light_grey_5} !important;
      padding: 1rem 0 1rem 3rem;
      border-bottom: none;
      font-size: 1.2rem;
      margin: 0;
    }
  }
`;

export {
  HeaderNav,
  AuthenticationPageLayoutStyle,
  AddBVNDetailsStyle,
  MainLayoutStyle,
  MobileNavStyle,
  MobileNavLink
};
