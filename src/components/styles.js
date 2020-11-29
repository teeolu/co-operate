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
`;

const HeaderNav = styled.header`
  background: ${colors.white};
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin: 2rem 0;
  }

  .user {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 2rem;
      font-size: 1.6rem;
    }
  }
`;

const AddBVNDetailsStyle = styled.section`
  min-height: 5rem;
  background: ${colors.green_tertiary};
  padding: 5rem 0;
  .grid {
    padding: 5rem;
  }

  .readmore-btn {
    margin-top: 2rem;
    color: ${colors.green_primary};
  }

  .bvn-form {
    height: 100%;
    padding: 5rem;
    display: flex;
    align-items: center;
  }
`;

export { HeaderNav, AuthenticationPageLayoutStyle, AddBVNDetailsStyle };
