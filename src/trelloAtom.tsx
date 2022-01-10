import { atom, selector } from "recoil";

export const toDoState = atom({
  key: "ToDo_Trello",
  default: ["a", "b", "c", "d", "e", "f", "g"],
});
