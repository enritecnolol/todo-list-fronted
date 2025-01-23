import { useState } from "react";
import { useRouter } from "next/navigation";
import { Todo } from "../../lib/types";
import TrashIcon from "./icons/TrashIcon";
import { colorOptions } from "../../lib/constants";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoListItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const router = useRouter();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const findColor = () => {
    const color = colorOptions.find(({ id }) => todo.color === id);
    return color?.value;
  };

  const DeleteDialog = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-800 rounded-lg max-w-md w-full p-6 space-y-4">
          <h3 className="text-lg font-semibold text-white">Delete Task</h3>
          <p className="text-gray-300">
            Are you sure you want to delete this task? This action cannot be
            undone.
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowDeleteDialog(false)}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white 
                  bg-gray-700 rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete(todo.id);
                setShowDeleteDialog(false);
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 
                  rounded hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex items-center gap-3 bg-[#262626] p-4 rounded group relative border border-[#333333]">
        {/* Completion Toggle */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
            ${todo.completed ? todo.color : "border-blue-400"}`}
        >
          {todo.completed && (
            <div className={`w-3 h-3 rounded-full ${findColor()}`} />
          )}
        </button>

        {/* Title */}
        <button
          onClick={() => router.push(`/edit/${todo.id}`)}
          className={`flex-1 text-left ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.title}
        </button>

        {/* Delete Button */}
        <button onClick={() => setShowDeleteDialog(true)}>
          <TrashIcon />
        </button>
      </div>

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && <DeleteDialog />}
    </>
  );
};

export default TodoListItem;
