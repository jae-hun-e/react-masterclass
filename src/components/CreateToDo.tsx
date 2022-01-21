import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();

  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  console.log("currentCategory", category, typeof category);
  const valid = ({ toDo }: IForm) => {
    // console.log(toDo);
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(valid)}>
      <input
        {...register("toDo", { required: "toDoList를작성해주세요" })}
        placeholder="ToDoList"
      />
      <span>{errors?.toDo?.message}</span>
      <button>add</button>
    </Form>
  );
}

export default CreateToDo;

const Form = styled.form`
  font-size: 20px;
`;
