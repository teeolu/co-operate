import styled from "styled-components";
import { colors } from "../../../theme";

const HomeStyle = styled.div`
  .expand {
    transition: all 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }

  .plans {
    cursor: default;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
    &:hover {
      box-shadow: none;
      background: ${colors.green_primary};
      h3,
      span {
        color: ${colors.white} !important;
      }
      .select-plan-box {
        transform: translateY(0);
      }
    }
    .select-plan-box {
      position: absolute !important;
      transition: all 0.2s;
      transform: translateY(20rem);
      bottom: 0;
      left: 0;
      right: 0;
      height: 30%;
      background: ${colors.cream_primary};
    }
  }
`;

export { HomeStyle };
