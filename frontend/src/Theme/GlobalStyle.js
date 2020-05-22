import { createGlobalStyle, css } from "styled-components";

const buttonReset = css`
  button {
    display: inline-block;
    border: none;
    margin: 0;
    text-decoration: none;
    background: none;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  button:focus {
    outline: 1px solid rgba(0, 0, 0, 0);
    outline-offset: -4px;
  }
  button:active {
    transform: scale(0.99);
  }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        max-width: 100%;
        overflow-x: hidden;
        margin: 0;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 1.2;
        ${buttonReset}
    }

    html{  
        max-width: 100%;
        overflow-x: hidden;
    }
    a{
        text-decoration:none;
    }
`;
