import { useState } from "react";
import styled from "styled-components";

// ! syled-component의 속성값 type
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

// ! 속성값 JS에게 알려줌
const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid ${(props) => props.borderColor};
`;

// ! Circle의 속성값 type
interface CirecleProps {
  bgColor: string; // !!필수
  borderColor?: string; // !! 옵션
}

// ! 속성값 JS에게 알려줌
function Circle({ bgColor, borderColor }: CirecleProps) {
  // const [value, setValue] = useState<number|string>(0) //! 타입 여러개로 지정해줄 때
  const [count, setCount] = useState(0); //! 타입 안적으면 defalut값으로 TS가 알아서 추축한다.

  const onClick = () => {
    setCount(+1);
  };
  // ! 사용자가 정해준 속성값이 없으면 ?? 뒤에 default값 지정해줌
  return (
    <>
      <div onClick={onClick}>{count}</div>
      <Container bgColor={bgColor} borderColor={borderColor ?? "red"} />
    </>
  );
}

export default Circle;
