import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import { breakpoint } from "styles";

export const Row = styled.div`
  display: flex;

  @media screen and (min-width: ${breakpoint.md}) {
    flex-direction: row;
    margin-left: -1em;
    margin-right: -1em;
  }

  @media screen and (min-width: ${breakpoint.l}) {
    margin-left: -2em;
    margin-right: -2em;
  }
`;

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
  background-size: ${(props) => (props.logoThumnail ? "60%" : "cover")};
  background-position: center;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-color: #f9f9f9;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
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
    color: #5b64d0;
  }
`;
