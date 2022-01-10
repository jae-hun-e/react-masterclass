import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const toDos = ["a", "b", "c", "d", "e", "f", "g"];

function Trello() {
  const onDragEnd = () => {};
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <span>Trello</span>
        <Boards>
          {/* <Droppable droppableId="one"><ul></ul></Droppable> */}
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((toDo, idx) => (
                  <Draggable draggableId={toDo} index={idx}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span>🥱</span>
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                <Draggable draggableId="second" index={1}>
                  {(provided) => (
                    <Card ref={provided.innerRef} {...provided.draggableProps}>
                      <span {...provided.dragHandleProps}>🥱</span>
                      two
                    </Card>
                  )}
                </Draggable>
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </DragDropContext>
    </Container>
  );
}
export default Trello;

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 480px;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  /* min-height: 400px; */
`;

const Board = styled.ul`
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 10px;
  padding: 10px;
`;

const Card = styled.li`
  background-color: ${(props) => props.theme.cardColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
