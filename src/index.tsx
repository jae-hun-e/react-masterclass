import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
// import StyledCompnentPractice from "./StyledCompnentPractice";
// import { ThemeProvider } from "styled-components";

// // ! 여러가지 모드로 나누기 위해서는 Theme의 key값이 같아야한다.
// const darkTheme = {
//   textColor: "whitesmoke",
//   backgroundColor: "#111",
// };

// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whitesmoke",
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <StyledCompnentPractice /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
