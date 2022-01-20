import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <div>
        <Link to="/box">
          <p>animation ref</p>
        </Link>
      </div>
      <div>
        <Link to="/slider">
          <p>slider Ref</p>
        </Link>
      </div>
      <div>
        <Link to="/layout">
          <p>layout Animation</p>
        </Link>
      </div>
      <div>
        <Link to="/card">
          <p>card</p>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  div {
    width: 200px;
    height: 200px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: linear-gradient(0deg, #d5fa04, #3400ee);
    margin: 40px;
  }
`;
