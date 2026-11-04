import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm } from "./Components";

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

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-amber-50 min-h-screen py-12 px-4 font-doodle">
        <div className="w-full max-w-2xl mx-auto bg-white border-2 border-stone-800 rounded-xl p-8 text-stone-800">
          <h1 className="text-5xl font-normal text-center mb-8">
            Manage Your Todos
          </h1>
          <div className="mb-6">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
