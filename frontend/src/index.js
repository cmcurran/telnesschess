import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import { TelnessChessTheme } from "./Theme/Theme";
import { GlobalStyle } from "./Theme/GlobalStyle";
import GameContextProvider from "./Context/GameContext";

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <GlobalStyle />
      <ThemeProvider theme={TelnessChessTheme}>
        <App />
      </ThemeProvider>
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
