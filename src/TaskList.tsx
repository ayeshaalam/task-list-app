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
    <main className="text-2xl font-semibold relative mb-8">
      <h2 className="text-2xl font-semibold text-[#eee7e7] text-center border-b-2 border-[#edc84b] pb-2 mb-4">
        Tasks<span className="block h-1 w-16 bg-yellow-400 mt-1 mx-auto"></span>
      </h2>

      <ul className="tasks text-[#FFFFFF] grid grid-cols-1 sm grid-cols-2 gap-y-10 gap-x-6  max-w-4xl w-full">
        {filteredTasks.map((tasks) => (
          <TaskItem
            key={tasks.id}
            tasksObj={tasks}
            onComplete={handleCompleted}
            onEdit={handleEditTask}
          />
        ))}
      </ul>
      <div className="task-input flex gap-4 mb-8 w-full max-w-2xl">
        <button
          onClick={() => setFilter("all")}
          className="px-5 py-3 text-base bg-[#edc84b] text-black rounded-md hover:bg-[#f1d465] shadow"
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="px-5 py-3 text-base bg-[#edc84b] text-black rounded-md hover:bg-[#f1d465]"
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className="px-5 py-3 text-base bg-[#edc84b] text-black rounded-md hover:bg-[#f1d465]"
        >
          Incomplete
        </button>
      </div>
      <TaskInput onAdd={handleAddTask} />
    </main>
  );
}

export default TaskList;
