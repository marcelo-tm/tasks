import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

import { Item } from "../types/Item";
import { Button } from "./Button";

type Props = {
  item: Item;
  onChange: (item: Item) => void;
  onDelete: (id: string) => void;
};

export function Task({ item, onChange, onDelete }: Props) {
  function handleTaskCheck(e: React.ChangeEvent<HTMLInputElement>) {
    onChange({ ...item, done: e.target.checked });
  }

  function handleTaskDelete() {
    onDelete(item.id);
  }

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-xl mb-3 transition-all ${
        item.done ? "bg-slate-700" : "bg-slate-600"
      }`}
    >
      <div className="flex items-center">
        <input
          id={item.id.toString()}
          name={item.id.toString()}
          type="checkbox"
          className="h-6 w-6 cursor-pointer"
          checked={item.done}
          onChange={handleTaskCheck}
        />
        <label
          htmlFor={item.id.toString()}
          className={`font-medium ml-3 text-sm cursor-pointer ${
            item.done ? "line-through" : ""
          }`}
        >
          {item.name}
        </label>
      </div>
      <Button onClick={handleTaskDelete}>
        <TrashIcon className="w-6" />
      </Button>
    </div>
  );
}
