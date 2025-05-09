import { useState } from "react";

type TaskInputProps = {
  onAdd: (text: string) => void;
};
function TaskInput({ onAdd }: TaskInputProps) {
  const [newTask, setNewTask] = useState("");
  function handleAdd() {
    if (!newTask.trim()) return;
    onAdd(newTask);
    setNewTask("");
  }
  return (
    <div className="task-input flex gap-4 mb-8 w-full max-w-2xl">
      <input
        className="px-4 py-3 text-base border-2 border-gray-300 rounded grow"
        type="text"
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="px-5 py-3 text-base bg-[#edc84b] text-black rounded-md hover:bg-[#f1d465]"
      >
        AddTask
      </button>
    </div>
  );
}

export default TaskInput;
