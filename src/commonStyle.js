import styled from "styled-components";
import { breakPoints } from "./theme";

const Container = styled.div`
  max-width: 114rem;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 3rem;
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
