import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`;

const Cotainer = styled(Father)`
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  background-color: ${(prop) => prop.color};
  width: 100px;
  height: 100px;
`;

// ! 상속
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: #66a6ff;
  border: 0;
  border-radius: 15px;
  width: 100px;
  color: black;
  text-align: center;
`;

// ! styled-component로 속성값 설정하기
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  margin: 10px;
  background-color: transparent;
`;

// ! 애니메이션 효과만들기 + export 하면 다른곳에서도 사용가능
export const rotationAnimation = keyframes`
0%{
  transform: rotateY(0deg);
  background-color: #ffecd2;
}
50%{
  transform: rotateY(180deg);
  background-color: #fcb69f;
}
100%{
  transform: rotateY(0deg);
  background-color: #ffecd2;
}
`;

const Emoji = styled.span`
  &:active {
    opacity: 0;
  }
`;

// ! 애니메이션 효과 적용 + 자식(HTML태그,styled-compoents) 사용
const Animation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: #ff7eb3;
  border-radius: 50px;
  animation: ${rotationAnimation} 10s linear infinite;
  span {
    font-size: 5px;
    &:hover {
      font-size: 30px;
    }
  }
  ${Emoji} {
    &:active {
      opacity: 0;
    }
  }
`;

// ! Theme에있는 prop값 사용하기 ex)create 다크모드
const Background = styled.div`
  background-color: ${(prop) => prop.theme.backgroundColor};
`;

function StyledCompnentPractice() {
  return (
    <Background>
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
      <Cotainer>
        <Input />
        <Input />
        <Animation>
          <span>😎</span>
        </Animation>
        <Animation>
          <p>😎</p>
        </Animation>
        <Animation>
          <Emoji>😎</Emoji>
        </Animation>
      </Cotainer>
    </Background>
  );
}

export default StyledCompnentPractice;
