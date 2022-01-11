import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import TrelloBoard from "./components/TrelloBoard";
import { IToDoState, toDoState } from "./trelloAtom";
import * as lodash from "lodash";

function Trello() {
  const [list, setList] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, draggableId, source }: DropResult) => {
    console.log(
      source.droppableId,
      source.index,
      draggableId,
      "=>",
      destination.droppableId,
      destination.index
    );

    const dragItem = draggableId;
    const dragItemId = source.droppableId;
    const dragItemIdx = source.index;
    const dropItemId = destination.droppableId;
    const dropItemIdx = destination.index;

    // ! 같은 자리에 두었을 때 destination와 source가 동일함
    if (dragItemId === dropItemId && dragItemIdx === dropItemIdx) return;

    // ! 1) Obj deep copy1
    // setList((oldObj) => {
    //   const cloneObj = (obj: IToDoState) => JSON.parse(JSON.stringify(obj));
    //   const newObj = cloneObj(oldObj);
    //   newObj[dragItemId].splice(dragItemIdx, 1);
    //   newObj[dropItemId].splice(dropItemIdx, 0, dragItem);
    //   return newObj;
    // });

    //! 2) Obj deep copy2 from lodash
    // setList((oldObj) => {
    //   const newObj = lodash.cloneDeep(oldObj);
    //   newObj[dragItemId].splice(dragItemIdx, 1);
    //   newObj[dropItemId].splice(dropItemIdx, 0, dragItem);
    //   return newObj;
    // });

    // ! 3) not Obj deep copy, only array deep copy and change
    if (dragItemId === dropItemId) {
      //! 같은 board내에서 움직일 때
      setList((oldObj) => {
        const board = [...oldObj[dragItemId]];
        board.splice(dragItemIdx, 1);
        board.splice(dropItemIdx, 0, dragItem);
        return { ...oldObj, [dragItemId]: board };
      });
    } else {
      //! 다른 board로 움직일 때
      setList((oldObj) => {
        const drag = [...oldObj[dragItemId]];
        const drop = [...oldObj[dropItemId]];
        drag.splice(dragItemIdx, 1);
        drop.splice(dropItemIdx, 0, dragItem);
        return { ...oldObj, [dragItemId]: drag, [dropItemId]: drop };
      });
    }

    // // ! 2단계 복사가 되므로 안됨
    // setList((oldObj) => {
    //   const newObj = { ...oldObj };
    //   newObj[dragItemId].splice(dragItemIdx, 1);
    //   newObj[dropItemId].splice(dropItemIdx, 0, dragItem);
    //   console.log(newObj);
    //   return oldObj;
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
const test = { a: ["1", "2"], b: ["3", "4"] };
