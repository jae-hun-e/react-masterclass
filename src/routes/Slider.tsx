import styled from "styled-components";
import SliderBox from "../slider/SliderBox";
import TestBox from "../slider/TestBox";

function Slider() {
  return (
    <Container>
      {/* <TestBox /> */}
      <SliderBox />
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: center;
`;
