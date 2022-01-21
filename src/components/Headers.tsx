import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modeChange } from "../coinAtoms";

function Header() {
  const [mode, setMode] = useRecoilState(modeChange);
  const toggleMode = () => setMode((prev) => !prev);

  return (
    <Container>
      <Btn>
        <Link to="/">Home</Link>
      </Btn>
      <Btn onClick={toggleMode}> {mode ? "다크모드" : "라이트모드"}</Btn>
    </Container>
  );
}
export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  border-radius: 10px;
  margin: 10px;
  background-color: ${(props) => props.theme.cardBgColor};
`;
