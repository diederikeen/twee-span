import styled from "styled-components";
import padding from "../misc/padding";
import { breakpoint } from "..";

const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 0 ${padding.sm};
  margin: 0 auto;
  max-width: 1260px;

  @media screen and (min-width: ${breakpoint.md}) {
    padding: 0 ${padding.l};
  }
`;

export default Container;
