import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

interface IBoardProps {
  list: string[];
  boardId: string;
}

function TrelloBoard({ list, boardId }: IBoardProps) {
  return (
    <Cotainer>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
            {list.map((toDo, index) => (
              <DragabbleCard key={toDo} toDo={toDo} index={index} />
            ))}
            {provided.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </Cotainer>
  );
}
export default TrelloBoard;

const Cotainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.ul`
  width: 200px;
  padding: 20px 10px;
  padding-top: 20px;

  min-height: 300px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
  height: 30px;
  padding-top: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.accentColor};
`;
