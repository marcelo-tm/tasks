import { TaskItem } from "./TaskItem";
import { Task } from "../types/Task";
import { List } from "../types/List";

export function TaskList({ tasks, onChange }: List) {
  function handleTaskCheck(item: Task) {
    const taskIndex = tasks.findIndex((task) => task.id === item.id);
    if (taskIndex > -1) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = item;
      onChange(updatedTasks);
    }
  }

  function handleTaskDelete(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    onChange(updatedTasks);
  }

  return (
    <div className="mt-5">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onChange={handleTaskCheck}
            onDelete={handleTaskDelete}
          />
        ))
      ) : (
        <div className="flex flex-col items-center w-full pt-5 text-lg text-slate-600">
          <p className="text-xl mb-2">No tasks? It it your day off?</p>
          <p className="text-md">Add a new task through the form above</p>
        </div>
      )}
    </div>
  );
}
