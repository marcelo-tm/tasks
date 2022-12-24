import { Item } from "./Item";

export type TasksList = {
  tasks: Item[];
  onChange: (list: Item[]) => void;
};
