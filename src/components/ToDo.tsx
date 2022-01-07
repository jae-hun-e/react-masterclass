import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, id, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo["category"]) => {
    console.log(newCategory);
    setToDos((oldTodos) => {
      // ! 기존 ToDos[]의 Todo의 id가  이 component의 id와 동일한 ToDo의 index반환
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      // !버튼 누르기 전 기존의  Todo
      const oldTodo = oldTodos[targetIndex];
      // !내가 누른 버튼 으로 카테고리만 바꾼 Todo
      const newTodo = { text, id, category: newCategory };
      console.log(targetIndex, oldTodo, newTodo);

      //!기존 배열에서 해당index의 값만 바꿔버리기
      // const newTodos = oldTodos.splice(targetIndex, 1, newTodo);
      // console.log(newTodos);
      // return oldTodos.splice(targetIndex, 1, newTodo);
      // ? 위에가 됬으면 좋겠지만 splice는 기존의 배열을 바꿔버리는 형태이다
      // ? 하지만 useState에서 state값을 직접 못바꾸는 것 처럼 RecoilValue도 직접 바꿀 수 없다
      // ? 새로운 배열을 만들어서 넣어줘야 한다.
      // ? slice는 기존 배열의 일부르 짤라서 새로운 배열을 만들지만
      // ? splice는  기존배열을 변경시키므로 사용할 수 없다.

      return [
        ...oldTodos.slice(0, targetIndex),
        newTodo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text} </span>
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>To Do</button>
      )}
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
}
export default ToDo;
