import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((PrevTodo) => (PrevTodo.id === id ? todo : PrevTodo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((PrevTodo) => PrevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((PrevTodo) =>
        PrevTodo.id === id
          ? { ...PrevTodo, completed: !PrevTodo.completed }
          : PrevTodo,
      ),
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#faf9f5] min-h-screen py-12 px-4">
        <div className="w-full max-w-2xl mx-auto bg-[#efe9de] border border-[#e6dfd8] rounded-xl p-8 text-[#141413]">
          <h1 className="font-serif text-4xl font-normal tracking-tight text-center mb-8">
            Manage Your Todos
          </h1>
          <div className="mb-6">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
