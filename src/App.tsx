import Circle from "./Circle";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Flex>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" borderColor="blue" />
    </Flex>
  );
}

export default App;
