import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modeChange } from "../atoms";

interface ChangeModeProps {
  mode: boolean;
}

function ChangeMode({ mode }: ChangeModeProps) {
  const setMode = useSetRecoilState(modeChange);
  const toggleMode = () => setMode((prev) => !prev);
  return (
    <Container>
      <Btn onClick={toggleMode}> {mode ? "다크모드" : "라이트모드"}</Btn>
    </Container>
  );
}
export default ChangeMode;

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
