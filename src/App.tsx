import { Task } from "./types/Task";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";
import { AddTask } from "./components/AddTask/AddTask";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("TASKS", []);

  function handleAddTask(task: Task) {
    setTasks([...tasks, task]);
  }

  return (
    <div className="bg-slate-800 text-slate-300 h-screen">
      <div className="m-auto max-w-3xl p-3">
        <Header />
        <AddTask onClick={handleAddTask} />
        <TasksList tasks={tasks} onChange={setTasks} />
      </div>
    </div>
  );
}
