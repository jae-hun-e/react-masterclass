import { Categories, IToDo, toDoState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

function ToDo({ text, id, category }: IToDo) {
  const toToList = useRecoilValue(toDoState);
  console.log(toToList);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: Categories) => {
    console.log("newCategory", newCategory);
    setToDos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);

      const newTodo = { text, id, category: newCategory };
      return [
        ...oldTodos.slice(0, targetIndex),
        newTodo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <Li>
      <span>{text} </span>
      {category !== Categories.TO_DO && (
        <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>
      )}
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>Doing</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>Done</button>
      )}
    </Li>
  );
}
export default ToDo;

const Li = styled.li`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    min-width: 10%;
  }
`;
