import { atom } from "recoil";

// ! 나중에 사용자가 직접 추가할 수 있으니깐
//! 어떤 string으로 된 key값과 string[]로 이루어진 value가 있는 타입이다라고 알려줌
export interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "ToDo_Trello",
  default: {
    To_Do: ["a", "b", "c"],
    Doing: ["d", "e"],
    Done: ["f", "g"],
  },
});
