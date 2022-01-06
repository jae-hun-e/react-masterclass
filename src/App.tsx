// import Circle from "./Circle";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Router from "./routes/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot, useRecoilValue } from "recoil";
import { modeChange } from "./atoms";
import ChangeMode from "./components/ChangeMode";
// ! react-query import
const queryClient = new QueryClient();

function App() {
  const mode = useRecoilValue(modeChange);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ChangeMode mode={mode} />
        <Router />
      </ThemeProvider>
      {/* //! 이걸 사용해서 캐시에 뭐가 저장되어있는지 확인 할 수 있다 */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;

//! styled-reset : https://www.npmjs.com/package/styled-reset
const GlobalStyle = createGlobalStyle`
/* //! font.google.com에서 font import해오기 */
@import url('https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap');
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
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  line-height: 1.2;
}

a{
  text-decoration: none;
  color: inherit; // 부모것을 가져와라
}
`;
