import { Task } from "./Task";

export type List = {
  tasks: Task[];
  onChange: (list: Task[]) => void;
};
