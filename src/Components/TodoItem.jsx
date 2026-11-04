import pencil from "../assets/pencil.png";
import save from "../assets/save.png";
import close from "../assets/close.png";
import { useTodo } from "../contexts";
import { useState } from "react";

export function TodoItem({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex items-center w-full border-2 border-stone-800 rounded-lg px-3 py-2 gap-x-3 text-stone-800 ${
        todo.completed ? "bg-emerald-100" : "bg-amber-50"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer w-4 h-4 accent-rose-400"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border-2 outline-none w-full bg-transparent rounded-lg text-lg ${
          isTodoEditable ? "border-stone-800 px-2" : "border-transparent"
        } ${todo.completed ? "line-through text-stone-500" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg border-2 border-stone-800 justify-center items-center bg-white active:bg-amber-100 shrink-0 disabled:opacity-40"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        <img
          src={isTodoEditable ? save : pencil}
          alt={isTodoEditable ? "Save" : "Edit"}
          className="w-4 h-4"
        />
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg border-2 border-stone-800 justify-center items-center bg-rose-400 active:bg-rose-500 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        <img src={close} alt="Delete" className="w-4 h-4" />
      </button>
    </div>
  );
}
