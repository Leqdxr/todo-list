import { useState } from "react";
import { useTodo } from "../contexts";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo: todo, completed: false });
    setTodo("");
  };
  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full bg-amber-50 border-2 border-stone-800 rounded-l-lg px-3.5 py-2.5 text-stone-800 placeholder:text-stone-400 outline-none focus:bg-white"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg border-2 border-l-0 border-stone-800 px-5 py-2.5 bg-rose-400 active:bg-rose-500 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}
