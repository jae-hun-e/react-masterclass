import { createGlobalStyle } from "styled-components";
<<<<<<< HEAD:src/TrelloApp.tsx
<<<<<<< HEAD:src/TrelloApp.tsx
import Trello from "./Trello";

// ! react-query import
=======
import ToDoList from "./components/ToDoList";
>>>>>>> todolist:src/App.tsx
=======
import Routers from "./routes/Routers";
>>>>>>> motion:src/App.tsx

function App() {
  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD:src/TrelloApp.tsx
<<<<<<< HEAD:src/TrelloApp.tsx
      <Trello />
=======
      <ToDoList />
>>>>>>> todolist:src/App.tsx
=======
      <Routers />
>>>>>>> motion:src/App.tsx
    </>
  );
}

export default App;

//! styled-reset : https://www.npmjs.com/package/styled-reset
/* @import url('https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap'); */
const GlobalStyle = createGlobalStyle`
/* //! font.google.com에서 font import해오기 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family: 'Nanum Brush Script', cursive;
  background:linear-gradient(135deg,#e09,#d0e);
  color: ${(props) => props.theme.textColor};
  line-height: 1.2;
}

a{
  text-decoration: none;
  color: inherit; // 부모것을 가져와라
}
`;
