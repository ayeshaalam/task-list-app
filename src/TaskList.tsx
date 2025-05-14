import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";

export type InitialTasks = {
  id: number;
  text: string;
  completed: boolean;
};

function TaskList() {
  //declaring component -level state using react hook (useState)
  //const [tasks, setTasks] = useState(InitialTasks);
  const [tasks, setTasks] = useState<InitialTasks[]>(() => {
    // Load tasks from localStorage or use initial tasks if not found
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: 1, text: "Buy groceries", completed: true },
          { id: 2, text: "Finish React assignment", completed: false },
          { id: 3, text: "Call mom", completed: false },
        ];
  });

  //filtering
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">(
    "all"
  );

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(newTask: string) {
    if (!newTask.trim()) return;
    const newId = tasks.length + 1;
    const newTaskObj = { id: newId, text: newTask, completed: false };
    setTasks([...tasks, newTaskObj]);
  }

  function handleCompleted(id: number) {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updated);
  }

  function handleEditTask(id: number, newTask: string) {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, text: newTask } : task
    );
    setTasks(updated);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <main className="bg-[#1f1f1f] min-h-screen flex flex-col items-center px-4 py-10 space-y-12">
      <h2 className="text-3xl font-bold text-[#eee7e7] text-center border-b-4 border-[#edc84b] pb-3">
        Tasks
      </h2>

      <div className="flex gap-4 justify-center flex-wrap">
        {["all", "completed", "incomplete"].map((type) => (
          <button
            key={type}
            onClick={() =>
              setFilter(type as "all" | "completed" | "incomplete")
            }
            className={`px-5 py-3 text-base rounded-md transition shadow 
          ${
            filter === type
              ? "bg-yellow-500 text-black"
              : "bg-yellow-300 text-black hover:bg-yellow-400"
          }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="w-full max-w-xl">
        <TaskInput onAdd={handleAddTask} />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            tasksObj={task}
            onComplete={handleCompleted}
            onEdit={handleEditTask}
          />
        ))}
      </ul>
    </main>
  );
}

export default TaskList;
