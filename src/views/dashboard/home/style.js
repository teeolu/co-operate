import styled from "styled-components";
import { colors, breakPoints } from "../../../theme";

const HomeStyle = styled.div`
  margin-bottom: 4rem;
  .expand {
    transition: all 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }

  h1 {
    margin: 4rem 0 !important;
  }

  .plans-options-grid {
    @media screen and (max-width: ${breakPoints.smallScreens}) {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }

  .select-plans {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .plans {
    cursor: default;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: ${breakPoints.smallScreens}) {
      padding: 4rem;
    }

    .option-description {
      @media screen and (max-width: ${breakPoints.smallScreens}) {
        font-size: 1.6rem !important;
      }
    }

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
      transition: all 0.3s;
      transform: translateY(20rem);
      bottom: 0;
      left: 0;
      right: 0;
      height: 30%;
      background: ${colors.cream_primary};
      @media screen and (max-width: ${breakPoints.smallScreens}) {
        padding: 3rem 3.8rem;
      }
    }
  }
`;

const IntroductionStyle = styled.section`
  min-height: 5rem;
  position: relative;
  margin-bottom: 5rem;
  margin-top: 3rem;
  .grid-1 {
    padding: 2rem;
    .what-we-do:not(:first-child) {
      margin-top: 3rem;
    }
    @media screen and (max-width: ${breakPoints.smallScreens}) {
      padding: 0;
      .what-we-do {
        margin-top: 3rem;
      }
    }
  }

  .grid-2 {
    padding: 2rem;
    background: ${colors.light_grey_1};
    @media screen and (max-width: ${breakPoints.smallScreens}) {
      order: -1;
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

  h3 {
    margin-left: 2rem;

    @media screen and (max-width: ${breakPoints.smallScreens}) {
      margin-bottom: 0 !important;
    }
  }

  h4 {
    color: ${colors.green_secondary};
  }

  .illustration {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    img {
      height: 17rem;
    }
    @media screen and (max-width: ${breakPoints.smallScreens}) {
      padding: 5rem 0;
    }
  }
`;

export { HomeStyle, IntroductionStyle };
