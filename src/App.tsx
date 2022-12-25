import { Task } from "./types/Task";
import { Header } from "./components/Header";
import { TaskList } from "./components/TasksList";
import { AddTask } from "./components/AddTask";
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
        <TaskList tasks={tasks} onChange={setTasks} />
      </div>
    </div>
  );
}
