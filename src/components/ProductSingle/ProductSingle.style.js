import styled from "styled-components";
import { breakpoint } from "styles";

export const Details = styled.div`
  @media screen and (min-width: ${breakpoint.l}) {
    padding-left: 4rem;
  }
`;

export const Price = styled.h3`
  font-size: 1.3rem;
  opacity: 0.7;
`;

export const Description = styled.div`
  margin: 2rem 0;
`;
