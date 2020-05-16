import { createGlobalStyle } from "styled-components";
import { rgba, darken, lighten } from "polished";
import { padding } from "styles";

import cheveronDown from "./images/icons/cheveron_down.svg";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    font-family: 'Nunito Sans', sans-serif;
  }


  h1,h2,h3,h4,h5 {
    margin: 0;
    font-weight: 800;
  }

  /*Flex classes*/

  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-end {
    justify-content: flex-end;
  }

  .items-center {
    align-items: center;
  }

  .self-start {
    margin-right: auto;
  }

  .self-end {
    margin-left: auto;
  }

  .align-end {
    margin-top: auto;
  } 

  .align-top {
    margin-bottom: auto;
  } 

  input, select {
    -webkit-appearance: none;
    border-radius: 2px;
    background: white;
    border: 1px solid ${rgba("#000", 0.1)};
    height: 45px;
    padding: 0 ${padding.m};
    font-size: 16px;
    transition: 125ms ease;
    transition-property: box-shadow, border;
    width: 100%;
    box-shadow: 0px 4px 6px ${rgba("#000000", 0.05)};
    
    &:focus {
      box-shadow: 0px 4px 8px ${rgba("#000000", 0.05)};
      border-color: ${rgba("#000", 0.5)};
    }
  }

  select {
    padding-right: ${padding.xxl};
    background-image: url(${cheveronDown});
    background-position: right ${padding.m} center;
    background-repeat: no-repeat;
  }

  

  button {
    border: none;
    border-radius: 3px;
    font-weight: 600;
    font-size: 16px;
    transition: 125ms ease;
    transition-property: background, color, opacity;
    background: none;
    padding: ${padding.m} ${padding.l};
    font-size: 14px;

    &[disabled] {
      background-color: lightgrey;
    }

    &.primary {
      background-color: #5b64d0;
      color: white;
      transition: all 125ms ease;

      &:hover {
        background-color: ${darken("0.1", "#5b64d0")}
        cursor: pointer;
        box-shadow: 0px 2px 6px ${rgba("#000000", 0.2)}
      }

      &[disabled] {
        background-color: ${lighten("0.2", "#5b64d0")}
      }
    }

    &.secondary {
      &:hover {
        background-color: ${darken("0.05", "#ffffff")};
        box-shadow: 0px 2px 6px ${rgba("#000000", 0.2)}
      }
    }
  }

  .logo {
    margin-right: auto;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyles;
