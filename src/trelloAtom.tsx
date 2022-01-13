import { atom } from "recoil";

export interface ICard {
  id: number;
  text: string;
}

export interface IToDoState {
  //! 어떤 string으로 만들어진 key값과 ICard[]로 이루어진 value가 있는 타입이다라고 알려줌
  [key: string]: ICard[];
}

export const toDoState = atom<IToDoState>({
  key: "ToDo_Trello",
  default: {
    To_Do: [],
    Doing: [],
    Done: [],
  },
});
