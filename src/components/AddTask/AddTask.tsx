import { v4 as uuidv4 } from "uuid";
import { KeyboardEvent, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

import { Button } from "../Button";
import { Task } from "../../types/Task";

type Props = {
  onClick: (task: Task) => void;
};

export function AddTask({ onClick }: Props) {
  const [taskInput, setTaskInput] = useState("");
  const [invalidForm, setInvalidForm] = useState(false);

  function handleAddTask() {
    if (taskInput) {
      onClick({
        id: uuidv4(),
        name: taskInput,
        done: false,
      });
      setTaskInput("");
    } else {
      setInvalidForm(true);
      setTimeout(() => setInvalidForm(false), 820);
    }
  }

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === "Enter") handleAddTask();
  }

  return (
    <div className="flex items-center justify-end gap-4">
      <input
        type="text"
        className={`text-slate-800 px-3 py-2 rounded-lg w-full md:w-1/2 ring hover:ring-sky-600 focus:ring-sky-300 focus:outline-none ${
          invalidForm ? "animate-shake" : ""
        }`}
        placeholder="Type a new task"
        onKeyUp={handleKeyUp}
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <Button intent="primary" onClick={handleAddTask}>
        <span className="hidden md:block">Add task</span>
        <span className="block w-6 h-6 md:hidden">
          <PlusIcon />
        </span>
      </Button>
    </div>
  );
}
