import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

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
  const valid = ({ toDo }: IForm) => {
    console.log(toDo);
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
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
  margin-top: 20px;
  font-size: 20px;
`;
