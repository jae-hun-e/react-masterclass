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

// ! component의 속성값 type
interface CirecleProps {
  bgColor: string; // !!필수
  borderColor?: string; // !! 옵션
}

// ! 속성값 JS에게 알려줌
function Circle({ bgColor, borderColor }: CirecleProps) {
  // ! 사용자가 정해준 속성값이 없으면 ?? 뒤에 default값 지정해줌
  return <Container bgColor={bgColor} borderColor={borderColor ?? "red"} />;
}

export default Circle;
