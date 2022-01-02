import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  // ! 이벤트 타입은 React.[구글링해서 찾기]event<사용하는 곳 HTML태그Element>가 된다.
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget.value);
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="username"
        value={value}
        onChange={onChange}
      />
      <button>Log in</button>
    </form>
  );
};

export default Form;
