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
        {(provided, snapshot) => (
          <Wrapper
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            isDreggingFromThis={Boolean(snapshot.draggingFromThisWith)}
          >
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

interface IAreaProps {
  isDreggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Wrapper = styled.ul<IAreaProps>`
  width: 200px;
  padding: 20px 10px;
  padding-top: 20px;
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#f7b733"
      : props.isDreggingFromThis
      ? "#ff9966"
      : props.theme.boardColor};
  min-height: 300px;
  transition: background-color 0.2s ease-in-out;
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
