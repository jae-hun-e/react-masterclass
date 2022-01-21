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
        <TrelloApp />
=======
        <App />
>>>>>>> todolist
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
