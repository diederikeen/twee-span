import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import { breakpoint } from "styles";

export const Column = styled.div`
  margin: 1em 0;

  @media screen and (min-width: ${breakpoint.md}) {
    width: 50%;
    margin: 1em 1em;
  }

  @media screen and (min-width: ${breakpoint.l}) {
    width: 25%;
    margin: 2em;
  }
`;

export const Image = styled.div`
  padding: 0 0 75%;
  background-size: cover;
  background-position: center;
  border-radius: 3px;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  margin: 1rem 0 0;

  span {
    color: #a5a5a5;
    font-size: 0.8rem;
  }
`;

export const Link = styled(RouterLink)`
  display: block;
  text-decoration: none;
  color: black;

  &:hover {
    color: blue;
  }
`;
