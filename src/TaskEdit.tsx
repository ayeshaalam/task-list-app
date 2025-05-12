import { useState } from "react";

type TaskEditProps = {
  id: number;
  initialText: string;
  onSave: (id: number, newText: string) => void;
  onCancel: () => void;
};
function TaskEdit({ id, initialText, onSave, onCancel }: TaskEditProps) {
  const [editedText, setEditedText] = useState(initialText);
  return (
    <div className="task-input flex gap-4 mb-8 w-full max-w-2xl">
      <input
        className="px-4 py-3 text-base border-2 border-gray-300 rounded grow"
        type="text"
        placeholder="Enter task"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button
        onClick={() => onSave(id, editedText)}
        className="px-5 py-3 text-base bg-[#edc84b] text-black rounded-md hover:bg-[#f1d465]"
      >
        Save
      </button>
      <button
        onClick={onCancel}
        className="px-5 py-3 text-base bg-[#edc84b] text-black rounded-md hover:bg-[#f1d465]"
      >
        Cancel
      </button>
    </div>
  );
}

export default TaskEdit;
