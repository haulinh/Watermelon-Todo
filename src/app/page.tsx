"use client";

import { Todo } from "@/components";
import todosData from "@/mock-data/todos.json";
import { TodoType } from "@/models";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>(todosData);

  return (
    <div className="flex h-full min-h-full w-full pr-16">
      <aside className="w-80 border-r border-black px-8 py-8">
        <div className="space-y-4">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              completed={todo.completed}
            />
          ))}
        </div>
      </aside>

      <div className="grow grid grid-cols-2">
        <div className="relative border-r-4 border-b-4 border-black pt-16 pl-16">
          <div className="absolute top-4 left-1/2 font-bold">Urgent</div>
          <div className="absolute left-0 top-1/2 -rotate-90 font-bold">
            Important
          </div>
          <div className={`h-full rounded-tl-md bg-todo-do`}>do</div>
        </div>

        <div className="relative border-b-4 border-black pt-16">
          <div className="absolute top-4 left-1/2 font-bold">Not urgent</div>
          <div className={`h-full rounded-tr-md bg-todo-schedule`}>
            schedule
          </div>
        </div>

        <div className="relative border-r-4 border-black pl-16 pb-16">
          <div className="absolute -left-4 top-1/2 font-bold">
            <div className="-rotate-90">Not important</div>
          </div>
          <div className={`h-full rounded-bl-md bg-todo-delegate`}>
            delegate
          </div>
        </div>

        <div className="pb-16">
          <div className="h-full bg-todo-delete rounded-br-md">delete</div>
        </div>
      </div>
    </div>
  );
}
