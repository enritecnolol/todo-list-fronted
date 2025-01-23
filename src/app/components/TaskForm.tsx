"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { colorOptions } from "../../lib/constants";
import { BackArrow } from "./icons/BackArrow";
import { PlusIcon } from "./icons/Plus";
import apiClient from "../../lib/axios";
import { Todo } from "../../lib/types";
import { useTodoList } from "../hooks/useTodoList";
import SaveIcon from "./icons/SaveIcon";

type TaskFormProps = {
  id?: string;
};

export function TaskForm({ id }: TaskFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [color, setColor] = useState<string>(colorOptions[0].id);
  const { data: todoList } = useTodoList<Todo[]>();

  const updateTask = async () => {
    // Send a PUT request to update the existing task with the provided ID
    await apiClient.put(`/tasks/${id}`, {
      title: title.trim(),
      color,
    });
  };
  const createTask = async () => {
    // Send a POST request to create a new task
    await apiClient.post("/tasks", {
      title: title.trim(),
      color,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateTask();
      } else {
        await createTask();
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id && todoList) {
      const task = todoList?.find(({ id: todoId }: Todo) => todoId === id);
      if (task) {
        setTitle(task.title);
        setColor(task.color);
      }
    }
  }, [id, todoList]);

  return (
    <div className="p-6 space-y-16">
      <div>
        <BackArrow onClick={() => router.push("/")} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div>
          <label className="block text-sm text-blue-400 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex. Brush your teeth"
            className="w-full bg-gray-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-blue-400 mb-2">Color</label>
          <div className="flex gap-2 flex-wrap">
            {colorOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setColor(option.id)}
                className={`w-8 h-8 rounded-full ${option.value} ${
                  color === option.id ? "ring-2 ring-white" : ""
                }`}
                aria-label={option.label}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1E6F9F] hover:bg-blue-700 text-white py-[16px] rounded flex justify-center gap-2 items-center"
        >
          {id ? "Save" : "Add Task"} {id ? <SaveIcon /> : <PlusIcon />}
        </button>
      </form>
    </div>
  );
}
