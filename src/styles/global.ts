import { css } from "@emotion/react";
import theme from "./theme";

export const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family: ${theme.font.mainfont};
    outline: none;
    text-decoration: none;
    border: 0;
    outline: unset;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  body {
    width: 100%;
    height: 100%;
  }
`;
