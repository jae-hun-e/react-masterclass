import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import TrelloBoard from "./components/TrelloBoard";
import { toDoState } from "./trelloAtom";

interface INewBoard {
  newBoard: string;
}

function Trello() {
  const [list, setList] = useRecoilState(toDoState);
  //! card change
  const onDragEnd = ({ destination, source }: DropResult) => {
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

  // ! board add
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = ({ newBoard }: INewBoard) => {
    // console.log(newBoard);
    setList((oldObj) => {
      const copyObj = { ...oldObj };
      return { ...copyObj, [newBoard]: [] };
    });
    setValue("newBoard", "");
  };
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Title>Trello cloning</Title>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            {...register("newBoard", {
              required: "board의 이름을 입력해주세요",
            })}
            type="text"
            placeholder="새로운board 추가하기"
          />
          <button>add</button>
        </form>
        <Error>{errors?.newBoard?.message}</Error>
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

const Error = styled.span`
  width: 100%;
  text-align: center;
  color: #f80759;
  font-size: 18px;
  margin-bottom: 20px;
`;
const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;
