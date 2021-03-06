import { DefaultTheme } from "styled-components";

// ! theme 값 지정
export const darkTheme: DefaultTheme = {
  bgColor: "#4691f8",
  textColor: "rgba(36,36,36,1)",
  accentColor: "#ffdd59",
  cardBgColor: "#485460",
  boardColor: "RGB(231, 234, 239)",
  cardColor: "RGB(255, 255, 255)",
  red: "#E51013",
  black: {
    veryDark: "#141414",
    darker: "#181818",
    lighter: "#2F2F2F",
  },
  white: {
    lighter: "#fff",
    darker: "#e5e5e5",
  },
};

export const lightTheme: DefaultTheme = {
  bgColor: "whitesmoke",
  textColor: "black",
  accentColor: "#9c88ff",
  cardBgColor: "white",
};
