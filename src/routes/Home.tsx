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
          <p>slider ref</p>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
