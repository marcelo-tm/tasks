import { useRef, useState } from "react";
import { Button } from "./Button";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../types/Item";
import { TaskInput } from "./TaskInput";

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

  return (
    <div className="flex items-center justify-end gap-4">
      <TaskInput ref={inputRef} />
      <Button intent="primary" onClick={handleAddTask} animate={invalidForm}>
        Add task
      </Button>
    </div>
  );
}
