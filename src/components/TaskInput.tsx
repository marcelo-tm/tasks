import { forwardRef } from "react";

export const TaskInput = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <input
      type="text"
      className="text-slate-800 px-3 py-2 rounded-lg w-1/2 ring hover:ring-sky-600 focus:ring-sky-300 focus:outline-none"
      placeholder="Type a new task"
      ref={ref}
    />
  );
});
