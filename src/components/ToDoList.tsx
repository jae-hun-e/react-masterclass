import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <>
      <Container>
        <h1>ToDoList</h1>
        <CreateToDo />
      </Container>
      <ul>
        {toDos?.map((toDo, idx) => (
          <ToDo key={idx} {...toDo} />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
