import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./trelloAtom";

function Trello() {
  const [list, setList] = useRecoilState(toDoState);
  const onDragEnd = (args: DropResult) => {
    console.log(
      "draggin finished",
      args.draggableId,
      args.source.index,
      "=>",
      args.destination.droppableId,
      args.destination.index,
      args
    );
    // ! 같은 자리에 두었을 때
    if (!args.draggableId) return;
    setList((oldList) => {
      const dragIndex = args.source.index;
      const dropIndex = args.destination?.index;
      // ! 깊은 복사 두 가지 방법
      // const newList = oldList.slice();
      const newList = [...oldList];
      newList.splice(dragIndex, 1);
      newList.splice(dropIndex, 0, args.draggableId);
      console.log(
        "dragIndex",
        dragIndex,
        "dropIndex",
        dropIndex,
        "newList",
        newList
      );

      return newList;
    });
  };
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Title>Trello cloning</Title>
        <Boards>
          {/* <Droppable droppableId="one"><ul></ul></Droppable> */}
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((toDo, idx) => (
                  // ! key랑 draggableId랑 같아야 함 dnd에서 그렇게 정함
                  <Draggable key={toDo} draggableId={toDo} index={idx}>
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
                {/* //! 옮길 수 있는 요소 선택 */}
                {/* <Draggable draggableId="second" index={1}>
                  {(provided) => (
                    <Card ref={provided.innerRef} {...provided.draggableProps}>
                      <span {...provided.dragHandleProps}>🥱</span>
                      two
                    </Card>
                  )}
                </Draggable> */}
                {/* //! 태두리 크기 고정 */}
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

const Title = styled.span`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
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
