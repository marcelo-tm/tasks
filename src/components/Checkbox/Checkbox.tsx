import { CheckIcon } from "@heroicons/react/24/outline";

import { Task } from "../../types/Task";
import "./Checkbox.styles.css";

type Props = {
  task: Task;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Checkbox({ task, onChange }: Props) {
  return (
    <label
      htmlFor={task.id.toString()}
      className={`flex items-center gap-2 font-medium ml-3 text-sm cursor-pointer relative ${
        task.done ? "line-through" : ""
      }`}
    >
      <input
        id={task.id.toString()}
        name={task.id.toString()}
        type="checkbox"
        className="checkbox appearance-none w-6 h-6 bg-white rounded checked:bg-sky-300 focus:outline-none focus:ring focus:ring-sky-600"
        checked={task.done}
        onChange={onChange}
      />
      <CheckIcon className="w-5 h-5 text-slate-800 absolute left-[2px] text-opacity-0 checkIcon " />
      <p>{task.name}</p>
    </label>
  );
}
