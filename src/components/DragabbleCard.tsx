import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ICard, toDoState } from "../trelloAtom";

interface IDragabbleCardProps extends ICard {
  index: number;
  boardId: string;
}

function DragabbleCard({ index, id, text, boardId }: IDragabbleCardProps) {
  const setCard = useSetRecoilState(toDoState);
  //! card delete
  const onClick = () => {
    setCard((oldObj) => {
      const newBoard = [...oldObj[boardId]];
      newBoard.splice(index, 1);
      return { ...oldObj, [boardId]: newBoard };
    });
  };
  return (
    <Draggable key={id} draggableId={id + ""} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
        >
          <p>🥱 {text}</p>
          <button onClick={onClick}>del</button>
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#89f7fe" : props.theme.cardColor};
  p {
    color: ${(props) => props.theme.textColor};
  }
  box-shadow: ${(props) =>
    props.isDragging ? "5px 5px 5px rgba(0,0,0,0.5)" : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 30px;
    height: 15px;
    font-size: 10px;
    font-weight: 500;
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
  }
`;
