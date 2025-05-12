import { useState } from "react";
import type { InitialTasks } from "./TaskList";
import TaskEdit from "./TaskEdit";

type TaskItemProps = {
  tasksObj: InitialTasks;
  onComplete: (id: number) => void;
  onEdit: (id: number, newTask: string) => void;
};

function TaskItem({ tasksObj, onComplete, onEdit }: TaskItemProps) {
  const [isEditing, setEditing] = useState(false);

  return (
    <li
      className="
    bg-[#2a2a2a] text-[#FFFFFF] rounded-xl p-6 shadow-lg flex flex-col gap-3 border border-yellow-400"
    >
      <span className="text-sm font-semibold text-gray-400">{tasksObj.id}</span>

      {isEditing ? (
        <TaskEdit
          id={tasksObj.id}
          initialText={tasksObj.text}
          onSave={(id, newTask) => {
            onEdit(id, newTask);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <>
          <strong>{tasksObj.text}</strong>
          {!tasksObj.completed ? (
            <>
              <button
                onClick={() => onComplete(tasksObj.id)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-md"
              >
                Complete
              </button>
              <button
                onClick={() => setEditing(true)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-md"
              >
                Edit
              </button>
            </>
          ) : (
            <div>
              <span className="text-green-600 font-bold">✅ Done</span>
            </div>
          )}
        </>
      )}
    </li>
  );
}

export default TaskItem;
