import styled from "styled-components";
import { breakpoint } from "styles";

export const PrimaryImage = styled.div`
  width: 300px;
  height: 340px;
  background-size: ${(props) => (!props.logoThumbnail ? "contain" : "60%")};
  background-position: ${(props) =>
    !props.logoThumbnail ? "top center" : "center"};
  border-radius: 3px;
  background-repeat: no-repeat;
  background-color: ${(props) => (!props.logoThumbnail ? "white" : "#f9f9f9")};

  @media screen and (min-width: ${breakpoint.md}) {
    width: 420px;
    height: 440px;
  }
`;

export const ThumbImage = styled.div`
  width: 96px;
  height: 96px;
  border: 2px solid white;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: ${breakpoint.md}) {
    width: 140px;
    height: 140px;
  }
`;
