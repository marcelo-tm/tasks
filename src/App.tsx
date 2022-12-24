import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Item } from "./types/Item";
import { Header } from "./components/Header";
import { List } from "./pages/List";
import { AddTask } from "./components/AddTask";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
  const [tasks, setTasks] = useLocalStorage<Item[]>("TASKS", []);

  function handleAddTask(item: Item) {
    setTasks([...tasks, item]);
  }

  return (
    <div className="bg-slate-800 text-slate-300 h-screen">
      <div className="m-auto max-w-3xl p-3">
        <Header />
        <AddTask onClick={handleAddTask} />
        <List tasks={tasks} onChange={setTasks} />
      </div>
    </div>
  );
}
