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

export { AuthenticationPageLayoutStyle };
