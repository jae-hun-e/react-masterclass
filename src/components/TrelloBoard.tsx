import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ICard, toDoState } from "../trelloAtom";
import DragabbleCard from "./DragabbleCard";

interface IBoardProps {
  list: ICard[];
  boardId: string;
}

interface IFrom {
  addList: string;
}

function TrelloBoard({ list, boardId }: IBoardProps) {
  const setBoard = useSetRecoilState(toDoState);

  // ! card add
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = ({ addList }: IFrom) => {
    setBoard((oldBoard) => {
      const addCard = { id: Date.now(), text: addList };
      return { ...oldBoard, [boardId]: [addCard, ...oldBoard[boardId]] };
    });
    setValue("addList", "");
  };

  // ! board delete
  const deleteBoard = () => {
    setBoard((oldObj) => {
      const newObj = { ...oldObj };
      delete newObj[boardId];
      return newObj;
    });
  };
  return (
    <Cotainer>
      <BoardHeader>
        <h2>{boardId}</h2>
        <button onClick={deleteBoard}>del</button>
      </BoardHeader>
      <Error>{errors?.addList?.message}</Error>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("addList", { required: "text를 입력해주세요" })}
          type="text"
          placeholder={`${boardId}에 추가하기`}
        />
        <button>add</button>
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Wrapper
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            isDreggingFromThis={Boolean(snapshot.draggingFromThisWith)}
          >
            {list.map((toDo, index) => (
              <DragabbleCard
                key={index}
                index={index}
                {...toDo}
                boardId={boardId}
              />
            ))}
            {provided.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </Cotainer>
  );
}
export default TrelloBoard;

const Form = styled.form`
  display: flex;
  width: 100%;
  input {
    width: 100%;
  }
`;

const Error = styled.span`
  width: 100%;
  text-align: center;
  color: #f80759;
  font-size: 18px;
`;

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

const BoardHeader = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
  position: relative;
  h2 {
    font-weight: 600;
    font-size: 18px;
    padding-top: 5px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.accentColor};
  }
  button {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 15px;
    font-size: 10px;
    font-weight: 500;
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
  }
`;
