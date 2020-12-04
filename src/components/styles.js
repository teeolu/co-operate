import styled from "styled-components";
import { colors } from "../theme";

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

  @media screen and (max-width: 600px) {
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
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin: 2rem 0;
  }

  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 2rem;
      font-size: 1.6rem;
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
  }
`;

const AddBVNDetailsStyle = styled.section`
  min-height: 5rem;
  position: relative;
  background: ${colors.green_tertiary};
  margin-bottom: 5rem;
  .grid {
    padding: 2rem;
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
  }
`;

export { HeaderNav, AuthenticationPageLayoutStyle, AddBVNDetailsStyle };
