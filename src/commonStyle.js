import styled from "styled-components";
import { breakPoints } from "./theme";

const Container = styled.div`
  width: 114rem;
  margin: 0 auto;
  @media screen and (max-width: ${breakPoints.smallScreens}) {
    width: 100%;
    margin: 0;
  }
`;

const FormField = styled.form`
  width: 100%;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  margin: 2rem 0;
  @media screen and (max-width: ${breakPoints.smallScreens}) {
    margin: 3rem 0;
  }
`;

export { Container, FormField, HorizontalLine };
