import * as React from "react";
import * as ReactDOM from "react-dom";
import TrelloApp from "./TrelloApp";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
<<<<<<< HEAD
<<<<<<< HEAD
        <TrelloApp />
=======
        <App />
>>>>>>> todolist
=======
        <App />
>>>>>>> motion
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
