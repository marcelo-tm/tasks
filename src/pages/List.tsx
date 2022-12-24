import { Task } from "../components/Task";
import { Item } from "../types/Item";
import { TasksList } from "../types/TasksList";

export function List({ tasks, onChange }: TasksList) {
  function handleTaskCheck(item: Item) {
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
        tasks.map((item) => (
          <Task
            key={item.id}
            item={item}
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
