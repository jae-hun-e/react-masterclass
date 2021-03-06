import { atom, selector } from "recoil";

export enum Categories {
  //!case1
  "TO_DO",
  "DOING",
  "DONE",
  //!case2
  // "TO_DO" = "TO_DO",
  // "DOING" = "DOING",
  // "DONE" = "DONE",
}

// type categorys = "TO_DO" | "DOING" | "DONE"
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const toDoState = atom<IToDo[]>({
  key: "toDos",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "categoryState",
  default: Categories.TO_DO,
});

export const toDoSelecor = selector({
  key: "toDoSelecor",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
