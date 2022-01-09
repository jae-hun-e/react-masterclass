import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoSelecor } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelecor);
  console.log(`${toDos[0]?.category} toDos`, toDos);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    //!case1
    setCategory(Number(event.currentTarget.value));

    //!case2
    // setCategory(event.currentTarget.value as any);
  };
  return (
    <>
      <Container>
        <h1>ToDoList</h1>
        <select onInput={onInput} value={category}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
        <CreateToDo />
      </Container>
      <hr />

      {toDos?.map((toDo, idx) => (
        <ToDo key={idx} {...toDo} />
      ))}
    </>
  );
}

export default ToDoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
