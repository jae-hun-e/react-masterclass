import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDragabbleCardProps {
  id: number;
  text: string;
  index: number;
}

function DragabbleCard({ index, id, text }: IDragabbleCardProps) {
  // console.log(toDo, "re-rendering");
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
`;
