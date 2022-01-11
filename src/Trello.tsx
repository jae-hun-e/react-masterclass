import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import TrelloBoard from "./components/TrelloBoard";
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
    // setList((oldList) => {
    //   const dragIndex = args.source.index;
    //   const dropIndex = args.destination?.index;
    //   // ! 깊은 복사 두 가지 방법
    //   // const newList = oldList.slice();
    //   const newList = [...oldList];
    //   newList.splice(dragIndex, 1);
    //   newList.splice(dropIndex, 0, args.draggableId);
    //   console.log(
    //     "dragIndex",
    //     dragIndex,
    //     "dropIndex",
    //     dropIndex,
    //     "newList",
    //     newList
    //   );
    //   return newList;
    // });
  };
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Title>Trello cloning</Title>
        <Boards>
          {Object.keys(list).map((boardId) => (
            <TrelloBoard key={boardId} boardId={boardId} list={list[boardId]} />
          ))}
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;
