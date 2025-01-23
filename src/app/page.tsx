import React from "react";
import CreateTaskButton from "./components/CreateTaskButton";
import { TodoList } from "./components/TodoList";

export default function Home() {
  return (
    <div className="space-y-14">
      <CreateTaskButton />
      <TodoList />
    </div>
  );
}
