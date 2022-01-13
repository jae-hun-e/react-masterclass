import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import TrelloBoard from "./components/TrelloBoard";
import { toDoState } from "./trelloAtom";

function Trello() {
  const [list, setList] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, draggableId, source }: DropResult) => {
    // console.log(
    //   source.droppableId,
    //   source.index,
    //   draggableId,
    //   "=>",
    //   destination.droppableId,
    //   destination.index
    // );

    const dragItemId = source.droppableId;
    const dragItemIdx = source.index;
    const dropItemId = destination.droppableId;
    const dropItemIdx = destination.index;

    // ! 같은 자리에 두었을 때 destination와 source가 동일함
    if (dragItemId === dropItemId && dragItemIdx === dropItemIdx) return;

    // ! not Obj deep copy, only array deep copy and change
    if (dragItemId === dropItemId) {
      //! 같은 board내에서 움직일 때
      setList((oldObj) => {
        const board = [...oldObj[dragItemId]];
        const dragcard = board[dragItemIdx];
        board.splice(dragItemIdx, 1);
        board.splice(dropItemIdx, 0, dragcard);
        return { ...oldObj, [dragItemId]: board };
      });
    } else {
      //! 다른 board로 움직일 때
      setList((oldObj) => {
        const drag = [...oldObj[dragItemId]];
        const drop = [...oldObj[dropItemId]];
        const dragcard = drag[dragItemIdx];
        drag.splice(dragItemIdx, 1);
        drop.splice(dropItemIdx, 0, dragcard);
        return { ...oldObj, [dragItemId]: drag, [dropItemId]: drop };
      });
    }
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
const test = { a: ["1", "2"], b: ["3", "4"] };
