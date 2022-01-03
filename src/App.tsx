// import Circle from "./Circle";
import styled from "styled-components";
import Form from "./Form";
import { ThemeProvider } from "styled-components";
import Home from "./Home";
import { lightTheme, dartTheme, blueTheme } from "./theme";
import { useState } from "react";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

let themeColor = blueTheme;

function App() {
  const themeName = [lightTheme, dartTheme, blueTheme];
  const [theme, setTheme] = useState(false);

  //! 마우스 이벤트 type : MouseEvent<HTMLElement>
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;
    // setTheme(themeName[value]);

    setTheme(!theme);
    if (theme === true) themeColor = dartTheme;
    else themeColor = blueTheme;
  };

  return (
    <>
      <Flex>
        <Form />
        {/* // ! Theme을 사용하려는 component를 ThmeeProvider로 감싸준다. */}
        {/* <button onClick={onClick} value={+0}>
        라이트모드
        </button>
        <button onClick={onClick} value={+1}>
        다크모드
        </button>
        <button onClick={onClick} value={+2}>
        블루모드
      </button> */}
        <button onClick={onClick}>모드 변경</button>
      </Flex>
      <ThemeProvider theme={themeColor}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
