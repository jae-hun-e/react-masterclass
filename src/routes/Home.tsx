import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Container>
      <div>
        <Link to="/coin">coinPage</Link>
      </div>
      <div>
        <Link to="/trello">TrelloApp </Link>
      </div>
      <div>
        <Link to="/motion">motion </Link>
      </div>
      <div>
        <Link to="/netflix">netflix </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;

  margin-top: 100px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100px;
    text-align: center;
    border: 3mm ridge rgba(170, 50, 220, 0.6);
    a {
      padding: 30px 45px;
    }
  }
`;
