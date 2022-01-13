import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
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
  const state = useRecoilValue(toDoState);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // ! card add
  const onValid = ({ addList }: IFrom) => {
    setBoard((oldBoard) => {
      const addCard = { id: Date.now(), text: addList };
      return { ...oldBoard, [boardId]: [addCard, ...oldBoard[boardId]] };
    });
    setValue("addList", "");
  };
  return (
    <Cotainer>
      <Title>{boardId}</Title>
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
