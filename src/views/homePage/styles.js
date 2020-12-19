import styled from "styled-components";
import { colors } from "../../theme";

const HomePageHeaderStyle = styled.header`
  .homepage-nav {
    padding: 3rem 0;
    .logo {
      height: 4rem;
      width: 4rem;
      border: 2px solid black;
    }
  }
  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
  }
  h1 {
    font-size: 6.6rem !important;
    line-height: 1.1;
    max-width: 80rem;
  }
`;

const HomePageMainStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .text {
    max-width: 60rem;
    margin: 10rem 0;
  }
  .card {
    max-width: 60rem;
    box-shadow: 0px 2px 4px #c9d4db;
    img {
      width: 100%;
    }
    caption {
      width: 100%;
      display: inline-block;
      text-align: start;
      padding: 2rem;
    }
  }
`;

const HomePageCommunityStyle = styled.div`
  min-height: 100vh;
  background: ${colors.green_tertiary};
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 7vw);
  grid-gap: 1rem;
  padding: 4rem 0;
  .c-item {
    &-1 {
      grid-row: 2 / span 2;
      grid-column: 1 / span 2;
    }
    &-2 {
      grid-row: 1 / span 2;
      grid-column: 3 / span 2;
    }
    &-3 {
      grid-row: 1 / span 4;
      grid-column: 5 / span 2;
    }
    &-4 {
      grid-row: 5 / span 2;
      grid-column: 4 / span 3;
    }
    &-6 {
      grid-row: 4 / span 4;
      grid-column: 2 / span 2;
      z-index: 3;
    }
    &-7 {
      grid-row: 4 / span 2;
      grid-column: 7 / span 2;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
const HomePageFooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 100%;
  padding: 4rem 0;
  .logo {
    height: 4rem;
    width: 4rem;
    border: 2px solid black;
  }
`;

const HomePageStyle = styled.div`
  min-height: 100vh;
  background: ${colors.white};
`;

export {
  HomePageHeaderStyle,
  HomePageStyle,
  HomePageMainStyle,
  HomePageFooterStyle,
  HomePageCommunityStyle
};
