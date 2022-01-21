import { Categories, IToDo, toDoState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

function ToDo({ text, id, category }: IToDo) {
  const toToList = useRecoilValue(toDoState);
  console.log(toToList);
  const setToDos = useSetRecoilState(toDoState);
  //!case1
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
  // !case2
  // const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const {
  //     currentTarget: { name },
  //   } = event;

  //   setToDos((oldToDos) => {
  //     const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
  //     const newToDo = { text, id, category: name as any };
  //     return [
  //       ...oldToDos.slice(0, targetIndex),
  //       newToDo,
  //       ...oldToDos.slice(targetIndex + 1),
  //     ];
  //   });
  // };
  return (
    <Li>
      <span>{text} </span>
      {/* //!case1 */}
      {category !== Categories.TO_DO && (
        <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>
      )}
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>Doing</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>Done</button>
      )}
      {/* //! case2 */}
      {/* {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )} */}
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
