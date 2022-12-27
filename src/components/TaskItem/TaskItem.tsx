import React from "react";
import { TrashIcon, CheckIcon } from "@heroicons/react/24/outline";

import { Task } from "../../types/Task";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";

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
      <Checkbox task={task} onChange={handleTaskCheck} />
      <Button onClick={handleTaskDelete}>
        <TrashIcon className="w-6" />
      </Button>
    </li>
  );
}
