import { atom } from "recoil";

export interface ICard {
  id: number;
  text: string;
}

interface IToDoState {
  //! 어떤 string으로 만들어진 key값과 ICard[]로 이루어진 value가 있는 타입이다라고 알려줌
  [key: string]: ICard[];
}

export const toDoState = atom<IToDoState>({
  key: "ToDo_Trello",
  default: {
    To_Do: [
      { id: 1, text: "a" },
      { id: 2, text: "b" },
      { id: 3, text: "c" },
    ],
    Doing: [
      { id: 4, text: "d" },
      { id: 5, text: "e" },
    ],
    Done: [
      { id: 6, text: "f" },
      { id: 7, text: "g" },
    ],
  },
});
