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

  return (
    <main className="task-list flex flex-col items-center gap-8">
      <h2 className="text-2xl font-semibold text-[#eee7e7 border-b-2 border-[#edc84b] pb-2 mb-4">
        Tasks{" "}
      </h2>

      <ul className="tasks grid grid-cols-2 gap-6 max-w-[800px] w-full list-none">
        {tasks.map((tasks) => (
          <TaskItem
            key={tasks.id}
            tasksObj={tasks}
            onComplete={handleCompleted}
          />
        ))}
      </ul>
      <TaskInput onAdd={handleAddTask} />
    </main>
  );
}

export default TaskList;
