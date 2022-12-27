import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

import { Task } from "../../types/Task";
import { Button } from "../Button";

type Props = {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (id: string) => void;
};

export function TaskItem({ task, onChange, onDelete }: Props) {
  function handleTaskCheck(e: React.ChangeEvent<HTMLInputElement>) {
    onChange({ ...task, done: e.target.checked });
  }

  function handleTaskDelete() {
    onDelete(task.id);
  }

  return (
    <li
      className={`flex items-center justify-between p-3 rounded-xl mb-3 transition-all ${
        task.done ? "bg-slate-700" : "bg-slate-600"
      }`}
    >
      <div className="flex items-center">
        <input
          id={task.id.toString()}
          name={task.id.toString()}
          type="checkbox"
          className="h-6 w-6 cursor-pointer"
          checked={task.done}
          onChange={handleTaskCheck}
        />
        <label
          htmlFor={task.id.toString()}
          className={`font-medium ml-3 text-sm cursor-pointer ${
            task.done ? "line-through" : ""
          }`}
        >
          {task.name}
        </label>
      </div>
      <Button onClick={handleTaskDelete}>
        <TrashIcon className="w-6" />
      </Button>
    </li>
  );
}
