import { KeyboardEvent, useRef, useState } from "react";
import { Button } from "./Button";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../types/Item";

type Props = {
  onClick: (item: Item) => void;
};

export function AddTask({ onClick }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [invalidForm, setInvalidForm] = useState(false);

  function handleAddTask() {
    if (inputRef.current?.value) {
      onClick({
        id: uuidv4(),
        name: inputRef.current.value,
        done: false,
      });
      inputRef.current.value = "";
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
        className="text-slate-800 px-3 py-2 rounded-lg w-1/2 ring hover:ring-sky-600 focus:ring-sky-300 focus:outline-none"
        placeholder="Type a new task"
        ref={inputRef}
        onKeyUp={handleKeyUp}
      />

      <Button intent="primary" onClick={handleAddTask} animate={invalidForm}>
        Add task
      </Button>
    </div>
  );
}
