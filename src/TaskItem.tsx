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
    <li className="task bg-[#d4d4d3] p-5 rounded-lg shadow-md flex flex-col gap-2">
      <span className="font-bold text-[#888]">{tasksObj.id}</span>

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
              <button onClick={() => onComplete(tasksObj.id)}>Complete</button>
            </>
          ) : (
            <div>
              <button onClick={() => setEditing(true)}>Edit</button>
              <span className="text-green-600 font-bold">✅ Done</span>
            </div>
          )}
        </>
      )}
    </li>
  );
}

export default TaskItem;
