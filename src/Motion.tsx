import styled from "styled-components";
import Box1 from "./animation/Box1";
import Box2 from "./animation/Box2";
import Box3 from "./animation/Box3";
import Box4 from "./animation/Box4";

function Motion() {
  return (
    <Container>
      <Wrapper>
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
      </Wrapper>
    </Container>
  );
}

export default Motion;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: center;
`;

const Wrapper = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: repeat(2, 300px);
`;
