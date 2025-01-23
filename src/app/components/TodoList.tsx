"use client";

import EmptyList from "./EmptyList";
import TodoListItem from "./TodoListItem";
import { useTodoList } from "../hooks/useTodoList";
import { Todo } from "../../lib/types";
import apiClient from "../../lib/axios";

export function TodoList() {
  const { data: todoList, refetch } = useTodoList<Todo[]>();

  const handleCompleteTask = async (id: string) => {
    const task = todoList?.find((todo) => todo.id === id);
    try {
      await apiClient.put(`/tasks/${id}`, {
        ...task,
        completed: true,
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await apiClient.delete(`/tasks/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const completedTasks = () => {
    return todoList?.filter((todo) => todo.completed).length;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between text-sm mb-4">
        <span className="text-[#4EA8DE]">
          Tasks{" "}
          <span className="bg-gray-800 px-2 py-0.5 rounded text-white">
            {todoList?.length || 0}
          </span>
        </span>
        <span className="text-[#8284FA]">
          Completed{" "}
          <span className="bg-gray-800 px-2 py-0.5 rounded text-white">
            {completedTasks()} of {todoList?.length || 0}
          </span>
        </span>
      </div>

      {todoList?.length === 0 ? (
        <EmptyList />
      ) : (
        todoList?.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onToggle={handleCompleteTask}
              onDelete={handleDeleteTask}
            />
          );
        })
      )}
    </div>
  );
}
