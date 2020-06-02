import React, { useState } from "react";
import { useTodo } from "../hooks/todo";

function Home() {
  const { addTodo, removeTodo, todos } = useTodo();
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    addTodo(title);
  };

  return (
    <div className="container">
      <h1>ToDo APP</h1>
      <div className="content">
        <div className="controllers">
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <button onClick={handleAddTodo}>Add todo</button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} onClick={() => removeTodo(todo.id)}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
