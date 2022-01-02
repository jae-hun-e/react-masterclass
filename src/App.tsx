// import Circle from "./Circle";
import styled from "styled-components";
import Form from "./Form";
import { ThemeProvider } from "styled-components";
import Home from "./Home";
import { blueTheme, dartTheme } from "./theme";
import { useState } from "react";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

let themeColor = blueTheme;

function App() {
  const [theme, setTheme] = useState(false);

  //! 마우스 이벤트 type : MouseEvent<HTMLElement>
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget, theme);
    setTheme(!theme);
    if (theme === true) themeColor = dartTheme;
    else themeColor = blueTheme;
  };

  return (
    <Flex>
      <Form />
      {/* // ! Theme을 사용하려는 component를 ThmeeProvider로 감싸준다. */}
      <button onClick={onClick}>Theme Change</button>
      <ThemeProvider theme={themeColor}>
        <Home />
      </ThemeProvider>
    </Flex>
  );
}

export default App;
