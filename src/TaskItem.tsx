import type { InitialTasks } from "./TaskList";

type TaskItemProps = {
  tasksObj: InitialTasks;
  onComplete: (id: number) => void;
};

function TaskItem({ tasksObj, onComplete }: TaskItemProps) {
  return (
    <li className="task bg-[#d4d4d3] p-5 rounded-lg shadow-md flex flex-col gap-2">
      <span className="font-bold text-[#888">{tasksObj.id}</span>
      <strong className="text-lg mb-2">{tasksObj.text}</strong>
      {!tasksObj.completed ? (
        <button
          className="px-3 py-1 rounded bg-green-600 text-white self-start hover:bg-green-700"
          onClick={() => onComplete(tasksObj.id)}
        >
          Mark as Complete
        </button>
      ) : (
        <span className="text-green-600 font-bold">✅ Done</span>
      )}
    </li>
  );
}

export default TaskItem;
