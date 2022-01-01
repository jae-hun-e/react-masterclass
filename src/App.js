import styled from "styled-components";

const Father = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Box = styled.div`
  background-color: ${(prop) => prop.color};
  width: 100px;
  height: 100px;
`;

// 상속
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: yellow;
  border: 0;
  border-radius: 15px;
  width: 100px;
  color: black;
  text-align: center;
`;

// styled-component로 속성값 설정하기
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  margin: 10px;
  background-color: transparent;
`;

function App() {
  return (
    <>
      <Father>
        <Box color="teal"></Box>
        <Circle color="tomato"></Circle>
      </Father>
      <Father>
        <Btn>Log in</Btn>
        <Btn as="a" href="https://google.com">
          Log in
        </Btn>
        {/* // 다른 태그로 바꾸고 싶을때  */}
      </Father>
      <Father>
        <Input />
        <Input />
      </Father>
    </>
  );
}

export default App;
