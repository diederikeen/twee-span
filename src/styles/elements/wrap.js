import styled from "styled-components";
import breakpoint from "../misc/breakpoints";

const Wrap = styled.div`
  margin-top: 2rem;

  @media screen and (min-width: ${breakpoint.md}) {
    margin-top: 3rem;
  }
`;

export default Wrap;
